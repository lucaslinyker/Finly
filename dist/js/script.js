const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.toggle('hidden')
        menuBtn.setAttribute('aria-expanded', String(!isHidden))
    })

    // Fecha o menu ao clicar em um link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden')
            menuBtn.setAttribute('aria-expanded', 'false')
        })
    })

    // Fecha ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('header')) {
            mobileMenu.classList.add('hidden')
            menuBtn.setAttribute('aria-expanded', 'false')
        }
    })
}