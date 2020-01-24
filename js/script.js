$(document).ready(function(){
  //alert('Ciao')
  $('.icon_send').click(function(){
    sendMessage();
  });
});

function sendMessage() {
  var textMessage = $('input .send_message').val();
  if(textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);
  }
}
