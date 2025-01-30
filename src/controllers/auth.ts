import { Request, Response } from "express"
import { prismaClient } from ".."
import { hashSync } from 'bcrypt'

export async function signUp(req: Request, res: Response) {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
        res.status(400).json({ msg: "email/password/name is empty" })
    }

    let user = await prismaClient.user.findFirst({ where: { email } })
    if (user) {
        res.status(400).json({ msg: "User is already exist" })
    }
    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.status(201).json(user)

}