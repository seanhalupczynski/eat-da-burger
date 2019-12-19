const mysql = require("mysql");
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "eat_da_burger_db"
});

connection.connect(function(error){
    if(error){
        console.error("error connecting: " + error.stack)
    };
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;