const man = document.querySelector(".man");
const stars = document.querySelectorAll('#stars path');
const projectNames = ["project-name-0", "project-name-1", "project-name-2"];
const projectDetails = ["project-0-details", "project-1-details", "project-2-details"];
const spaceBG = document.querySelector('.space');
const homeElements = ['#line1','#line2'];
// const spaceArea = spaceBG.getBoundingClientRect();
// const spaceTranslateX = spaceArea.right - spaceArea.left;
const oldUI = [spaceBG, '.earth', '.man', '#header', '#footer', '#home', '#projects', '#contact-us', '#about-us', '#privacy-policy'];
const newUI = ['#newHome','#stars']; 
const newHome = document.querySelector('#newHome');
const starsBG = document.querySelector('#stars');
const fadeInOut = [{opacity: 0},{opacity: 1},{opacity: 0}];
const fadeOut = [{opacity: 1},{opacity: 0}];
const fadeIn = [{opacity: 0},{opacity: 1}];
const colorIn = [{fill: '#f4f4f4'},{fill: '#af1818'}];
const music = document.querySelector('audio');
const vanisher = document.querySelector(".l21");
const nameInput = document.querySelector('.ui-input');
const input = document.querySelector('.ui-input input');
const bodyHTML = document.querySelector('body');
const changer = document.querySelector('#changeButton');
const footer = document.getElementById('footer');

// const lyrics = [`There's a thirst deep inside of me I can't control`,
//               `There's a desert underneath that cracks my bones`,
//               `There's a river that runs dry within my heart`,
//               `There's a distance to your light that seems too far`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `Let it wash away the sorrows I've found`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `There's a storm within my <span class="l-word">heart</span> that needs you now`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `<span class="l-word">Love</span> rain down`,
//               `<span class="l-word">Love</span> rain down`,
//               `There's a craving that will never come to pass`,
//               `There's a hunger that will never cease to last`,
//               `There's a aching that lies deep within my <span class="l-word">soul</span>`,
//               `For the promise that someday I could be whole`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `Let it wash away the sorrows I've found`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `There's a storm within my <span class="l-word">heart</span> that needs you now`,
//               `That needs you now`,
//               `And the fire inside is burning`,
//               `That this <span class="l-word">heart</span> cannot contain`,
//               `Know that I'm still longing`,
//               `Like the dry earth longs for the rain`,
//               `Yeah, yeah`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `Let it wash away the sorrows I've found`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `There's a storm within my <span class="l-word">heart</span> that needs you now`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `<span class="l-word">Love</span> rain down`,
//               `Let your <span class="l-word">love</span> rain down`,
//               `Let your <span class="l-word">love</span> rain down, rain down, rain down, rain down, yeah`];
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
const mw = document.querySelector('.mw-bg');




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

const animation = (targetElement, targetKeyframes, moveX, moveY, targetDelay, targetDuration, isLoop, callback) => {
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
  callback;
}


const bodyBG = () => {
  bodyHTML.style.background = 'linear-gradient(180deg, rgba(16,22,44,1) 10%, rgba(39,39,67,1) 55%, rgba(81,67,82,1) 100%)';
};

//Home FadeIn animation
homeFadeIn =animation(homeElements, fadeIn, null, null, 0, 2000, false, 
  // animation(mw, fadeIn, null, null, 0, 5000, false,
  //   animation(mw, null, -380, -2500, 0, 150000, false, null)
  // )
);

//MilkyWay Animation

// Space Animation
animation('.space', null, 1800, 0, 0, 70000, true, false);

// const spaceAnime = () => {
//     if (spaceBg.left==0) {
//       let area = document.getElementById("background-area");
//       area.innerHTML += '<img alt="Space-Background" class="space" src="assets/img/space3.svg">'; 
//     } else {

//     };
//   };

// Spaceman Animation
// animation(man, null, 3000, null, 0, 50000, true);

