import mongoose from "mongoose";

// Defining Schema

const prodSchema = new mongoose.Schema({
    SHOP_TYPE:{type:String,trim:true},
    BOGIE_TYPE:{type:String,trim:true},
    COACH_TYPE:{type:String,trim:true},
    DATE_CREATED:{type:String,trim:true},
    ASSIGNED_TO_RITES_QCI:{type:Boolean,default:false},
    JOB_ASSIGNED_A:{type:Boolean,default:false},
    JOB_ASSIGNED_B:{type:Boolean,default:false},
    JOB_ASSIGNED_C:{type:Boolean,default:false},
    JOB_ASSIGNED_D:{type:Boolean,default:false},
    JOB_ASSIGNED_E:{type:Boolean,default:false},
    AXEL_NO_MAKE:{type:String,trim:true},
    WHEEL_DISK_1:{type:String,trim:true},
    WHEEL_DISK_2:{type:String,trim:true},
    REF_WHEEL:{type:String,trim:true},
    REWORK_ASSIGNED_A:{type:Boolean,default:false},
    REWORK_ASSIGNED_B:{type:Boolean,default:false},
    REWORK_ASSIGNED_C:{type:Boolean,default:false},
    REWORK_ASSIGNED_D:{type:Boolean,default:false},
    REWORK_ASSIGNED_E:{type:Boolean,default:false},
    COUNTER_A:{type:Number,trim:true},
    COUNTER_B:{type:Number,trim:true},
    COUNTER_C:{type:Number,trim:true},
    COUNTER_D:{type:Number,trim:true},
    COUNTER_E:{type:Number,trim:true},



    AC2_LINK: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "ac2t",

    }],
   

    



});

// Model
const ProdModel = mongoose.model("job", prodSchema);

export default ProdModel;


