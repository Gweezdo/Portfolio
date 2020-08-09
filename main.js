/***************************************
     SCROLL WINDOW TO TOP ON PAGE RELOAD
****************************************/

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

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



/**********************************
 NAVBAR DROPDOWN - Section 1
 **********************************/

var burgerMenu = document.getElementById("burger-menu");
var mainLogo = document.getElementById("logo");
var visibility = document.getElementsByClassName("visibility");
var mainXSvg = document.getElementsByClassName("main-X-svg");
var header = document.getElementById("header");
var navbarMain = document.getElementById("navbar-main");
var navlinkMain = document.querySelectorAll(".nav-link");


burgerMenu.addEventListener("click", function(){
  hideBurgerMenu();
  hideLogo();
  openDropdown();
});

mainXSvg[0].addEventListener("click", function() {
  showBurgerMenu();
  showLogo();
  closeDropdown();
});

navlinkMain.forEach(function(element, index){
  element.addEventListener("click", function(){
    if(mobileScreen.matches){
      showBurgerMenu();
      showLogo();
      closeDropdown();
    }
  });
});


function hideBurgerMenu(){
  burgerMenu.style.display = "none";
}

function showBurgerMenu(){
  burgerMenu.style.display = "block";
}

function hideLogo(){
  mainLogo.style.display = "none";
}

function showLogo() {
  mainLogo.style.display = "block";
}



function openDropdown(){
  header.style.height = 100 + "%";
  header.style.width = 100 + "%";
  header.style.background = "#032550";
  navbarMain.style.display = "flex";
  navbarMain.style["flex-direction"] = "column";
  navbarMain.style["margin-right"] = 0 + "px";
  navbarMain.style.width = 200 + "px";
  navbarMain.style.left = 'calc(50% - 200px/2)';
  navbarMain.style["justify-content"] ="center";
  visibility[0].style.display = "block";
  mainXSvg[0].style.display = "block";

}

function closeDropdown(){
  header.style.height = "auto";
  header.style.width = 100 + "%";
  
  header.style.background = "#032550";
  navbarMain.style.display = "none";
  navbarMain.style["flex-direction"] = "row";
  navbarMain.style["margin-right"] = 16 + "px";
  navbarMain.style.width = "auto";
  navbarMain.style.left = "auto";
  navbarMain.style["justify-content"] = "none";
  navbarMain.style.left = "calc(100% - 57px)";
  visibility[0].style.display = "none";
  mainXSvg[0].style.display = "none";
}


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
  setTimeout(() => doScrolling("#work", 2000), 0);
  setTimeout(() => addOverflowScroll(bodyTag), 2000);
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

var allLinks = document.querySelectorAll(".nav-link-sect2")

var allNav = document.getElementById("all-nav");
var htmlNav = document.getElementById("html-nav");
var jsNav = document.getElementById("js-nav");
var pythonNav = document.getElementById("python-nav");
var mobileScreen = window.matchMedia("(max-device-width: 768px)");

/*************************************
     NAVBAR SECTION 2 FILTER - MOBILE
*************************************/

function displayLinks(element, list){
  for(var i=0; i<list.length; i++){
    if(list[i].contains(element)){
        displayNone(element);
    }else{
        displayBlock(list[i]);
    }
  }
}


// 
var dropDownBtn = document.getElementById("navbar-sect2-dropdownBtn");

var s2Nav = document.getElementById("navbar-sect2");

console.log(htmlNav.innerHTML);

dropDownBtn.innerHTML = allNav.innerHTML;
console.log(dropDownBtn.innerHTML);
  if(mobileScreen.matches){
    displayNone(allNav);
  }

dropDownBtn.addEventListener("click", function () {
  displayBlock(s2Nav);
});

function assignText(receivingEl, givingEl){
  receivingEl.innerHTML = givingEl.innerHTML;
}



allNav.addEventListener("click", function() {
  if(mobileScreen.matches){
    func3(allCardList);
    assignText(dropDownBtn, allNav);
    displayLinks(allNav, allLinks);
    displayNone(s2Nav);
  }else{
    func3(allCardList);
  }
});
htmlNav.addEventListener("click", function() {
  if(mobileScreen.matches){
    func3(htmlCardList);
    assignText(dropDownBtn, htmlNav);
    displayLinks(htmlNav, allLinks);
    displayNone(s2Nav);
  }else{
    func3(htmlCardList)
  }
});
jsNav.addEventListener("click", function() { 
  if(mobileScreen.matches){
    func3(jsCardList);
    assignText(dropDownBtn, jsNav);
    displayLinks(jsNav, allLinks);
    displayNone(s2Nav);
  }else{
    func3(jsCardList)
  }
});
pythonNav.addEventListener("click", function() {    
  if(mobileScreen.matches){
    func3(pythonCardList);
    assignText(dropDownBtn, pythonNav);
    displayLinks(pythonNav, allLinks);
    displayNone(s2Nav);
  }else{
    func3(pythonCardList)
  }
});


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

