console.log('linked');

  var homeward = {};

  homeward.getAllDogs = function(callback) {

    // send an AJAX request for
    $.get("/dogs").done(function(dogs) {
      var dogs = JSON.parse(dogs);
      callback(dogs);
    }).fail(function (err) {
      console.log("Error: ", err);
    });
  };

  homeward.createDog = function(e) {
    e.preventDefault();
    console.log(e);
    var dog = $(e.target).serialize();
    console.log(dog);
    $.post("/dashboard", dog)
      .done(function(res){
        homeward.renderDog(res);
        $(".modal").modal('hide');
        console.log(res);
      })
      .fail(function(err){
        console.log("Error: ", err);
      });
  };


homeward.renderDog = function(dog){
  var $doglist = $('#doglist');
  var dogTemplate = Handlebars.compile($('#dog-template').html());
  console.log("dogtemplate", dogTemplate);
  var dog = JSON.parse(dog);
  console.log(dog);
  var compiledHTML = dogTemplate({dog: dog});
  console.log("compiledHTML", compiledHTML);
  $doglist.prepend(compiledHTML);
  console.log("dog", dog);
};

homeward.renderDogs = function(dogs){
  console.log(dogs);
  var $doglist = $('#doglist');
  // $doglist.html("");
  var dogTemplate = Handlebars.compile($('#doglisttemp').html());
  console.log("dogtemplate", dogTemplate);
  var compiledHTML = dogTemplate({dogs: dogs});
  console.log("compiledHTML", compiledHTML);
  $doglist.append(compiledHTML);
  console.log("dogs", dogs);
};


homeward.renderLostDogs = function(dogs){
  console.log(dogs);
  var $doglist = $('#doglist');
  $doglist.html("");
  var lostdogs = [];
  console.log("this");
    for (var i = 0; i < dogs.length; i++) {
      if (dogs[i].status == "lost") {
        lostdogs.push(dogs[i]);
      }
    }
    var dogTemplate = Handlebars.compile($('#doglisttemp').html());
    var compiledHTML = dogTemplate({dogs: lostdogs});
    $doglist.append(compiledHTML);
    console.log("dogs", lostdogs);

  };

  homeward.renderFoundDogs = function(dogs){
    console.log(dogs);
    var $doglist = $('#doglist');
    $doglist.html("");
    var founddogs = [];
    console.log("this");
      for (var i = 0; i < dogs.length; i++) {
        if (dogs[i].status == "found") {
          founddogs.push(dogs[i]);
        }
      }
      var dogTemplate = Handlebars.compile($('#doglisttemp').html());
      var compiledHTML = dogTemplate({dogs: founddogs});
      $doglist.append(compiledHTML);
      console.log("dogs", founddogs);

  };
