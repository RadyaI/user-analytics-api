import { Request, Response, NextFunction } from 'express'
import * as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secret'

export function authenticateJWT(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "")!

    if (!token) {
        res.status(403).json({ msg: "Unauthorized" })
    }

    jwt.verify(token, JWT_SECRET, (err, decode) => {
        if (err) {
            res.status(403).json({ msg: "Invalid token" })
        }
        req.body.auth = decode
        next()
    })


}