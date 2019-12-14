const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/dashboard/additem', function(req,res){
  res.render("addItem");
});

router.post('/dashboard/additem', function(req,res){
  console.log(req.body.itemName);
    console.log(req.body);
  db.itemlistss.create({
  itemName: req.body.itemName
});
});
