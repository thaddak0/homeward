var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dogSchema = new Schema({
  name: String,
  breed: String,
  color: String,
  age: { type: Number, max: 50 },
  size: { type: String, enum: ["small", "medium", "large"] },
  location: { type: String, enum: neighborhoods },
  image: String,
  reward: String,
  phoneNumber: String,
  description: String,
  lost: Boolean,
  // status: { type: String, enum: ["lost", "found", "sighted"] },
  createdOn: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

var neighborhoods = ["Bernal Heights", "The Castro", "Chinatown", "Cole Valley", "Deco Ghetto", "Fisherman's Wharf", "Golden Gate Park", "The Haight", "Hayes Valley", "Inner Richmond", "Inner Sunset", "The Marina", "The Mission", "Mission to Potrero", "Dolores and Valencia Corridor", "24th Street", "Nob Hill", "Noe Valley", "North Beach", "Outer Richmond", "Outer Sunset", "Pacific Heights", "Potrero Hill", "Russian Hill", "SoMa", "Tenderloin", "Union Square", "Western Addition"];

var Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
