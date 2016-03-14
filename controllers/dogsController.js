var Dog = require('../models/dog');

var dogsController = {
  index: function (req, res) {
    Dog.find({}, function (err, dogs) {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(200).send(JSON.stringify(dogs.reverse()));
      }
    });
  },

  createDog: function (req, res) {
    var name = req.body.name;
    var breed = req.body.breed;
    var color = req.body.color;
    var age = req.body.age;
    var size = req.body.size;
    var location = req.body.location;
    var image = req.body.image;
    var reward = req.body.reward;
    var phoneNumber = req.body.phoneNumber;
    var description = req.body.description;
    var lost = req.body.lost;
    Dog.create({
      name: name,
      breed: breed,
      color: color,
      age: age,
      size: size,
      location: location,
      image: image,
      reward: reward,
      phoneNumber: phoneNumber,
      description: description,
      lost: lost
    },
    function (err, dog) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send(JSON.stringify(dog));
      }
    });
  }
};

module.exports = dogsController;
