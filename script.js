$(document).ready(function() {
  $("#pink").click(function() {
    $("#container").css({"border-color": "pink", "border-width": "20px", "border-style": "solid"});
  })
  $("#blue").click(function() {
    $("#container").css({"background-color": "#DEF9FF"});
  })
  $("#fade").click(function() {
    $("#container").fadeOut("3000");
  })
  $("#lottery").click(function() {
    alert("YOU WON THE LOTTERY!");
  })
  $("#confirmation").click(function() {
    confirm("Are you sure??");
  })
  $("#puppy").click(function() {
    $("body").css({"background-image": "url(images/puppy.jpg)"});
  })
  $("#replace").click(function() {
    $("#replace").replaceWith("<h1>REPLACED!</h1>");
  })
  $("#drive").click(function() {
    var Age = prompt("How old are you?")
    if (Age >= 16) {
      $("#drive").replaceWith("<h1>WOHOOO!!!</h1>")
    } else { 
      $("#drive").replaceWith("<h1>Sorry, maybe next year...</h1>")
    }
  })
  $( "#choose" ).click(function() {
  $( "#choose" ).animate({
    width: "70%",
    opacity: 0.4,
    marginLeft: "0.6in",
    fontSize: "3em",
    borderWidth: "10px"
  }, 1500 );
  });

})