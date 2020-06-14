/*******************************
     NAVBAR ANIMATIONS
*******************************/

var navLinks = document.querySelectorAll(".nav-link");
var underlines = document.querySelectorAll(".underline");
var navIndex = 0;

navLinks.forEach(function(element, index){
  element.addEventListener("mouseenter", function() {
    lineBrightness(index);
    animateLine(index);
  });
  element.addEventListener("click", function () {
      // navIndex = index;
      changeColor(index);
  });

});

navLinks.forEach(function (element, index) {
    element.addEventListener("mouseleave", function () {
      lineFade(index);
      unanimateLine(index);
    });
  if(index == navIndex){
    return;
  }else{}
  
});

function changeColor(i){
  underlines[i].style.width = 100 + "%";
  underlines[i].style.background = "red";
};

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
  

/**********************************
     NAVBAR UNDERLINES CHANGE COLOR - Section 1
**********************************/


// navLinks.forEach(function (element, index) {
//   element.addEventListener("click", function () {
//     changeColor(index);
//   }, true);
// });







/********************************************
     START BUTTON - SCROLL DOWN ANIMATIONS
********************************************/


// var startBtnSect1 = document.getElementById("start-btn");
// var sect1 = document.getElementById("section1");

// startBtnSect1.addEventListener('click', scrollPage);

// function scrollPage() {
//   var height = 100;
//   var id = setInterval(function () {
//     frame();
//   }, 0.5);

//   function frame() {
//     if (height >= 200) {
//       clearInterval(id);
//     } else if (height <= 200) {
//       height += 5;
//       sect1.style.height = height + "vh";
//     }
//   }
// }


function getElementY(query) {
  return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
}
console.log("pageYOffset = " + window.pageYOffset);
console.log("(#work).getBoundingClientRect.top = " + document.querySelector("#work").getBoundingClientRect().top
);

function doScrolling(element, duration) {
	var startingY = window.pageYOffset
  var elementY = getElementY(element)
  // If element is close to page's bottom then window will scroll only to some position above the element.
  var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
	var diff = targetY - startingY
  // Easing function: easeInOutCubic
  // From: https://gist.github.com/gre/1650294
  var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
  var start

  if (!diff) return

	// Bootstrap our animation - it will get called right before next frame shall be rendered.
	window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp
    // Elapsed miliseconds since start of scrolling.
    var time = timestamp - start
		// Get percent of completion in range [0, 1].
    var percent = Math.min(time / duration, 1)
    // Apply the easing.
    // It can cause bad-looking slow frames in browser performance tool, so be careful.
    percent = easing(percent)

    window.scrollTo(0, startingY + diff * percent)

		// Proceed with animation as long as we wanted it to.
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}

// Apply event handlers. Example of firing the scrolling mechanism.
document.getElementById("start-btn").addEventListener("click", doScrolling.bind(null, "#work", 2000));


// Or simply:
//doScrolling('#mytarget', 1000)





// **************************
// Close Modal Function 
// **************************

var closeBtnList = document.querySelectorAll(".close-btn");
var modal = document.getElementsByClassName("modal-background");

closeBtnList.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    closeModal(index);
  });
});

function closeModal(index) {
  for (var i = 0; i < closeBtnList.length; i++) {
    if (i === index) {
      modal[i].style.display = "none";
    } 
  }
}

// This closes the modal when click anywhere outside the modal window
window.addEventListener('click', clickOutside);
function clickOutside(e){
  for (var i = 0; i<modal.length; i++){
    if (e.target == modal[i]) {
      modal[i].style.display = "none";
    }
  }
}

// **************************
// Open Modal Function 
// **************************

var allCards = document.querySelectorAll(".grid-item-sect2");

allCards.forEach(function (card, index) {
  card.addEventListener("click", function () {
    displayModal(index);
  });
});

function displayModal(index) {
  for(var i = 0; i < allCards.length; i++){
    if(i === index){
      modal[i].style.display = "block";
    }else{
      modal[i].style.display = "none";
    }
  }
}

/********************************************
     LOAD BUTTON - HEIGHT CHANGE ANIMATIONS
********************************************/

var loadMoreBtn = document.getElementById("load-btn");
var gridContainerSect2 = document.getElementById("grid-container-sect2");

loadMoreBtn.addEventListener("click", loadMore);

function loadMore(){
  gridContainerSect2.style.height = "auto";
  loadMoreBtn.style.display = "none";
};


/************************************************
     NAVBAR UNDERLINES CHANGE COLOR - SECTION 2
************************************************/

var navLinksS2 = document.querySelectorAll(".nav-link-sect2");

