export interface IUser {
  id: number
  name: string
  email: string
  password_hash: string
  password?: string
}