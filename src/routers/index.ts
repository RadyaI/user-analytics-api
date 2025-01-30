import { Router, Request, Response } from "express";
import authRoutes from "./auth";
import userRoute from "./user";

const rootRouter: Router = Router()

rootRouter.use("/auth", authRoutes)
rootRouter.use("/user", userRoute)

rootRouter.use("*", (req: Request, res: Response) => {
    res.json({ route: "Not Found" }).status(404)
})

export default rootRouter