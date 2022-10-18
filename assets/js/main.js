/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
      navMenu.classList.add('show-menu')  
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
      navMenu.classList.remove('show-menu')  
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

      function toggleSkills(){
        let itemClass = this.parentNode.className

        for(i=0; i < skillsContent.length; i++){
          skillsContent[i].className = 'skills__content skills__close'
        }
        if(itemClass == 'skills__content skills__close'){
          this.parentNode.className = 'skills__content skills__open'
        }


      }

 skillsHeader.forEach((el)=> {
   el.addEventListener('click', toggleSkills)
 }) 

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
  tab.addEventListener('click',() =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
    })
     target.classList.add('qualification__active')

  tabs.forEach(tab =>{
    tab.classList.remove('qualification__active')
  })
    tab.classList.add('qualification__active')
  })
})


/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
}  
 
modalBtns.forEach((modalBtn, i) =>{
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
})
modalCloses.forEach((modalClose) =>{
  modalClose.addEventListener('click' , () =>{
    modalViews.forEach((modalView) =>{
      modalView.classList.remove('active-modal')
    })
  })
})


/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  
  loop: true,
  grabCursor: true,
  spaceBetween:48,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets:true,
  },
  breakpoints:{
    568:{
      slidesPerView:2,
    }
  }
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-up class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const resme = document.querySelector('.about__buttons')
resme.addEventListener('click', () => {
  window.open('../assets/Resources/Resume/index.html', "",  "width=1920, height=1080")
})


// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 900) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 7);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 150;

    if(this.isDeleting) {
      typeSpeed = 100;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 100;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.home__subtitle');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


var mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});


const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
  linkWork.forEach(l => {
      l.classList.remove('active-work')
      this.classList.add('active-work')
  })
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

document.addEventListener('click', (e) => {
  if(e.target.classList.contains('work__button')){
      togglePortfolioPopup()
      portfolioItemDetails(e.target.parentElement)
  }
})

function togglePortfolioPopup(){
  document.querySelector('.portfolio__popup').classList.toggle('open')
}

document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
  document.querySelector('.portfolio__popup-img').src = portfolioItem.querySelector('.work__img').src
  document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML
  document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML
}

const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:1800,
  delay:400,
  reset:true

})

// sr.reveal(`.home__social, home__title, button--flex`)

// sr.reveal(`.home__description, home__data`, {delay:500})
// sr.reveal(`.skills, .qualification`, {delay:500})
// sr.reveal(`.button--flex, .home__scroll-button, .home__scroll`, {delay:900})
// sr.reveal(`.work__filters, .portfolio__title-heading, .footer, .project__container`, {delay:700})
// sr.reveal(`.home__img`, {delay:200, origin:'bottom'})
// sr.reveal(`.work__card`,{delay:72, origin:'bottom'})
// sr.reveal(`.about__data`,{origin:'right', delay:210})
// sr.reveal(`.about__img`,{origin:'left', delay:240})
