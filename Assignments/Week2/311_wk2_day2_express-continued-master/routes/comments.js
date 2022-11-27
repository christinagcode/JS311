const express = require('express');
const router = express.Router();
let commentsController = require('./controllers/comments');

router.get("/comments", commentsController)
router.get("/comments/:id", commentsController)
router.post("/comments", commentsController)

module.exports = router