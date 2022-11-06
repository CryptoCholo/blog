const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: String,
    author: String,
    state: {type: String,  requred: true, enum: ['draft', 'published'],  default: 'draft'},
    read_count: Number,
    reading_time: Number,
    tags: String,
    body: {type: String, required: true},
    timestamp: Date
})

const Post = mongoose.model('Posts', postSchema)

module.exports = Post;