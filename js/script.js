
var $button = $('#add');
var $list = $('ol');

$(function (){
  $('#error').hide();
});

$button.click(function() {
  var $input = $('#input');
  if($input.val() === '') {
    $('#error').show();
  } else {
    $list.append('<li>' + $input.val() + '<button class="close">x</button>' + '</li>');
    $input.val('');
    $('#error').hide();
  }
});

$('ol').on('click', '.close', function(events) {
  $(this).parent().remove();
});
