const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tasty: { type: Boolean, default: true },
    ingredients: { type: Array, default: [] }
    })

const Food = mongoose.model('Food', foodSchema)
module.exports = Food;