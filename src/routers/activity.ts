import { Router } from 'express'
import { getAllActivity } from '../controllers/activity'

const activityRouter: Router = Router()

activityRouter.get("/", getAllActivity)

export default activityRouter