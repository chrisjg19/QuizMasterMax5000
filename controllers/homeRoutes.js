const router = require("express").Router();
const { User } = require("../models");
// const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("login");
});
router.get("/sign-up", (req, res) => {
  // if (req.session.signup) {
  //   res.redirect("/");
  //   return;
  // }

  res.render("sign-up");
});

module.exports = router;
