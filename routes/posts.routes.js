const express = require('express');
const handler = require('../controllers/posts.controller');
require('../passport');
const passport = require('passport');
const commentsRouter = require('../routes/comment.routes');
const { postValidator } = require('../validators/post.validator');
const router = express.Router();

router.use('/:postId/comments', passport.authenticate('jwt', {session: false}), commentsRouter);

router.get('/', handler.getPosts);
router.get('/currentuser', passport.authenticate('jwt', {session: false}),handler.getCurrentUserPosts);
router.get('/:postId', handler.getPost);

router.use(passport.authenticate('jwt', {session: false}));

router.post('/currentuser', postValidator,handler.createPost);
router.put('/currentuser/:postId', postValidator,handler.updatePost);
router.patch('/currentuser/:postId/publish', handler.publishPost)
router.delete('/currentuser/:postId', handler.deletePost);

module.exports = router;


