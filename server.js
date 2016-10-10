// dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var methodOverride  = require('method-override');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

//telling mongoose to connect my localhost to unit_2_project
// mongoose.connect('mongodb://localhost/unit-2-project');

var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/unit-2-project';

mongoose.connect(mongoURI);

//Save the connection to the database in a variable
var db = mongoose.connection;

//log an error if the DB cannot connect
db.on('error', function(err){
  console.log(err);
});

//tells me database has correctly connected
db.once('open', function(err){
  console.log(err);
});

app.set("view engine", "hbs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname +'/public'));

// app.get('/', function(req, res){
//   res.send("<h1>OnePiece homepage plus root route</h1>");
// });

//basic root route
app.get('/', function(req,res){
  res.send("<h1>One Piece Synopsis</h1>");
})


app.listen(process.env.PORT || 3000, function(){
  console.log("listening on port 3000 yo");
});
