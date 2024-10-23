import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/userRoutes"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000')
  console.log('Acess this adress http://localhost:3000')
})
