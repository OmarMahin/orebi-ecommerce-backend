const mongoose = require("mongoose")

const {Schema} = mongoose

const userSchema = new Schema({
    fullName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
    emailVerified:{
        type: Boolean,
        default: false,
    },
    merchant:{
        type: Boolean,
        default: false,
    },
    avater:{
        type: String,
        default: false,
    },
    role:{
        type: String,
        default: "member",
        enum: ["admin", "member", "marchant"]
    },

    updated:{
        type: Date
    },
    created:{
        type: Date,
        default: Date.now
    },

    facebookId:{
        type: String
    },

    googleId:{
        type: String
    },

    otp: {
        type: String
    }
    

})

module.exports = mongoose.model("User", userSchema)