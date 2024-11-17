import { Request, Response, NextFunction } from "express";

const protectClickjacking = (req: Request, res: Response, next:NextFunction): void => {
  res.setHeader('X-Frame-Options', 'DENY')
  next()
}

export { protectClickjacking }

//Just for frontend
