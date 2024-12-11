

const mongoose = new mongoose.Schema({
    name: String,
    type: String,
    origin: String,
    price: Number
});
const Food = mongoose.model('Food', foodSchema);

module.exports = Food;