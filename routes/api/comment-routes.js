const router = require("express").Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply,
} = require("../../controllers/comment-controller");

// add comment api/:pizzaId
router.route("/:pizzaId").post(addComment);

// remove comment api/:pizzaId/:commentId
router.route("/:pizzaId/:commentId").put(addReply).delete(removeComment);

// remove a comment reply
router.route("/:pizzaId/:commentId/:replyId").delete(removeReply);

module.exports = router;
