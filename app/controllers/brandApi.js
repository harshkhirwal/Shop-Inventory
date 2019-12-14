const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.post('/api/v1/dashboard/addBrand', function(req,res){
  console.log(req.body.brandName);
  db.brandlists.create({
  brandName: req.body.brandName
});
});

router.get('/api/v1/brand/all', function(req,res){
  db.brandlists.findAll().then(function(data) {
  console.log(data);
});
});

router.post('/api/v1/item/update', function(req, res) {
  db.brandlists.update({
    brandName: req.body.brandName
  }, {
    where: {
      brandID: req.body.brandID
    }
  }).then(function(data) {
    res.send({
      successMessage: "Updated successfully"
    });
  }).catch(function(err) {
    res.status(400).json({
      error: err
    })
    return;
  });
});
