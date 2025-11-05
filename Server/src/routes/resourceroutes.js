import express from "express";
import { getPosts, createPost, deletePost } from "../controllers/resourcecontroller.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { tenantResolver } from "../middlewares/tenantResolver.js";

const router = express.Router({ mergeParams: true });

router.use(verifyToken);
router.use(tenantResolver);

router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", deletePost);

export default router;
