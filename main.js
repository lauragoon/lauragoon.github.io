// general
$(document).ready(function(){
 $('.header').height($(window).height());
 
})

// typing header
var headerOneText = $('#header-one').text();
// console.log(headerText);
var headerOneLength = headerOneText.length;
// console.log(headerLength);
var headerTwoText = $('#header-two').text();
var headerTwoLength = headerTwoText.length;
var headerThreeText = $('#header-three').text();
var headerThreeLength = headerThreeText.length;
var headerFourText = $('#header-four').text();
var headerFourLength = headerFourText.length;
var totalLength = headerOneLength + headerTwoLength + headerThreeLength + headerFourLength;
var timeOut;
var char = 0;
var curr = 0;

(function typeWriter() {
	timeOut = setTimeout(function() {
		curr++;
		char++;

		if (char < headerOneLength) {
			var type = headerOneText.substring(0, curr);
			$('#header-one').text(type);
			typeWriter();

			if (char == headerOneLength) {
				curr = 0;
			}
		}

		else if (char < headerOneLength + headerTwoLength) {
			var type = headerTwoText.substring(0, curr);
			$('#header-two').text(type);
			typeWriter();

			if (char == headerOneLength + headerTwoLength) {
				curr = 0;
			}
		}

		else if (char < headerOneLength + headerTwoLength + headerThreeLength) {
			var type = headerThreeText.substring(0, curr);
			$('#header-three').text(type);
			typeWriter();

			if (char == headerOneLength + headerTwoLength + headerThreeText) {
				curr = 0;
			}
		}

		else {
			var type = headerFourText.substring(0, curr);
			$('#header-four').text(type);
			typeWriter();
		}


		if (char == totalLength) {
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
