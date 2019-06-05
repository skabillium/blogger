import express from "express";

import checkAuth from "../middleware/check-auth";

import * as authController from "../controllers/auth";

const router = express.Router();

router.get("/", checkAuth, authController.token_valid);

export default router;
