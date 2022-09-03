const mongoose = require("mongoose");

const postData = mongoose.Schema({
    title: String,
    url: String,
    content: String,
    post_id: String,
    is_published: Boolean, //This is for the admin to publish/private the post
    keywords: [], //Helps in Search based upon keywords and title
    username: String,
    category: String,
    full_name: String,
    like_count: Number,
    time_to_read: Number,
    published_date: Date,
});

module.exports = mongoose.model("posts", postData);
