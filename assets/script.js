
// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: 1440,
    duration: 40000,
    easing: 'linear',
    loop: true,
});


/*// Navigation button hover
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


//Sjowing elements
const element = document.querySelector("#box");

element.style.display = "block";


//Hiding Elements
const element = document.querySelector("#box");

element.style.display = "none";*/