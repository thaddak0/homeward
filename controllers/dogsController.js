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
    var image = req.body.image;
    var reward = req.body.reward;
    var phoneNumber = req.body.phoneNumber;
    var description = req.body.description;
    var lost = req.body.lost;
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
      else{
        res.render('dogs/show', {dog: dog, user: req.user});
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
      image: req.body.image,
      reward: req.body.reward,
      phoneNumber: req.body.phoneNumber,
      description: req.body.description,
    }, function(err){
      console.log(err);
    });
    res.redirect('back');
  }
};
















module.exports = dogsController;
