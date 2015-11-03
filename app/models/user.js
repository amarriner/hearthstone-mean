var mongoose        = require('mongoose');
var Schema          = mongoose.Schema;

var UserSchema      = new Schema({
    _id         : String,
    username    : String,
    password    : String,
    email       : String
});

UserSchema.methods.validPassword = function(pwd) {
    return this.password === pwd;
}

module.exports      = mongoose.model('User', UserSchema);
