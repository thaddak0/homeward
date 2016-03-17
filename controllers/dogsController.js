var Dog = require('../models/dog');
var User = require('../models/user');

var dogsController = {
  index: function (req, res) {
    Dog.find({}, function (err, dogs) {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.render('dogs/dashboard', {dogs: JSON.stringify(dogs), user: req.user});
      }
    });
  },

  getAllDogs: function (req, res) {
    Dog.find({}, function (err, dogs) {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.status(201).send(JSON.stringify(dogs.reverse()));
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
    var neighborhoods = req.body.neighborhoods;
    var image = req.body.image;
    var reward = req.body.reward;
    var contact = req.body.contact;
    var description = req.body.description;
    var status = req.body.status;
    var userid = req.body.userid;
    User.findById({_id: userid}, function(err, user) {
      if (err) {
        console.log(err);
      } else {
          Dog.create({
            name: name,
            breed: breed,
            color: color,
            age: age,
            size: size,
            location: location,
            neighborhoods: neighborhoods,
            image: image,
            reward: reward,
            contact: contact,
            description: description,
            status: status,
            userId: userid
          },
          function (err, dog) {
            if (err) {
              // console.log(this);
              res.status(500).send();
            } else {
              // res.status(201).send(JSON.stringify(dog));
              user.dogs.push(dog._id);
              // this.userId.push(userid);
              user.save();
              console.log(user.dogs);
              res.status(201).send(JSON.stringify(dog));
            }
          }
        );
      }
    });
  },

  show: function (req, res) {
    var id = req.params.id;
    var poster;
    Dog.findById({_id: id}, function(err, dog) {
      if (err){
        console.log("There was an error : " + err);
      } else {
        // console.log(dog.userId);
        // take the dogs userId,
        User.findById(dog.userId, function (err, user) {
          err ? console.error("Error: " + err) : poster = user;
          // console.log(poster);
          res.render('dogs/show', { dog: dog, user: req.user, poster: poster });
        });
      }
    });
  },

  update: function(req, res) {
    // var dogId = req.params.id
    // if (dog.userId === req.user.id) {
      // then Dog.update(dog.id);
    // }
    // redirect("back");
    console.log(req.body.userid);
    // console.log(dog.userId);

    Dog.update({_id: req.params.id}, {
      name: req.body.name,
      breed: req.body.breed,
      color: req.body.color,
      age: req.body.age,
      size: req.body.size,
      location: req.body.location,
      neighborhoods: req.body.neighborhoods,
      image: req.body.image,
      reward: req.body.reward,
      contact: req.body.contact,
      description: req.body.description
    }, function(err){
      console.log(err);
    });
    res.redirect('back');
  },

  deleteDog: function (req, res) {
    // var dog = req.<the passed in dog to be deleted>
    // if dog.userId === req.user.id
      // then Dog.remove(dog.id);
    // redirect("back");
  }
};

module.exports = dogsController;
