const path = require("path");
const express = require("express");
// Import express-session

const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const app = express();
const PORT = process.env.PORT || 8000;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files middleware
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);
sequelize.sync().then(() => {
  //it changed for heroku deployment(use process.env.PORT)
  app.listen(PORT, () =>
    console.log(`Now listening @  http://localhost:${PORT}`)
  );
});
