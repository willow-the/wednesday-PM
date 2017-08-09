$(document).ready(function() {
$("#purple").click(function() {
  $("#container").css("border", "20px solid purple");
});

$('#blue').click(function() {
  $('#container').css("background-color", "#60caff")
});

$('#fade').click(function() {
  $('#container').fadeOut(10000)
});

$('#lottery').click(function() {
  alert("YOU WON THE LOTTERY!!!");
});

$('#confirmation').click(function() {
  var answer = confirmation("Are you sure...?");
  if answer {
    alert("GOOD!");
  } 
});

})
