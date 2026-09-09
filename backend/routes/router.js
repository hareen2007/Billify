const User=require("../models/User.js");
const express=require("express");
const router=express.Router();
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken');

router.post("/signup",async (req,res) => {
    try{
        const {user_name,user_email,passwd}=req.body;
        const existingUser=await User.findOne({user_name:user_name});
        if(!existingUser){
            const hashedPassword=await bcrypt.hash(passwd,10);
            let newUser=await User.create({
                user_name:user_name,
                user_email:user_email,
                passwd:hashedPassword
            });
            return res.json({msg:"User has been added Successfully!"});
        }else{
            return res.status(400).json({msg:"User already exists!!!"});
        }
        
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
    
});

router.post("/login",async(req,res)=>{
    try{
        const {user_name,passwd}=req.body;
        const existingUser=await User.findOne({user_name:user_name});
        if(!existingUser){
            return res.status(400).json({msg:"User doesn't exist"});

        }else{
            const isMatch=await bcrypt.compare(passwd,existingUser.passwd);
            if(!isMatch){
                return res.status(400).json({msg:"Invalid password"});
            }

            const token =jwt.sign(
                {id:existingUser._id,
                user_name:existingUser.user_name},
                process.env.JWT_SECRET,
                {expiresIn:"7d"},
            );
            res.json({token,user_name:existingUser.user_name});
        }

    }
    catch(err){
        res.status(500).json({error:err.message});
    }

});

module.exports=router;