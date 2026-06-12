const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden')
})