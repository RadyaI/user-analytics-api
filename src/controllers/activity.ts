import { Request, Response } from 'express'
import { prismaClient } from '..'
import resp from '../middlewares/responses'

export async function createActivity(userId: number, token: any) {
    const result = await prismaClient.activity.create({
        data: {
            userId,
            token,
        }
    })

    return result
}

export async function getAllActivity(req: Request, res: Response): Promise<any> {
    const result = await prismaClient.activity.findMany()

    if (result.length === 0) {
        return res.status(404).json(resp(404, "Data not found", {}))
    }

    res.status(200).json(resp(200, "Data fetch successfully", result))
}