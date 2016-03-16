var User = require('../models/user');
var Dog = require('../models/dog');

// is this needed for user
var usersController = {

  createUser: function (req, res) {
    var id = req.body.id;
    var accessToken = req.body.access_token;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;


    User.create({
      id: id,
      accessToken: accessToken,
      firstName: firstName,
      lastName: lastName,
      email: email,
      lostDogs: [{

      }],
       foundDogs: [{

       }]
    },
    function (err, user) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send(JSON.stringify(user));
      }
    });
  },

    show: function (req, res) {
      var id = req.params.id;
      User.findById({_id: id}, function(err, user){
        if (err){
          console.log("There was an error : " + err);
        } else {
          var userDogs = [];
          // pups.push(Dog.findById(user.dogs[0]));
          user.dogs.forEach(function (query, index) {
            Dog.findById({_id: user.dogs[index]}, function(err, dog){
              console.log(dog);
              userDogs.push(dog);
              // with console.log here, it shows the value of userDogs when the surrounding function as a callback.
              console.log(userDogs);
            });
          });
          // with console.log here, it'll be executed before the callback is called #FunctionalProgramming o(^_-)O
          // console.log(dogs);
          res.render('users/show', {userShow: user, user: req.user, dog: userDogs});

        }
    });

}

};

module.exports = usersController;
