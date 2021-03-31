hljs.highlightAll()

const shareBTN = document.querySelector('#share')

if (shareBTN) {
  shareBTN.addEventListener('click', async () => {
    await navigator.clipboard.writeText(location.href)
  })
}

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  // slidesPerView: 6,
  // slidesPerGroup: 6,
  spaceBetween: 10,
  loopFillGroupWithBlank: true,
  autoHeight: true,

  breakpoints: {
    720: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },

  // If we need pagination
  pagination: {
    type: 'progressbar',
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
