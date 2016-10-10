var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
mongoose.Promise = global.Promise;

// var AdminSchema = new Schema({
//     username: String,
//     password: String
// })


var UserSchema = new Schema({
    username: String,
    password: String
});

// Account.plugin(passportLocalMongoose);

// var AdminModel = mongoose.model("Admin", AdminSchema);
var UserModel = mongoose.model("User", UserSchema);

module.exports = {
  User: UserModel
  // Admin: AdminModel
}
