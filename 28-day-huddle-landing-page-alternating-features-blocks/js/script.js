const snippets_img = document.getElementsByClassName("hero__header-logo");
const btn_header = document.getElementsByClassName("btn--white");
const hero_title = document.getElementsByClassName("hero__title");
const hero_description = document.getElementsByClassName("hero__description");
const hero_btn = document.getElementsByClassName("hero__btn");
const hero_img = document.getElementsByClassName("hero__img");
const started = document.getElementsByClassName("started");
const footer_inner = document.getElementsByClassName("footer__inner");
const links_1 = document.getElementById("links-1");
const links_2 = document.getElementById("links-2");
const social_icons = document.getElementsByClassName("social__icons");
const social_icons_text = document.getElementsByClassName("social__icons-text");

/* card */
const card_i_1 = document.getElementById('card-i-1')
const card_t_1 = document.getElementById('card-t-1')
const card_d_1 = document.getElementById('card-d-1')
const card_i_2 = document.getElementById('card-i-2')
const card_t_2 = document.getElementById('card-t-2')
const card_d_2 = document.getElementById('card-d-2')
const card_i_3 = document.getElementById('card-i-3')
const card_t_3 = document.getElementById('card-t-3')
const card_d_3 = document.getElementById('card-d-3')
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
observerStoreDescription.observe(snippets_img[0]);
observerStoreDescription.observe(btn_header[0]);
observerStoreDescription.observe(hero_title[0]);
observerStoreDescription.observe(hero_description[0]);
observerStoreDescription.observe(hero_btn[0]);

observerStoreDescription.observe(hero_img[0]);
/* card section */
observerStoreDescription.observe(card_i_1)
observerStoreDescription.observe(card_t_1)
observerStoreDescription.observe(card_d_1)
observerStoreDescription.observe(card_i_2)
observerStoreDescription.observe(card_t_2)
observerStoreDescription.observe(card_d_2)
observerStoreDescription.observe(card_i_3)
observerStoreDescription.observe(card_t_3)
observerStoreDescription.observe(card_d_3)
/* started */
observerStoreDescription.observe(started[0]);
/* footer */
observerStoreDescription.observe(footer_inner[0])
observerStoreDescription.observe(links_1)
observerStoreDescription.observe(links_2)
observerStoreDescription.observe(social_icons[0])
observerStoreDescription.observe(social_icons_text[0])
/* 
constraints
 if the  array is empty return 0
 0<=0 size 10000
 if two temperatures are equal to zero the positive number is returned

const observerBtnStore = new IntersectionObserver(entries => {

    let time = 0
    if (entries[0].isIntersecting && !btn_store[0].classList.contains('bigEntrance')) {
        for (let index = 0; index < btn_store.length; index++) {
            const element = btn_store[index];
            time += 100;
            setTimeout(() => {
                element.classList.add('slideExpandUp');
            }, time);
        }
    }
});
observerBtnStore.observe(btn_store[0]); */