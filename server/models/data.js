const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    paragraf: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model("Data", dataSchema);