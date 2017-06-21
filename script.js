$(document).ready(function() {
// your javascript and jQuery code goes below
  $("#pink").click(function(){
    $("#container").css("border", "2px solid pink");
  });
  $("#blue").click(function(){
    $("#container").css("background-color", "#4286f4");
  });
  $("#fade").click(function(){
    $("#container").fadeOut(2000);
  });
  $("#lottery").click(function(){
    alert("YOU WON THE LOTTERY");
  });
  $("#confirm").click(function(){
    confirm("Are you sure?");
  });
  $("#puppy").click(function(){
    $("body").css("background-image", "url('Images/puppy.jpg')");
  });
  $("#replace").click(function(){
    $("#replace").replaceWith("<h2>REPLACED!</h2>");
  });
  $("#drive").click(function(){
    var age = prompt("How old are you?");
    if (age >= 15){
      var canDrive = $("#container").text("WOHOOO!!!");
    } else {
      $("#container").text("Sorry, maybe next year");
    }
  });
  $("#choose").click(function(){
    $("#container").remove();
    clone.appendTo("body");
    clone.attr("id", "container");
    clone = $("#container").clone(true, true);
  });
  $(document).keypress(function(key) {
    if(key.which == 13) {
      $("#container").remove();
      clone.appendTo("body");
      clone.attr("id", "container");
      clone = $("#container").clone(true, true);
    }
  });
  var clone = $("#container").clone(true, true);
})