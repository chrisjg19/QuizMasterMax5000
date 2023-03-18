const router = require("express").Router();
const  User  = require("../../models/User");
const  Feedback  = require("../../models/Feedback");
const {sendFeedbackMail}= require("../../utils/helpers");





//post
router.post("/" , async  (req,res) =>{
    
        let {user_id, message} = req.body;
        
    
     Feedback.create({
        user_id: user_id,
        message: message,
      
      }).then(async feedbackObj=>{
  //It is providing to send e-mail with nodemailer
      let userObj =await User.findOne({
        where:{
            id:user_id,
        },
        attributes: { exclude: ["password"] },

      })
      try{
        
         sendFeedbackMail(userObj.email, message);
  
      }catch(e){
        console.log(e)
      }
      feedbackObj.dataValues.user=userObj;
      res.json({ feedback: feedbackObj, message: "feedback send  it!" })


      }).catch(err=>{
          console.log(err)
      res.status(400).json(err);

      })
   
  

})

//get
router.get("/" , async  (req,res) =>{
    
    
 Feedback.findAll({
    include:[
        {
            model:User,
            attributes: { exclude: ["password"] },
    }]
    })
    .then(async feedbackObjs=>{

        res.json({ feedbacks: feedbackObjs, message: "feedbacks  arrived!" })
  }).catch(err=>{
      console.log(err)
  res.status(400).json(err);

  })



})

module.exports = router;
