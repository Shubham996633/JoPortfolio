

// /*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
//       navToggle = document.getElementById('nav-toggle'),
    //   navClose = document.getElementById('nav-close')

// /*===== MENU SHOW =====*/
// /* Validate if constant exists */
// if(navToggle){
//     console.log('hi')
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// /*===== MENU HIDDEN =====*/
// /* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

// /*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const toggl = document.querySelector('.menu-switcher')
console.log(toggl)

toggl.addEventListener('click', () => {
    console.log('hi')
    if(navMenu.classList.contains('show-menu')){
        navMenu.classList.remove('show-menu')
    }else{

        navMenu.classList.add('show-menu')
    }

})




/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')





/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function scaleCv(){
    document.body.classList.add('scale-cv')
}

function removeScale(){
    document.body.classList.remove('scale-cv')
}

let areaCv = document.querySelector('.resume')

let resumeButton = document.getElementById('resume-button')


let opt = {
    margin:       -1.5,

    filename:     'Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' },
    enableLinks: true,
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }

  };



function generateResume(){
   
    html2pdf(areaCv, opt)
}


resumeButton.addEventListener('click', () => {
    scaleCv()

    generateResume()

    setTimeout(removeScale, 5000)
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3639,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Download Initiated'
      })
})












  





function happy(){
    Swal.fire({
        title: '<strong><em>Thanking You</em></strong>',
        icon: 'Success',
        html:
          '<b>Keep Smiling It Suits You</b>', 
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        confirmButtonText:
          'Close'        

      })
  }