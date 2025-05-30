const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/", ProductController.create);
//router.post("/product/:id/category", ProductController.categoryLink);
router.put("/id/:id", ProductController.update);
router.delete("/id/:id", ProductController.delete);
router.get("/", ProductController.getAllWithCategories);

module.exports = router;
