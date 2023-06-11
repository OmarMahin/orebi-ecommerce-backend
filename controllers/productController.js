const User = require('../models/usersModel.js')

let secureProductUpload = async (req, res, nextStep)=>{

    if (!req.headers.authorization){
        res.send({error: "No Authorization"})
        return
    }

    const data = req.headers.authorization.split(['@'])

    let userId = data[1]
    let password = data[2]

    let user = await User.find({_id: userId})

    if (user.length > 0){

        if (password == process.env.MARCHANT_SECURE_KEY){
            if (user[0].role == 'merchant'){
                nextStep()
            }
            else{
                res.send({error: "You can't create a product"})
            }
        }
        else{
            res.send({error: "You can't create a product"})
        }

    }else{
        res.send({error: "You can't create a product"})
        return
    }
    
}

let createProduct = async (req, res)=>{
    console.log("Create Product")
}

module.exports = {secureProductUpload, createProduct}