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
    var userID= id.toString();
    console.log(userID);
    console.log("the id", id);
    User.find({id: id}, function(err, user){

        if (err){
          console.log("There was an error : " + err);
        }
        else{
          res.render('users/show', {userShow: user, user: req.user});

        }
    });

}

};

module.exports = usersController;
