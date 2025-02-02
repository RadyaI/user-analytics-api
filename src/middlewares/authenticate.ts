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
            return res.status(403).json({ msg: err.message })
        }
        // req.body.auth = decode
        (req as any).user = decode
        next()
    })


}