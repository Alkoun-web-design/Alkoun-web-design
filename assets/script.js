const h = document.getElementById("home");
const p = document.getElementById("projects");
const a = document.getElementById("about-us");
const c = document.getElementById("contact-us");


// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: 1440,
    duration: 40000,
    easing: 'linear',
    loop: true,
});


// Hovering on Navigation Buttons
const navBtnHover = anime({
  targets: '.headline, .cta',
  duration: 20000,
  color: '#F4F4F4;',
});



// Navigation Buttons
function showHome() {
  h.style.display = "block";
  c.style.display = "none";
  a.style.display = "none";
  p.style.display = "none";
};
  
function showProjects() {
  p.style.display = "flex"; 
  c.style.display = "none";
  a.style.display = "none";
  h.style.display = "none";
};

function showAboutUs() {
  a.style.display = "block";
  c.style.display = "none";
  h.style.display = "none";
  p.style.display = "none";
};

function showContactUs() {
  c.style.display = "block";
  p.style.display = "none";
  h.style.display = "none";
  a.style.display = "none";
};

document.querySelector('').onclick = animation.play;


/*// Navigation button hover and mouse over for project details
const hoverAnime = document.querySelector(".nav-buton");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
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



document.querySelector('.play-pause-demo .play').onclick = animation.play;
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
