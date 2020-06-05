$(function() {

	// Mask phone
	$('input[name="Lead[phone]"]').mask('9 (999) 999 - 99 - 99');
	$('input[name="Lead[age]"]').mask('99');

	// WOW
	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       160,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null 
		}
	);
	wow.init();

	// Animate.css
	$('.title-text').addClass('animated slideInRight');
	$('.stages__item').addClass('animated slideInUp');
	$('.eliminate__item').addClass('animated zoomIn');
	$('.advantages__item').addClass('animated slideInLeft');


});

var swiper = new Swiper('.swiper-comments', {
	speed: 900,
	spaceBetween: 0,
	centeredSlides: false,
	slidesPerView: 'auto',
	breakpointsInverse: true,
	setWrapperSize: true,
	loop: true,
	touchRatio: 1,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		1200: { 
			slidesPerView: 2,
			spaceBetween: 0,
		}, 
		992: { 
			slidesPerView: 2,
			touchRatio: 1,
		}, 
		320: { 
			slidesPerView: 1,
		}, 
	},

});
