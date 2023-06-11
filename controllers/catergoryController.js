const Category = require("../models/categoryModel")
const SubCategory = require("../models/subCategoryModel")

let createCatergoryController = async (req, res) => {
    const { name, description } = req.body

    let duplicateCategory = await Category.find({ name: name })

    if (duplicateCategory.length > 0) {
        return res.send({ error: "This category already exists. Please try another one." })
    }


    let createCategory = new Category({
        name,
        description,
    })

    createCategory.save()

    res.send({ success: "Category Created." })
}

let catergoryStatusController = async (req, res) => {
    const { name, status } = req.body

    let categoryExists = await Category.find({ name })

    if (categoryExists.length > 0) {

        if (status == 'rejected' || status == 'waiting') {
            let updateCategoryStatus = await Category.findOneAndUpdate(
                { name },
                { status },
                { new: true }
            )

            res.send({ success: "Category Status Updated." })
        }
        else if (status == 'approved') {
            let updateCategoryStatus = await Category.findOneAndUpdate(
                { name },
                { $set: { isActive: true, status: status } },
                { new: true }
            )

            res.send({ success: "Category Status Updated." })

        }

    }

    else{
        res.send({ error: "This category doesn't exist." })
    }



}


// ================================Sub Category Part ============================================


let createSubCatergoryController = async (req, res) => {
    const { name, description , categoryId} = req.body

    let duplicateSubCategory = await SubCategory.find({ name: name })

    if (duplicateSubCategory.length > 0) {
        return res.send({ error: "This sub category already exists. Please try another one." })
    }


    let createSubCategory = new SubCategory({
        name,
        description,
        category: categoryId
    })

    createSubCategory.save()

    console.log(createSubCategory._id)

    let updateCategory = await Category.findOneAndUpdate(
        {_id: createSubCategory.category}, 
        {$push:{subCategory: createSubCategory._id}},
        {new:true})

    res.send({ success: "Sub Category Created." })
}

let subCatergoryStatusController = async (req, res) => {
    const { name, status } = req.body

    let subCategoryExists = await SubCategory.find({ name })

    if (subCategoryExists.length > 0) {

        if (status == 'rejected' || status == 'waiting') {
            let updateSubCategoryStatus = await SubCategory.findOneAndUpdate(
                { name },
                { status },
                { new: true }
            )

            res.send({ success: "Sub Category Status Updated." })
        }
        else if (status == 'approved') {
            let updateSubCategoryStatus = await SubCategory.findOneAndUpdate(
                { name },
                { $set: { isActive: true, status: status } },
                { new: true }
            )

            res.send({ success: "Sub Category Status Updated." })

        }

    }

    else{
        res.send({ error: "This sub category doesn't exist." })
    }

}


// ================================Get Category Part ============================================

let getCategory = async (req, res)=>{
    const data = await Category.find({}).populate('subCategory')

    res.send(data)
}


let getSubCategory = async (req, res)=>{
    const data = await SubCategory.find({}).populate('category')

    res.send(data)
}

module.exports = { createCatergoryController, catergoryStatusController, createSubCatergoryController, subCatergoryStatusController, getCategory, getSubCategory }