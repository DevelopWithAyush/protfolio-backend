import express from 'express'
import dotenv from 'dotenv'

const app = express()
dotenv.config()




app.get("/", (req, res) => {
    res.send("hey boy")
})


app.listen(port, () => {
    console.log(`server liseten on the port no ${port}`)
})