$(document).ready(function() {

  $("#pink").click(function() {
    $("#container").css("border", "20px solid pink");
  })
  $("#blue").click(function() {
    $("#container").css("background-color", "#00ccff");
  })
  $("#fade").click(function() {
    $("#container").fadeOut(2000);
  })
  $("#lottery").click(function() {
    alert("You won the lottery!");
  })
  $("#confirm").click(function() {
    alert("Are you sure?");
  })
  $("#puppy").click(function() {
    $("#container").css("background-image", "url('images/puppy.jpg')");
  })
  $("#replace").click(function() {
    $("#replace").replaceWith("REPLACED!");
  })
})