const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");


router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["username", "ASC"]],
    });
    const users = userData.map((project) => project.get({ plain: true }));
    const currentUser=await User.findByPk(req.session.user_id,{
      attributes:["id", "email", "username"]
    });
  //console.log(currentUser)
    res.render("homepage", {
      users,
      username:currentUser.username,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/login", (req, res) => {
   if (req.session.logged_in) {
     res.redirect("/");
     return;
   }

  res.render("login");
});
router.get("/sign-up", (req, res) => {
   if (req.session.logged_in) {
     res.redirect("/");
     return;
   }

  res.render("sign-up");
});
router.get("/feedback",withAuth, (req, res) => {
  console.log("in feedback")
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

 res.render("feedback");
});
router.get("/logout",withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(402).end();
  }
});
module.exports = router;
