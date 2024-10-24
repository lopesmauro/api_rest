import { Request, Response } from "express"
import User from "../models/User.ts"
import { ValidationError } from 'sequelize'

const indexUser = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll()
    res.status(200).json(users)
  } catch (e: any) {
    res.status(500).json({ message: "nao foi possivel realizar esta operação."})
  }
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
  } catch (e: any) {
    if(e.errors){
      res.status(400).json({ errors: e.errors.map((err: any) => err.message)})
    }
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