music.onplay = (event) => {
  animation(heart, fadeInOut, null, null, 0, 4000, true);
  animation(heartPath, colorIn, null, null, 0, 210000, false);
  animation(lyricH1s, fadeIn, null, null, 12000, 1000, false);
  animation(brush, null, null, 1500, 12000, 2000, false)
  
  setTimeout(vAnimation(5000, lyric[2]), 23000);
  setTimeout(vAnimation(7000, lyric[3]), 37000)
  setTimeout(vAnimation(7000, lyric[4]), 45000) 
  setTimeout(vAnimation(7000, lyric[5]), 45000)
  setTimeout(vAnimation(7000, lyric[6]), 52000) 
  setTimeout(vAnimation(6000, lyric[7]), 59500)
  setTimeout(vAnimation(3000, lyric[8]), 66000) 
  setTimeout(vAnimation(2000, lyric[9]), 71000) 
  setTimeout(vAnimation(6000, lyric[10]), 74500)
  setTimeout(vAnimation(6000, lyric[11]), 81000)
  setTimeout(vAnimation(6000, lyric[12]), 89000)
  setTimeout(vAnimation(6000, lyric[13]), 95500)
  setTimeout(vAnimation(7000, lyric[14]), 102500)
  setTimeout(vAnimation(7000, lyric[15]), 110000) 
  setTimeout(vAnimation(6000, lyric[16]), 117000) 
  setTimeout(vAnimation(6000, lyric[17]), 124500)
  setTimeout(vAnimation(6000, lyric[18]), 132000)
  setTimeout(vAnimation(6000, lyric[19]), 138000)
  setTimeout(vAnimation(6000, lyric[20]), 144000)
  setTimeout(vAnimation(6000, lyric[21]), 152000) 
  setTimeout(vAnimation(6000, lyric[22]), 159000)
  setTimeout(vAnimation(6000, lyric[23]), 166000)
  setTimeout(vAnimation(6000, lyric[24]), 173000)
  setTimeout(vAnimation(6000, lyric[25]), 180000)
  setTimeout(vAnimation(6000, lyric[26]), 187000) 
  setTimeout(vAnimation(6000, lyric[27]), 194000)
};

const sparklingStars = () => {
  for (let star of stars){
    let randDelay = (Math.random()*1000);
    animation(star, fadeIn, null, null, randDelay, 1000, true, null)
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
  animation(nameInput, fadeIn, null, null, 0, 500, false, null);
});

changer.addEventListener('click', function(){
  if(input.value.toLowerCase()==='lezan'){
    animation(oldUI, fadeOut, null, null, 3000, 2000, false, null) 
    newHome.style.display='block';
    starsBG.style.display='block';
    setTimeout(bodyBG, 4000)
    animation('.ui-input', fadeOut, null, null, 4000, 2000, false, null);
    animation(newUI, fadeIn, null, null, 6000, 2000, false, null)
    sparklingStars();
  } else {
    nameInput.style.display='none';
    // animation('#message', fadeInOut, null, null, 0, 6000, false);
  }
});




/*function hide(evt){
  evt.target.style.visibility = 'hidden';
}*/

// Navigation
const showPage = function() {
  for (let navButton of navButtons) {
    if (navButton.includes(this.id)) {
      for (let page of pages) {
        if (navButton.includes(page)){
          animation(page, fadeIn, null, null, 0, 1000, false);
          console.log('working');
          console.log(navButton);
          console.log(page);
          document.querySelector(page).classList.add('active');
          document.querySelector(page).classList.remove('inactive');
        } else {
          console.log('not working');
          console.log(navButton);
          console.log(page);
          animation(page, fadeOut, null, null, 0, 500, false);
          document.querySelector(page).classList.add('inactive');
          document.querySelector(page).classList.remove('active');
        }
      }  
    }
  }
};

document.getElementById("home-btn").addEventListener('click', showPage);
document.getElementById("about-us-btn").addEventListener('click', showPage);
document.getElementById("projects-btn").addEventListener('click', showPage);
document.getElementById("contact-us-btn").addEventListener('click', showPage);
document.getElementById("privacy-policy-btn").addEventListener('click', showPage);