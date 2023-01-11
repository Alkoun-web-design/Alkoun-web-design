

const l2 = document.getElementById("line2");
const l4 = document.getElementById("line4");
const l1 = document.getElementById("line1");
const l3 = document.getElementById("line3");
const man = document.querySelector(".man");

const projectNames = ["project-name-0", "project-name-1", "project-name-2"];
const projectDetails = ["project-0-details", "project-1-details", "project-2-details"];
const spaceBG = document.querySelector(".space");


//fOR yOU

const forYou = document.querySelector(".l21");
forYou.addEventListener('click', function(){ 
  anime({
    targets: '#header, #footer, #home, #projects, #contact-us, #about-us, #privacy-policy',
    delay: 3000, 
    duration: 2000,
    easing: 'linear',
    opacity: 0,
  });
});

forYou.addEventListener('click', function(){ 
  anime({
    targets: '#music, #line2, #line4',
    delay: 6000, 
    duration: 2000,
    easing: 'linear',
    opacity: 1,
  });
});


// Space Animation
const spaceRotation = anime({
    targets: '.space',
    translateX: innerWidth,
    duration: 30000,
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
  targets: '#line1, #line3',
  duration: 8000,
  opacity: 1,
});

/*function hide(evt){
  evt.target.style.visibility = 'hidden';
}*/


const pages = ["#home", "#projects", "#about-us", "#contact-us", "#privacy-policy",] 
const navButtons = ["#home-btn", "#projects-btn", "#about-us-btn", "#contact-us-btn", "#privacy-policy-btn"];
const showPage = function(){
  for (let navButton of navButtons) {
    if (navButton.includes(this.id)) {
      for (let page of pages) {
        if (navButton.includes(page)){
          document.querySelector(page).classList.add('visible')
          document.querySelector(page).classList.remove('invisible')
        } else {
          document.querySelector(page).classList.add('invisible')
          document.querySelector(page).classList.remove('visible')
        }
      }  
    }
  }
};

document.getElementById("home-btn").addEventListener('click', showPage);
document.getElementById("projects-btn").addEventListener('click', showPage);
document.getElementById("about-us-btn").addEventListener('click', showPage);
document.getElementById("contact-us-btn").addEventListener('click', showPage);
document.getElementById("privacy-policy-btn").addEventListener('click', showPage);

/*

function showPrivPolicy() {
  anime({
    delay: 50,
    targets: '#priv-policy',
    duration: 8000,
    opacity: 1,
  });

*/
