import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/userRoutes.ts'
import tokenRoutes from './routes/tokenRoutes.ts'
import limiter from './middlewares/rateLimiter.ts'

const app = express()

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(limiter)

app.get('/', (req, res) => {
  res.json({
    isBeautiful: true,
  }).status(200)
})

app.use("/user", userRoutes)
app.use("/tokens", tokenRoutes)

export default app
