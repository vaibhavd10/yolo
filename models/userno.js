import mongoose from "mongoose";

// Defining Schema

const usernoSchema = new mongoose.Schema({
    QA_NUMBER:{type:Number,trim:true},
    PROD_NUMBER:{type:Number,trim:true},
    QCI_NUMBER:{type:Number,trim:true},
   

    



});

// Model
const UserNoModel = mongoose.model("userno", usernoSchema);

export default UserNoModel;


