$(document).ready(function() {
// your javascript and jQuery code goes below
  $("#pink").click(function(){
   $("#container").css("border" , "20px solid pink");
  })
  $("#blue").click(function(){
    $("#container").css("background-color" , "#4286f4");
  })
  $("#fade").click(function(){
    $("#container").fadeOut(2000);
  })
  $("#lottery").click(function(){
    alert("YOU WON THE LOTTERY");
  })
  $("#confirm").click(function(){
    confirm("Are you sure?");
  })
  $("#puppy").click(function(){
    $("body").css({"background-image": "url(images/puppy.jpg)", "background-repeat" : "no-repeat", "background-size" : "cover"});
  })
  $("#replace").click(function(){
  $("#replace").replaceWith("<h2 style='text-align : center;'>REPLACED</h2>");
  })
  
})