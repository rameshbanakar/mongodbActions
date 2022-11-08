const mongoose=require("mongoose")
const {Student}=require("./03_models")
const mongo=mongoose.connect("mongodb://localhost/classroom")
mongo.then(()=>{console.log("conneted successfully...")}).catch((err)=>console.log("error occured:-",err))

async function fetchData(){
    const data=await Student.find().select({name:1,_id:0})
    console.log(data)
}
fetchData()






//practising



// const mongoose=require("mongoose")
// const mongo=mongoose.connect("mongodb://localhost:27017/classroom")
// mongo.then(()=>{console.log("db connected ")})
// mongo.catch(()=>{console.log("error occured ")})
// const StudentSchema=new mongoose.Schema({
//     name:String,
//     age:Number
// })
// const Students=new mongoose.model("student",StudentSchema)
//  async function getData(){
//     const data=await Students.find({age:{$gt:25}})
//     console.log(data)
// }
// getData()



// const prom=new Promise((resolve,reject)=>{
//     const x=18;
//     if(x==19){resolve()}
//     else{reject()}
// })
// prom.then(()=>{console.log("resolved")})
// prom.catch(()=>{console.log("rejected",err)})



// const express=require("express")
// const app=express()
// app.get("/home",(req,res)=>{
//     res.send("hellow guys")
// })
// app.listen("5000")



// class school{
//     constructor(name,age){
//         this.name=name,
//         this.age=age

//     }
//     getData(){
//         console.log(this.name)
//         console.log(this.age)
//     }
// }
// const a=new school("Ramesh",22)
// console.log(a.getData)










