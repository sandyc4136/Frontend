import express, { request, response } from "express";
import mongoose from "mongoose";
import { Student } from "./StudentModel.js";

const app=express();

app.use(express.json());

const connectDb=async ()=>{
    try{
        await  mongoose.connect("mongodb://127.0.0.1:27017/institutedb");
        console.log("Database connection established!!!! ");
    } catch(error){
        console.log(error);
    }
}

app.post("/student",async (request,response)=>{
    try {
        const reqData=request.body;
        const student=new Student(reqData);
        await student.save();
        response.send({message:"Student inserted"});
    } catch (error) {
        response.send({message:"Something went wrong.."});
    }
});

app.get("/student",async (request,response)=>{
    try {
        const students=await Student.find(); // find() function will fetch all the details from the collection 
        response.send({students:students});
    } catch (error) {
        response.send({message:"Something went wrong.."});
    }
})


app.listen(5940,()=>{
    console.log("Server has started on 5940");
    connectDb();
});


