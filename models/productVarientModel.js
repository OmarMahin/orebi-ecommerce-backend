const mongoose = require("mongoose")

const { Schema } = mongoose

const productVarientSchema = new Schema({

    name: {
        type: String,
        require: true,
    },

    image: {
        type: String,
        require: true,
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
    },

    options: [
        {
            type: Schema.Types.ObjectId,
            ref: "ProductVarientOptions",
        }
    ],

    updated: {
        type: Date,
    },

    created: {
        type: Date,
        default: Date.now,
    },




})

module.exports = mongoose.model("ProductVarient", productVarientSchema)