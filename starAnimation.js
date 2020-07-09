var allStars = document.querySelectorAll(".hover-radius");
var allSquares = document.querySelectorAll(".outer-square");

allStars.forEach(function(star, index){
    star.addEventListener("mouseenter", function(){
        starGrow(index);
        starShine(index);
        setTimeout(()=>{starShrink(index)}, 600);
        setTimeout(()=>{starFade(index)},600);
      });
});

allStars.forEach(function (star, index) {
  star.addEventListener("mouseleave", function () {
    // starShrink(index);
    // starFade(index);
  });
});

function starGrow(i) {
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

function starShrink(i) {
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

function starShine(i) {
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

function starFade(i) {
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
