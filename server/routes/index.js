require("dotenv").config();
const express = require("express");
const rateLimit = require("express-rate-limit");
const sanitize = require("mongo-sanitize");
const router = new express.Router();
const auth = require("../middleware/auth"); //midldleware to check authentication
const jwt = require("jsonwebtoken");
const Post = require("../models/Posts");
const crypto = require("crypto");
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

//Protects against spam by rate limiting the API

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, message: "Too many attempts!" });

//Decode JWT to get username
function decodeJWT(token) {
    const decoded_token = jwt.verify(token, JWT_SECRET);
    return decoded_token.username;
}

//Get all posts

//No authentication required to view public posts

router.get("/blog", async (req, res) => {
    //Get list of all published posts. Personal/private posts are not shown

    try {
        const posts = await Post.find({ is_published: true }).select({ _id: 0, __v: 0 });
        res.status(200).send(posts);
    } catch (err) {
        return res.status(500).send({ msg: "Something went wrong!" });
    }
});

//Get a specific post
//No authentication required to view public posts
router.get("/:post_id/", async (req, res) => {
    let post_id = sanitize(req.params.post_id);

    if (post_id) {
        try {
            let post = await Post.findOne({ post_id: post_id, is_published: true }).select({ _id: 0, __v: 0 });
            if (post) {
                res.status(200).send(post);
            } else {
                res.status(404).send({ msg: "Post not found!" });
            }
        } catch (err) {
            return res.status(500).send({ msg: "Something went wrong!" });
        }
    } else {
        return res.status(400).send({ msg: "Please provide a post url" });
    }
});

// Create Post
router.post("/blog", auth, async (req, res) => {
    let { title, content, keywords, category } = sanitize(req.body); // Sanitize the data to prevent injection attacks

    if (title && content && keywords && category) {
        // Create a new post

        try {
            let url = title.replace(/\s+/g, "-"); // Replace spaces with hyphens to form slug
            let post_id = crypto.randomBytes(8).toString("hex"); // Assign Unique post id to each post
            url = post_id.toString() + "/" + url;
            let time_to_read = Math.round(content.split(" ").length / 200); // Calculate time to read the post

            let user_data = await User.findOne({ username: decodeJWT(req.header("Authorization").split(" ")[1]) }); // Get user details from the database

            //Save post to post collection
            await new Post({
                title: title,
                url: url,
                content: content,
                post_id: post_id,
                keywords: keywords,
                category: category,
                full_name: user_data.full_name,
                username: user_data.username,
                is_published: true,
                time_to_read: time_to_read,
                published_date: Date.now(),
            }).save((err) => {
                if (err) {
                    return res.status(400).json({ msg: "Something went wrong" });
                } else {
                    return res.status(200).json({ msg: "Post created successfully" });
                }
            });
        } catch (err) {
            return res.status(400).json({ msg: "Something went wrong!" });
        }
    } else {
        return res.status(400).send({ msg: "Please provide a title, content, category and keywords!" });
    }
});

//Delete Post

router.delete("/blog/:post_id", auth, async (req, res) => {
    let post_id = sanitize(req.params.post_id); // Sanitize the data to prevent injection attacks

    if (post_id) {
        try {
            //Verify if the authenticated user is the owner of the post

            let actual_owner_of_post = await Post.findOne({ username: decodeJWT(req.header("Authorization").split(" ")[1]), post_id: post_id });

            if (actual_owner_of_post) {
                //Deelte post from post collection
                await Post.deleteOne({ post_id: post_id });
                res.status(200).json({ msg: "Post deleted successfully" });
            } else {
                return res.json({ msg: "You are not the owner of this post!" });
            }
        } catch (err) {
            return res.status(400).json({ msg: "Something went wrong!" });
        }
    } else {
        return res.status(400).send({ msg: "Please provide a post id!" });
    }
});

module.exports = router;
