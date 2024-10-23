import { Request, Response } from "express"
import User from "../models/User"

const homeController = async (req:Request, res:Response):Promise<void> => {
  try {
    const newUser = await User.create({
      name: "mf",
      email: "newUseaaaar@gmail.com",
      password_hash: "123"
    })
    res.status(200).json({
      newUser
    })
  } catch (e) {
    res.status(501).json({ "message": "Não foi possível criar o usuário."})
  }
}

export {
  homeController
}
