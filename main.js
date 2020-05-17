



/*******************************
     NAVBAR ANIMATIONS
*******************************/

var navLinks = document.getElementsByClassName("nav-link");
var underlines = document.querySelectorAll(".underline");

console.log(underlines);





for (var i = 0; i < underlines.length; i++) {

  
  function animateLine() {
    var width = 0;
    var id = setInterval(function(){frame(i)}, 0.5);

    function frame(index) {
      if (width >= 98) {
        clearInterval(id);
      } else if (width <= 98) {
        width += 5;
        // console.log(underlines[i]);
        underlines[index].style.width = width + "%";
      }
    }
  }

  function unanimateLine(i) {
      var width = 98;
      var id = setInterval(frame, 0.5);

      function frame() {
        if (width <= 0) {
          clearInterval(id);
        } else if (width <= 98) {
          width -= 2;
          underlines[0].style.width = width + "%";
        }
      }
  }

  

  navLinks[i].addEventListener("mouseenter", animateLine);
  navLinks[i].addEventListener("mouseleave", unanimateLine);
}


function changeColor(){
  underlines[0].style.background = "red";

};

navLinks[0].addEventListener("click", changeColor);


