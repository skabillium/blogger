import express from "express";

import checkAuth from "../middleware/check-auth";
import validateUser from "../middleware/validate-user";

import * as postController from "../controllers/posts";

const router = express.Router();

router.post("/", checkAuth, validateUser, postController.add_post);

router.get("/:post_id", checkAuth, postController.get_post);

router.get("/get_by_user/:user_id", checkAuth, postController.get_by_user);

router.patch("/:post_id", checkAuth, validateUser, postController.update_post);

router.delete(
  "/:post_id/:user_id",
  checkAuth,
  validateUser,
  postController.delete_post
);

export default router;
