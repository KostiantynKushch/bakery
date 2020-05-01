; (function () {
	"use strict";

})();

// mobile menu

const header = document.querySelector('.ba-header');
const nav = document.querySelector('.ba-nav');
const hamb = document.querySelector('.ba-hamburger');
const body = document.body;

// opening menu
hamb.addEventListener('click', () => {
	hamb.classList.toggle('ba-hamburger--active');
	header.classList.toggle('ba-header--collapsed');
	nav.classList.toggle('ba-nav--open');
	body.classList.toggle('opened-menu');
});

// blure header on scroll

window.addEventListener('scroll', () => {
	if (document.documentElement.scrollTop > 10) {
		header.classList.add('scrolls');
	} else if (window.scrollY == 0) {
		if (header.classList.contains('scrolls')) {
			header.classList.remove('scrolls');
		}

	}
});


// preloader
window.addEventListener('load', () => {
	const preloader = document.querySelector('.ba-preloader');
	preloader.classList.add('loaded');
});