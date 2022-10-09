const h = document.getElementById("home");
const p = document.getElementById("projects");
const a = document.getElementById("about-us");
const c = document.getElementById("contact-us");
const exceptHome = document.getElementById("projects, about-us, contact-us");
const exceptAboutUs = document.getElementById("projects, home, contact-us");
const exceptProjects = document.getElementById("home, about-us, contact-us");
const exceptContactUs = document.getElementById("projects, about-us, home");

// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: 1440,
    duration: 40000,
    easing: 'linear',
    loop: true,
});


// Page Contents Fading In
const pageFadeIn = anime({
  delay: 1000,
  targets: '#home',
  duration: 8000,
  opacity: 1,
});


// Navigation
function showHome() {
  anime({
    delay: 50,
    targets: '#home',
    duration: 8000,
    opacity: 1,
  });
  h.style.display = "block";
  c.style.display = "none";
  a.style.display = "none";
  p.style.display = "none";
};
  
function showProjects() {
  anime({
    delay: 50,
    targets: '#projects',
    duration: 8000,
    opacity: 1,
  });
  p.style.display = "flex"; 
  c.style.display = "none";
  a.style.display = "none";
  h.style.display = "none";
};

function showAboutUs() {
  anime({
    delay: 50,
    targets: '#about-us',
    duration: 8000,
    opacity: 1,
  });
  a.style.display = "block";
  c.style.display = "none";
  h.style.display = "none";
  p.style.display = "none";
};

function showContactUs() {
  anime({
    delay: 50,
    targets: '#contact-us',
    duration: 8000,
    opacity: 1,
  });
  c.style.display = "block";
  p.style.display = "none";
  h.style.display = "none";
  a.style.display = "none";
};

// Navigatin button hover effect

const navButton = document.querySelector(".nav-button");


  navButton.addEventListener("mouseover", event => {
  console.log("Mouse in");
});

navButton.addEventListener("mouseout", event => {
  console.log("Mouse out");
});



//document.querySelector('.nav-btn').onclick = pageFadeIn;



/*// Navigation button hover and mouse over for project details





const pageFadeOut = anime({
  delay: 500,
  targets: '#home, #about-us, #projects, #contact-us',
  duration: 8000,
  opacity: 1,
});



//Content Appearing and Disappearing
var animation = anime({
  targets: '.play-pause-demo .el',
  translateX: 270,
  delay: function(el, i) { return i * 100; },
  direction: 'alternate',
  autoplay: false,
  loop: false,
  easing: 'easeIn'
});




document.querySelector('.play-pause-demo .pause').onclick = animation.pause;


//Another approach
logoTimeline
.add({
    targets: text1,
    duration: 700,
    delay: function(el, index) { return index*50; },
    opacity: 1,

    easing: 'easeOutCirc',
    translateX: function(el, index) {
        return [(-50+index*10),0]
    },
    offset:0,
    complete: function(anim) {
        logoTimeline.remove();
    }
});
*/
