import { Router } from "express";
import { allUsers, login, register } from "../controllers/userController";

const router = Router();

router.get("/", allUsers);
router.post("/register", register);
router.post("/login", login);

export default router;
