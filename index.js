const express =require("express")
require("dotenv").config()
const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())

const blogRoutes = require("../BlogApp/routes/blogRoutes")

app.use("/api/v1" , blogRoutes)

app.listen(PORT , ()=>{
    console.log(`Server Started at ${PORT}`)
})

const dbConnect = require("./config/database")
dbConnect()

app.get("/" , (req , res)=>{
    res.send(`<h1>THIS IS HOMPAGE</h1>`)
})