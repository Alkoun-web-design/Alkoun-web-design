const h = document.getElementById("home");
const p = document.getElementById("projects");
const a = document.getElementById("about-us");
const c = document.getElementById("contact-us");
const pp = document.getElementById("priv-policy");
const l2 = document.getElementById("line2")
const l4 = document.getElementById("line4")
const l1 = document.getElementById("line1")
const l3 = document.getElementById("line3")
const man = document.querySelector(".man")


/*hAPPY bIRTHDAY!!
const hB1 = anime({
  targets: '#header',
  delay: 3000, 
  duration: 2000,
  easing: 'linear',
  opacity: 0,
});

const HB2 = anime({
  targets: '#footer', 
  delay: 3000, 
  duration: 2000,
  easing: 'linear',
  opacity: 0,
});

const HB4 = anime({
  targets: '#line1, #line3',
  delay: 4000, 
  duration: 2000,
  easing: 'linear',
  opacity: 0,
});

const HB5 = anime({
  targets: '#line2, #line4',
  delay: 6000, 
  duration: 2000,
  easing: 'linear',
  opacity: 1,
});

const HB6 = l1.style.display = "none";
const HB7 = l3.style.display = "none";
const HB8 = l2.style.display = "block";
const HN9 = l4.style.display = "block";*/



// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: 1028,
    duration: 40000,
    easing: 'linear',
    loop: true,
});

const spacemanRotation = anime({
  delay: 8000,
  targets: '.man',
  translateX: 3000,
  duration: 50000,
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
  pp.style.display = "none";
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
  pp.style.display = "none";
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
  pp.style.display = "none";
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
  pp.style.display = "none";
};

function showPrivPolicy() {
  anime({
    delay: 50,
    targets: '#priv-policy',
    duration: 8000,
    opacity: 1,
  });
  pp.style.display = "block";
  c.style.display = "none";
  p.style.display = "none";
  h.style.display = "none";
  a.style.display = "none";
};

// Project Details show upon hover
const projectDetails1 = document.querySelector(".project-1-details");
const project1 = document.querySelector(".project-name-1");
const projectDetails2 = document.querySelector(".project-2-details");
const project2 = document.querySelector(".project-name-2");
const projectDetails3 = document.querySelector(".project-3-details");
const project3 = document.querySelector(".project-name-3");

project1.addEventListener("mouseover", function() {
  anime({
    targets: '.project-1-details',
    duration: 400,
    easing: 'linear',
    opacity: 1,
  });
  projectDetails1.style.display="block";
  projectDetails2.style.display="none";
  projectDetails3.style.display="none";
});

project2.addEventListener("mouseover", function() {
  anime({
    targets: '.project-2-details',
    duration: 400,
    easing: 'linear',
    opacity: 1,
  });
  projectDetails2.style.display="block";
  projectDetails1.style.display="none";
  projectDetails3.style.display="none";
});

project3.addEventListener("mouseover", function() {
  anime({
    targets: '.project-3-details',
    duration: 400,
    easing: 'linear',
    opacity: 1,
  });
  projectDetails3.style.display="block";
  projectDetails1.style.display="none";
  projectDetails2.style.display="none";
});



/*Hover Effect on Project Names
project1.addEventListener("mouseover", function() {
  anime({
    targets: '.project-name-1, .project-name-img-1',
    duration: 400,
    easing: 'linear',
    color: "#040404",
    backgroundColor: "#f4f4f4e1",
    fill: "#040404",
  });
});

project1.addEventListener("mouseout", function() {
  anime({
    targets: '.project-name-1, .project-name-img-1',
    duration: 400,
    easing: 'linear',
    color: "#F4F4F4",
    backgroundColor: "0",
    fill: "#F4F4F4",
  });
});


project2.addEventListener("mouseover", function() {
  anime({
    targets: '.project-name-2, .project-name-img-2',
    duration: 400,
    easing: 'linear',
    color: "#040404",
    backgroundColor: "#f4f4f4e1",
    fill: "#040404",
  });
});

project2.addEventListener("mouseout", function() {
  anime({
    targets: '.project-name-2, .project-name-img-2',
    duration: 400,
    easing: 'linear',
    color: "#F4F4F4",
    backgroundColor: "0",
    fill: "#F4F4F4",
  });
});

project3.addEventListener("mouseover", function() {
  anime({
    targets: '.project-name-3, .project-name-img-3',
    duration: 400,
    easing: 'linear',
    color: "#040404",
    backgroundColor: "#f4f4f4e1",
    fill: "#040404",
  });
});

project3.addEventListener("mouseout", function() {
  anime({
    targets: '.project-name-3, .project-name-img-3',
    duration: 400,
    easing: 'linear',
    color: "#F4F4F4",
    backgroundColor: "0",
    fill: "#F4F4F4",
  });
});*/

//Social Media Icons hovering
const socialMediaIcons = document.querySelector(".sm-icons");
socialMediaIcons.addEventListener("mouseover", function() {
  socialMediaIcons.style.fill="linear-gradient(90deg, #1D176C 0%, #7118B6 100%)";
});




//  navButton.addEventListener("mouseout", event => {
//  console.log("Mouse out");
//});



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
