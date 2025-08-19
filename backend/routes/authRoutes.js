import { Router } from "express";
import { login, signup } from "../controllers/authController.js";

const router = Router()

router.post('/auth/signup', signup)
router.get('/auth/login', login)

export default router