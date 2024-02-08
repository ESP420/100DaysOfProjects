
let buttons = document.querySelectorAll('input[type="radio"]')
let valueLabel = document.getElementById("score-selected-value")
let cardScore = document.getElementById("card_score")
let cardSubmit = document.getElementById("card-submit")
let value = "";
function selectValue(id, inputValue) {
    value = inputValue;
    for (const btn of buttons) {
        if (btn.id == id) {
            let rateNum = "label[for=" + id + "]";
            let label = document.querySelector(rateNum)
            label.classList.add("bg--Orange");
            label.classList.remove("bg--Dark");
        } else {
            let rateNum = "label[for=" + btn.id + "]";
            let label = document.querySelector(rateNum)
            label.classList.add("bg--Dark");
            label.classList.remove("bg--Orange");
        }
    }
}
function submit() {
    if (value !== "") {
        cardScore.classList.add("hidden");
        cardSubmit.classList.remove("hidden");
        valueLabel.innerHTML = value;
    }
}