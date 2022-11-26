const express = require('express');

const router = express.Router();

const vehiclesController = require.apply('../controllers/vehicles');

router.get("/vehicles", vehiclesController)
router.get("/vehicles/:id", vehiclesController)
router.post("/vehicles", vehiclesController)