import { Request } from "express"

interface RequestUserData extends Request {
  userId?: string
  userEmail?: string
}

export { RequestUserData }