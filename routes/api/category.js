const express = require('express')
const {createCatergoryController, catergoryStatusController, createSubCatergoryController,subCatergoryStatusController} = require('../../controllers/catergoryController')
const _ = express.Router()

_.post("/categorycreate", createCatergoryController)
_.post("/categorystatus", catergoryStatusController)
_.post("/subcategorycreate", createSubCatergoryController)
_.post("/subcategorystatus", subCatergoryStatusController)

module.exports = _