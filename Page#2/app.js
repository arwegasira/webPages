const header = document.querySelector('#header')
const sectionTwo = document.querySelector('.section-one')
const upadateSectionOne = () => {
  const headerHeight = header.clientHeight
  sectionTwo.style.marginTop = headerHeight + 'px'
}

window.addEventListener('resize', upadateSectionOne)

upadateSectionOne()
