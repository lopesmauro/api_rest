import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from 'jsonwebtoken'
import { RequestUserData } from "../types/RequestUserData"


const loginRequired = (req: RequestUserData, res: Response, next:NextFunction):void => {

  const { TOKEN_SECRET } = process.env
  if (!TOKEN_SECRET) {
    res.status(500).json({
      errors: ['Erro interno..']
    })
    return
  }

  if(!req.headers.authorization){
    res.status(401).json({
      errors: ['Login required.']
    })
  }
  const { authorization } = req.headers
  if(!authorization){
    res.status(401).json({
      errors: ['Login required.']
    })
    return
  }
  
  const [text, token] = authorization.split(' ')

  try {
    const data = jwt.verify(token, TOKEN_SECRET) as JwtPayload
    const { id, email } = data
    req.userId = id
    req.userEmail = email
    return next()
  } catch(e: any) {
    res.status(401).json({
      errors: ['Token invalid.']
    })
  }
}

export { loginRequired }  