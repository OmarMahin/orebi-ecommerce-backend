const express = require('express')
const {createCatergoryController, catergoryStatusController, createSubCatergoryController,subCatergoryStatusController, getCategory, getSubCategory} = require('../../controllers/catergoryController')
const _ = express.Router()

_.post("/categorycreate", createCatergoryController)
_.post("/categorystatus", catergoryStatusController)
_.post("/subcategorycreate", createSubCatergoryController)
_.post("/subcategorystatus", subCatergoryStatusController)
_.get("/getcategory", getCategory)
_.get("/getsubcategory", getSubCategory)

module.exports = _