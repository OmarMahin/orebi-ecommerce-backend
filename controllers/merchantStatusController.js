const Store = require("../models/merchantModel.js")
const User = require("../models/usersModel")

let merchantStatus = async (req,res) => {
    let {ownerId, status} = req.body

    let ownerExists = await User.find({_id: ownerId})

    if (ownerExists.length > 0){
        if (status == 'merchant'){
            let updateUser = await User.findOneAndUpdate(
                {_id: ownerId},
                {role: status},
                {new: true}
                )
            res.send({success: "User status has changed"})
            }
        else if (status == 'member'){
            let updateUser = await User.findOneAndUpdate(
                {_id: ownerId},
                {role: status},
                {new: true}
                )
            res.send({success: "User status has changed"})

        }
    }

    else {
        res.send({error: "User doesn't exists"})
    }
}

module.exports = merchantStatus