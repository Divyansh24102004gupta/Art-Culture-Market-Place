import express from "express";
import {
  editProfile,
  followOrUnfollow,
  getProfile,
  getSuggestedUesrs,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { isAuthenticated } from "./../middlewares/isAuthenticated.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/:id/profile").get(isAuthenticated, getProfile);
router
  .route("/profile/edit")
  .post(isAuthenticated, upload.single("profilePic"), editProfile);
router.route("/suggested").get(isAuthenticated, getSuggestedUesrs);
router.route("/followorunfollow/:id").post(isAuthenticated, followOrUnfollow);

export default router;
