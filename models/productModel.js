const mongoose = require("mongoose")

const { Schema } = mongoose

const productSchema = new Schema({

    name: {
        type: String,
        require: true,
    },

    description: {
        type: String,
        require: true,
    },


    store:{
        type: Schema.Types.ObjectId,
        ref: "Store",
    },

    varients:{
        type: Schema.Types.ObjectId,
        ref: "ProductVarient",
    },

    updated: {
        type: Date,
    },

    created:{
        type: Date,
        default: Date.now,
    },




})

module.exports = mongoose.model("Product", productSchema)