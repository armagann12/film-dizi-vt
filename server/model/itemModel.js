const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    itemType: {
        type: String,
        enum: ["clothes", "plate", "toys"],
        required: true
    },
    sold: {
        type: Boolean,
        default: false
    } 
})

const Item = mongoose.model("Item", itemSchema)

module.exports = Item;