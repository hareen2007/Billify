const mongoose=require("mongoose");
const inputSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    comp_name:{
        type:String,
        required:true,
    },
    comp_address:{
        type:String,
        required:true,
    },
    comp_phone:{
        type:Number,
        required:true,
    },
    
    comp_email:{
        type:String,
        required:true,
        unique:true,
    },
    logo:{
        type:Image,
        unique:true,
    },
    services:{
        type:String,
        required:true,
    }
    
});

const userInput=mongoose.model("userInput",inputSchema);
module.exports=userInput;