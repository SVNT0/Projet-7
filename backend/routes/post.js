//// Routeur gestion publication / redirection --> contrôleurs ////

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authentification.js');
const multer = require('../middlewares/multer_config.js');
const postControl = require('../controllers/post.js');

router.get('/posts/:id', auth, postControl.getPosts);
router.post('/posts', auth, multer, postControl.createPost);
router.post('/posts/like', auth, postControl.likePost);
router.delete('/posts/:id', auth, postControl.deletePost);

module.exports = router;