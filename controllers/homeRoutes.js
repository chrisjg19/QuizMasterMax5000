const router = require("express").Router();
const { User } = require("../models");
const Feedback = require("../models/Feedback");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["username", "ASC"]],
    });
    const users = userData.map((project) => project.get({ plain: true }));
    const currentUser = await User.findByPk(req.session.user_id, {
      attributes: ["id", "email", "username"],
    });
    //console.log(currentUser)
    res.render("homepage", {
      users,
      username: currentUser.username,
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

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/feedback", withAuth, async (req, res) => {
  console.log("in feedback");
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }
  const feedbacks = await Feedback.findAll({
    raw: true,
    nest: true,

    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
    ],
  });
  res.render("feedback", { feedbacks: feedbacks });
});
router.get("/logout", withAuth, (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(402).end();
  }
});
module.exports = router;
