import UserNoModel from "../models/userno.js"
class UserNoGetController {
    static getAllDoc = async (req, res) => {
      try {
        const result = await UserNoModel.find()
        res.send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default UserNoGetController;