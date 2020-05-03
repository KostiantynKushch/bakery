// slick slider
$(document).ready(function () {
	$('.ba-cook-time').slick({
		arrows: false,
		zIndex: 1,
		infinite: false,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		asNavFor: '.ba-slider'
	});
	$('.ba-recipes__slider').slick({
		arrows: false,
		zIndex: 1,
		infinite: false,
		cssEase: 'linear',
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: false,
		asNavFor: '.ba-slider'
	});
	$('.ba-nav-slider').slick({
		arrows: true,
		zIndex: 1,
		infinite: false,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: true,
		asNavFor: '.ba-slider'

	});
});



// roll btn - showing full revipe
$('.ba-roll-btn').click(function () {
	$('.ba-recipe').toggleClass("active");
	$('.ba-content--hidden').toggleClass("active");
});


$('.ba-recipes__slider').on('afterChange', function (event, slick, currentSlide) {

	if ($('.ba-recipe').hasClass("active")) {
		$('.ba-recipe').toggleClass("active");
		$('.ba-content--hidden').toggleClass("active");
	}

});
