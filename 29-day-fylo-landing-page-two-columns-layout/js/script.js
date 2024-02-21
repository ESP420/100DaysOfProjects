function sendEmailHero(event) {
    event.preventDefault();

    const email = document.getElementById("email-input");
    const errorMessage = document.getElementById("error-message");
    const validMessage = document.getElementById("valid-message");

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email?.value == "") {
        errorMessage.classList.add("hidden");
        validMessage.classList.add("hidden");
        return
    }
    if (!emailPattern.test(email.value)) {
        errorMessage.classList.remove("hidden");
        validMessage.classList.add("hidden");
    } else {
        errorMessage.classList.add("hidden")
        validMessage.classList.remove("hidden")
    }
}
function sendEmailAccess(event) {
    event.preventDefault();

    const email = document.getElementById("email-input-2");
    const errorMessage = document.getElementById("error-message-2");
    const validMessage = document.getElementById("valid-message-2");

    // Check if email is valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email?.value == "") {
        errorMessage.classList.add("hidden");
        validMessage.classList.add("hidden");
        return
    }
    if (!emailPattern.test(email.value)) {
        errorMessage.classList.remove("hidden");
        validMessage.classList.add("hidden");
    } else {
        errorMessage.classList.add("hidden")
        validMessage.classList.remove("hidden")
    }
}

/* animations */


/* animations */
const animations = [
    'slideUp',
    'slideLeft',
    'slideRight',
    'slideExpandUp',
    'expandUp',
    'fadeIn',
    'bigEntrance'
]
function hasAnyClass(element) {
    return animations.some(function (className) {
        return element.classList.contains(className);
    });
}
const observerStoreDescription = new IntersectionObserver((entries) => {
    /* Add or remove class depending on whether or not item is visible */
    for (const observer of entries) {
        if (observer.isIntersecting && !hasAnyClass(observer.target)) {
            setTimeout(() => {
                const NroRandom = Math.floor(Math.random() * animations.length);
                observer.target.classList.add(animations[NroRandom]);
            }, 100); animations.length
        }
    }

});
/* hero section */

const header_logo = document.getElementsByClassName('header__logo')
const header_menu = document.getElementsByClassName('header__menu')
const hero_title = document.getElementsByClassName('hero__title')
const hero_description = document.getElementsByClassName('hero__description')
const hero_input = document.getElementsByClassName('hero__input')
const hero_btn = document.getElementsByClassName('hero__btn')
const hero_img = document.getElementsByClassName('hero__img')

observerStoreDescription.observe(header_logo[0])
observerStoreDescription.observe(header_menu[0])
observerStoreDescription.observe(hero_title[0])
observerStoreDescription.observe(hero_description[0])
observerStoreDescription.observe(hero_input[0])
observerStoreDescription.observe(hero_btn[0])
observerStoreDescription.observe(hero_img[0])

/* productive */

const productive_title = document.getElementsByClassName('productive__title')
const productive_description = document.getElementsByClassName('productive__description')
const productive_link = document.getElementsByClassName('productive__link')
const card = document.getElementsByClassName('card')
const productive_img = document.getElementsByClassName('productive__img')

observerStoreDescription.observe(productive_title[0])
observerStoreDescription.observe(productive_description[0])
observerStoreDescription.observe(productive_link[0])
observerStoreDescription.observe(card[0])
observerStoreDescription.observe(productive_img[0])

/* access */

const access_title = document.getElementsByClassName('access__title')
const access_description = document.getElementsByClassName('access__description')
const access_input = document.getElementsByClassName('access__input')
const access_btn = document.getElementsByClassName('access__btn')

observerStoreDescription.observe(access_title[0])
observerStoreDescription.observe(access_description[0])
observerStoreDescription.observe(access_input[0])
observerStoreDescription.observe(access_btn[0])

/* footer */

const footer_inner = document.getElementsByClassName("footer__inner");
const links_1 = document.getElementById("links-1");
const links_2 = document.getElementById("links-2");
const social_icons = document.getElementsByClassName("social__icons");
const social_icons_text = document.getElementsByClassName("social__icons-text");

observerStoreDescription.observe(footer_inner[0])
observerStoreDescription.observe(links_1)
observerStoreDescription.observe(links_2)
observerStoreDescription.observe(social_icons[0])
observerStoreDescription.observe(social_icons_text[0])