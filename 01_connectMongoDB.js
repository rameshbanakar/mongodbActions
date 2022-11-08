const mongoose=require("mongoose")
const mongo=mongoose.connect("mongodb://localhost:27017/simplilearn")
mongo.then(()=>{console.log("connected successfully")}).catch(()=>{console.log("not conneted")})

const courseSchema=new mongoose.Schema({
    name:String,
    author:String,
})

const course= mongoose.model("Course",courseSchema)

async function node(){
    const nodeCourse=new course({name:"nodejs",author:"ramesh"})
    await nodeCourse.save()
}

node()