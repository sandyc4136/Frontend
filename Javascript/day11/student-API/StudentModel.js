import mongoose, { Schema } from "mongoose";


const studentSchema=new Schema({
    roll:Number,
    name:String,
    marks:Number,
    gender:String
});

//mongoose.model(collectionName,studentSchema); 
export const Student=mongoose.model("student",studentSchema); // this will generate a model class with reference to the above schema , which will eventually generate a collection  