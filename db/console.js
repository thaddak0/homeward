var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/homeward');
var REPL = require("repl");

var repl = REPL.start("> ");

// model requirements
repl.context.User = require("../models/user");
repl.context.Dog = require("../models/dog");

// listen for an `exit` event
repl.on("exit", function () {
  console.log("Ciao!");
  // disconnect the database connection
  mongoose.disconnect(function() {
    // exit the repl
    process.exit();
  });
});
