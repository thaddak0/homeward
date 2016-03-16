var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/homeward');
var Dog = require("../models/dog");
var User = require("../models/user");

Dog.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});

User.remove({}, function(err) {
  if (err) {
    console.log("error:", err );
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
    location: "Forest Knolls",
    image: "http://d21vu35cjx7sd4.cloudfront.net/dims3/MMAH/thumbnail/645x380/quality/90/?url=http%3A%2F%2Fs3.amazonaws.com%2Fassets.prod.vetstreet.com%2F5b%2F52%2F49deed4f440ea965d0ff16fca655%2Fgreat-dane-AP-PFYPXJ-645sm12913.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },

  {
    name: "Bailey",
    breed: "Labrador Retriever",
    color: "tan",
    age: 4,
    size: ["small"],
    location: "Mission",
    image: "http://animalsbreeds.com/wp-content/uploads/2015/03/Labrador-Retriever-12.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },

  {
    name: "Max",
    breed: "German Shepherd",
    color: "Brown/Black",
    age: 4,
    size: ["small"],
    location: "Persidio",
    image: "http://www.dogbreedslist.info/uploads/allimg/dog-pictures/German-Shepherd-Dog-3.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },


  {
    name: "Charlie",
    breed: "Golden Retriever",
    color: "tan",
    age: 4,
    size: ["medium"],
    location: "Russian Hill",
    image: "http://2puppies.com/wp-content/uploads/2015/08/golden-retriever-puppies-for-sale.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },

  {
    name: "Bella",
    breed: "Yorkshire Terrier",
    color: "Brown/Black",
    age: 4,
    size: ["small"],
    location: "Nob Hill",
    image: "https://s-media-cache-ak0.pinimg.com/236x/33/d9/72/33d9726dd8fe972c4311a185d28bd3c2.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },


  {
    name: "Lucy",
    breed: "Beagle",
    color: "/Black/Brown/White",
    age: 4,
    size: ["small"],
    location: "Portola",
    image: "http://petstrollerblog.com/wp-content/uploads/2014/01/beagle-puppies-photos.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },

  {
    name: "Buddy",
    breed: "Pug",
    color: "Tan",
    age: 4,
    size: ["medium"],
    location: "Marina",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Sad-pug.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },

  {
    name: "Molly",
    breed: "Chihuahua",
    color: "tan",
    age: 4,
    size: ["small"],
    location: "Noe Valley",
    image: "http://www.woofipedia.com/images/uploads/_0021_Chihuahua.jpg",
    reward: "",
    phoneNumber: "1234567890",
    description: "Was found in front of my house wimpering for their owner.",
    lost: true
  },

  {
    name: "Daisy",
    breed: "dauschund wiener",
    color: "Grey/Black",
    age: 4,
    size: ["medium"],
    location: "Richmond",
    image: "http://www.destinationknowlton.com/gallery/albums/userpics/10001/cute-dauschund-wiener-dogs.jpg",
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
