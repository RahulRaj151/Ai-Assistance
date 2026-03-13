import express from "express";
import connectDb from "./config/db.js"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config()

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)

app.get("/", (req, res) => {
    res.send("hi"); 
})

app.listen(port,()=>{
    connectDb()
    console.log(`Server started on port ${port}`);
    
})