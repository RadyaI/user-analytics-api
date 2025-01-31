import { Request, Response } from 'express'
import { prismaClient } from '..'
import resp from '../middlewares/responses'

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