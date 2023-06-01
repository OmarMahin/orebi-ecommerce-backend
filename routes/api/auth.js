const express = require('express')
const emailVerificationOTPmatch = require('../../controllers/emailVerificationOTPmatch')
const loginController = require('../../controllers/loginController')
const registrationController = require('../../controllers/registrationController')
const _ = express.Router()

_.post("/registration", registrationController)
_.post("/login", loginController)
_.post("/emailVerificationOTPmatch", emailVerificationOTPmatch)

module.exports = _