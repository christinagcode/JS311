const express = require('express');

const router = express.Router();

const commentsController = require.apply('../controllers/comments');

router.get("/comments", commentsController)
router.get("/comments/:id", commentsController)
router.post("/comments", commentsController)