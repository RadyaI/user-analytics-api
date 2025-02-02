import { Router } from 'express'
import { getActivityById, getAllActivity, totalActivity } from '../controllers/activity'
import { authenticateJWT } from '../middlewares/authenticate'

const activityRouter: Router = Router()

activityRouter.get("/", authenticateJWT, totalActivity)
activityRouter.get("/:id", authenticateJWT, getActivityById)
activityRouter.get("/all", authenticateJWT, getAllActivity)

export default activityRouter