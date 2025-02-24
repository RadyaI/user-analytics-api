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

export async function getActivityById(req: Request, res: Response): Promise<any> {
    const id = req.params.id

    const result = await prismaClient.activity.findFirst({
        where: { id: Number(id) },
        include: {
            user: true
        }
    })

    if (!result) {
        return res.status(404).json(resp(404, "Data not found", {}))
    }
    res.status(200).json(resp(200, "Data fetch successfully", result))

}

export async function totalActivity(req: Request, res: Response): Promise<any> {
    const data = (req as any).user

    const result = await prismaClient.activity.findMany({
        where: { userId: data.userId }
    })

    if (result.length === 0) {
        return res.status(200).json(resp(200, "Empty", result))
    }

    res.status(200).json(resp(200, "Data fetch successfully", result, {total: result.length}))

}