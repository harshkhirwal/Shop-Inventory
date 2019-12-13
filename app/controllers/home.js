const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/dashboard', function(req,res){
  res.render("dashboard");
});

router.get('/dashboard/add', function(req,res){
  res.render("addItem");
});
