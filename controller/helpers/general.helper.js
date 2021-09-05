/** packages */
const CryptoJS = require("crypto-js");
const config = require("config");
const jwt = require("jsonwebtoken")

/** Encrypt password */
exports.encryptPassword = (password) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}

/** Decrypt password */
exports.decryptPassword = (cryptedPassword) => {
    let secretKey = config.get("secretKeys").cryptojs;
    let bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass;
}

/** Generate token */
exports.generateToken = (user) => {
    let secretKey = config.get("secretKeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + config.get("sessionTime"),
        data: {
            username: user.username,
            id: user._id,
            role: user.role
        }
    }, secretKey);
    return token;
}