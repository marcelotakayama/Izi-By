const mysql = require("mysql");
const express = require("express");
var app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.json());

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

app.listen(3000, ()=>console.log("Servidor rodando na porta 3000"));

// Lista todos os itens do banco
app.get('/itens', (req, res)=>{
    mysqlConnection.query("SELECT * FROM items", (err, rows, fields)=>{
        if(!err)
            console.log(rows);
        else
            console.log(err);
    })
})

// Lista um único item do banco
app.get('/itens/:id', (req, res)=>{
    mysqlConnection.query("SELECT * FROM items WHERE iditems = ?", [req.params.id], (err, rows, fields)=>{
        if(!err)
            console.log(rows);
        else
            console.log(err);
    })
})

// Apaga um único item do banco
app.delete('/itens/:id', (req, res)=>{
    mysqlConnection.query("DELETE FROM items WHERE iditems = ?", [req.params.id], (err, rows, fields)=>{
        if(!err)
            console.log("item apagado");
        else
            console.log(err);
    })
})

// // Apaga um único item do banco
// app.post('/itens', (req, res)=>{
//     let x = req.body;
//     var sql =  "SET @iditems = ?;SET @Nome = ?; SET @Quantidade = ?; \
//     CALL ItemAddOrEdit(@iditems,@Nome,@Quantidade);";
//     mysqlConnection.query(sql, [x.iditems, x.Nome, x.Quantidade], (err, rows, fields)=>{
//         if(!err)
//             rows.forEach(element => {
//                 if(element.constructor == Array)
//                 res.send("ID do Item adicionado: "+element[0].iditems);
//             });
//         else
//             console.log(err);
//     })
// })