
$( document ).ready(function() {
$("#shoot").click(function(){
      var userChoice=$("#1").val();
      console.log(userChoice);
     
    $("#first").append(userChoice);
});
});

var computerChoice="";

var winner="";

var choices=[
    "rock",
    "paper",
    "scissors"
    ];
    
    
    
    
    