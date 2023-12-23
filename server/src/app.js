import express from "express"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))



// import route
import {router} from "./router/route.js"


app.use("/", router)



export { app }