import { Router } from 'express'
import { authenticateJWT } from '../middlewares/authenticate'
import { getAllUser, getUserById } from "../controllers/user"

const userRoute: Router = Router()

userRoute.get("/", authenticateJWT, getAllUser)
userRoute.get("/:id", authenticateJWT, getUserById)

export default userRoute