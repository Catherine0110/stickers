const cards = document.querySelectorAll('.js-card'),
      btnHide = document.querySelector('.js-hide-cards'),
      btnHideText = document.querySelector('.js-hide-cards-text'),
      btnHideTextContent = btnHideText && btnHideText.textContent,
      cardsWrap = document.querySelector('.js-cards-wrap'),
      cardsWrapHeight = cardsWrap && cardsWrap.offsetHeight;

function handleCardsClick(cardsNodes) {
    cardsNodes.forEach((card,i) => {
        card.addEventListener('click', () => {
            const dataSlider = card.dataset.slider
            const sliderNode = document.getElementById(dataSlider)
            const top = sliderNode.getBoundingClientRect().top;
            const sliderSwiper = sliderNode && sliderNode.swiper
            window.scrollBy({top: top, behavior: 'smooth'});
            sliderSwiper && sliderSwiper.slideTo(i)
        })
    })
}


btnHide.addEventListener('click', () => {
    btnHide.classList.toggle('show')
    let scrollHeight = cardsWrapHeight;
    btnHide.setAttribute('disabled', true)
    if(btnHide.classList.contains('show')) {
        btnHideText.textContent = 'Скрыть'
        cardsWrap.classList.add('isShow')  
         
        cardsWrap.style.height = `${cardsWrap.scrollHeight}px` 
        btnHide.removeAttribute('disabled')     
               
    }else {
        btnHideText.textContent = btnHideTextContent 
        cardsWrap.style.height = `${scrollHeight}px`
        cardsWrap.classList.remove('isShow')  
        
        cardsWrap.style.height = ``
        btnHide.removeAttribute('disabled')
      
    }
})

handleCardsClick(cards)