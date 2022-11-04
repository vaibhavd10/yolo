import ProdModel from "../models/prod.js";

class ProdController {
    static createDoc = async(req,res)=>{
        try {
            const{SHOP_TYPE,BOGIE_TYPE,COACH_TYPE,DATE_CREATED,REF_WHEEL,AXEL_NO_MAKE,WHEEL_DISK_1,WHEEL_DISK_2}= req.body
            const doc = new ProdModel({
                SHOP_TYPE:SHOP_TYPE,
                BOGIE_TYPE:BOGIE_TYPE,
                COACH_TYPE:COACH_TYPE,
                DATE_CREATED:DATE_CREATED,
                REF_WHEEL:REF_WHEEL,
                AXEL_NO_MAKE:AXEL_NO_MAKE,
                WHEEL_DISK_1:WHEEL_DISK_1,
                WHEEL_DISK_2:WHEEL_DISK_2
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error){
            console.log(error)
        }
    }
}
export default ProdController;