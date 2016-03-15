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
    $.post("/dashboard", dog);
  };

  //
  // if(document.getElementById('addDog').)
  // {
  //    alert("button was clicked");
  // }

  // document.getElementById('addDog').addEventListener("click", function () {
  //   console.log("clicked");
  // });
