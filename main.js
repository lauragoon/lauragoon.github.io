// general
$(document).ready(function(){
 $('.header').height($(window).height());
 
});

// typing header
function typeWriter(line_num) {
	timeOut = setTimeout(function() {

		if (line_num == 1) {
			charOne++;

			var type = headerOneText.substring(0, charOne);
			$('#header-one').text(type);
			typeWriter(1);


			if (charOne == headerOneLength) {
				clearTimeout(timeOut);
			}
		}


		else if (line_num == 2) {
			charTwo++;

			var type = headerTwoText.substring(0, charTwo);
			$('#header-two').text(type);
			typeWriter(2);


			if (charTwo == headerTwoLength) {
				clearTimeout(timeOut);
			}
		}


		else if (line_num == 3) {
			charThree++;

			var type = headerThreeText.substring(0, charThree);
			$('#header-three').text(type);
			typeWriter(3);


			if (charThree == headerThreeLength) {
				clearTimeout(timeOut);
			}
		}


		else if (line_num == 4) {
			charFour++;

			var type = headerFourText.substring(0, charFour);
			$('#header-four').text(type);
			typeWriter(4);


			if (charFour == headerFourLength) {
				clearTimeout(timeOut);
			}
		}


	}, 200);
}

var headerOneText = $('#header-one').text();
var headerOneLength = headerOneText.length;
var timeOutOne;
var charOne = 0;

(function typeWriterOne() {
	timeOutOne = setTimeout(function() {
		document.getElementById("header-one").style.opacity = "1.0";

		charOne++;

		var type = headerOneText.substring(0, charOne);
		$('#header-one').text(type);
		typeWriter(1);

		if (charOne == headerOneLength) {
			clearTimeout(timeOutOne);
		}

	}, 200);
}());

var headerTwoText = $('#header-two').text();
var headerTwoLength = headerTwoText.length;
var timeOutTwo;
var charTwo = 0;

(function typeWriterTwo() {
	timeOutTwo = setTimeout(function() {
		document.getElementById("header-two").style.opacity = "1.0";

		charTwo++;

		var type = headerTwoText.substring(0, charTwo);
		$('#header-two').text(type);
		typeWriter(2);


		if (charTwo == headerTwoLength) {
			clearTimeout(timeOutTwo);
		}

	}, 1000);
}());

var headerThreeText = $('#header-three').text();
var headerThreeLength = headerThreeText.length;
var timeOutThree;
var charThree = 0;

(function typeWriterThree() {
	timeOutThree = setTimeout(function() {
		document.getElementById("header-three").style.opacity = "1.0";

		charThree++;

		var type = headerThreeText.substring(0, charThree);
		$('#header-three').text(type);
		typeWriter(3);


		if (charThree == headerThreeLength) {
			clearTimeout(timeOutThree);
		}

	}, 2000);
}());

var headerFourText = $('#header-four').text();
var headerFourLength = headerFourText.length;
var timeOutFour;
var charFour = 0;

(function typeWriterFour() {
	timeOutFour = setTimeout(function() {
		document.getElementById("header-four").style.opacity = "1.0";

		charFour++;

		var type = headerFourText.substring(0, charFour);
		$('#header-four').text(type);
		typeWriter(4);


		if (charFour == headerFourLength) {
			clearTimeout(timeOutFour);
		}

	}, 3000);
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
