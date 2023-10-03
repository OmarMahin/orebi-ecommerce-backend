const express = require('express')
const {secureProductUpload, createProduct, createVarient} = require('../../controllers/productController')
const multer = require('multer')

const _ = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './productImageUploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + `.${file.originalname.split(".")[1]}`)
    }
  })

  const upload = multer({ storage: storage })
  

_.post("/createproduct", secureProductUpload, createProduct)
_.post("/createvarient",upload.single('image'), createVarient)

module.exports = _