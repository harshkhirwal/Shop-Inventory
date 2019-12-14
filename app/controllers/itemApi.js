const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.post('/api/v1/dashboard/additem', function(req, res) {
  console.log(req.body.itemName);
  db.itemlists.create({
    itemName: req.body.itemName
  });
  res.send({
    "message": "post done"
  });
  console.log("2");
});

router.get('/api/v1/item/all', function(req, res) {
  db.itemlists.findAll().then(function(data) {
    console.log(data);
  });
});

router.post('/api/v1/item/update', function(req, res) {
  db.itemlists.update({
    itemName: req.body.itemName
  }, {
    where: {
      itemID: req.body.itemID
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
