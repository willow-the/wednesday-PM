$(document).ready(function() {
// your javascript and jQuery code goes below
$("#colorPink").on("click", function () {
  $("#container").css("border", "solid 20px pink")
});

$("#feelingBlue").on("click", function () {
  $("#container").css("background-color", "lightBlue")
});

$("#fade").on("click", function () {
  $("#container").fadeOut("1000")
});

$("#lottery").on("click", function () {
  alert ("You Won The Lottery!!!!")
})

$("#confirm").on("click", function () {
  confirm("Are you sure?")
});

$("#puppy").on("click", function () {
  $("#container").css("background-image", "url('http://cdn3-www.dogtime.com/assets/uploads/2015/05/file_21702_impossibly-cute-puppy-30-300x200.jpg')")
});

$("#replace").on("click", function () {
  $("#replace").replaceWith("<h1>Replaced</h1>")
});
$("#drive").on("click", function () {
  var driveAge = prompt("How old are you?")
  if (driveAge > 15) {
    $("#drive").replaceWith("<h1>WOHOOO!!<h1>")
}
  else if (driveAge < 16) {
    $("#drive").replaceWith("<h1>Sorry, maybe next year</h1>")
}

});


})
