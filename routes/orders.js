const express = require("express");
const OrderController = require("../controllers/OrderController");
const router = express.Router();
const { authentication } = require("../middlewares/authentication");

router.post("/",authentication, OrderController.create);
router.get("/", OrderController.getAllOrdersWithProducts);

module.exports = router;
