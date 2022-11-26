const express = require('express');

const router = express.Router();

const contactsController = require.apply('../controllers/contacts');

router.get("/contacts", contactsController)
router.get("/contacts/:id", contactsController)
router.post("/comments", contactsController)