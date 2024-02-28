// we build the restapi-->
const express = require("express");
const mongoose = require("mongoose")

const app = express();

//declare the port->
const port = 4500;

//imp when we using this express and crud opration
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//connect the dataabase->
mongoose.connect("mongodb://127.0.0.1/api_database").then(()=>{
    console.log("we are connected");
}).catch((err)=>{
    console.log(err);
});

// make the database schema->
const productschema =  new mongoose.Schema({
    name:String,
    descripation:String,
    price:Number
});

// make the database model->
const products = new mongoose.model("product",productschema);


//crate product-->(insert data in database from browaser or create new data in database that data we read for show in browser)--> post method
app.post("/api/v1/product/new",async(req,res)=>{
   await products.create(req.body);
   res.status(201).json({
      sucess:true
   });
});

//for read data--> (read data from database shown on browser) --> using get methond in node and find method in database
app.get("/api/v1/product",async(req,res)=>{
    const ss  =  await products.find();
    res.status(200).json({
       sucess:true, ss
    });
 });

 //for update data--> (update data in database)--> using put method and find method in database
 app.put("/api/v1/product/:id",async(req,res)=>{
    const ss  =  await products.findByIdAndUpdate(req.params.id,req.body,
        {new : true});
    res.status(200).json({
       sucess:true, ss
    });
 });

//for delete data--> (delete data in database)--> using delete method and find method in database
  app.delete("/api/v1/products/:id",async(req,res)=>{
      // products.findByIdAndRemove({_id : req.params.id},function(err){
       // if(err) res.json(err);
       // else res.json('sucessfull deleted')});
    // if(!ss) return res.status(500).json({
    //     sucess:false,
    //     message:"product not found"
    // })
    console.log(req.params.id);
    await products.findByIdAndDelete(req.params.id);
    //console.log(result)
    res.send("done");
   // await ss.remove();
 });

// create server->
app.listen(port,()=>{
  console.log("server is on");
});