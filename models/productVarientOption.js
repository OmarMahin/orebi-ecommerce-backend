const mongoose = require("mongoose")

const { Schema } = mongoose

const productVarientOptionsSchema = new Schema({

    name: {
        type: String,
        require: true,
    },

    image: {
        type: String,
        require: true,
    },

    value: [
        {
            name: {
                type: String,
                require: true,
            },

            price: {
                type: Number,
            }

        }
    ],

    price: {
        type: Number,
        require: true,
    },

    quantity: {
        type: Number,
        require: true,
    },

    varientOptionOf: {
        type: Schema.Types.ObjectId,
        ref: "ProductVarient",
    },

    updated: {
        type: Date,
    },

    created: {
        type: Date,
        default: Date.now,
    },




})

module.exports = mongoose.model("ProductVarientOptions", productVarientOptionsSchema)