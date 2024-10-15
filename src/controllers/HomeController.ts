import { Request, Response } from "express"

const homeController = (req:Request, res:Response) => {
  res.status(200).json({
    message: "Bem vindo"
  })
}

export {
  homeController
}
