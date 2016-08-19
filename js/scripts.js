//UI-front end logic
$(document).ready(function() {
  $("form#play").submit(function(event) {
    event.preventDefault();
    $("#pingpong").empty();
    playpong(parseInt($("#userNumber").val())).forEach(function(item) {
      $("#pingpong").append("<p>" + item + "</p>");
    });
  });
});

//Backend-business logic
function playpong(userNumber) {
  var message=[];
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
  return message;
 }
