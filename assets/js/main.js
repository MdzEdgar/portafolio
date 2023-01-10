const header = document.getElementById('header')
const menu = document.getElementById('nav-menu')

header.addEventListener('click', e => {
    const target = e.target
    if (e.target.closest('.btn-open')) {
        menu.classList.add('show_menu')
    }
    
    if (e.target.closest('.btn-close')) {
        menu.classList.remove('show_menu')
    }

    if (e.target.closest('.menu-link')) {
        menu.classList.remove('show_menu')
    }

})