const header = document.querySelector('.header')

window.onscroll = () => {
  if (window.scrollY > 1) {
    header.classList.add('header__shadow')
  } else {
    header.classList.remove('header__shadow')
  }
}
