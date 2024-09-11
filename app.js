import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
dotenv.config({path:"./.env"})
import express from 'express'
import { connectDB } from './utils/features.js'
import cors from "cors";
import userRouter from "./routes/user.js"
import requestRouter from "./routes/request.js"
import { errorMiddleware } from './middleware/error.js';
import bodyParser from "body-parser";



const app = express()
app.use(cors({
    origin: [
        process.env.REACT_URL,
    ],
    credentials: true,
    
}));

const port = process.env.NODE_PORT
connectDB(process.env.DB_HOST)

app.use(bodyParser.urlencoded({ extended: true })); // or false
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.send("hey boy")
})

app.use("/api/v1/user",userRouter);
app.use("/api/v1/request",requestRouter);





app.use(errorMiddleware)


app.listen(port, () => {
    console.log(`server liseten on the port  ${port}`)
})