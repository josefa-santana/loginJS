const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "10172117",
    port: "3308",
    database: "loginjs"
});

// conectar 
connection.connect(function(error){
    if(error) throw error
    else console.log("Conexão bem-sucedida!")
});

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var email = req.body.email;
    var senha = req.body.senha;

    connection.query("SELECT * FROM login WHERE email = ? and senha = ?", [email, senha], function(error, results, fields){
        if(results.length > 0){
            res.redirect("");
        }else{
            res.redirect("/");
        }
        res.end();
    })
})

// port
app.listen(4500);
