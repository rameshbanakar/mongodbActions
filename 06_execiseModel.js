const mongoose=require("mongoose")
const data=new mongoose.Schema({
    $oid: String,
    tags: [String],
    date: Date,
    name: String,
    author:String,
    isPublished: Boolean,
    price: Number,
})

const dataModel=mongoose.model("data",data)
module.exports.dataModel=dataModel
