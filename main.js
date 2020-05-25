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
    if(element.onclick == true){
      navLinks[index].addEventListener("click", function () {
      changeColor(index);});
    }else{
      lineFade(index);
      unanimateLine(index);
    }
    
    
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
  



function changeColor(i){
  // underlines[i].style.width = 100 + "%";
  underlines[i].style.background = "red";
  

};




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


// **************************
// Close Modal Function 
// **************************

var closeBtnList = document.getElementsByClassName("modal-btn");
var modal = document.getElementsByClassName("modal-background");
// modal[0] = Tribute Page
// modal[1] = Survey Form
// modal[2] = Product Landing Page
// modal[3] = Palindrome Checker
// modal[4] = Roman Numeral Converter
// modal[5] =
// modal[6] =
// modal[7] =
// modal[8] =
// modal[9] =
// modal[10] = 


// This statement closes the modal when the 'close-btn' button is clicked
Array.from(closeBtnList).forEach((x) => {
  x.addEventListener("click", closeModal);
});

// This statement closes the modal when clicking outside the modal window
window.addEventListener('click', clickOutside);


function closeModal() {
  modal[0].style.display = "none";
  modal[1].style.display = "none";
  modal[2].style.display = "none";
  modal[3].style.display = "none";
  modal[4].style.display = "none";
  
}

function clickOutside(e){
  if (
    e.target == modal[0] ||
    e.target == modal[1] ||
    e.target == modal[2] ||
    e.target == modal[3] ||
    e.target == modal[4] // Remember to add || pipe symbol
  ) {
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    modal[3].style.display = "none";
    modal[4].style.display = "none";
  }
  
}