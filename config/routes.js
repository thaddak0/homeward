var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var dogsController = require('../controllers/dogsController');
var usersController = require('../controllers/usersController');

router.route('/dashboard')
  .get(dogsController.index)
  .post(dogsController.createDog);
router.route('/dashboard/:id')
  .get(dogsController.show)
  .put(dogsController.update);
router.route('/users/:id')
  .get(usersController.show);


module.exports = router;
