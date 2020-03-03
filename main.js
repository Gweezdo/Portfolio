// var shine = anime({
//     targets: "div.hover-radius",
//     scale: 2,
//     easing: "linear",   
//     delay: 300,
//     autoplay: false,
//     // loop: true  
// });

// document.querySelector('#outer-square').onclick = shine;
// document.querySelector('#boxes .pause').onclick = playPause.pause;

// let paddingWrapper = document.querySelector(".hover-radius");

// paddingWrapper.addEventListener("mouseenter", (event) => {
//     anime({
//         targets: paddingWrapper,
//         scale: 2,
//         easing: "linear",   
//         delay: 300,
//         duration
//         // autoplay: false,
//         // loop: true  
//     });
// })

let allStars = document.querySelectorAll(".hover-radius");

allStars.forEach((star) => {
    // anime.remove(star);
    function animateStar(scale, duration, elasticity) {
        anime.remove(star.querySelector(".outer-square"));
        anime({
          targets: star.querySelector(".outer-square"),
          scale: scale,
          duration: duration,
          elasticity: elasticity,
          delay: 100,
        //   easing: "linear",
        });
    }

function enterStar() { animateStar(2.0, 300, 500) };
function leaveStar() { animateStar(1.0, 300, 500) };

star.addEventListener('mouseenter', enterStar, true);
star.addEventListener('mouseleave', leaveStar, true);

})



