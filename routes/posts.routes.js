const express = require('express');
const handler = require('../controllers/posts.controller');
require('../passport');
const passport = require('passport');

const router = express.Router();


router.get('/:postId', handler.getPost);
router.get('/', handler.getPosts)

router.use(passport.authenticate('jwt', {session: false}));


router.post('/', handler.createPost);
router.post('/:postId/publish', handler.publishPost)
router.put('/:postId', handler.updatePost);
router.delete('/:postId', handler.deletePost);

module.exports = router;