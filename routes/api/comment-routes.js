const router = require("express").Router();
const {
  addComment,
  removeComment,
} = require("../../controllers/comment-controller");

// add comment api/:pizzaId
router.route("/:pizzaId").post(addComment);

// remove comment api/:pizzaId/:commentId
router.route("/:pizzaId/:commentId").delete(removeComment);

module.exports = router;
