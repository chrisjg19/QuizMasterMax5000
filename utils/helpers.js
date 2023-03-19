const nodemailer = require("nodemailer");

module.exports = {
  sendSignupMail: (email) => {
    const message = {
      from: process.env.MAILSENDER_ADDR,
      to: email,
      subject: "Welcome to Quiz App",
      text: "We are happy to see you here.You will learn lots of things.You will have time to improve yourelf.Lets start!!",
      html: "<p>Learn more about quiz app and take questions!!</p>",
    };
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILSENDER_ADDR,
        pass: process.env.MAILSENDER_PASSWORD,
      },
    });
    transporter.sendMail(message, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }
    });
  },
  sendFeedbackMail: (email,_message) => {
    const message = {
      from: process.env.MAILSENDER_ADDR,
      to: email,
      subject: "Feedback to Quiz App",
      text: _message,
      html: "<p>Learn more about quiz app and take questions!!</p>",
    };
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILSENDER_ADDR,
        pass: process.env.MAILSENDER_PASSWORD,
      },
    });
    transporter.sendMail(message, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }
    });
  },
};
