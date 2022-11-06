const postModel = require('../models/post');
const userModel = require('../models/user')

exports.createPost = async (req, res) => {
    const body = req.body

    const post = await postModel.create({
    title: body.title,
    description: body.description,
    author: req.user._id,
    body: body.body,
    })
    await userModel.findOneAndUpdate(
        {_id: post.author},
        {$push: {posts: post}}
      )
    return res.json({status: true, post})
}

exports.getPost = async (req, res) => {
    try{
        let post = await postModel.findById(req.params.postId)
        .populate('author', {username: 1,})
    
        if (!post || post.length == 0){
        return res.status(404).json({message:'No post with id exists'})
        }

        return res.status(200).json({post})
    }
    catch(err){
        return res.json({message:'Post does not exist'})
    }
}

exports.getPosts = async function (req, res, next){
        const { 
            author, 
            title, 
            tags,
            order = 'asc', 
            order_by = 'created_at', 
            page = 1, 
            per_page = 20 
        } = req.query;
    
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
        .sort(sortQuery)
        .skip(page)
        .limit(per_page)
    
        return res.status(200).json({ status: true, posts: posts })
};

exports.updatePost = async (req, res, next) => {
    const body =  req.body;
    try{
        let post = await postModel.findById(req.params.postId);
        if (!post){
            return res.status(404).json({err: `No posts with id ${req.params.postId} exists`});
        }
        if (post.author === req.user._id) {
            let newpost = await postModel.create({
                title: body.title,
                description: body.description,
                author: req.user._id,
                body: body.body,
            })
            res.status(200).json({message: `Post with id ${req.params.postId} updated`, post: newpost });
        }
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
        if (post.author === req.user._id) {
            const post = await postModel.deleteOne({ _id: req.params.postId});
            res.status(200).json({message: `Post with id ${req.params.postId} deleted successfully`, post: post});
        }
        
    } catch (err){
    return next(err);
}}


exports.publishPost = async (req, res, next) => {
    try{
        let post = await postModel.findById(req.params.postId)
        if (!post){
            return res.status(404).json({err: `No posts with id ${req.params.postId} exists`});
        }
        if (post.author === req.user._id) {
            post.state = 'publshed';

            await post.save()

           return  res.status(200).json({message: `Post with id ${req.params.postid} has been published`, post: post });
        } 
    } catch(err){
    return next(err);
}}