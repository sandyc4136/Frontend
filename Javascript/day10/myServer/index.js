import express, { request, response } from 'express'; // importing whole express module
var app=express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

app.get("/",(request,response)=>{ // here "/" is the base url (localhost:6000)
    response.send("Hello Welcome to the base URL"); 
})

app.get("/login",(request,response)=>{
    response.send({"message":"Welcome to login"}); 
    // response.send() is same  as response.write() and response.end() combined;
})

app.get("/sum/:a/:b",(request,response)=>{
    var x=parseInt(request.params.a); // params is a predefined object which takes 2 key:value pair
    var y=parseInt(request.params.b);
    // var c=a+b;
     response.send({sum:x+y});
    
})

app.listen(4900,()=>{
    console.log("Server has started");
})