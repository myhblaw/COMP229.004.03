/*
    users.js
    Student's name: Yuk Hong Ma
    Student ID: 301210312
    Date: June 4, 2022
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users', { 
    title: 'Users',
    userName: 'Julio'  });
});

module.exports = router;
