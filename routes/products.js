const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/", ProductController.create);
router.post("/product/:id/category", ProductController.categoryLink);

module.exports = router;
