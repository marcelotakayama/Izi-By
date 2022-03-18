const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    qtdItem: {
        type: Number,
        required: true
    }
})