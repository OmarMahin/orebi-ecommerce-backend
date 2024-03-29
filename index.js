require("dotenv").config()
const express = require('express')
const dbConnection = require("./config/dbConnection.js")
const cors = require("cors")
const routes = require("./routes")
const app = express()
const path = require('path')


app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())

dbConnection()

app.use(routes)

app.use('/productImageUploads', express.static(path.join(__dirname, 'productImageUploads')))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8000)


//mongodb+srv://orebiEcommerce:<password>@cluster1.s1k9zfe.mongodb.net/?retryWrites=true&w=majority