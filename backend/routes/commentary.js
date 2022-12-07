//// Routeur gestion commentaires / redirection --> contrôleurs ////

const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const commentaryControl = require('../controllers/commentary');

router.post('/commentary', auth, commentaryControl.commentaryPost);
router.put('/commentary', auth, commentaryControl.modifyCommentary);
router.delete('/commentary/:id', auth, commentaryControl.deleteCommentary);

module.exports = router; 