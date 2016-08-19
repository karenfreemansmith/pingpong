//UI-front end logic
$(document).ready(function() {
  $("form#play").submit(function(event) {
    event.preventDefault();
    $("#pingpong").empty();
    playpong(parseInt($("#userNumber").val())).forEach(function(item) {
      if(item==="ping") {
        new Audio("img/slam1.mp3").play();
      } else if(item==="pong") {
        new Audio("img/slam2.mp3").play();
      } else if(item==="ping-pong") {
        new Audio("img/volley.mp3").play();
      } else {
        new Audio("img/miss.mp3").play();
      }
      $("#pingpong").append("<p>" + item + "</p>");
    });
  });
});

//Backend-business logic
function playpong(userNumber) {
  var message=[];
  if(userNumber<0) {
    for (i=-1; i>=userNumber; i--) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  } else {
    for (i=1; i<=userNumber; i++) {
      if (i%15===0) {
        message.push("ping-pong");
      } else if (i%5===0) {
        message.push("pong");
      } else if (i%3===0) {
        message.push("ping");
      } else {
        message.push(i);
      }
    }
  }
  return message;
 }
