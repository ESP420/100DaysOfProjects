var speed = 10;

/*Call this function with the ID, increase the number within*/
function increaseNumberById(id) {
    elt = document.getElementById(id);
    endNbr = Number(document.getElementById(id).innerHTML);
    increaseNumber(0, endNbr, elt);
}

/*function to increase the number.*/
function increaseNumber(i, max, elt) {
    if (i <= max) {
        elt.innerHTML = i;
        setTimeout(function () {//Delay
            increaseNumber(i + 1, max, elt);
        }, speed);
    }
}

/*Function called on button click*/
increaseNumberById("num_companies")
increaseNumberById("num_templates")
increaseNumberById("num_queries");
