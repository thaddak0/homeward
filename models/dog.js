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
  lost: Boolean,
  createdOn: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

var Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
