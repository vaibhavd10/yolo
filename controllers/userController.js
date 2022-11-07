import UserNoModel from "../models/userno.js"
class UserNoController {
    static createDoc = async(req,res)=>{
        try {
            const{QA_NUMBER,PROD_NUMBER,QCI_NUMBER}= req.body
            const doc = new UserNoModel({
                QA_NUMBER:QA_NUMBER,
                PROD_NUMBER:PROD_NUMBER,
                QCI_NUMBER:QCI_NUMBER,
            
            })
            const result = await doc.save()
            res.status(201).send(result)
        } catch (error){
            console.log(error)
        }
    }
}
export default UserNoController;