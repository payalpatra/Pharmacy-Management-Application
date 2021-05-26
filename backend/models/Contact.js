const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: false,
    },
    message: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    // file: {
    //     type: Number,
    //     required: false,
    // },
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;

