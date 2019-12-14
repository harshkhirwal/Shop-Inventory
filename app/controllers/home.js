const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {

});

router.get('/dashboard', function(req,res){
  res.render("dashboard");
});

router.get('/dashboard/additem', function(req,res){
  res.render("addItem");
});

router.get('/item/view', function(req,res){
  res.render("viewitem");
});

router.get('/dashboard/addbrand', function(req,res){
  res.render("addBrand");
});
