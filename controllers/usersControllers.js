var User = require('../models/user');


var usersController = {
  index: function (req, res) {
    User.find({}, function (err, dogs) {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.render('users/show', {users: users, user: req.user});
      }
    });
  },



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
      email: email
      
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

module.exports = usersController;
