const express = require("express");
const router = express.Router();
const ReviewController = require("../controllers/reviewController");

router.post("/", ReviewController.create)
router.put("/id/:id", ReviewController.update)
router.get("/", ReviewController.getAll)
router.get("/id/:id", ReviewController.getById)
router.get("/content/:content", ReviewController.getOneByContent)
router.delete("/id/:id", ReviewController.delete)


module.exports = router;