const express = require('express');
const router = express.Router();
let productsController = require('./controllers/products');

router.get("/products", productssController)
router.get("/products/:id", productsController)
router.post("/products", productsController)

module.exports = router