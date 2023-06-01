const nodemailer = require("nodemailer")

async function sendEmail(email, verify, template){

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "okmahin2@gmail.com", 
      pass: "ybplonishbbgedyj", 
    },
  });


  let info = await transporter.sendMail({
    from: "okmahin2@gmail.com", 
    to: email, 
    subject: "Please Verify Your Email", 
    html: template(verify), 
  });

}

module.exports = sendEmail