import { Request, Response } from "express"
import User from "../models/User.ts"
import { RequestUserData } from "../types/RequestUserData.ts"
import { createClient } from 'redis'
const client = createClient()
client.connect()

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

    if(!newUser){
      res.status(400).json({
        errors: ['Não foi possível criar esse usuário.']
      })
      return
    }

    return res.status(200).json({
      id: newUser.get("id"),
      name: newUser.get("name"),
      email: newUser.get("email"),
     })

  } catch (e: any) {
    if(e.errors){
      return res.status(400).json({ errors: e.errors.map((err: any) => err.message)})
    }
    return res.status(500).json({ message: "Erro ao criar usuário." });
  }
}

const deleteUser = async (req: RequestUserData, res: Response):Promise<any>  => {
  try {
    if(req.userId){
      return res.status(400).json({
        errors: ['ID não enviado.']
      })
    }
    const { userId } =  req
    const user = await User.findByPk(userId)
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

const showUser = async (req: RequestUserData, res: Response):Promise<any> => {
  try {
    const userFromCache = await client.get(`user:${req.userId}`)
    if (userFromCache) {
      return res.send(JSON.parse(userFromCache))
    }
    const user = await User.findByPk(req.userId)
    if(!user) {
      return res.status(400).json({
        errors: ['Usuário não encontrado.']
      })
    }
    const userData = {
      id: user.get("id"),
      name: user.get("name"),
      email: user.get("email"),
    }
    await client.set(`user:${req.userId}`, JSON.stringify(userData), {
      EX: 10,
    })
    return res.status(200).json({
      userData
    })
  } catch (e: any) {
    return res.status(500).json({ message: "nao foi possivel realizar esta operação."})
  }
}

const updateUser  = async (req: RequestUserData, res: Response):Promise<any>  => {
  try {
    if(!req.userId){
      return res.status(400).json({
        errors: ['ID não enviado.']
      })
    }
    const { userId } =  req
    const user = await User.findByPk(userId)
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
