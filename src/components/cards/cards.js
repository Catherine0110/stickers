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

const cardsIntervalAnimate = (blockHeight,scrollHeight, animateHide, btn) => {
    let interval = setInterval(() => {
        if(blockHeight > scrollHeight) {
            animateHide ? blockHeight-- : scrollHeight++
            
            cardsWrap.style.height = `${animateHide ? blockHeight : scrollHeight}px`;
            if(scrollHeight  === blockHeight) {
                clearInterval(interval)
                btn.removeAttribute('disabled')
                if(animateHide) {
                    cardsWrap.classList.remove('isShow')
                    cardsWrap.style.height = ''
                }
            }
        }
    },0.1)    
}


btnHide.addEventListener('click', () => {
    btnHide.classList.toggle('show')
    let scrollHeight = cardsWrapHeight;
    btnHide.setAttribute('disabled', true)
    if(btnHide.classList.contains('show')) {
        btnHideText.textContent = 'Скрыть'
        cardsWrap.classList.add('isShow')        
        let blockHeight = cardsWrap.offsetHeight;        
        cardsIntervalAnimate(blockHeight,scrollHeight, false, btnHide)        
    }else {
        btnHideText.textContent = btnHideTextContent 
        let blockHeight = cardsWrap.offsetHeight;
        cardsIntervalAnimate(blockHeight,scrollHeight, true, btnHide)
    }
})

handleCardsClick(cards)