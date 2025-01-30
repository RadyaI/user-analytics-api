import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import rootRouter from './routers'

const app: Express = express()
dotenv.config()

app.get("/", (req: Request, res: Response) => {
    res.json({ status: true }).status(200)
})

app.use("/api", rootRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT} 💫`)
})