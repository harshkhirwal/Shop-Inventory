const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/dashboard/add', function(req,res){
  res.render("addItem");
});

router.post('/dashboard/add', function(req,res){
  console.log(req.body.itemName);
  db.item.create({
  itemName: req.body.itemName,
  itemID : req.body.itemName
});
});
