$(document).ready(function() {
// your javascript and jQuery code goes below
  
  $("#blue").click (function blu(){
    $("#container").css("background-color", "#52FFF7")
  })

  $("#pink").click(  function pnk(){
    $("#container").css("border-color", "#FF52CD")
    $("#container").css("border-spacing","20px")
  })
  $("#fade").click(  function fd(){
    $("#container").fadeOut(5000)
  })
  $("#lot").click(  function lt(){
    alert("YOU WON THE LOTTERY")
  })
  $("#com").click(  function cm(){
    alert("Are you sure?")
  })
  $("#puppy").click(  function pppy(){
    $("#container").css("background-image", "url(images/puppy.jpg)")
  })
  $("#repl").click(  function rpl(){
    $("#repl").replaceWith("REPLACED!")
  })
  $("#drive").click(  function drv(){
    var pr =prompt("How olde are you?")
    if (pr<16){
      $("#container").replaceWith("Sorry, maybe next year")
    }else{
     $("#container").replaceWith("WOHOOO!!!") 
    }
  })
  $("#choo").click(  function ch(){
    $("body").css("background-image","url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png)")
  })
})