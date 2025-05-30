const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/", ProductController.create);
//router.post("/product/:id/category", ProductController.categoryLink);
router.put("/id/:id", ProductController.update);
router.delete("/id/:id", ProductController.delete);
router.get("/", ProductController.getAllWithCategories);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getAllByName);
router.get("/price/:price", ProductController.getAllByPrice);
router.get("/price/:minprice/:maxprice", ProductController.getAllByPriceRange);
router.get("/price", ProductController.getDescPrice);

module.exports = router;
