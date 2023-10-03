const mongoose = require("mongoose")

const { Schema } = mongoose

const productVarientSchema = new Schema({


    color: {
        type: String,
    },

    image: {
        type: String,
    },

    size: {
        type: String,
    },

    storage: {
        type: String,
    },

    ram: {
        type: String,
    },

    price: {
        type: Number,
        require: true,
    },

    quantity: {
        type: Number,
        require: true,
    },

    varientsOf: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        require: true,      
    },


    updated: {
        type: Date,
    },

    created: {
        type: Date,
        default: Date.now,
    },




})

module.exports = mongoose.model("ProductVarient", productVarientSchema)