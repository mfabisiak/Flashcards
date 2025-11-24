async function loadContent() {
    async function insertHeader() {
        let headerContent = await fetch('header.html')
        document.getElementById('header').innerHTML = await headerContent.text()
    }

    async function insertFooter() {
        let footerContent = await fetch('footer.html')
        document.getElementById('footer').innerHTML = await footerContent.text()
    }

    let theme = localStorage.getItem('theme')

    if (!theme) {
        localStorage.setItem('theme', 'dark-mode')
        theme = 'dark-mode'
    }

    setTheme(theme)

    try {
        await insertHeader()
        await insertFooter()
    } catch (error) {
        console.log(error)
    }

    document.body.style.visibility = 'visible'

    document.addEventListener('click', function (event) {
        const nav = document.querySelector('nav')
        const hamburger = document.querySelector('.hamburger')

        if (nav && !nav.contains(event.target)) {
            const mobileMenu = document.querySelector('.mobile-menu')
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active')
                if (hamburger) {
                    hamburger.classList.remove('active')
                }
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", loadContent)


function setTheme(theme) {
    document.body.className = theme
    localStorage.setItem('theme', theme)
}

function changeTheme() {
    let newTheme = document.body.className === "light-mode" ? "dark-mode" : "light-mode"
    setTheme(newTheme)
}

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger')
    const mobileMenu = document.querySelector('.mobile-menu')

    if (hamburger && mobileMenu) {
        hamburger.classList.toggle('active')
        mobileMenu.classList.toggle('active')
    }
}

