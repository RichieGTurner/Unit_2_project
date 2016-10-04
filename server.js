//standard stuff
var express = require('express');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var methodOveride = require('method-override');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var morgan = require('morgan');
var passport = require('passport');
var passportLocal = require('passport-local');
var passportLocalMongoose = require('passport-local-mongoose');
var pry = require ('pryjs');

var app = express();

app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOveride('_method'));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send("<h1>One Piece Weekly Discussion</h1>");
});

app.get('/login', function(req, res){
  res.send("<h1>One Piece Weekly Discussion</h1>");
});

app.post('/blog', function(req, res){
  res.send("<h1>One Piece Weekly Discussion</h1>");
});

app.post('/blog/:id', function(req, res){
  res.send("<h1>One Piece Weekly Discussion</h1>");
});

// //log an error if db can't connect to mongodb
// db.on('error', function(err){
//   console.log(err);
// });
//
// //log "database has been connected" if it successfully connects.
// db.once('open', function(){
//   console.log("database has been connected");
// });




app.listen(4000, function(){
  console.log("listening on port 4000")
});
