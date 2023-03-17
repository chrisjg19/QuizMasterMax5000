const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../utils/auth");



router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });
    const users = userData.map((project) => project.get({ plain: true }));

    res.render("main", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
