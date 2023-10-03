const Product = require('../models/productModel.js')
const Varient = require('../models/productVarientModel.js')
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
    let {name, description, image, store} = req.body

    let product = new Product({
        name,
        description, 
        image, 
        store
    })

    product.save()

    res.send({success: "Product created successfully"})
}


let createVarient = async(req, res)=>{

    let { name, image, color, size, storage, ram, price, quatity, varientsOf} = req.body


    let varient = new Varient({
        image: `${process.env.IMAGE_PATH}/productImageUploads/${req.file.filename}`, 
        color, 
        size, 
        storage, 
        ram, 
        price, 
        quatity, 
        varientsOf
    })

    varient.save()

    let updateProduct = await Product.findOneAndUpdate(
        {_id: varient.varientsOf}, 
        {$push:{varients: varient._id}},
        {new:true})

    res.send({success: "Varient created successfully"})

}

module.exports = {secureProductUpload, createProduct, createVarient}