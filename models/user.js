var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    statusGoogle: {
        type: Number,
        default: 0
    },
});

var User = mongoose.model('User', userSchema);

module.exports = User

