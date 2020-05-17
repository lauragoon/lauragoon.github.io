// general
$(document).ready(function(){
 $('.header').height($(window).height());
 
})

// typing header
var headerText = $('.typing').text();
var headerLength = headerText.length;
var timeOut;
var char = 0;

(function typeWriter() {
	timeOut = setTimeout(function() {
		char++;
		var type = text.substring(0, char);
		$('.typing').text(type);
		typeWriter();

		if (char == headerLength) {
			clearTimeout(timeOut);
		}
		
	}, 200);
}());

// // carousel
// $('.carousel').carousel({
//   interval: 8000
// })

// nav menu
var burgerMenu = document.querySelector("#nav-burger");
burgerMenu.addEventListener("click", showMenu, false);

var menuList = document.querySelector("#nav-list");
menuList.addEventListener("click", hideMenu, false);

function showMenu(e) {
	menuList.classList.add("show");
	document.body.style.overflow = "hidden";
}

function hideMenu(e) {
	menuList.classList.remove("show");
	e.stopPropagation();
	document.body.style.overflow = "auto";
}
