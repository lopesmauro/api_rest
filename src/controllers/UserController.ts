import { Request, Response } from "express"
import User from "../models/User.ts"
import { IUser } from "../types/Iuser.ts"

const indexUser = async (req: Request, res: Response):Promise<any> => {
  try {
    const users = await User.findAll({ 
      attributes: ['id', 'nome', 'email'] 
    })
    return res.status(200).json(users)
  } catch (e: any) {
    return res.status(500).json({ message: "nao foi possivel realizar esta operação."})
  }
}

const storeUser = async (req: Request, res: Response):Promise<any> => {
  try {
    const { name, email, password } = req.body

    const newUser = await User.create({
      name,
      email,
      password,
    })
    return res.status(200).json({ newUser })
  } catch (e: any) {
    if(e.errors){
      return res.status(400).json({ errors: e.errors.map((err: any) => err.message)})
    }
    return res.status(500).json({ message: "Erro ao criar usuário." });
  }
}

const deleteUser = async (req: Request, res: Response):Promise<any>  => {
  try {
    if(!req.params.id){
      return res.status(400).json({
        errors: ['ID não enviado.']
      })
    }
    const { id } =  req.params
    const user = await User.findByPk(id)
    if(!user){
      return res.status(400).json({
        errors: ['Usuário não existe.']
      })
    }
    await user.destroy(req.body)
    return res.status(200).json({
      message: "Usuário deletado com sucesso."
    })
  } catch (e: any) {
    return res.status(400).json({ errors: e.errors.map((err: any) => err.message)})
  }
}

const showUser = async (req: Request, res: Response):Promise<any> => {
  try {
    const user = await User.findByPk(req.params.id) as IUser | null
    if(!user) {
      return res.status(400).json({
        errors: ['Usuário não encontrado.']
      })
    }
    const { id, name, email } = user
    return res.status(200).json({
      id,
      name,
      email,
    })
  } catch (e: any) {
    return res.status(500).json({ message: "nao foi possivel realizar esta operação."})
  }
}

const updateUser  = async (req: Request, res: Response):Promise<any>  => {
  try {
    if(!req.params.id){
      return res.status(400).json({
        errors: ['ID não enviado.']
      })
    }
    const { id } =  req.params
    const user = await User.findByPk(id)
    if(!user){
      return res.status(400).json({
        errors: ['Usuário não existe.']
      })
    }
    await user.update(req.body)
    return res.status(200).json(user)
  } catch (e: any) {
    return res.status(400).json({ errors: e.errors.map((err: any) => err.message)})
  }
}

export {
  indexUser,
  storeUser,
  deleteUser,
  showUser,
  updateUser,
}
