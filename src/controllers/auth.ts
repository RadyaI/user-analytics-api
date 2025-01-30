import { Request, Response } from "express"
import { prismaClient } from ".."
import { hashSync, compareSync } from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../secret"

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

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400).json({ msg: "email/password is empty" })
    }

    let user = await prismaClient.user.findFirst({ where: { email } })
    if(!user){
        throw Error("User does not exist!")
    }

    if(!compareSync(password, user.password)){
        throw Error("Incorrect password!")
    }

    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET)
    

    res.json({user, token})
}