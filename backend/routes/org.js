const userInput=require("../models/User.js");
const express=require("express");
const router=express.Router();

router.post("/dashboard",async(req,res)=>{
    try{
        const {comp_name,
            comp_address,
            comp_phone,
            comp_email,
            logo,
            services}=req.body;
        let newcomp=await userInput.create({
                comp_name:comp_name,
                comp_address:comp_address,
                comp_phone:comp_phone,
                comp_email:comp_email,
                logo:logo,
                services:services
                
            });
            return res.json({msg:"Company has been added Successfully!"});
        

    }catch(err){
        res.status(500).json({error:err.message});
    }

});
module.exports=router;