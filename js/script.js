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
      });
  $(document).on('dblclick', '.option_icon',
    function() {
        $('.drop').removeClass('active');
        $(this).next('.drop').removeClass('active');
      });

  // DELETE OPTION
  $(document).on('click','.delete_box_mess',
    function() {
        $(this).parents('.message').remove();
      });

  // SEARCH CHAT
  $('.search_contact').on('keyup',
  function() {
    var value = $(this).val().toLowerCase();
    $('.contact_list .contact').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value)> -1)
    });
  });

  //CAMBIO CHAT
  $(document).on('click', '.contact',
    function() {
      $('.contact').removeClass('active');
      $(this).addClass('active')
      var userData = $(this).attr('data-contact');
      $('.chat_center').removeClass('active')
      $('.chat_center').each(function() {
        if ($(this).attr('data-contact') == userData) {
          $(this).addClass('active')
        }
      });
      var name = $(this).find('.name_contact p').text();
      var time = $(this).find('.name_contact time').text();
      var img = $(this).find('.avatar img').attr('src');
      $('.chat_mex .nav_chat_mex .nav_chat_center p').text(name);
      $('.chat_mex .nav_chat_mex .nav_chat_center small time').text(time);
      $('.chat_mex .nav_chat_mex img').attr('src', img);
    });

  // CHANGE SEND ICON
  $('.send_message').focus(function(){
    $('.send_mex i').removeClass('fa fa-microphone').addClass('fas fa-paper-plane');
  }).blur(function(){
    $('.send_mex i').removeClass('fas fa-paper-plane').addClass('fa fa-microphone');
  });

});


// ------- FUNZIONI ------------

// SEND&RECEIPTS MESSAGES
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
    $('.chat_center.active').append(newMessage);
    $('input.send_message').val('');

    // RECEIPTS MESSAGES
    setTimeout(function() {
      var receiptsMessage = $('.template .message').clone();
      receiptsMessage.find('.message_text').text('ok')
      receiptsMessage.find('.message_time').text(time);
      receiptsMessage.addClass('receipts');
      $('.chat_center.active').append(receiptsMessage);
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
