"use strict";

const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "itemdb",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log("Sistema conectado ao banco com sucesso");
    else
        console.log("Deu ruim" + JSON.stringify(err, undefined, 2))
});

module.exports = mysqlConnection;