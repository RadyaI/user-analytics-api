import { Router, Request, Response } from "express";
import authRoutes from "./auth";

const rootRouter: Router = Router()

rootRouter.use("*", (req: Request, res: Response) => {
    res.json({ route: "Not Found" }).status(404)
})
rootRouter.use("/auth", authRoutes)

export default rootRouter