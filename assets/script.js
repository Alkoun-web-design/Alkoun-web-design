
// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: 1440,
    duration: 40000,
    easing: 'linear',
    loop: true,
});



function showPage() {
  const h = document.getElementById("home");
  const p = document.getElementById("projects");
  const a = document.getElementById("about-us");
  const c = document.getElementById("contact-us");

  if (h.style.display === "none") {
    h.style.display = "block" && p, a, c.style.display = "none";
  } else if (p.style.display = "none"){
    p.style.display = "flex" && h, a, c.style.display = "none";
  } else if (a.style.display = "none"){
    a.style.display = "block" && h, p, c.style.display = "none";
  } else if (c.style.display = "none"){
    c.style.display = "block" && h, p, a.style.display = "none";
  }
};


/*// Navigation button hover and mouse over for project details
const hoverAnime = document.querySelector(".nav-buton");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});

//Sjowing elements
const element = document.querySelector("#box");

element.style.display = "block";


//Hiding Elements
const element = document.querySelector("#box");

element.style.display = "none";


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
