/*
var allStars = document.querySelectorAll(".hover-radius");
console.log("allStars = " + allStars);
*/
/*
allStars.forEach((star) => {
    // anime.remove(star);
    function animateStar(scale, duration, easing, delay) {
        anime.remove(star.querySelector(".outer-square"));
        anime({
          targets: star.querySelector(".outer-square"),
          scale: {
            value: scale,
            duration: 100,
            delay: 1,
            easing: 'easeInOutQuart'
          },
          duration: duration,
          // elasticity: elasticity,
          delay: delay,
          easing: easing,
          // background: 'rgb(255, 255, 255)'
        })
        .add({targets: allStars,  background: 'rgb(255, 0, 0)'});
    }

function enterStar() { animateStar(1.3,) };
function leaveStar() { animateStar(1.0,) };

star.addEventListener('mouseenter', enterStar, false);
star.addEventListener('mouseleave', leaveStar, false);
})
*/
/*
var allStars = document.querySelectorAll(".hover-radius");
allStars.forEach((item) => {
  item.addEventListener("mouseover", (event) => {
    event.target.style.backgroud = "blue";
  });
});
// var i = 0;
for (var i = 0; i < allStars.length; i++) {
  function animateStar(event) {
    event.target.style.backgroud = "blue";

    setTimeout(function () {
      event.target.style.background = "blue";
    }, 500);
  };
  allStars(i).addEventListener("mouseover", animateStar, false);
  // star.addEventListener("mouseleave", leaveStar, false);
};

*/
