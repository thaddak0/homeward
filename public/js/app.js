console.log('linked');

  var homeward = {};
  //
  // homeward.getDogs = function(callback) {
  //
  //   // send an AJAX request for
  //   $.get("/dashboard").done(function(dogs) {
  //     var dog = JSON.parse(dogs);
  //     callback(dog);
  //   }).fail(function (err) {
  //     console.log("Error: ", err);
  //   });
  // };
  //
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
