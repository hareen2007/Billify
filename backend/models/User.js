const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique:true,
        trim:true,

    },
    user_email:{
        type:String,
        required:true,
        unique:true,
    },
    passwd:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

});
const User=mongoose.model("User",userSchema);
module.exports=User;


