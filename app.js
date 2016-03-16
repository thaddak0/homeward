// REQUIRE DEPENDENCIES
var express         = require('express');
var app             = express();
var logger          = require('morgan');
var mongoose        = require('mongoose');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var hbs             = require('hbs');
var passport        = require('passport');
var expressSession  = require('express-session');
var cookieParser    = require('cookie-parser');
// var controllers = require('./controllers');

// APPLICATION CONFIGURATION
mongoose.connect('mongodb://localhost/homeward');
process.on('exit', function () {
  mongoose.diconnect();
});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

// APPLICAITION REGISTRATION
app.use(cookieParser() );
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

var port = process.env.PORT || 3000;

// ROUTES / CONTROLLERS
var routes = require('./config/routes');
require("./config/passport")(passport);

app.use(routes);

app.get('/', function(req, res){
  res.render('home', {user: req.user});
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'} ));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
  })
);

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

// LISTEN
app.listen(port, function () {
  console.log("listening on the quiet storm... *port:", port);

});




