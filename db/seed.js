var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/homeward');
var Dog = require("../models/dog");

Dog.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});

var dogs = [
  {
    name: "Fluffy",
    breed: "Poodle",
    color: "White",
    age: 4,
    size: ["small"],
    location: "Noe Valley",
    image: "https://s-media-cache-ak0.pinimg.com/736x/e0/fb/7c/e0fb7cef22da6f28365c183a8df4ea25.jpg",
    reward: "$400",
    phoneNumber: "0123456789",
    description: "Found her rummaging through the trashcans by Whole Foods. Apparently has a taste for free-range chicken.",
    lost: true
  },
  {
    name: "Diamond",
    breed: "Dane",
    color: "Grey/Black",
    age: 4,
    size: ["medium"],
    location: "Mission",
    image: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F5b%2F52%2F49deed4f440ea965d0ff16fca655%2Fgreat-dane-AP-PFYPXJ-645sm12913.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  }
];

Dog.create(dogs, function(err, docs) {
  if (err) {
    console.log("ERROR:", err);
  } else {
    console.log("Created:", docs);
    mongoose.connection.close();
  }
});
