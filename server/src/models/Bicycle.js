const { Schema } = require('mongoose');
const mongoose = require("mongoose");

const bicycleSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
        default: "black",
        enum: ["black", "red", "white"],
    },
    wheel_size: {
        type: Number,
        required: true,
        default: 16,
        enum: [12, 16, 20, 24, 26, 27]
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

module.exports = Bicycle = mongoose.model('Bicycle', bicycleSchema);