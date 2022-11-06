const express = require('express');
const handler = require('../controllers/posts.controller');

const router = express.Router();

router.get('/', handler.getPosts);
router.get('/:postId', handler.getPost);
router.post('/:postId', handler.createPost);
router.put('/:postId', handler.updatePost);
router.delete('/:postId', handler.deletePost);

module.exports = router;