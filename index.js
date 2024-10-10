import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import usersRouter from './routes/users.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URL)

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send("welcome!")
})

app.use('/users', usersRouter)

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`);
    
})