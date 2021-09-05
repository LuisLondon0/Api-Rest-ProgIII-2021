/** packages */
const CryptoJS = require("crypto-js");
const config = require("config");

/** Encrypt password */
exports.encryptPassword = (password) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}