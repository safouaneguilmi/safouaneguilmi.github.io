const navBtn = document.querySelector('.nav__btn')
const nav =document.querySelector('.side-bare__nav')
const navLink = document.querySelectorAll('.side-bare__link')



navBtn.addEventListener('click', ()=> {
  const isOpened = navBtn.getAttribute('aria-expanded')
  const navOpened = nav.getAttribute('aria-expanded')

  if(isOpened === 'false') {
    navBtn.setAttribute('aria-expanded', 'true')
  } else {
    navBtn.setAttribute('aria-expanded', 'false')
  }

  if(navOpened === 'false') {
    nav.setAttribute('aria-expanded', 'true')
  } else {
    nav.setAttribute('aria-expanded', 'false')
  }
})



navLink.forEach(link => link.addEventListener("click", ()=> {
  navBtn.setAttribute('aria-expanded', 'false')
  nav.setAttribute('aria-expanded', 'false')
}))

