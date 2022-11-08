const express=require("express")
const router=express.Router()
const {Student}=require("./03_models")

router.get("/",async(req,res)=>{
    try{
        const data=await Student.find()
        res.json(data)
        //console.log(data)
    }catch(err){
        res.send("error occured:-",err)
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const data=await Student.find({id:req.params.id})
        res.json(data)
        
    }catch(err){
        res.send("error occured:-",err)
    }
})
router.post("/",async(req,res)=>{
    console.log("req.body data:--->",req.body)
    const newStudent=new Student({
        id:req.body.id,
        name:req.body.name,
        age:req.body.age
    })
    newStudent.save()
    res.send("data saved succesfully")
})
module.exports=router
