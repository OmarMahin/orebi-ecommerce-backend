const Discount = require("../models/discountModel")

let createDiscount = async(req, res) => {
    const {percent, cash, flatDiscount, category, subCategory, product} = req.body

    let discount = new Discount({
        percent,
        cash,
        flatDiscount,
        category,
        subCategory,
        product,
    })

    discount.save()

    res.send({success: "Discount created successfully."})

}

let getDiscount = async(req, res) => {

    let discountData = await Discount.find({}).populate(['category', 'subCategory', 'product'])

    res.send({discountData})

}



module.exports = { createDiscount, getDiscount }