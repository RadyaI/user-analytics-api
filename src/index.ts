import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import rootRouter from './routers'
import { PrismaClient } from '@prisma/client'

const app: Express = express()

dotenv.config()

app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    res.json({ status: true }).status(200)
})
app.use("/api", rootRouter)

export const prismaClient = new PrismaClient()

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} 💫`)
})