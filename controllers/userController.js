import UserNoModel from "../models/userno.js"
class UserNoController {
    static createDoc = async(req,res)=>{
        try {
            const{QA_NUMBER,PROD_NUMBER,QCI_NUMBER}= req.body
            const doc = new UserNoModel({
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
export default UserNoController;