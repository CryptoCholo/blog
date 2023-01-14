const postModel = require('../models/post');
const userModel = require('../models/user');
const isOwner = require('../utilities/isOwner').isOwner
const { readingTime } = require('../utilities/estReadingTime');

exports.createPost = async (req, res) => {
    try {
        const body = req.body
    let time = readingTime(body.body);

    const post = await postModel.create({
    title: body.title,
    description: body.description,
    author: req.user._id,
    body: body.body,
    reading_time: time,
    })
    await userModel.findOneAndUpdate(
        {_id: post.author},
        {$push: {posts: post._id}}
      )
    return res.json({message: 'Post created successfully', post})
    } catch (err) {
        return res.status(500).json({message: err.message})
    }   
}

exports.getPost = async (req, res) => {
    try{
        let post = await postModel.findById(req.params.postId)
        .populate({ path: 'author', select: 'username'})
        .populate({ path: 'comments', select: 'content'}) 
    
        if (!post || post.length == 0){
        return res.status(404).json({message:'No post with id exists'})
        }
        post.$inc('read_count', 1);
        await post.save();
        return res.status(200).json({post})
    }
    catch(err){
        return res.json({message:'Post does not exist'})
    }
}

exports.getCurrentUserPosts = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(500).json({message: 'you need to be logged in to perform this operation'})
        }
    const { 
        title, 
        tags,
        state,
        order = 'asc', 
        order_by = 'created_at', 
        page = 1, 
        per_page = 20 
    } = req.query;

    const skip = (page - 1) * per_page;
    const findQuery = {};
   
    findQuery.author = req.user._id;

    if (title) {
        findQuery.title = title;
    }
    if (tags) {
        findQuery.tags = tags;
    } 
    if (state) {
        findQuery.state = state;
    }
    const sortQuery = {};

    const sortAttributes = order_by.split(',')
    for (const attribute of sortAttributes) {
        if (order === 'asc' && order_by) {
            sortQuery[attribute] = 1
        }
    
        if (order === 'desc' && order_by) {
            sortQuery[attribute] = -1
}}
  
    const posts = await postModel
    .find(findQuery)
    .sort(sortQuery)
    .skip(skip)
    .limit(per_page)
    

    if (!posts || posts.length == 0) {
        return res.status(404).json({message:'You do not have any post yet'})
        }

    return res.status(200).json({ status: true, posts: posts })
    } catch (err) {
        return res.status(500).json({error: err.message})
    }
} ;
    

exports.getPosts = async function (req, res, next){
   try {
    const { 
        author, 
        title, 
        tags,
        order = 'asc', 
        order_by = 'created_at', 
        page = 1, 
        per_page = 20 
    } = req.query;

    const skip = (page - 1) * per_page;

    const findQuery = {};

    if (author) {
        findQuery.author= author;
    } 

    if (title) {
        findQuery.title = title;
    }
    
    if (tags) {
        findQuery.tags = tags;
    }
    findQuery.state =  'published';

    const sortQuery = {};

    const sortAttributes = order_by.split(',')

    for (const attribute of sortAttributes) {
        if (order === 'asc' && order_by) {
            sortQuery[attribute] = 1
        }
    
        if (order === 'desc' && order_by) {
            sortQuery[attribute] = -1
        }
    }

    const posts = await postModel
    .find(findQuery)
    .populate({ path: 'author', select: 'username'})
    .sort(sortQuery)
    .skip(skip)
    .limit(per_page)

    if (!posts || posts.length == 0) {
        return res.status(404).json({message:'No post exists'})
        }

    return res.status(200).json({ status: true, posts: posts })
   } catch (err) {
       return res.status(500).json({message: err.message})
   }      
};

exports.updatePost = async (req, res, next) => {
    const body =  req.body;
    try{
        let time = readingTime(body.body);
        let post = await postModel.findById(req.params.postId);

        if (!post){
            return res.status(404).json({err: `No posts with id ${req.params.postId} exists`});
        }
        if (isOwner(req.user._id, post.author)) {
                post.title = body.title,
                post.description = body.description,
                post.body = body.body,
                post.reading_time = time

                await post.save();
                return res.status(200).json({message: `Post : ${req.params.postId}, updated successfully`, post: post });
            }
            return res.status(500).json({message: 'you are not authorized for this operation'})
        } catch(err){
        return next(err);
    }
};

exports.deletePost = async (req, res, next) => {
    try{
        let post = await postModel.findById(req.params.postId);
        if (!post){
            return res.status(404).json({err: `No posts with id ${req.params.postId} exists`});
        }
        if (isOwner(req.user._id, post.author)) {
            const post = await postModel.deleteOne({ _id: req.params.postId});
            return res.status(200).json({message: `Post with id ${req.params.postId} deleted successfully`, post: post});
        }
        return res.status(500).json({message: 'Your are not authorized to perform this operation'})
    } catch (err){
    return next(err);
}}


exports.publishPost = async (req, res, next) => {
    try{
        let post = await postModel.findById(req.params.postId)
        if (!post){
            return res.status(404).json({err: `No posts with id ${req.params.postId} exists`});
        }
        if (isOwner(req.user._id, post.author)) {
            post.state = 'published';

            await post.save()
           return  res.status(200).json({message: `Post with id ${req.params.postId} has been published`, post: post });
        } 
        return res.status(501).json({err: 'You are unauthorized to perform this operation'});
    } catch(err){
    return next(err);
}}