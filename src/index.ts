import express from 'express'
import cors from 'cors'
import userRoutes from './routes/userRoutes.ts'
import tokenRoutes from './routes/tokenRoutes.ts'
import { protectClickjacking } from './middlewares/protectClickjacking.ts'
import limiter from './middlewares/rateLimiter.ts'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(limiter)

app.use("/user", userRoutes)
app.use("/tokens", tokenRoutes)


app.listen(3000, () => {
  console.log('Server is running on port 3000')
  console.log('Acess this adress http://localhost:3000')
})
