
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});
const Food = require('./models/food');

app.use(express.urlencoded({ extended: false }));


// server.js


// GET /
app.get("/", async (req, res) => {
    res.render('index.ejs');
  });
  
app.get("/foods/new", async (req, res) => {
   res.render("foods/new.ejs");
});

app.post("/foods", async (req, res) => {
  console.log(req.body);
  res.redirect("/foods/new");
});
app.listen(3004, () => {
    console.log('Server is running on port 3004');
});
