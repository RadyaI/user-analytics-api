import { Request, Response } from 'express'
import { prismaClient } from '..'

export async function createActivity(userId: number, token: any) {
    const result = await prismaClient.activity.create({
        data: {
            userId,
            token,
        }
    })

    return result
}