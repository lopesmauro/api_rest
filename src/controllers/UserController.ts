import { Request, Response } from "express"
import User from "../models/User"

const indexUser = async (req: Request, res: Response) => {

}

const storeUser = async (req:Request, res:Response):Promise<void> => {
  const { name, email, password } = req.body
  try {
    const newUser = await User.create({
      name,
      email,
      password,
      password_hash: ''
    })
    res.status(200).json({
      newUser
    })
  } catch (e) {
    res.status(400).json({ "message": "Não foi possível criar o usuário."})
  }
}

const deleteUser = async (req: Request, res: Response) => {

}

const showUsers = async (req: Request, res: Response) => {

}

const updateUser  = async (req: Request, res: Response) => {

}

export {
  indexUser,
  showUsers,
  storeUser,
  deleteUser,
  updateUser,
}
