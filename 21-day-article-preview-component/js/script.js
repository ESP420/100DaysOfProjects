let slide = document.getElementById('slide');
let slideShared = document.getElementById('slide-shared');
let contact = document.getElementById('contact');
function showSharedContent() {
    if (window.innerWidth < 768) {
        contact.classList.toggle("contact--bg-gray")
        if (!slide.classList.contains("hidden")) {
            slide.classList.toggle('hide');
            setTimeout(function () {
                slideShared.classList.toggle('hidden');
            }, 300);
            setTimeout(function () {
                slide.classList.toggle('hidden');
                slideShared.classList.toggle('hide');
            }, 320);
        } else {
            slideShared.classList.toggle('hide');
            setTimeout(function () {
                slide.classList.toggle('hidden');
            }, 300);
            setTimeout(function () {
                slideShared.classList.toggle('hidden');
                slide.classList.toggle('hide');
            }, 320);
        }
    } else {
        contact.classList.toggle("tooltip--show")
    }
}