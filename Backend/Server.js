/* global process */
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import PropertyRoutes from './Routes/PropertyRoutes.js'
import UserRoutes from './Routes/UserRoutes.js'
import cors from 'cors'
import path from 'path'



dotenv.config()

const PORT = (process.env.PORT)
const MONGO_URI = process.env.MONGO_URI

const allowedOrigin = ['http://localhost:5173/AddProperties', 'http://localhost:5173', 'http://localhost:5174']
const app = express()

app.get('/',( req, res) =>{
    res.send('server')
})

app.use(cors({origin: allowedOrigin}))
app.use(express.json())
app.use('/api/Router', PropertyRoutes)
app.use('/api/auth', UserRoutes )
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

const Start = async() =>{

    try{
        await mongoose.connect(MONGO_URI)
    console.log('DataBase connected')

    const server = app.listen( PORT,() =>{
    console.log(`server is running on ${PORT}`)
})

 server.on('error', (error) =>{
    console.log('sever error:', error)
 })

    } catch(error){
        console.error('connection failed', error)
    }
}

Start()

