const express = require('express');
const router = express.Router();
let contactsController = require('../controllers/contacts');

router.get("/contacts", contactsController)
router.get("/contacts/:id", contactsController)
router.post("/comments", contactsController)

module.exports = router