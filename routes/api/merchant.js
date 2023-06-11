const express = require('express')
const becomeMerchant = require('../../controllers/merchantController')
const merchantStatus = require('../../controllers/merchantStatusController')
const _ = express.Router()

_.post("/becomemerchant", becomeMerchant)
_.post("/merchantstatus", merchantStatus)


module.exports = _