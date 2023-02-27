const humberger = document.querySelector('.humberger-menu')
humberger.addEventListener('click', () => {
  const nav = document.querySelector('#nav')
  nav.classList.toggle('active')
})

const header = document.querySelector('#header')
const sectionTwo = document.querySelector('.section-one')
const upadateSectionOne = () => {
  const headerHeight = header.clientHeight
  sectionTwo.style.marginTop = headerHeight + 'px'
}

window.addEventListener('resize', upadateSectionOne)

upadateSectionOne()
