import express, { request, response } from "express";
import mongoose from "mongoose";
import { Student } from "./StudentModel.js";
import { DELETE_SUCCESS, ERROR_MESSSAGE, INSERT_SUCCESS, STUDENT_NOT_FOUND, UPDATE_SUCCESS } from "./constants.js";
import { StatusCodes } from "http-status-codes";
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
        response.status(StatusCodes.CREATED).send({message:INSERT_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSSAGE});
    }
});

app.get("/student",async (request,response)=>{
    try {
        const students=await Student.find(); // find() function will fetch all the details from the collection 
        response.send({students:students});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSSAGE});
    }
});

app.get("/student/:roll", async (request,response)=>{
    try {
        const student=await Student.findOne({roll:request.params.roll});
        if(student==null) response.status(StatusCodes.NOT_FOUND).send({message:STUDENT_NOT_FOUND});
        response.send({student:student});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSSAGE});
    } 
});

app.delete("/student/:roll",async (request,response)=>{
    try {
        await Student.deleteOne({roll:request.params.roll}); // deleteOne() used to delete single object matching the criteria
        response.send({message:DELETE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSSAGE});
    }
})

app.put("/student/:roll",async (request,response)=>{
    try {
        await Student.updateOne({roll:request.params.roll},request.body);
        response.send({message:UPDATE_SUCCESS});
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).send({message:ERROR_MESSSAGE});
    }
})
app.listen(5940,()=>{
    console.log("Server has started on 5940");
    connectDb();
});


