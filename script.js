$(document).ready(function() {
// your javascript and jQuery code goes below
$("#colorItPink").on("click", function(){
  $("#container").css("border", "solid 20px pink")
  })

$("#feelingBlue").on("click", function(){
  $("#container").css("background-color", "#98c8e0")
  })

$("#fadeAway").on("click", function(){
  $("#container").fadeOut(3000)
  })

$("#lotteryButton").on("click", function(){
  alert("YOU WON THE LOTTERY!")
  })

$("#confirmation").on("click", function(){
  confirm("Are you sure?")
  })

$("#showMeAPuppy").on("click", function(){
  $("#container").css("background-image", "url('http://www.stylemotivation.com/wp-content/uploads/2013/08/20-Adorable-Puppies-9.jpg')" )
  })

$("#replaceMe").on("click", function(){
  $("#replaceMe").replaceWith("replaced!")
  })

$("#oldEnoughToDrive").on("click", function(){
    var num = prompt("how old are you?")
  if (num>=16){
    $("#oldEnoughToDrive").replaceWith("WOOOOHOOOOOO!!!!!")
    }
  else{
    $("#oldEnoughToDrive").replaceWith("sorry, maybe next year.")}
  })

$("#clickForUnicorn").on("click", function(){
  $("#unicorn").css("background", "url('https://i.giphy.com/media/WZmgVLMt7mp44/giphy.webp') center /cover")
  $("#clickForUnicorn").fadeOut(3000)
  })









})