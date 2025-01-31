import { Router } from 'express'
import { authenticateJWT } from '../middlewares/authenticate'
import { deleteUser, getAllUser, getUserById, updateUser } from "../controllers/user"

const userRoute: Router = Router()

userRoute.get("/", authenticateJWT, getAllUser)
userRoute.get("/:id", authenticateJWT, getUserById)
userRoute.delete("/:id", authenticateJWT, deleteUser)
userRoute.put("/:id", updateUser)

export default userRoute