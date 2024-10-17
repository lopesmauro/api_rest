import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
dotenv.config()
import homeRoutes from "./routes/homeRoutes.ts"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(homeRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
  console.log('Acess this adress http://localhost:3000')
})
