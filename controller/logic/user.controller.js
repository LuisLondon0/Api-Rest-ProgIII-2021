/** dto */
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper");

exports.login = (req, res, next) => {
    userDto.login({ username: req.body.username }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        if (data.length > 0) {
            let pass = helper.decryptPassword(data[0].password);
            //console.log("Password en BD: " + pass)
            if (req.body.password == pass) {
                tk = helper.generateToken(data[0])

                return res.status(200).json({
                    token: tk
                })
            } else {
                return res.status(400).json({
                    info: "Incorrect password"
                })
            }
        } else {
            return res.status(400).json({
                info: "Username not found"
            })
        }
    })
}

exports.getAll = (req, res, next) => {
    userDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err
            })
        }
        return res.status(200).json({
            info: data
        })
    })
}