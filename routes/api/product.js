const express = require('express')
const {secureProductUpload, createProduct} = require('../../controllers/productController')
const _ = express.Router()

_.post("/createproduct", secureProductUpload, createProduct)

module.exports = _