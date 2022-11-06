const mongoose = require('mongoose');
const moment = require('moment'); 

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: String,
    author:  { type: Schema.Types.ObjectId, required: true, ref: "User" },
    state: {type: String,  requred: true, enum: ['draft', 'published'],  default: 'draft'},
    read_count: {type: Number, default: 0},
    reading_time: Number,
    tags: String,
    body: {type: String, required: true},
    timestamp: Date
})

postSchema.pre(
    'save',
    async function (next) {
        this.timestamp = moment().toDate(),
        next();
    }
)

const Post = mongoose.model('Posts', postSchema)

module.exports = Post;