// window.onload = setTimeout(function() { alert("Welcome to my portfolio! Click the buttons to go further down my page. Or just scroll down? What happens when you click the first 'O' of my last name??????? Scroll back to top when done? :)"); },1000);

// function hoverBigger() {
//     var hovered = document.getElementById("hovering");
//     hovered.width = 576;
//     hovered.height = 324;
// }

// function hoverNorm() {
//     var hoverBye = document.getElementById("hovering");
//     hoverBye.width = 192;
//     hoverBye.height = 108;
// }

function moreabout() {
    var aboutmethings = document.getElementById("content");
    aboutmethings.innerHTML = "I'm currently a rising senior at Stuyvesant High School in NYC. blah <br><br> <center><input class='button' type='button' value='See some projects' onclick='smoothScrollTo(document.getElementById('scratchHead').offsetTop)'></center>"
}

window.smoothScrollTo = (function () {
  var timer, start, factor;
  
  return function (target, duration) {
    var offset = window.pageYOffset,
        delta  = target - window.pageYOffset; // Y-offset difference
    duration = duration || 1000;              // default 1 sec animation
    start = Date.now();                       // get start time
    factor = 0;
    
    if( timer ) {
      clearInterval(timer); // stop any running animations
    }
    
    function step() {
      var y;
      factor = (Date.now() - start) / duration; // get interpolation factor
      if( factor >= 1 ) {
        clearInterval(timer); // stop animation
        factor = 1;           // clip to max 1.0
      } 
      y = factor * delta + offset;
      window.scrollBy(0, y - window.pageYOffset);
    }
    
    timer = setInterval(step, 10);
    return timer;
  }
}())

// window.smoothScroll = function(target) {
//  var scrollContainer = target;
//  do {
//      scrollContainer = scrollContainer.parentNode;
//      if (!scrollContainer) return;
//      scrollContainer.scrollTop += 1;
//  }
//  while (scrollContainer.scrollTop == 0);;

//  var targetY = 0;
//  do {
//      if (target == scrollContainer) break;
//      targetY += target.offsetTop;
//  }
//  while (target = target.offsetParent);

//  scroll = function(c,a,b,i) {
//      i++, if (i > 30) return;
//      c.scrollTop = a + (b-a) / 30 * i;
//      setTimeOut(function(){scroll(c,a,b,i);}, 20);
//  }
//  scroll(scrollContainer,scrollContainer.scrollTop, targetY, 0)
// }

// var previousScroll = 0,
//     headerOrgOffset = $('#header').height();

// $('#header-wrap').height($('#header').height());

// $(window).scroll(function () {
//     var currentScroll = $(this).scrollTop();
//     if (currentScroll > headerOrgOffset) {
//         if (currentScroll > previousScroll) {
//             $('#header-wrap').slideUp();
//         } else {
//             $('#header-wrap').slideDown();
//         }
//     } 
//     previousScroll = currentScroll;
// });

// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;
// var navbarHeight = $('header').outerHeight();

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// function hasScrolled() {
//     var st = $(this).scrollTop();
    
//     // Make sure they scroll more than delta
//     if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//     if (st > lastScrollTop && st > navbarHeight){
//         // Scroll Down
//         $('header').removeClass('nav-down').addClass('nav-up');
//     } else {
//         // Scroll Up
//         if(st + $(window).height() < $(document).height()) {
//             $('header').removeClass('nav-up').addClass('nav-down');
//         }
//     }
    
//     lastScrollTop = st;
// }