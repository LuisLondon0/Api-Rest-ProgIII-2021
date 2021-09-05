/** packages */
const mongoose = require("mongoose");

/** Schema creation */
const courseSchema = new mongoose.Schema({
    code: {
        type: "string",
        required: true
    },
    name: {
        type: "string",
        required: true
    }
});

/** Schema exportation */
module.exports = courseSchema;