const router = require("express").Router();
const  User  = require("../../models/User");
const {sendSignupMail}= require("../../utils/helpers");
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/signup", async (req, res) => {
  try {
    let { email, password, username } = req.body;

    const count = await User.count({ where: { email: req.body.email } });
    /** req.body
email:
'deneme@deneme.com'
password:
'password'
username:
'testuser' */
    if (count > 0) {
      res.status(400).json({ message: "Select an other Username" });
      return;
    }
    // user oluşturulması lazım password bcrypt 'le olacak
    let userObj = await User.create({
      username: username,
      email: email,
      password: password,
    });
    //It is providing to send e-mail with nodemailer
    try{
       sendSignupMail(email);

    }catch(e){
      console.log(e)
    }
    res.json({ user: userObj, message: "You are now signed up!" });
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

module.exports = router;
