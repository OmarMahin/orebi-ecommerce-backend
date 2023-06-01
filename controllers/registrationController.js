const bcrypt = require('bcrypt')
const emailValidation = require('../helpers/emailValidation.js')
const User = require('../models/usersModel.js')
const sendEmail = require('../helpers/sendEmail.js')
const template = require('../helpers/otpTemplate')
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");

let registrationController = async (req, res) => {
    const { fullName, email, password, avater, facebooId, googleId } = req.body

    if (!fullName) {
        return res.send({ error: "Enter Fullname" })
    }
    else if (!email) {
        return res.send({ error: "Enter email" })
    }
    else if (!emailValidation(email)) {
        return res.send({ error: "Enter a valid email" })
    }
    else if (!password) {
        return res.send({ error: "Enter password" })
    }
    else {

        let duplicateEmail = await User.find({ email: email })

        if (duplicateEmail.length > 0) {
            return res.send({ error: "Email already exists. Please try another one." })
        }

        bcrypt.hash(password, 10, async function (err, hash) {

            const user = new User({
                fullName,
                email,
                password: hash,
                avater,
                facebooId,
                googleId
            })

            user.save()
            const generator = aleaRNGFactory(Date.now());
            let otp = generator.uInt32().toString().substring(0, 4)

            let storeOtp = await User.findOneAndUpdate(
                { email },
                { $set: { otp: otp } },
                { new: true }
            )

            // setTimeout(async function () {
            //     console.log("Deleted otp")
            //     let removeOtp = await User.findOneAndUpdate(
            //         { email },
            //         { $unset: { otp: "" } },
            //         { new: true }
            //     )
            // }, 30000)

            sendEmail(email, otp, template)

            res.send({
                success: "Registration Complete",
            })
        });
        //return res.send({success:"Registration Complete"})
    }

}

module.exports = registrationController