import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import dbConnect from './config/dbConnect'

const app = express()
const port = process.env.PORT || 3000

dbConnect()
app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())



const server = http.createServer(app)
server.listen(port, () => {
    console.log("servidor Rodando ");
})