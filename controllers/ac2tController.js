import mongoose from "mongoose";
import AC2TModel from "../models/ac2t.js";
import ProdModel from "../models/prod.js";
import pkg from 'mongoose';
const { ObjectId } = pkg;
class Ac2tController {
    static createDoc = async (req, res) => {
      try {
        const {BOGIE_TYPE_NO,SHIFT,APPLICABLE_WI_NO,FRAME_NO_MAKE,WHEEL_AXLE_NO,BRAKE_CYLINDER_NO_MAKE,VSA_PRIMARY_SUSP_NO_MAKE,VSA_SECONDARY_SUSP_NO_MAKE,LATERAL_SHOCK_ABSORBER_NO_MAKE,BOLSTER_NO_MAKE,Z11_TARE,Z11_TARE_REMARK,Z11_GROSS,Z11_GROSS_REMARK,Z31_TARE,Z31_TARE_REMARK,Z31_GROSS,Z31_GROSS_REMARK,Z41_TARE,Z41_TARE_REMARK,Z41_GROSS,Z41_GROSS_REMARK,Z21_TARE,Z21_TARE_REMARK,Z21_GROSS,Z21_GROSS_REMARK,X_TARE,X_TARE_REMARK,X_GROSS,X_GROSS_REMARK,Z12_PLUS_Z22_BY2_TARE,Z12_PLUS_Z22_BY2_TARE_REMARK,Z12_PLUS_Z22_BY2_GROSS,Z12_PLUS_Z22_BY2_GROSS_REMARK,Z32_PLUS_Z42_BY2_TARE,Z32_PLUS_Z42_BY2_TARE_REMARK,Z32_PLUS_Z42_BY2_GROSS,Z32_PLUS_Z42_BY2_GROSS_REMARK,X14_TARE,X14_TARE_REMARK,X14_GROSS,X14_GROSS_REMARK,X24_TARE,X24_TARE_REMARK,X24_GROSS,X24_GROSS_REMARK,Y13_TARE,Y13_TARE_REMARK,Y13_GROSS,Y13_GROSS_REMARK,Y33_TARE,Y33_TARE_REMARK,Y33_GROSS,Y33_GROSS_REMARK,A_SIDE_TARE,A_SIDE_TARE_REMARK,A_SIDE_GROSS,A_SIDE_GROSS_REMARK,B_SIDE_TARE,B_SIDE_TARE_REMARK,B_SIDE_GROSS,B_SIDE_GROSS_REMARK,TEST_PASSED,requestid,Y_TARE,Y_GROSS, A_TARE,B_TARE,Z133_PLUS_Z23_BY2_TARE,Z133_PLUS_Z23_BY2_TARE_REMARK, X_MINUS_1_TARE,X_MINUS_1_TARE_REMARK,Y_MINUS_1_TARE, Y_MINUS_1_TARE_REMARK, X15_TARE,X15_TARE_REMARK,X25_TARE, X25_TARE_REMARK,Y14_TARE,Y14_TARE_REMARK,Y34_TARE,Y34_TARE_REMARK,M5008_Drawing_No,M5008_for,M5008_Bogie_No,M5008_Bogie_Frame_No,M5008_Date,M5008_bolster_no,M5008_cross_section_No,M5008_Axle_Nos_EE,M5008_Nee,M5008_Brake_Cylinder_No1,M5008_Brake_Cylinder_No2,M5008_Brake_Cylinder_No3,M5008_Brake_Cylinder_No4,M5008_Brake_Caliper_No1,M5008_Brake_Caliper_No2,M5008_Brake_Caliper_No3,M5008_Brake_Caliper_No4,M5008_Remark1,M5008_Remark2,M5008_Remark3,M5008_Remark4,M5008_Remark5,M5008_Remark6,M5008_Remark7,M5008_Remark8,M5008_Remark9,M5008_Remark10,M5008_Remark11,M5008_Remark12,M5008_Remark13,M5008_Remark14,M5008_Remark15,M5008_Remark16,M5008_Remark17,M5008_Remark18,M5008_Remark19,M5008_Remark20,M5008_Remark21,M5008_Remark22,M5008_Remark23,M5008_Remark24,M5008_Remark25,M5008_Remark26,M5008_Remark27,M5008_Remark28,M5008_Remark29,M5008_Remark30,M5008_Remark31,M5008_Remark32,M5008_Actual1,M5008_Actual2,M5008_Actual3,M5008_Actual4,M5008_Actual5,M5008_Actual6,M5008_Actual7,M5008_Actual8,M5008_Actual9,M5008_Actual10,M5008_Actual11,M5008_Actual12,M5008_Actual13,M5008_Actual14,M5008_Actual15,M5008_Actual16,M5008_Actual17,M5008_Actual18,M5008_Actual19,M5008_Actual20,M5008_Actual21,M5008_Actual22,M5008_Actual23,M5008_Actual24,M5008_Actual25,M5008_Actual26,M5008_Actual27,M5008_Actual28,M5008_Actual29,M5008_Actual30,M5008_Actual31,M5008_Actual32,FORM_TYPE,wheel_Date,input1,input2,input3,input4,input5,input6,input7,input8,input9,input10,input11,input12,input13,wheel_checked1,wheel_checked2,note } = req.body
        const doc =new AC2TModel({
          BOGIE_TYPE_NO: BOGIE_TYPE_NO,
          SHIFT:SHIFT,
          APPLICABLE_WI_NO:APPLICABLE_WI_NO,
          FRAME_NO_MAKE:FRAME_NO_MAKE,
          WHEEL_AXLE_NO:WHEEL_AXLE_NO,
          BRAKE_CYLINDER_NO_MAKE:BRAKE_CYLINDER_NO_MAKE,
          VSA_PRIMARY_SUSP_NO_MAKE:VSA_PRIMARY_SUSP_NO_MAKE,
          VSA_SECONDARY_SUSP_NO_MAKE:VSA_SECONDARY_SUSP_NO_MAKE,
          LATERAL_SHOCK_ABSORBER_NO_MAKE:LATERAL_SHOCK_ABSORBER_NO_MAKE,
          BOLSTER_NO_MAKE:BOLSTER_NO_MAKE,
          Z11_TARE:Z11_TARE,
          Z11_TARE_REMARK:Z11_TARE_REMARK,
          Z11_GROSS:Z11_GROSS,
          Z11_GROSS_REMARK:Z11_GROSS_REMARK,
          Z31_TARE:Z31_TARE,
          Z31_TARE_REMARK:Z31_TARE_REMARK,
          Z31_GROSS:Z31_GROSS,
          Z31_GROSS_REMARK:Z31_GROSS_REMARK,
          Z41_TARE:Z41_TARE,
          Z41_TARE_REMARK:Z41_TARE_REMARK,
          Z41_GROSS:Z41_GROSS,
          Z41_GROSS_REMARK:Z41_GROSS_REMARK,
          Z21_TARE:Z21_TARE,
          Z21_TARE_REMARK:Z21_TARE_REMARK,
          Z21_GROSS:Z21_GROSS,
          Z21_GROSS_REMARK:Z21_GROSS_REMARK,
          X_TARE:X_TARE,
          X_TARE_REMARK:X_TARE_REMARK,
          X_GROSS:X_GROSS,
          X_GROSS_REMARK:X_GROSS_REMARK,
          Z12_PLUS_Z22_BY2_TARE:Z12_PLUS_Z22_BY2_TARE,
          Z12_PLUS_Z22_BY2_TARE_REMARK:Z12_PLUS_Z22_BY2_TARE_REMARK,
          Z12_PLUS_Z22_BY2_GROSS:Z12_PLUS_Z22_BY2_GROSS,
          Z12_PLUS_Z22_BY2_GROSS_REMARK:Z12_PLUS_Z22_BY2_GROSS_REMARK,
          Z32_PLUS_Z42_BY2_TARE:Z32_PLUS_Z42_BY2_TARE,
          Z32_PLUS_Z42_BY2_TARE_REMARK:Z32_PLUS_Z42_BY2_TARE_REMARK,
          Z32_PLUS_Z42_BY2_GROSS:Z32_PLUS_Z42_BY2_GROSS,
          Z32_PLUS_Z42_BY2_GROSS_REMARK:Z32_PLUS_Z42_BY2_GROSS_REMARK,
          X14_TARE:X14_TARE,
          X14_TARE_REMARK:X14_TARE_REMARK,
          X14_GROSS:X14_GROSS,
          X14_GROSS_REMARK:X14_GROSS_REMARK,
          X24_TARE:X24_TARE,
          X24_TARE_REMARK:X24_TARE_REMARK,
          X24_GROSS:X24_GROSS,
          X24_GROSS_REMARK:X24_GROSS_REMARK,
          Y13_TARE:Y13_TARE,
          Y13_TARE_REMARK:Y13_TARE_REMARK,
          Y13_GROSS:Y13_GROSS,
          Y13_GROSS_REMARK:Y13_GROSS_REMARK,
          Y33_TARE:Y33_TARE,
          Y33_TARE_REMARK:Y33_TARE_REMARK,
          Y33_GROSS:Y33_GROSS,
          Y33_GROSS_REMARK:Y33_GROSS_REMARK,
          A_SIDE_TARE:A_SIDE_TARE,
          A_SIDE_TARE_REMARK:A_SIDE_TARE_REMARK,
          A_SIDE_GROSS:A_SIDE_GROSS,
          A_SIDE_GROSS_REMARK:A_SIDE_GROSS_REMARK,
          B_SIDE_TARE:B_SIDE_TARE,
          B_SIDE_TARE_REMARK :B_SIDE_TARE_REMARK     ,                                   
          B_SIDE_GROSS:B_SIDE_GROSS,
          B_SIDE_GROSS_REMARK:B_SIDE_GROSS_REMARK,
          TEST_PASSED:TEST_PASSED,
          Y_TARE:   Y_TARE    ,              
          Y_GROSS:      Y_GROSS,                
          A_TARE:     A_TARE,                  
          B_TARE:    B_TARE,                   
          Z133_PLUS_Z23_BY2_TARE:     Z133_PLUS_Z23_BY2_TARE,  
          Z133_PLUS_Z23_BY2_TARE_REMARK:Z133_PLUS_Z23_BY2_TARE_REMARK,
          X_MINUS_1_TARE:   X_MINUS_1_TARE,            
          X_MINUS_1_TARE_REMARK:   X_MINUS_1_TARE_REMARK,     
          Y_MINUS_1_TARE:               Y_MINUS_1_TARE,
          Y_MINUS_1_TARE_REMARK:       Y_MINUS_1_TARE_REMARK ,
          X15_TARE:  X15_TARE,                   
          X15_TARE_REMARK:      X15_TARE_REMARK,        
          X25_TARE:    X25_TARE,                 
          X25_TARE_REMARK:   X25_TARE_REMARK,           
          Y14_TARE:           Y14_TARE,          
          Y14_TARE_REMARK: Y14_TARE_REMARK,             
          Y34_TARE:    Y34_TARE,                 
          Y34_TARE_REMARK:  Y34_TARE_REMARK,  

          M5008_Drawing_No:M5008_Drawing_No,
          M5008_Bogie_No:M5008_Bogie_No,
          M5008_for:M5008_for,
          M5008_Bogie_Frame_No:M5008_Bogie_Frame_No,
          M5008_Date:M5008_Date,
          M5008_bolster_no:M5008_bolster_no,
          M5008_cross_section_No:M5008_cross_section_No,
          M5008_Axle_Nos_EE:M5008_Axle_Nos_EE,
          M5008_Nee:M5008_Nee,
          M5008_Brake_Cylinder_No1:M5008_Brake_Cylinder_No1,
          M5008_Brake_Cylinder_No2:M5008_Brake_Cylinder_No2,
          M5008_Brake_Cylinder_No3:M5008_Brake_Cylinder_No3,
          M5008_Brake_Cylinder_No4:M5008_Brake_Cylinder_No4,
          M5008_Brake_Caliper_No1:M5008_Brake_Caliper_No1,
          M5008_Brake_Caliper_No2:M5008_Brake_Caliper_No2,
          M5008_Brake_Caliper_No3:M5008_Brake_Caliper_No3,
          M5008_Brake_Caliper_No4:M5008_Brake_Caliper_No4,
          M5008_Remark1:M5008_Remark1,
          M5008_Remark2:M5008_Remark2,
          M5008_Remark3:M5008_Remark3,
          M5008_Remark4:M5008_Remark4,
          M5008_Remark5:M5008_Remark5,
          M5008_Remark6:M5008_Remark6,
          M5008_Remark7:M5008_Remark7,
          M5008_Remark8:M5008_Remark8,
          M5008_Remark9:M5008_Remark9,
          M5008_Remark10:M5008_Remark10,
          M5008_Remark11:M5008_Remark11,
          M5008_Remark12:M5008_Remark12,
          M5008_Remark13:M5008_Remark13,
          M5008_Remark14:M5008_Remark14,
          M5008_Remark15:M5008_Remark15,
          M5008_Remark16:M5008_Remark16,
          M5008_Remark17:M5008_Remark17,
          M5008_Remark18:M5008_Remark18,
          M5008_Remark19:M5008_Remark19,
          M5008_Remark20:M5008_Remark20,
          M5008_Remark21:M5008_Remark21,
          M5008_Remark22:M5008_Remark22,
          M5008_Remark23:M5008_Remark23,
          M5008_Remark24:M5008_Remark24,
          M5008_Remark25:M5008_Remark25,
          M5008_Remark26:M5008_Remark26,
          M5008_Remark27:M5008_Remark27,
          M5008_Remark28:M5008_Remark28,
          M5008_Remark29:M5008_Remark29,
          M5008_Remark30:M5008_Remark30,
          M5008_Remark31:M5008_Remark31,
          M5008_Remark32:M5008_Remark32,
          M5008_Actual1:M5008_Actual1,
          M5008_Actual2:M5008_Actual2,
          M5008_Actual3:M5008_Actual3,
          M5008_Actual4:M5008_Actual4,
          M5008_Actual5:M5008_Actual5,
          M5008_Actual6:M5008_Actual6,
          M5008_Actual7:M5008_Actual7,
          M5008_Actual8:M5008_Actual8,
          M5008_Actual9:M5008_Actual9,
          M5008_Actual10:M5008_Actual10,
          M5008_Actual11:M5008_Actual11,
          M5008_Actual12:M5008_Actual12,
          M5008_Actual13:M5008_Actual13,
          M5008_Actual14:M5008_Actual14,
          M5008_Actual15:M5008_Actual15,
          M5008_Actual16:M5008_Actual16,
          M5008_Actual17:M5008_Actual17,
          M5008_Actual18:M5008_Actual18,
          M5008_Actual19:M5008_Actual19,
          M5008_Actual20:M5008_Actual20,
          M5008_Actual21:M5008_Actual21,
          M5008_Actual22:M5008_Actual22,
          M5008_Actual23:M5008_Actual23,
          M5008_Actual24:M5008_Actual24,
          M5008_Actual25:M5008_Actual25,
          M5008_Actual26:M5008_Actual26,
          M5008_Actual27:M5008_Actual27,
          M5008_Actual28:M5008_Actual28,
          M5008_Actual29:M5008_Actual29,
          M5008_Actual30:M5008_Actual30,
          M5008_Actual31:M5008_Actual31,
          M5008_Actual32:M5008_Actual32,
          FORM_TYPE:FORM_TYPE,
          wheel_Date:wheel_Date,
          input1:input1,
          input2:input2,
          input3:input3,
          input4:input4,
          input5:input5,
          input6:input6,
          input7:input7,
          input8:input8,
          input9:input9,
          input10:input10,
          input11:input11,
          input12:input12,
          input13:input13,
          wheel_checked1:wheel_checked1,
          wheel_checked2:wheel_checked2,
          note:note,
 

        })
        const result = await doc.save()
        const resultid = result._id

        const firmlink=  ProdModel.findByIdAndUpdate( 
          requestid, {$push: { AC2_LINK: resultid}}, function(err,data){
            if ( err ) throw err;
            else if(data){
            //console.log( '-- reference created' );
           // console.log('firmlink',data)
          }
        });
        res.status(201).send(result)
      } catch (error) {
        console.log(error)
      }
    }
  }

  export default Ac2tController;