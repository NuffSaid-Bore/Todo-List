import express from 'express'
import cors from 'cors'
import connectDB from './database/db.js'
import noteRouter from './routes/note.js'

const port = process.env.PORT || 5000;
const app = express()
app.use(express.json())
app.use(cors())
app.use("/note", noteRouter)



app.listen(port, ()=> {
    connectDB()
    console.log('Server is Running');
})
