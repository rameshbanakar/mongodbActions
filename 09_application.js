const express=require("express")
const mongoose=require("mongoose")
const app=express()

const router=require("./09_router")
app.use(express.json())

mongoose.connect("mongodb://localhost/classroom",{useNewUrlParser:true})
const con=mongoose.connection;
con.on("open",()=>{
    console.log("connection established successfully")
})


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/09_project.html")
})
app.use("/students",router)
const port=process.env.port||"5000"
app.listen(port,()=>{console.log("server started at ",port)})