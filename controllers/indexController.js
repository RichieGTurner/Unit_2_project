var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy

var Schema = require("../models/account.js");
// var Admin = Schema.Admin
var User = Schema.User

//login link
router.get('/new', function(req, res) {
  console.log(req.session)
  res.render('index/new');
});

router.post('/new', passport.authenticate('local'), function(req, res) {
  req.session.save(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/index');
  });
});











module.exports = router;
