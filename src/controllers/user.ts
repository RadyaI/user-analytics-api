import { Request, Response } from 'express'
import { prismaClient } from '..'
import resp from '../middlewares/responses'
import { hashSync } from "bcrypt"

export async function getAllUser(req: Request, res: Response): Promise<any> {
    const result = await prismaClient.user.findMany()
    if (result.length === 0) {
        return res.status(404).json(resp(404, "Data does not exist", result))
    }
    res.status(200).json(resp(200, "Users fetched successfully", result))
}

export async function getUserById(req: Request, res: Response): Promise<any> {
    const id: number | string = req.params.id

    const result = await prismaClient.user.findFirst({ where: { id: Number(id) } })
    if (!result) {
        return res.status(404).json(resp(404, "User not found", []))
    }
    res.status(200).json(resp(200, "Users fetched successfully", result))
}

export async function updateUser(req: Request, res: Response): Promise<any> {
    const id = req.params.id
    const { name, email, password } = req.body

    const oldData = await prismaClient.user.findFirst({ where: { id: Number(id) } })
    if (!oldData) {
        return res.status(404).json(resp(404, "User not found", {}))
    }

    const result = await prismaClient.user.update({
        where: { id: Number(id) },
        data: {
            name: !name ? oldData.name : name,
            email: !email ? oldData.email : email,
            password: !password ? oldData.password : hashSync(password, 10)
        }
    })

    res.status(200).json(resp(200, "Update successfully", result))

}

export async function deleteUser(req: Request, res: Response): Promise<any> {
    const id = req.params.id
    let result
    const checkId = await prismaClient.user.findFirst({ where: { id: Number(id) } })
    if (!checkId) {
        res.status(404).json(resp(404, "User not found", {}))
    } else {
        result = await prismaClient.user.delete({ where: { id: Number(id) } })
        res.status(200).json(resp(200, "Delete successfully", result))
    }
}