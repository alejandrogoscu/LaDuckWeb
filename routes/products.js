const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();
const { authentication, isAdmin } = require("../middlewares/authentication");

router.post("/",authentication, isAdmin, ProductController.create);
router.put("/id/:id",authentication, isAdmin, ProductController.update);
router.delete("/id/:id",authentication, isAdmin, ProductController.delete);
router.get("/", ProductController.getAllWithCategories);
router.get("/id/:id", ProductController.getById);
router.get("/name/:name", ProductController.getAllByName);
router.get("/price/:price", ProductController.getAllByPrice);
router.get("/price/:minprice/:maxprice", ProductController.getAllByPriceRange);
router.get("/price", ProductController.getDescPrice);

module.exports = router;
