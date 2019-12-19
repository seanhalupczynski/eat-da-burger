const express = require("express");
var exphbs = require("express-handlebars");
// var routes = require("./controllers/burgerController.js")
var app = express();

let PORT = process.env.PORT || 5001;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(routes)

app.listen(PORT, function(err){
    if(err) throw err;
    console.log("Listening on port " + PORT)
})