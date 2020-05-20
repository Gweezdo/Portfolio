



var allStars = document.querySelectorAll(".hover-radius");
var allSquares = document.querySelectorAll(".outer-square");


console.log(allStars);
console.log(allSquares);

allStars.forEach(function(star, index){
    star.addEventListener("mouseenter", function(){
        shine(index);
        brightness(index);
    });
});

allStars.forEach(function (star, index) {
  star.addEventListener("mouseleave", function () {
    fade(index);
    unbrightness(index);
  });
});



function shine(i){
    var scale = 1;
    var id = setInterval(function () {
    frame(i);
    }, 0.5);

    function frame(i) {
    if (scale >= 1.5) {
        clearInterval(id);
    } else if (scale <= 1.5) {
        scale += 0.01;
        allSquares[i].style.transform = "scale(" + scale + ")";
    }
    }
};

function fade(i) {
  var scale = 1.5;
  var id = setInterval(function () {
    frame(i);
  }, 10);

  function frame(i) {
    if (scale <= 1) {
      clearInterval(id);
    } else if (scale <= 1.5) {
      scale -= 0.01;
      allSquares[i].style.transform = "scale(" + scale + ")";
    }
  }
};

function brightness(i) {
  var opacity = 0.2;
  var id = setInterval(function () {
    frame(i);
  }, 0.5);

  function frame(i) {
    if (opacity >= 0.8) {
      clearInterval(id);
    } else if (opacity <= 0.8) {
      opacity += 0.01;
      allSquares[i].style.background = "rgba(255, 255, 255, " + opacity + ")";
    }
  }
};


function unbrightness(i) {
  var opacity = 0.8;
  var id = setInterval(function () {
    frame(i);
  }, 10);

  function frame(i) {
    if (opacity <= 0.2) {
      clearInterval(id);
    } else if (opacity <= 0.8) {
      opacity -= 0.01;
      allSquares[i].style.background = "rgba(255, 255, 255, " + opacity + ")";
    }
  }
};
