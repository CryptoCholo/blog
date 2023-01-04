const express = require('express');
const handler = require('../controllers/posts.controller');
require('../passport');
const passport = require('passport');

const router = express.Router();

router.get('/', handler.getPosts)
router.get('/currentuser', handler.getCurrentUserPosts);
router.get('/:postId', handler.getPost);

router.use(passport.authenticate('jwt', {session: false}));

router.post('/', handler.createPost);
router.put('/:postId', handler.updatePost);
router.patch('/:postId/publish', handler.publishPost)
router.delete('/:postId', handler.deletePost);

module.exports = router;