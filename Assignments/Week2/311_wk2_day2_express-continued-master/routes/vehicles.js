const express = require('express');
const router = express.Router();
let vehiclesController = requirey('./controllers/vehicles');

router.get("/vehicles", vehiclesController)
router.get("/vehicles/:id", vehiclesController)
router.post("/vehicles", vehiclesController)

module.exports = router