
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI)

mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

const Food = require('./models/food.js');
app.use(express.urlencoded({ extended: false}));

app.listen(3004, () => {
    console.log('Server is running on port 3004');
});
