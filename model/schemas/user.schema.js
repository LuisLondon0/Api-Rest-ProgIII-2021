/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const userSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },
    lastname: {
        type: "string",
        required: true
    },
    username: {
        type: "string",
        required: true,
        unique: true
    },
    password: {
        type: "string",
        required: true
    },
    role: {
        type: "number",
        required: true
    }
});

/** Schema exportation */
userSchema.plugin(validator);
module.exports = userSchema;