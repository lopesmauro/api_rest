import express from 'express'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) =>{
  res.send("Hello")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
  console.log('Acess this adress http://localhost:3000')
})



