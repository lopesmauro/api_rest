import express from 'express'
import dotenv from "dotenv"
dotenv.config()
import homeRoutes from "./routes/homeRoutes.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(homeRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
  console.log('Acess this adress http://localhost:3000')
})



