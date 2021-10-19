(function($) {    

	const list = $('.faq');

	list.find('dd').hide();

	list.find('dt').on('click', function() {
		$(this).next().slideToggle();
	});
	
	$('dt').on('click', function () {
		$(this).find('i').toggleClass('rotate');
	});

	$('dt').on('click', function () {
		$(this).toggleClass('show');
	});
	
	$(window).resize(function() {
		if ($(window).width() < 992) {
			$('dt').on('mouseenter', function () {
				$('.box').removeClass('moved');
			});	
		} else {
			$('dt').on('mouseenter', function () {
				$('.box').addClass('moved');
			});	
		}
	}).resize();

	$('dt').on('mouseleave', function () {
		$('.box').removeClass('moved');
	});

})(jQuery);








