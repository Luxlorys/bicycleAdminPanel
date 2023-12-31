const { Schema } = require('mongoose');
const mongoose = require("mongoose");

const bicycleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    wheel_size: {
        type: String,
        required: true,
        default: 16,
        enum: [12, 16, 20, 24, 26, 27]
    },
    status: {
        type: String,
        default: "Available",
        enum: ["Available", "Busy", "Unavailable"]
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = Bicycle = mongoose.model('Bicycle', bicycleSchema);