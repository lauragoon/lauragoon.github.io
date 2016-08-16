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
    aboutmethings.innerHTML = "I'm currently a rising senior at Stuyvesant High School in NYC. After discovering computer science a couple of years ago, I grew fascinated in it and continue to pursue this passion through learning and exploring. Aside from computer science, I'm also passionate about community service, and spend a lot of time volunteering at organizations and events."
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