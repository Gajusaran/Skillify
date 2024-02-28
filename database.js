const mongoose = require("mongoose");

// always conncect 
mongoose.connect("mongodb://127.0.0.1/sample").then(()=>{
    console.log("connected sucessfully");
}).catch((err)=>{
    console.log(err);
});

const student = new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number,
});

const Student  = new mongoose.model("data",student);

const adddata = async()=>{
//    const ss = await Student.create({
//     name:"gaju",
//     workout:true,
//     height:6
// });
   const ss = await Student.find({height:{$eq:6}});
 console.log(ss);
}

adddata();
