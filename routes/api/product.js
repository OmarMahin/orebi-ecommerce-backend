const express = require('express')
const {secureProductUpload, createProduct, createVarient} = require('../../controllers/productController')
const _ = express.Router()

_.post("/createproduct", secureProductUpload, createProduct)
_.post("/createvarient", createVarient)

module.exports = _