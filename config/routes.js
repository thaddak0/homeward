var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var dogsController = require('../controllers/dogsController');

router.route('/dashboard')
  .get(dogsController.index);

module.exports = router;
