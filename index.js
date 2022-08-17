let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    let countstr = count + "-";
    saveEl.textContent += countstr;
    countEl.textContent = 0;
    count = 0;
}