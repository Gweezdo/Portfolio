/*******************************
     NAVBAR SECTION 1 ANIMATIONS
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
  underlines[i].style.background = "#F27405";
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

var bodyTag = document.getElementById("body");
console.log(bodyTag);

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
document.getElementById("start-btn").addEventListener("click", function() {
  doScrolling("#work", 2000);
  addOverflowScroll(bodyTag);
} );


// Or simply:
//doScrolling('#mytarget', 1000)

function addOverflowScroll(element,){
  element.style["overflow-y"] = "scroll";
}


/*******************************
     NAVBAR SECTION 2 FILTER
*******************************/

var allCardList = document.querySelectorAll(".grid-item-sect2");
var htmlCardList = document.querySelectorAll(".html-css-card");
var jsCardList = document.querySelectorAll(".js-card");
var pythonCardList = document.querySelectorAll(".python-card");

var allNav = document.getElementById("all-nav");
var htmlNav = document.getElementById("html-nav");
var jsNav = document.getElementById("js-nav");
var pythonNav = document.getElementById("python-nav");

allNav.addEventListener("click", () => func3(allCardList));
htmlNav.addEventListener("click", () => func3(htmlCardList));
jsNav.addEventListener("click", () => func3(jsCardList));
pythonNav.addEventListener("click", () => func3(pythonCardList));


function displayBlock(element){
  element.style.display = "block";
}

function displayNone(element){
  element.style.display = "none";
}

function func3(list){
  var myArr = [];
  for(var i=0; i<allCardList.length; i++){
    var match = true;
    for(var j=0; j<list.length; j++){

      if (allCardList[i] === list[j]){
        match = true;
        break;
      }else{
        match = false;
        continue;
      }
    }

    if (match == false){
      myArr.push(allCardList[i]);
    }
  }

  console.log(myArr);
  myArr.forEach(function(element) {
    displayNone(element);
  })
  
  console.log(list);
  list.forEach(function (element) {
    displayBlock(element);
  });
  
  loadMore();
}

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

