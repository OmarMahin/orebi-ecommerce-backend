const mongoose = require("mongoose")

const {Schema} = mongoose

const storeSchema = new Schema({

    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },

    storeName:{
        type: String,
        required: true
    },

    officialEmail:{
        type: String,
        required: true
    },

    officialPhone:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    product:[{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
})


module.exports = mongoose.model("store", storeSchema)