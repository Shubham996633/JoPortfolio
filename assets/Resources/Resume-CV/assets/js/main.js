const messanger = document.querySelector('.avatar__block')
messanger.querySelector('span').addEventListener('click', () => {
    window.open('https://t.me/shubham996633', '_blank')
})

const bars = document.querySelectorAll('.progress__bar')

bars.forEach(function(bar){
    let percentage = bar.dataset.percent
    let tooltip = bar.children[0]
    tooltip.innerText = percentage +'%'
    bar.style.width = percentage + '%'
})