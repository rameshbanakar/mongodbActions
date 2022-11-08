const mongoose=require("mongoose")
const mongo=mongoose.connect("mongodb://localhost/ramesh")
const {dataModel}=require("./06_execiseModel")

mongo.then(()=>{console.log("connetion is succesfull...")}).catch((err)=>{console.log(err)})

async function removedOne(id){
    const removedData=await dataModel.deleteOne({_id:id})
    console.log(removedData)
}
removedOne("634a68b4c4afd22303c56eb4")