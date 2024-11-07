import express from "express";
import {
  addComment,
  addNewPost,
  getAllPost,
  getCommentsOfPost,
  getUserPost,
  likePost,
  dislikePost,
  deletePost,
  bookmarkPost,
} from "../controllers/post.controller.js";
import { isAuthenticated } from "./../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router
  .route("/addpost")
  .post(isAuthenticated, upload.single("image"), addNewPost);
router.route("/all").get(isAuthenticated, getAllPost);
router.route("/userpost/all").get(isAuthenticated, getUserPost);
router.route("/:id/like").get(isAuthenticated, likePost);
router.route("/:id/dislike").get(isAuthenticated, dislikePost);
router.route("/:id/comment").post(isAuthenticated, addComment);
router.route("/:id/comment/all").get(isAuthenticated, getCommentsOfPost);
router.route("/delete/:id").delete(isAuthenticated, deletePost);
router.route("/:id/bookmark").delete(isAuthenticated, bookmarkPost);

export default router;
