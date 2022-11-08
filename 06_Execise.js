const mongoose=require("mongoose")
const mongo=mongoose.connect("mongodb://localhost/ramesh")
const {dataModel}=require("./06_execiseModel")

mongo.then(()=>{console.log("connetion is succesfull...")}).catch((err)=>{console.log(err)})

async function insertdata(){

    const s=[
        {
            tags: ["aspnet", "backend"],
            date: "2018-01-24T21:42:59.605Z",
            name: "ASP.NET MVC Course",
            author: "Shawn Melody",
            isPublished: true,
            price: 15,
            
        },
        {
            tags: ["react", "frontend"],
            date: "2018-01-24T21:43:21.589Z",
            name: "React Course",
            author: "Shawn Melody",
            isPublished: false,
            
        },
        {
            tags: ["node", "backend"],
            date: "2018-01-24T21:44:01.075Z",
            name: "Node.js Course by Jack",
            author: "Jack",
            isPublished: true,
            price: 12,
           
        },
        {
            tags: ["node", "backend"],
            date: "2018-01-24T21:47:53.128Z",
            name: "Node.js Course by Mary",
            author: "Mary",
            isPublished: false,
            price: 12,
            
        },
        {
            tags: ["angular", "frontend"],
            date: "2018-01-24T21:56:15.353Z",
            name: "Angular Course",
            author: "Shawn Melody",
            isPublished: true,
            price: 15,
            
        }]
    dataModel.insertMany(s).then(()=>{console.log("success..")}).catch(()=>{console.log("delete...")})
}
async function fetchData(){
    // const data=await dataModel.find({tags:{$in:["backend"]}}).select("name -_id author tags").sort("-price")
    // console.log(data)
const data= await dataModel.find({isPublished:{$eq:true},name:/.*by.*/}).sort("price")
    console.log(data)
}
//insertdata()
fetchData()