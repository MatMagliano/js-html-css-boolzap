$(document).ready(function(){

  // SEND MESSAGE
  $('.icon_send').click(function(){
    sendMessage();
  });
  $('.send_message').keyup(function(){
    if (event.which == 13) {
      sendMessage();
    }
  });

  // OPTION CHAT
  $(document).on('click', '.option_icon',
    function() {
        $('.drop').removeClass('active');
        $(this).next('.drop').toggleClass('active');
      }
    );
  $(document).on('click','.delete_box_mess',
    function() {
        $(this).parents('.message').remove();
      }
    );


  // SEARCH CHAT
  $('.search_contact').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('.contact_list .contact').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1)
    });
  });

});

// SEND MESSAGES
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

    // RECEIPTS MESSAGES
    setTimeout(function() {
      var receiptsMessage = $('.template .message').clone();
      receiptsMessage.find('.message_text').text('ok')
      receiptsMessage.find('.message_time').text(time);
      receiptsMessage.addClass('receipts');
      $('.chat_center').append(receiptsMessage);
    }, 2000);
  }
}

// ADD ZERO TIME
function addZero(number) {
  if (number < 10) {
    number = '0' * number
  }
  return number;
}
