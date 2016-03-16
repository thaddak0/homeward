var Dog = require('../models/dog');
var User = require('../models/user');

var dogsController = {
  index: function (req, res) {
    Dog.find({}, function (err, dogs) {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.render('dogs/dashboard', {dogs: dogs.reverse(), user: req.user});
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
              res.status(500).send();
            } else {
              // res.status(201).send(JSON.stringify(dog));
              user.dogs.push(dog._id);
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
    Dog.findById({_id: id}, function(err, dog){

      if (err){
        console.log("There was an error : " + err);
      }
      else {
        var dogUser;

          User.findById({_id: dog.userId}, function(err, user){
            if (err) {
              console.error("Error: " + err);
            } else {
              dogUser = user
              // with console.log here, it shows the value of userDogs when the surrounding function as a callback.
              console.log("THIS INFO IS BEING SAVED AS DOGUSER:", dogUser);
            }
          });

        // with console.log here, it'll be executed before the callback is called #FunctionalProgramming o(^_-)O
        res.render('dogs/show', {dog: dog, user: req.user, dogUser: dogUser});
      }
    });
  },



  update: function(req, res){

    console.log('updating id ', req.params.id);
    console.log('received body ', req.body);

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
  }
};
















module.exports = dogsController;
