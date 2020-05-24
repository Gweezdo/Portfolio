/*******************************
     NAVBAR ANIMATIONS
*******************************/

var navLinks = document.querySelectorAll(".nav-link");
var underlines = document.querySelectorAll(".underline");

navLinks.forEach(function(element, index){
  element.addEventListener("mouseenter", function() {
    lineBrightness(index);
    animateLine(index);
  });
});

navLinks.forEach(function (element, index) {
  element.addEventListener("mouseleave", function () {
    lineFade(index);
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

function lineBrightness(i) {
  var opacity = 0;
  var id = setInterval(function() {
    frame(i);
  }, 10);

  function frame(i) {
    if (opacity >= 1) {
      clearInterval(id);
    } else if (opacity <= 1) {
      opacity += 0.1;
      underlines[i].style.background = "rgba(255, 255, 255, " + opacity + ")";
    }
  }
};

function lineFade(i) {
  var opacity = 1;
  var id = setInterval(function() {
    frame(i);
  }, 10);

  function frame(i) {
    if (opacity <= 0) {
      clearInterval(id);
    } else if (opacity <= 1) {
      opacity -= 0.1;
      underlines[i].style.background = "rgba(255, 255, 255, " + opacity + ")";
    }
  }
};
  



// function changeColor(){
//   underlines[0].style.background = "red";

// };

// navLinks[0].addEventListener("click", changeColor);


/********************************************
     START BUTTON - SCROLL DOWN ANIMATIONS
********************************************/


var startBtnSect1 = document.getElementById("start-btn");
var sect1 = document.getElementById("section1");

startBtnSect1.addEventListener('click', scrollPage);

function scrollPage() {
  var height = 100;
  var id = setInterval(function () {
    frame();
  }, 0.5);

  function frame() {
    if (height >= 200) {
      clearInterval(id);
    } else if (height <= 200) {
      height += 5;
      sect1.style.height = height + "vh";
    }
  }
}