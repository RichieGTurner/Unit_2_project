var express = require('express');
var router = express.Router();

var Schema = require("../db/account.js");
var Admin = Schema.Admin
var User = Schema.User

//login link
router.get('/login', function(req, res) {
  console.log(req.session)
  res.render('users/login');
});












module.exports = router;
