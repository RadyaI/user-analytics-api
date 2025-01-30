import { Router } from "express";
import { signIn, signUp } from "../controllers/auth";

const authRoutes: Router = Router()

authRoutes.post('/signup', signUp)
authRoutes.post('/signIn', signIn)

export default authRoutes