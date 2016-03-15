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

      // how should these be put in from models
      // this will be referenced
      lostDogs: [{

      }],
       foundDogs: [{

       }]
    },
    function (err, dog) {
      if (err) {
        res.status(500).send();
      } else {
        res.status(201).send(JSON.stringify(dog));
      }
    });
  },

    show: function (req, res) {
    var id = req.params.id;
    User.findById({_id: id}, function(err, user){

        if (err){
          console.log("There was an error : " + err);
        }
        else{

          res.render('users/show', {userShow: user});



        }
    });

}

};

module.exports = usersController;
