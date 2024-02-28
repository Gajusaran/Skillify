const express = require("express");
const app = express();
//const path = require('path');
//const bodyParser = require('body-parser');
//const router = require("./userroutes");
const port  = 4000;

//app.use(bodyParser.urlencoded({ extended: false }));

//app.use(express.json());
//app.use(router);

//app.get("/api/v1/userdata",(req,res)=>{
//  res.sendFile(path.join(__dirname+"/index.html"));
//   res.json({
//   name:"gaju",
//   email:"sample@getMaxListeners.com",
//   })
//});

// app.get("/about",(req,res)=>{
//     res.send("this is a about pag e")
// });

// app.get("/contact",(req,res)=>{
//    res.send("<h1>this is a contact page</h1>")
// });

// app.post("/api/v1/reg",(req,res)=>{
//    const username = req.body.name;
//    const email = req.body.name;
//     res.json({
//         name:username,
//         email:email,
//         success: "true",
//     });
//    // console.log(req.body);
// });

app.listen(port,()=>{
  console.log("server is on");
});


// crud--> create read update delete
// using get web browser can read data from server or database
// for create data we use post that send data to server on http protocol or to server or database
