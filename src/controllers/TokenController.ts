import { Request, Response } from "express"
import User, { passwordIsValid } from "../models/User"
import 'dotenv/config'
import jwt from "jsonwebtoken"
import { IUser } from "../types/Iuser"

const {TOKEN_SECRET, TOKEN_EXPIRATION} = process.env

const storeToken = async (req: Request, res: Response):Promise<any>  => {
  const { email, password, } = req.body
  if(!email || !password) {
    return res.status(401).json({
      errors:  ['Credenciais inválidas.']
    })
  }

  const user = await User.findOne({ where: { email: email }}) as IUser | null
  if(!user) {
    return res.status(401).json({
      errors:  ['Usuário não existe.']
    })
  }

  if(!await passwordIsValid(password, user)){
    return res.status(401).json({
      errors:  ['Credenciais inválidas.']
    })
  }

  if (!TOKEN_SECRET || !TOKEN_EXPIRATION) {
    return res.status(500).json({
      errors: ['Erro interno..']
    })
  }

  const { id } = user 
  const token = jwt.sign({ id, email }, TOKEN_SECRET, {
    expiresIn: TOKEN_EXPIRATION
  })

  return res.status(200).json({token})
}

export default storeToken
