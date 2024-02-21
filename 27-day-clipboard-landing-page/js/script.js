/* Get element you want to animate */
const snippets_img = document.getElementsByClassName("snippets__img")
const snippets_subtitle = document.getElementsByClassName("snippets__subtitle")
const snippets_sub_description = document.getElementsByClassName("snippets__sub-description")

clipboard_title = document.getElementsByClassName("clipboard__title")
clipboard_description = document.getElementsByClassName("clipboard__description")
clipboard_img = document.getElementsByClassName("clipboard__img")


/* Using IntersectionObserver to check when item is visible */
const observerSnippetsImg = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */
    if (entries[0].isIntersecting && !snippets_img[0].classList.contains('fadeIn')) {
        setTimeout(() => {
            snippets_img[0].classList.add('fadeIn');
        }, 100);
    }

});
observerSnippetsImg.observe(snippets_img[0]);

const observerSnippetsText = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    let time = 100
    if (entries[0].isIntersecting && !snippets_subtitle[0].classList.contains('slideLeft')) {
        for (let index = 0; index < snippets_subtitle.length; index++) {
            const element = snippets_subtitle[index];
            time += 100;
            setTimeout(() => {
                element.classList.add('slideLeft');
                snippets_sub_description[index].classList.add('fadeIn');
            }, time);
        }
    }
});
observerSnippetsText.observe(snippets_subtitle[0]);

/* clipboard */

const observerClipboardImg = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */
    if (entries[0].isIntersecting && !clipboard_img[0].classList.contains('fadeIn')) {
        setTimeout(() => {
            clipboard_img[0].classList.add('fadeIn');
        }, 100);
    }

});
observerClipboardImg.observe(clipboard_img[0]);
const observerClipboardTitle = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !clipboard_title[0].classList.contains('slideLeft')) {
        setTimeout(() => {
            clipboard_title[0].classList.add('slideLeft');
        }, 100);
    }
});
observerClipboardTitle.observe(clipboard_title[0]);
const observerClipboardText = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !clipboard_description[0].classList.contains('slideRight')) {
        setTimeout(() => {
            clipboard_description[0].classList.add('slideRight');
        }, 100);
    }
});
observerClipboardText.observe(clipboard_description[0]);


workflow_title = document.getElementsByClassName('workflow__title')
const observerWorkflowTitle = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !workflow_title[0].classList.contains('slideRight')) {
        setTimeout(() => {
            workflow_title[0].classList.add('slideRight');
        }, 100);
    }
});
observerWorkflowTitle.observe(workflow_title[0]);
workflow_description = document.getElementsByClassName('workflow__description')
const observerWorkflowDescription = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !workflow_description[0].classList.contains('slideLeft')) {
        setTimeout(() => {
            workflow_description[0].classList.add('slideLeft');
        }, 100);
    }
});
observerWorkflowDescription.observe(workflow_description[0]);
workflow_icon = document.getElementsByClassName('workflow__icon')
const observerWorkflowIcon = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !workflow_icon[0].classList.contains('slideRight')) {
        setTimeout(() => {
            workflow_icon[0].classList.add('slideRight');
        }, 100);
    }
});
observerWorkflowIcon.observe(workflow_icon[0]);
workflow_subtitle = document.getElementsByClassName('workflow__subtitle')
workflow_sub_description = document.getElementsByClassName('workflow__sub-description')
const observerWorkflowSubtitle = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    let time = 100
    if (entries[0].isIntersecting && !workflow_subtitle[0].classList.contains('slideLeft')) {
        for (let index = 0; index < workflow_subtitle.length; index++) {
            const element = workflow_subtitle[index];
            time += 100;
            setTimeout(() => {
                element.classList.add('slideLeft');
                workflow_sub_description[index].classList.add('fadeIn');
            }, time);
        }
    }
});
observerWorkflowSubtitle.observe(workflow_subtitle[0]);

logos_img = document.getElementsByClassName('logos__img')
const observerLogosImg = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    let time = 100
    if (entries[0].isIntersecting && !logos_img[0].classList.contains('bigEntrance')) {
        for (let index = 0; index < logos_img.length; index++) {
            const element = logos_img[index];
            time += 100;
            setTimeout(() => {
                element.classList.add('bigEntrance');
            }, time);
        }
    }
});
observerLogosImg.observe(logos_img[0]);

store_title = document.getElementsByClassName('store__title')
store_description = document.getElementsByClassName('store__description')
btn_store = document.getElementsByClassName('btn-store')
const observerStoreTitle = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !store_title[0].classList.contains('slideRight')) {
        setTimeout(() => {
            store_title[0].classList.add('slideRight');
        }, 100);
    }
});
observerStoreTitle.observe(store_title[0]);
const observerStoreDescription = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */

    if (entries[0].isIntersecting && !store_description[0].classList.contains('slideLeft')) {
        setTimeout(() => {
            store_description[0].classList.add('slideLeft');
        }, 100);
    }
});
observerStoreDescription.observe(store_description[0]);
const observerBtnStore = new IntersectionObserver(entries => {
    /* Add or remove class depending on whether or not item is visible */
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
observerBtnStore.observe(btn_store[0]);