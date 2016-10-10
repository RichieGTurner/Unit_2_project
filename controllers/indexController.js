var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy

var Schema = require("../db/account.js");
// var Admin = Schema.Admin
var User = Schema.User

//login link
router.get('/login', function(req, res) {
  console.log(req.session)
  res.render('users/login');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  req.session.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/users');
  });
});











module.exports = router;
