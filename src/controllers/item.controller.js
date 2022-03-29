'use strict';
const Item = require('../models/item.model');

exports.findAll = function(req, res) {
    Item.findAll(function(err, item) {
        console.log('controller')
        if (err)
            res.send(err);
            console.log('res', item);
            res.send(item);
    });
};

exports.create = function(req, res) {
    const new_item = new Item(req.body);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
          res.status(400).send({ error:true, message: 'É necessário passar todos os campos obrigatórios' });
    }
    else{
        Item.create(new_item, function(err, item) {
            if (err)
            res.send(err);
            res.json({error:false,message:"item adicionado com sucesso",data:item});
        });
    }
};

exports.findById = function(req, res) {
    Item.findById(req.params.id, function(err, item) {
      if (err)
        res.send(err);
        res.json(item);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Estão faltando campos obrigatórios' });
    }
    else{
        Item.update(req.params.id, new Item(req.body), function(err, item) {
    if (err)
        res.send(err);
        res.json({ error:false, message: 'item atualizado com sucesso' });
    });
    }
};

exports.delete = function(req, res) {
    Item.delete( req.params.id, function(err, item) {
    if (err)
        res.send(err);
        res.json({ error:false, message: 'item apagado com sucesso' });
    });
};