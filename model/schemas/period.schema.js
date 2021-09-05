/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const periodSchema = new mongoose.Schema({
    year: {
        type: "number",
        required: true,
        min: 2020,
        max: 2030
    },
    number: {
        type: "number",
        required: true,
        min: 1,
        max: 2
    },
    current: {
        type: "boolean",
        required: true,
        default: true
    }
});

/** Schema exportation */
module.exports = periodSchema;