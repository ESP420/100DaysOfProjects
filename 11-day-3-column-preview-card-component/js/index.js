let learnMoreBtn = document.getElementById("learn-more-button");
let learnMoreSuv = document.getElementById("learn-more-suvs");
let learnMoreLux = document.getElementById("learn-more-lux");
learnMoreBtn.onclick = function () {
    if (!learnMoreSuv.classList.contains("hidden")) {
        learnMoreSuv.classList.add("hidden");
    } else {
        learnMoreSuv.classList.remove("hidden");
    }
};