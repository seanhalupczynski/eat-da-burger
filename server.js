const express = require("express");
var exphbs = require("express-handlebars");

const app = express();

let PORT = process.env.PORT || 5001;

app.listen(PORT, function(err){
    if(err) throw err;
    console.log("Listening on port " + PORT)
})