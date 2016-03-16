var mongoose = require('mongoose');
var Dog = require('./dog');

var User = mongoose.model('User', {
  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  },
  firstName: String,
  lastName: String,
  email: String,
  dogs: [],
  createdOn: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});


module.exports = User;
