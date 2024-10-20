import { Request, Response } from "express"
import User from "../models/User"

const homeController= async (req:Request, res:Response):Promise<void> => {
  const newUser = await User.create({
    name: "mf",
    email: "newUser@gmail.com",
    password_hash: "123"
  })
  res.status(200).json({
    newUser
  })
}

export {
  homeController
}
