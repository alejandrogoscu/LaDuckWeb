const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviewController");

router.post("/", ReviewController.create)
router.get("/content/:content", ReviewController.getOneByContent)
router.put("/id/:id", ReviewController.update)
router.delete("/id/:id", ReviewController.delete)


module.exports = router;