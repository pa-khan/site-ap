$(document).ready(function($) {

	// $('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	$('.portfolio__list').masonry({
	  // options...
	  itemSelector: '.portfolio__item',
	  // columnWidth: 200
	});

	$('.portfolio__item').hover(function() {
		var items = $(this).siblings('.portfolio__item');
		items.addClass('portfolio__item_unhover');
	}, function() {
		var items = $(this).siblings('.portfolio__item');
		items.removeClass('portfolio__item_unhover');
	});

	$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1500);
    return false;
	});
});
