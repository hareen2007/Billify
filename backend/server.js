const express = require("express");
const userRouter = require("./routes/router.js");
const compRouter=require("./routes/org.js");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT=process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));
app.use(express.urlencoded({ extended: true }));
let connectDB = async function(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected successfully");
    }
    catch(err){
        console.log(err);
    }
}
app.use("/api/auth",userRouter);
//connecting the port
try{
    app.use("/api/comp_details",compRouter);
}
catch(err){
    console.log(err);
}

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}!!`);
    connectDB();
});