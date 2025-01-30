import { Router } from 'express'
import { authenticateJWT } from '../middlewares/authenticate'
import { getAllUser } from '../controllers/user'

const userRoute: Router = Router()

userRoute.get("/", authenticateJWT, getAllUser)

export default userRoute