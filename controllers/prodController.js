import ProdModel from "../models/prod.js";

class ProdController {
    static createDoc = async(req,res)=>{
        try {
            const{SHOP_TYPE,BOGIE_TYPE,COACH_TYPE,DATE_CREATED,REF_WHEEL,AXEL_NO_MAKE,WHEEL_DISK_1,WHEEL_DISK_2,QA_NUMBER,PROD_NUMBER,QCI_NUMBER}= req.body
            const doc = new ProdModel({
                SHOP_TYPE:SHOP_TYPE,
                BOGIE_TYPE:BOGIE_TYPE,
                COACH_TYPE:COACH_TYPE,
                DATE_CREATED:DATE_CREATED,
                REF_WHEEL:REF_WHEEL,
                AXEL_NO_MAKE:AXEL_NO_MAKE,
                WHEEL_DISK_1:WHEEL_DISK_1,
                WHEEL_DISK_2:WHEEL_DISK_2,
                QA_NUMBER:7389384687,
                PROD_NUMBER:7389384687,
                QCI_NUMBER:7389384687,
            
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error){
            console.log(error)
        }
    }
}
export default ProdController;