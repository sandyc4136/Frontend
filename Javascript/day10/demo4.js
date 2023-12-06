// const http=require("http");
// const myModule=require("./myModule");
// const server=http.createServer((request,response)=>{
//     var rs=myModule.sum(4,6);
//     var p=myModule.product(9,3);
//     response.write("Hello World "+" Sum is " + rs + " Product is " + p);
//     response.end();
// });
// server.listen(4500,()=>{
//     console.log("Server Started");
// });
 
// Instead of require ECMA script has introduced import

// Syntax : import { function-name list} from module-name;

import {createServer} from "http";
import {sum, product} from "./myModule.js";
const server=createServer((request,response)=>{
    var rs=sum(4,6);
    var p=product(9,3);
    response.write("Hello World "+" Sum is " + rs + " Product is " + p);
    response.end();
});
server.listen(4500,()=>{
    console.log("Server Started");
});