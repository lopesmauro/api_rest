import { Request, Response } from "express"
import User from "../models/User.ts"

export const indexUser = async (req: Request, res: Response):Promise<any> => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (e: any) {
    return res.status(500).json({ message: "nao foi possivel realizar esta operação."})
  }
}

export const storeUser = async (req: Request, res: Response):Promise<any> => {
  try {
    const { name, email, password } = req.body

    const newUser = await User.create({
      name,
      email,
      password,
      password_hash: ''
    })
    return res.status(200).json({ newUser })
  } catch (e: any) {
    if(e.errors){
      return res.status(400).json({ errors: e.errors.map((err: any) => err.message)})
    }
    return res.status(500).json({ message: "Erro ao criar usuário." });
  }
}

export const deleteUser = async (req: Request, res: Response) => {

}

export const showUser = async (req: Request, res: Response) => {
  try {
    const { id } =  req.params
    const user = await User.findByPk(id)
    return res.status(200).json(user)
  } catch (e: any) {
    return res.status(500).json({ message: "nao foi possivel realizar esta operação."})
  }
}

export const updateUser  = async (req: Request, res: Response) => {

}


