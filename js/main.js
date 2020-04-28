; (function () {
	"use strict";

})();

const header = document.querySelector('.ba-header');
const nav = document.querySelector('.ba-nav');
const hamb = document.querySelector('.ba-hamburger');

hamb.addEventListener('click', () => {
	hamb.classList.toggle('ba-hamburger--active');
	header.classList.toggle('ba-header--collapsed');
	nav.classList.toggle('ba-nav--open');
});



// window.addEventListener('resize', () => {
// 	console.log(window.innerWidth);
// 	if (window.innerWidth < 1024) {
// 		console.log('yes');
// 	}

// });