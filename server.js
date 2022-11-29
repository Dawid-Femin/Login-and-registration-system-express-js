const express = require("express");
const app = express();

//Routes
app.get('/', (req,res) => {
    res.render('index.ejs')
});

app.get('/login', (req,res) => {
    res.render('login.ejs')
});

app.get('/register', (req,res) => {
    res.render('register.ejs')
});
//End routes

app.listen(3000);