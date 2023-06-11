const emailValidation = require("../helpers/emailValidation.js")
const Store = require("../models/merchantModel.js")
const User = require("../models/usersModel")

let becomeMerchant = async (req, res)=>{
    let {owner,
        storeName,
        officialEmail,
        officialPhone,
        address,
        product} = req.body

        if (!emailValidation(officialEmail)){
            return res.send({error: "Email not valid"})
        }

        let duplicateEmail = await Store.find({officialEmail: officialEmail})
        if (duplicateEmail.length > 0){
            return res.send({error: "Email already exists"})
        }

        const store = new Store({owner,
            storeName,
            officialEmail,
            officialPhone,
            address,
            product})
        
        store.save()

        res.send({success: "Store created. Congratulations! You're now a marchant"})

}



module.exports = becomeMerchant