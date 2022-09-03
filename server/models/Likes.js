const mongoose = require("mongoose");

const likes = mongoose.Schema({
    username: { type: String },
    post_id: Number,
});

module.exports = mongoose.model("likes", likes);
