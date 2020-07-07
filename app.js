const express = require("express");
const axios = require("axios");

const app = express();

// redirect
app.get('/', (req, res) => {
  res.redirect('/home');
});
// homepage
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/public/homepage.html");
});

// cocktails page
app.get('/cocktails',(req, res) => {
  res.sendFile(__dirname, "/public/cocktail.html");
})

// pagina non trovata
app.get("*", (req, res) => {
  res.sendFile(__dirname, "/public/404.html");
});

app.listen(3000, () => console.log("listening -> port 3000"));
