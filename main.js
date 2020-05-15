// general
$(document).ready(function(){
 $('.header').height($(window).height());
 
})

// carousel

$('.carousel').carousel({
  interval: 8000
})

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
