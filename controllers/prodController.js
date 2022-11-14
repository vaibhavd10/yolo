import ProdModel from "../models/prod.js";

class ProdController {
    static createDoc = async(req,res)=>{
        try {
            const{SHOP_TYPE,BOGIE_TYPE,COACH_TYPE,DATE_CREATED,REF_WHEEL,AXEL_NO_MAKE,WHEEL_DISK_1,WHEEL_DISK_2,REWORK_ASSIGNED_A,REWORK_ASSIGNED_B,REWORK_ASSIGNED_C,REWORK_ASSIGNED_D,REWORK_ASSIGNED_E,COUNTER_A,COUNTER_B,COUNTER_C,COUNTER_D,COUNTER_E}= req.body
            const doc = new ProdModel({
                SHOP_TYPE:SHOP_TYPE,
                BOGIE_TYPE:BOGIE_TYPE,
                COACH_TYPE:COACH_TYPE,
                DATE_CREATED:DATE_CREATED,
                REF_WHEEL:REF_WHEEL,
                AXEL_NO_MAKE:AXEL_NO_MAKE,
                WHEEL_DISK_1:WHEEL_DISK_1,
                WHEEL_DISK_2:WHEEL_DISK_2,
                REWORK_ASSIGNED_A:REWORK_ASSIGNED_A,
                REWORK_ASSIGNED_B:REWORK_ASSIGNED_B,
                REWORK_ASSIGNED_C:REWORK_ASSIGNED_C,
                REWORK_ASSIGNED_D:REWORK_ASSIGNED_D, 
                REWORK_ASSIGNED_E:REWORK_ASSIGNED_E,
                COUNTER_A:0,
                COUNTER_B:0,
                COUNTER_C:0,
                COUNTER_D:0,
                COUNTER_E:0,
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error){
            console.log(error)
        }
    }
}
export default ProdController;