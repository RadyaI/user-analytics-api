import { Router } from 'express'
import { getActivityById, getAllActivity } from '../controllers/activity'
import { authenticateJWT } from '../middlewares/authenticate'

const activityRouter: Router = Router()

activityRouter.get("/", authenticateJWT, getAllActivity)
activityRouter.get("/:id", authenticateJWT, getActivityById)

export default activityRouter