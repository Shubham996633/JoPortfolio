                    /*=============== SHOW SIDEBAR ===============*/


                    /*===== SIDEBAR SHOW =====*/
                    /* Validate If Constant Exists */


                    /*===== SIDEBAR HIDDEN =====*/
                    /* Validate If Constant Exists */


                    /*=============== SKILLS TABS ===============*/


                    /*=============== MIXITUP FILTER PORTFOLIO ===============*/


                    /*===== Link Active Work =====*/


                    /*===== Work Popup =====*/


                    /*=============== SERVICES MODAL ===============*/


                    /*=============== SWIPER TESTIMONIAL ===============*/


                    /*=============== INPUT ANIMATION ===============*/


                    /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


                    /*=============== SHOW SCROLL UP ===============*/


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