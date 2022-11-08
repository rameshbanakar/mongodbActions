const mongoose=require("mongoose")
const mongo=mongoose.connect("mongodb://localhost/ramesh")
const {dataModel}=require("./06_execiseModel")

mongo.then(()=>{console.log("connetion is succesfull...")}).catch((err)=>{console.log(err)})

async function updateData(id){
    const data=await dataModel.updateMany({author:id},{name:"Ramesh"})
    const data1=await dataModel.find()
    console.log(data1)
}
updateData("Shawn Melody")