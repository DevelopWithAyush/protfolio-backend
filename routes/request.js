import express from "express";
import { myRequestHandler, requestHandler } from "../controllers/request.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

router.use(isAuthenticated)
router.post("/newrequest", requestHandler);
router.get("/myrequest", myRequestHandler);

export default router