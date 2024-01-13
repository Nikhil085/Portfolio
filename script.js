var cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    var image = card.querySelector(".cardimage");
    var video = card.querySelector(".cardvideo");

    card.addEventListener("mouseenter", function () {
        image.style.display = "none";
        video.style.display = "block";
        video.play(); 
    });

    card.addEventListener("mouseleave", function () {
        image.style.display = "block";
        video.style.display = "none";
        video.pause(); 
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var options = {
      strings: ["","Designer", "Developer","Programmer"],
      typeSpeed: 80,  
      backSpeed: 50,  
      backDelay: 2000,  
      startDelay: 400,  
      loop: true,  
  };

  var typed = new Typed(".typedText", options);
});

var gtn = document.querySelector(".scroll-btn");

gtn.addEventListener("mouseleave", function(){
    gtn.style.animation = "bounce 1s ease forwards";
});


var gtn = document.querySelector(".scroll-btn");

gtn.addEventListener("mouseenter", function(){
    gtn.style.animation = "none";
});

function setActiveLink(element) {
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-link');
    });

    element.classList.add('active-link');
}


// night Mode 

function toggleMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
  
    var isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  function checkDarkModePreference() {
    var isDarkMode = localStorage.getItem('darkMode') === 'true';
    var body = document.body;
    
    if (isDarkMode) {
      body.classList.add('dark-mode');
    }
  }
  
  window.addEventListener('load', checkDarkModePreference);
  





















































