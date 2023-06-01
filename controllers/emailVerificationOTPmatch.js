const User = require("../models/usersModel")

let emailVerificationOTPmatch = async (req, res) => {
    let { email, userOtp } = req.body

    let user = await User.find({ email })

    if (user.length > 0) {
        if (user[0].otp == userOtp) {
            res.send({ "success": "Otp Matched" })
            let removeOtp = await User.findOneAndUpdate(
                { email },
                { $unset: { otp: "" } },
                { new: true }
            )

            let emailVerified = await User.findOneAndUpdate(
                { email },
                { $set: { emailVerified: true } },
                { new: true }
            )
        }
        else {
            res.send({ "error": "Otp not matched" })
        }
    }
}

module.exports = emailVerificationOTPmatch