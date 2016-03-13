var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dogSchema = new Schema({
  name: String,
  breed: String,
  color: String,
  age: Number,
  size: ["small", "medium", "large"],
  location: String,
  image: String,
  reward: String,
  phoneNumber: String,
  description: String,
  lost: Boolean
});

var Dog = mongoose.model("Dog", dogSchema);

module.exports.dogSchema = Dog;
