const mongoose=require("mongoose")
const {Student}=require("./03_models")
const mongo=mongoose.connect("mongodb://localhost/classroom")
mongo.then(()=>{console.log("conneted successfully...")}).catch((err)=>console.log("error occured:-",err))

async function fetchData(){
    const data=await Student.find({name:{$eq:"ramesh"}}).select({name:1,_id:0})
    console.log(data)
}
fetchData()