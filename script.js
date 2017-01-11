$(document).ready(function(){
  $('.back').mouseenter(function(){
    $(this).fadeTo('fast', 0.75);	
  });
  $('.back').mouseleave(function(){
	  $(this).fadeTo('fast', 1);
  });
    $(".question").mouseenter(function(){
			$(this).fadeTo('fast', 0.75);
  });
    $('.question').mouseleave(function(){
	  $(".question").fadeTo('fast', 1);
  });
});  