/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const studentSchema = new mongoose.Schema({
    code: {
        type: "string",
        required: true,
        unique: true
    },
    name: {
        type: "string",
        required: true
    },
    lastname: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true,
        unique: true
    },
    phone: {
        type: "string",
        required: true
    },
    career: {
        type: "string",
        required: true
    }
});

/** Schema exportation */
studentSchema.plugin(validator);
module.exports = studentSchema;