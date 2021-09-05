/** packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const teacherSchema = new mongoose.Schema({
    document: {
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
    office: {
        type: "string",
        required: true
    },
    department: {
        type: "string",
        required: true
    }
});

/** Schema exportation */
teacherSchema.plugin(validator);
module.exports = teacherSchema;