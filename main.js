



/*******************************
     NAVBAR ANIMATIONS
*******************************/

var navLinks = document.querySelectorAll(".nav-link");
var underlines = document.querySelectorAll(".underline");

console.log(underlines);
console.log(navLinks);


navLinks.forEach(function(element, index){
  element.addEventListener("mouseenter", function() {
    animateLine(index);
  });
  
});

navLinks.forEach(function (element, index) {
  element.addEventListener("mouseleave", function () {
    unanimateLine(index);
  });
});

function animateLine(i) {
  var width = 0;
  var id = setInterval(function () {frame(i);}, 0.5);

  function frame(i) {
    if (width >= 98) {
      clearInterval(id);
    } else if (width <= 98) {
      width += 5;
      // console.log(underlines[i]);
      underlines[i].style.width = width + "%";
    }
  }
}

function unanimateLine(i) {
    var width = 98;
    var id = setInterval(function() {frame(i);}, 0.5);

    function frame(i) {
      if (width <= 0) {
        clearInterval(id);
      } else if (width <= 98) {
        width -= 2;
        underlines[i].style.width = width + "%";
      }
    }
}

  



// function changeColor(){
//   underlines[0].style.background = "red";

// };

// navLinks[0].addEventListener("click", changeColor);