var closeBtnList = document.querySelectorAll(".X-svg");
var modal = document.getElementsByClassName("modal-background");
console.log(modal);
var body = document.querySelector("#body");

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
    body.classList.add("scrollStop")
  });
});

function displayModal(index) {
  for(var i = 0; i < allCards.length; i++){
    if(i === index){
      modal[i].style.display = "block";
    }else{
      // modal[i].style.display = "none";
    }
  }
}

function stopScroll(){
  body.style['overflow-y'] = hidden;
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

/************************************************
     TESTIMONIAL SLIDE SHOW - SECTION 3
************************************************/

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}



/************************************************
     Contact Form submit handler
************************************************/


(() => {
  const form = document.querySelector("form");
  const formResponse = document.querySelector("#js-form-response");

  form.onsubmit = (e) => {
    e.preventDefault();

    // Prepare data to send
    const data = {};
    const formElements = Array.from(form);
    formElements.map((input) => (data[input.name] = input.value));

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader("Accept", "application/json; charset=utf-8");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    // Callback function
    xhr.onloadend = (response) => {
      if (response.target.status == 200) {
        console.log("response.target.status =" + response.target.status);
        // The form submission was successful
        form.reset();
        formResponse.innerHTML = "Thanks for the message. I’ll be in touch shortly.";
      } else {
        // The form submission failed
        formResponse.innerHTML = "Something went wrong";
        console.error(JSON.parse(response.target.response).message);
        form.reset();
      }
    };
  };
})();

/************************************************
     SECTION 3 - CAROUSEL SIDE SCROLL FUNCTIONS
************************************************/

const track = document.querySelector("#carousel-track-sect3");
const certCards = Array.from(track.children);
console.log(certCards)
const leftBtn = document.querySelector(".carousel-btn--left");
const rightBtn = document.querySelector(".carousel-btn--right");


const certCardWidth = certCards[0].getBoundingClientRect().width;


console.log(certCards[0].getBoundingClientRect());

// when I click left, move to the left


// when I click right, move to the right


var padding = 32;
var amountToMove = 0;
var count = 0;

if (count == 0) {
    leftBtn.style.display = "none";
    rightBtn.style.display = "block";
}

rightBtn.addEventListener("click", function() {
  count += 1;
  amountToMove -= (certCardWidth + padding);
  console.log(amountToMove);
  console.log("count:" + count);
  moveCards(certCards);
  checkCount();
});

leftBtn.addEventListener("click", function () {
  count -= 1;
  amountToMove += (certCardWidth + padding);
  console.log(amountToMove);
  console.log("count:" + count);
  moveCards(certCards);
  checkCount();
});

function moveCards(array){
  array.forEach((element) => {
    // element.style.transform = "translateX(" + amountToMove + "px)";
    element.style.left = amountToMove + "px"; 
  });
} 

function checkCount(){
  if (count == 0) {
    leftBtn.style.display = "none";
    rightBtn.style.display = "block";
  } else if (count == 1) {
    leftBtn.style.display = "block";
    rightBtn.style.display = "block";
  } else if (count == 2) {
    leftBtn.style.display = "block";
    rightBtn.style.display = "none";
  }
}

/************************************************
     JOURNEY POPUP DISPLAY - SECTION 3
************************************************/

var treasureList = document.querySelectorAll(".treasure");
var popupList = document.querySelectorAll(".journey_popup");
var glowList = document.querySelectorAll(".glow");

console.log("treasureList: " + treasureList);
console.log("popupList: " + popupList);
console.log("glowList" + glowList);


treasureList.forEach((treasure, index) => {
  treasure.addEventListener("click", function(){
    //function 1 - make popup appear
    showPopup(index);
    //function 2 - disable glow
    pauseGlow(index);
    setTimeout(function(){ hidePopup(index); }, 3000);
  })
});

function showPopup(index){
  popupList[index].style.display = "block";
}

function hidePopup(index) {
    popupList[index].style.display = "none";
}

function pauseGlow(index) {
  glowList[index].style.display = "none";
}
