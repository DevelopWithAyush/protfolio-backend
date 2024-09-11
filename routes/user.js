import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { login, logout, myprofile } from "../controllers/user.js";

const router = express.Router();
router.post("/login", login);
router.use(isAuthenticated);
router.get("/me", myprofile);
router.get("/logout", logout);

export default router;
