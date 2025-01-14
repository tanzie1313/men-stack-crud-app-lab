const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    spicy: { type: Boolean, default: true },
})

const Food = mongoose.model('Food', foodSchema)
module.exports = Food;