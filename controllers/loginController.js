const emailValidation = require("../helpers/emailValidation")
const User = require("../models/usersModel")
const bcrypt = require('bcrypt')

let loginController = async (req, res)=>{
    let {email, password} = req.body

    

    if (!email) {
        return res.send({ error: "Enter email" })
    }
    else if (!emailValidation(email)) {
        return res.send({ error: "Enter a valid email" })
    }
    else if (!password) {
        return res.send({ error: "Enter password" })
    }
    else{
        let emailExist = await User.find({email})

        if (emailExist.length > 0){
            bcrypt.compare(password, emailExist[0].password, function(err, result) {
                if (result){
                    res.send({
                        success: "Login Complete",
                    })
                }
                else{
                    res.send({"error": "Email/Password not matched"})
                }
            })
        }
        else {
            res.send({"error": "Email/Password not matched"})
        }
    }
}

module.exports = loginController