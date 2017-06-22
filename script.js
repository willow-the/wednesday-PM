$(document).ready(function() {
// your javascript and jQuery code goes below
  $("#pink").on("click", function(){
    $("#container").css("background-color", " pink");
  });
  $("#blue").on("click", function(){
    $("#container").css("background-color", " blue")
  });
  $("#fadeAway").on("click", function(){
    $("#container").fadeOut(3000)
    $("#container").fadeIn(3000)
  });
  $("#lottery").on("click", function(){
    alert("you won the lottery!")
  });
  $("#confirm").on("click", function(){
    prompt("are you sure?")
  });
  $("#puppy").on("click", function(){
    $("#container").css("background-image", "url(  https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/All-about-puppies--Cesar%E2%80%99s-tips%2C-tricks-and-advice.jpg?itok=bi9xUvwe)")
  });
  $("#replace").on("click", function(){
    $("#replace").replaceWith("<h1>Replaced</h1>")
  });
  $("#amazon").on("click", function(){
    window.location.href = ("https://www.amazon.com")
  });
  $("#oldEnough").on("click", function(){
    var e = prompt("how lod are you?")
    if (e > 16){
      $("#oldEnough").replaceWith("<h1>you can drive a car. woohoo!</h1>")
    }else{
      $("#oldEnough").replaceWith("<h1>you cannot drive a car.</h1>")
    }
  });
})