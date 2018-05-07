/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */
$(document).ready(function() {
$('body').particleground({
  dotColor:'#5cbdaa',
  lineColor:'#5cbdaa'
});
$('.part').css({
    'margin-top': '100%'
  });
});
/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/
