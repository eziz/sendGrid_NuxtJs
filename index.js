require("dotenv").config();
//console.log(process.env.SENDGRID_API_KEY);

const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "xxxx@gmail.com", // Change to your recipient
  from: "xxxxx@bildirisyeri.com", // Change to your verified sender
  //cc:"ezizce@gmail.com",
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Nuxtjs",
  html: "<strong>and easy to do anywhere, even with Nuxtjs</strong>",
};
sendGridMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
