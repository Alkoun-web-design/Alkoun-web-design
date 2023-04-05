const man = document.querySelector(".man");
const stars = document.querySelectorAll('#stars path');
const projectNames = ["project-name-0", "project-name-1", "project-name-2"];
const projectDetails = ["project-0-details", "project-1-details", "project-2-details"];
const spaceBG = document.querySelector(".space");
const homeElements = ['#line1','#line2']
// const spaceArea = spaceBG.getBoundingClientRect();
// const spaceTranslateX = spaceArea.right - spaceArea.left;
const oldUI = [spaceBG, '.earth', '.man', '#header', '#footer', '#home', '#projects', '#contact-us', '#about-us', '#privacy-policy']
const newUI = ['#newHome','#stars']; 

const fadeInOut = [{opacity: 0},{opacity: 1},{opacity: 0}];
const fadeOut = [{opacity: 1},{opacity: 0}]
const fadeIn = [{opacity: 0},{opacity: 1}]
const colorIn = [{fill: '#f4f4f4'},{fill: '#af1818'}]
const music = document.querySelector('audio');
const vanisher = document.querySelector(".l21");
const nameInput = document.querySelector('.ui-input');
const input = document.querySelector('.ui-input input');
const bodyHTML = document.querySelector('body');
const changer = document.querySelector('#changeButton');

const heart = document.querySelector('#heart');
const heartPath = document.querySelector('#heart-path');
const lyricH1s = document.querySelectorAll('.brush h1');
const brushH1 = document.querySelector('.brush h1');
const brush = document.querySelector('.brush');
const h1Delay = [14000, 17000, 23000, 37000, 45000, 45000, 52000,
                59500, 66000, 71000, 74500, 81000, 89000, 95500,
                102500, 110000, 117000, 124500, 132000, 138000,
                144000, 152000, 159000, 166000, 173000, 180000,
                187000, 194000]
const pages = ["#home", "#projects", "#about-us", "#contact-us", "#privacy-policy",]; 
const navButtons = ["#home-btn", "#projects-btn", "#about-us-btn", "#contact-us-btn", "#privacy-policy-btn"];




const vAnimation = (targetDuration, lyricNum, callback) => {
  brushH1.innerHTML=lyricNum;
  anime({
    targets: brushH1,
    keyframes: fadeInOut,
    duration: targetDuration,
    easing: 'linear',
  });
  callback;
}

const animation = (targetElement, targetKeyframes, moveX, moveY, targetDelay, targetDuration, isLoop) => {
  anime({
    targets: targetElement,
    keyframes: targetKeyframes,
    translateX: moveX,
    translateY: moveY, 
    delay: targetDelay,
    duration: targetDuration,
    loop: isLoop,
    easing: 'linear',
  });
}


homeanime = animation(homeElements, fadeIn, null, null, 0, 2000, false)

music.onplay = (event) => {
  animation(heart, fadeInOut, null, null, 0, 4000, true);
  animation(heartPath, colorIn, null, null, 0, 210000, false);
  animation(lyricH1s, fadeIn, null, null, 12000, 1000, false);
  animation(brush, null, null, 1500, 12000, 2000, false)

};

const sparklingStars = () => {
  for (let star of stars){
    let randDelay = (Math.random()*1000);
    animation(star, fadeIn, null, null, randDelay, 1000, true)
}};




// const spaceAnimation = () => {
//   if (innerWidth === 980) {
//     return 980
//   } else if (innerWidth > 980) {
//     return innerWidth / 1.4
//   } else if (innerWidth > 980) {
//     return innerWidth * 1.4
//   } 
// }

// if (translatex >  980){
//   980-0.92 translatex -0.92;
// }

// const sapceAnime = () => {
//   if(spaceTranslateX < 982){
//   spaceTranslateX - 1 % 
//   };
// };


// fOR yOU
vanisher.addEventListener('click', function(){
  nameInput.style.display='block';
  animation(nameInput, fadeIn, null, null, 0, 500, false);
});

changer.addEventListener('click', function(){
  if(input.value.toLowerCase()==='lezan'){
    animation(oldUI, fadeOut, null, null, 3000, 2000, false) 
    animation('.ui-input', fadeOut, null, null, 4000, 2000, false);
    animation(newUI, fadeIn, null, null, 6000, 2000, false)
    sparklingStars();
  } else {
    animation('#message', fadeInOut, null, null, 0, 6000, false);
  }
});


// Space Animation
const spaceRotation = animation('.space', null, 980, null, 0, 30000, true);

// Spaceman Animation
const spacemanRotation = animation('.man', null, 3000, null, 0, 50000, true);

/*function hide(evt){
  evt.target.style.visibility = 'hidden';
}*/

// Navigation
const showPage = function(){
  for (let navButton of navButtons) {
    if (navButton.includes(this.id)) {
      for (let page of pages) {
        if (navButton.includes(page)){
          document.querySelector(page).classList.add('active');
          document.querySelector(page).classList.remove('inactive');
          animation(page, fadeIn, null, null, 0, 1000, false);
        } else {
          document.querySelector(page).classList.add('inactive');
          document.querySelector(page).classList.remove('active');
          animation(page, fadeOut, null, null, 0, 500, false);
        }
      }  
    }
  }
};

document.querySelector("#home-btn").addEventListener('click', showPage);
document.querySelector("#projects-btn").addEventListener('click', showPage);
document.querySelector("#about-us-btn").addEventListener('click', showPage);
document.querySelector("#contact-us-btn").addEventListener('click', showPage);
document.querySelector("#privacy-policy-btn").addEventListener('click', showPage);

