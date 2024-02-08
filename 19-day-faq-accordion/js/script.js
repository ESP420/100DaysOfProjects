
var btns = document.querySelectorAll('input[type="checkbox"]')

function closeTaps(id) {
    for (const btn of btns) {
        btn.checked = btn.id != id ? false : btn.checked;
    }
}