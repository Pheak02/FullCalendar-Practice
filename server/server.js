// const dotenv = require('dotenv');
// dotenv.config({ path: '.env' });
// IMPORT REQUIRE PACKAGES
const express = require("express");
const bodyParser= require('body-parser');
const mongoose=require("mongoose");
// CREATE INSTANCE OF EXPRESS APP
const app=express()

// SET UP MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//TEST BASIC ROUTE
app.get('/HELLO', (req, res) => {
    res.send('Hello, world!');
  });

// ADD DATE OBJECT
app.get('/', (req, res) => {
    const currentDate = new Date();
    res.send(`The current date is: ${currentDate}`);
  });

// ===WITH ENV====
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});