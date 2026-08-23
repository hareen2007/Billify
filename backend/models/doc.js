const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("doc", documentSchema);