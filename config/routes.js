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
  .put(dogsController.update)
  .delete(dogsController.deleteDog);
router.route('/users/:id')
  .get(usersController.show);
router.route('/dogs')
  .get(dogsController.getAllDogs);
router.route('/dogs/names')
  .post(dogsController.getDogName);


module.exports = router;
