const express=require("express"); 
const app= express();        //binds the express module to 'app'
const bodyParser=require("body-parser");
const response = {
    message: 'Health Check',
    status: 'OK',
    uptime: `${process.uptime().toFixed(0)} seconds`,
    nodeVersion: process.versions.node,
    time: new Date().toISOString(),
  };
app.get("/", function(req,res){
    res.send(response);
  });
app.listen(3000, function(){
        console.log("SERVER STARTED ON PORT 3000");  
})