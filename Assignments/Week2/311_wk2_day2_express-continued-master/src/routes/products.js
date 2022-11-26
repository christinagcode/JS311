const express = require('express');

const router = express.Router();

const productsController = require.apply('../controllers/products');

router.get("/products", productssController)
router.get("/products/:id", productsController)
router.post("/products", productsController)