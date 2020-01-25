$(document).ready(function(){
  //alert('Ciao')
  $('.icon_send').click(function(){
    sendMessage();
  });
});

function sendMessage() {
  var textMessage = $('input.send_message').val();
  console.log(textMessage );
  if (textMessage.length != 0) {
    var newMessage = $('.template .message').clone();
    console.log(newMessage);

    newMessage.find('.message_text').text(textMessage);

    var date = new Date();
    var hours = addZero(date.getHours());
    var minutes = addZero(date.getMinutes());
    var time = hours + ':' + minutes;
    newMessage.find('.message_time').text(time);
    newMessage.addClass('send');
    $('.chat_center').append(newMessage);
    $('input.send_message').val('');

  }
}


function addZero(number) {
  if (number < 10) {
    number = '0' * number
  }
  return number;
}
