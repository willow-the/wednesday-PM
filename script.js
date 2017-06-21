$(document).ready(function() {
// your javascript and jQuery code goes below
  $("#pink").click(function(){
    $("#container").css("border", "2px solid pink")
  });
  $("#blue").click(function(){
    $("#container").css("background-color", "#4286f4");
  });
  $("#fade").click(function(){
    $("#container").fadeOut(2000);
  });
  $("lottery").click(function(){
    alert("YOU WON THE LOTTERY");
  });
})