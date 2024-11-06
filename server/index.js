import express from 'express'
import cors from 'cors'
import connectDB from './database/db.js'
const app = express()



app.use(cors())

app.listen(5000, ()=> {
    connectDB()
    console.log('Server is Running');
})