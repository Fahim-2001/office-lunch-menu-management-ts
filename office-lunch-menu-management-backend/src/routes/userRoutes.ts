import { Router } from "express";
import { allUsers, register } from "../controllers/userController";

const router = Router();

router.get('/', allUsers)
router.post("/register", register);

export default router;
