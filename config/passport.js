var User = require('../models/user');
var FacebookStrategy = require('passport-facebook').Strategy;
var OAUTH = require('../secrets');

module.exports = function(passport){
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('facebook', new FacebookStrategy({
    clientID        : OAUTH.fb.clientID,
    clientSecret    : OAUTH.fb.clientSecret,
    callbackURL     : 'http://localhost:3000/auth/facebook/callback',
    enableProof     : true,
    profileFields   : ['name', 'emails']
  }, function(access_token, refresh_token, profile, done) {

    // // Use this to see the information returned from Facebook
    // console.log(profile);
    var useremail = profile.emails[0].value;
    var user = User.find({email: useremail}) || User.create({
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value
      });

    process.nextTick(function() {

      User.findOne({ 'fb.id' : profile.id }, function(err, user) {
        if (err) return done(err);
        if (user) {
          return done(null, user);
        } else {

          var newUser = new User();
          newUser.fb.id           = profile.id;
          newUser.fb.access_token = access_token;
          newUser.fb.firstName    = profile.name.givenName;
          newUser.fb.lastName     = profile.name.familyName;
          newUser.fb.email        = profile.emails[0].value;
          newUser.firstName       = profile.name.givenName;
          newUser.lastName        = profile.name.familyName;
          newUser.email           = profile.emails[0].value;
          newUser.dogs            = [];
          // create user attributes

          newUser.save(function(err) {
            if (err)
              throw err;

            return done(null, newUser);
          });
        }
      });
    });
  }));
};
