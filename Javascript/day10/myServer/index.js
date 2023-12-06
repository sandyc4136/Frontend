import express, { request, response } from 'express'; // importing whole express module
var app=express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

app.get("/",(request,response)=>{ // here "/" is the base url (localhost:6000)
    response.send("Hello Welcome to the base URL"); 
})

app.get("/login",(request,response)=>{
    response.send({"message":"Welcome to login"}); 
    // response.send() is same  as response.write() and response.end() combined;
})

app.post("/sum",(request,response)=>{
    var a=10;
    var b=20;
    var c=a+b;
    response.send({"sum":c});
})

app.listen(4900,()=>{
    console.log("Server has started");
})