const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const {
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/Comment");

const { likeComment, unlikeComment } = require("../controllers/CommentLike");

router.post("/create", auth, createComment);
router.put("/update", auth, updateComment);
router.delete("/delete/", auth, deleteComment);

router.post("/like/", auth, likeComment);
router.post("/unlike/", auth, unlikeComment);

module.exports = router;
