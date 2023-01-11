const btnOpen = document.getElementById('btnOpen')
const navMenu = document.getElementById('navMenu')
const btnClose = document.getElementById('btnClose')

btnOpen.onclick = () => {
  navMenu.classList.toggle('show--menu')
}

document.querySelector('.navbar__list').addEventListener('click', (e) => {
  if (e.target.classList.contains('navbar__link')) {
    navMenu.classList.remove('show--menu')
  }
})

btnClose.onclick = () => {
  navMenu.classList.remove('show--menu')
}
