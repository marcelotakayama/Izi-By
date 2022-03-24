const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "itemdb"
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log("Sistema conectado ao banco com sucesso");
    else
        console.log("Deu ruim" + JSON.stringify(err, undefined, 2))
});

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"));

app.get('/itens', (req, res)=>{
    mysqlConnection.query("SELECT * FROM items", (err, rows, fields)=>{
        if(!err)
            console.log(rows);
        else
            console.log(err);
    })
})