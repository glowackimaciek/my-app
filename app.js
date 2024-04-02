require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

//Połączenie z bazą danych
mongoose.connect(DB_URI).then(
    () => { console.log("Połączenie z bazą danych udane") },
    err => { console.log("Nieudane połączenie z bazą danych", err) }
  );


//Uruchomienie servera
app.listen(PORT, () => {
    console.log("Serwerdz działa !");
});