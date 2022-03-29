'use strict';

var mysqlConnection = require('./../../config/db.config');

var Item = function(item){
    this.Nome = item.Nome;
    this.Quantidade = item.Quantidade;
};

Item.create = function (newItem, result) {
    mysqlConnection.query("INSERT INTO items set ?", newItem, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Item.findById = function (id, result) {
    mysqlConnection.query("Select * from items where iditems = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Item.findAll = function (result) {
    mysqlConnection.query("Select * from items", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('items : ', res);
            result(null, res);
        }
    });
};

Item.update = function(iditems, item, result){
    mysqlConnection.query("UPDATE items SET Nome=?,Quantidade=? WHERE iditems = ?", [item.Nome,item.Quantidade, iditems], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Item.delete = function(id, result){
    mysqlConnection.query("DELETE FROM items WHERE iditems = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
           result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Item;
    