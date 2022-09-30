
// Space Animation
const spacerotation = anime({
    targets: '.space',
    translateX: 1440,
    duration: 40000,
    easing: 'linear',
    loop: true,
});


// Navigation button hover
const element = document.querySelector(".nav-buton");

element.addEventListener("mouseover", event => {
  console.log("Mouse in");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});
