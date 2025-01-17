const UserServices = require("../../services/user/UserServices");

class UserController {

  async LoginOrSignupFun(req, res) {
      const Obj=req.body;
      const checkuser=await UserServices.CheckUser(Obj.mobileno)
      const otp= Math.floor(100000 + Math.random() * 900000);

      var type='signup';
      if(checkuser){
         type='login';
         await UserServices.UpdateUser({
          id:checkuser?._id,
          updateobj:{
            otp:otp
          }
         });
         res.status(200).send({ type:type,otp:otp,data:checkuser });
      }
      else{
        type='signup';
       const createuser= await UserServices.CreateUser({
          mobileno:Obj.mobileno,
          otp:otp
        })
        res.status(200).send({ type:type,otp:otp,data:createuser });
      }
     
   
  }
  async VerifyOTP(req,res){
    const Obj=req.body;
    const validateuser=await UserServices.ValidateUserOTP(Obj.mobileno,Obj.otp);
    if(validateuser){
      res.status(200).send({ message:'User Validated Successfully',data:validateuser });
    }
    else{
      res.status(401).send({ message:'UnAuthorized',data:[] });
  
    }
  }
  async UpdateProfile(req,res){
    const Obj=req.body;
    const validateuser=await UserServices.CheckUserById(Obj?.id);
    if(validateuser){
      const updateuser=await UserServices.UpdateUser({
        id:Obj?.id,
        updateobj:Obj?.data
       });
       if(updateuser){
        res.status(200).send({ message:'User Updated Successfully',data:updateuser });
       }
       else{
        res.status(401).send({ message:'User Updation Failed',data:[] });
       }
  
    }
    else{
      res.status(401).send({ message:'UnAuthorized',data:[] });
  
    }
  }
  async GetProfileByID(req,res){
    const Obj=req.query;
    const validateuser=await UserServices.CheckUserById(Obj?.id);
    if(validateuser){
      res.status(200).send({ message:'Success',data:validateuser });
    }
    else{
      res.status(401).send({ message:'UnAuthorized',data:[] });
  
    }
  }
  
}

module.exports = new UserController();