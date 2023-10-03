const express = require('express')
const { createDiscount, getDiscount } = require('../../controllers/discountController')
const _ = express.Router()

_.post("/createDiscount", createDiscount)
_.get("/getDiscount", getDiscount)

module.exports = _