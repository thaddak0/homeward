var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var dogSchema = new Schema({
  name: { type: String, default: "unknown" },
  breed: { type: String, default: "unknown" },
  color: { type: String, required: true },
  age: { type: Number, max: 50 },
  size: { type: String, enum: ["small", "medium", "large"] },
  location: String,
  neighborhoods: { type: String, enum: neighborhoods },
  image: { type: String, default: "" },
  reward: String,
  contact: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["lost", "found", "sighted"] },
  userId: [],
  createdOn: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

var neighborhoods = ["Bernal Heights", "The Castro", "Chinatown", "Cole Valley", "Deco Ghetto", "Fisherman's Wharf", "Golden Gate Park", "The Haight", "Hayes Valley", "Inner Richmond", "Inner Sunset", "The Marina", "The Mission", "Mission to Potrero", "Dolores and Valencia Corridor", "24th Street", "Nob Hill", "Noe Valley", "North Beach", "Outer Richmond", "Outer Sunset", "Pacific Heights", "Potrero Hill", "Russian Hill", "SoMa", "Tenderloin", "Union Square", "Western Addition"];

var Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
