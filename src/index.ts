import express, { Express, Request, Response } from 'express'
import rootRouter from './routers'
import { PrismaClient } from '@prisma/client'
import { PORT } from './secret'

const app: Express = express()

app.use(express.json())
app.get("/", (req: Request, res: Response) => {
    res.json({ status: true }).status(200)
})
app.use("/api/v1", rootRouter)

export const prismaClient = new PrismaClient()

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} 💫`)
})