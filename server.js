
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
  
  app.get("/foods", async (req, res) => {
      const allFoods = await Food.find();
      
      res.render("foods/index.ejs", { foods: allFoods });
    });
  
app.get("/foods/new", async (req, res) => {
   res.render("foods/new.ejs");
});

app.post("/foods", async (req, res) => {
 if (req.body.spicy === "on") {
     req.body.spicy = true;
  } else {
     req.body.spicy = false;
  }
  await Food.create(req.body);
  res.redirect("/foods");
});
app.listen(3004, () => {
    console.log('Server is running on port 3004');
});
