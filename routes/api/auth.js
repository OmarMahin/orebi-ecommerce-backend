const express = require('express')
const becomeMerchant = require('../../controllers/merchantController')
const emailVerificationOTPmatch = require('../../controllers/emailVerificationOTPmatch')
const loginController = require('../../controllers/loginController')
const registrationController = require('../../controllers/registrationController')
const _ = express.Router()

_.post("/registration", registrationController)
_.post("/login", loginController)
_.post("/emailVerificationOTPmatch", emailVerificationOTPmatch)
_.post("/becomemerchant", becomeMerchant)

module.exports = _