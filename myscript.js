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
    aboutmethings.innerHTML = "I'm currently a freshman at Rice University studying computer science. Computer science is a subject I’ve been intrigued by since I was first exposed to it in high school. I enjoy how different algorithms can work to accomplish the same task. Outside of classes, I enjoy going to local hackathons with my friends and making fun, small projects with them. At Rice, I regularly attend CSters meetings and have recently become involved in HackRice, an organization focused on planning coding competitions."
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
