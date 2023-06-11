const express = require('express')
const _ = express.Router()
const authRoutes = require("./auth")
const categoryRoutes = require("./category")
const merchantRoutes = require("./merchant")
const productRoutes = require("./product")

_.use("/auth", authRoutes)
_.use("/category", categoryRoutes)
_.use("/merchant", merchantRoutes)
_.use("/product", productRoutes)

module.exports = _