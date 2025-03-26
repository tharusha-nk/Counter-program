const incBtn = document.getElementById("incBtn");
const reset = document.getElementById("reset");
const decBtn = document.getElementById("decBtn");
let count = 0;

incBtn.onclick = function () {
    count++;
    countlabel.textContent = count;
}

reset.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}

decBtn.onclick = function () {
    count--;
    countlabel.textContent = count;
}

const closebtn = document.getElementById("close");

closebtn.onclick = function () {
    window.close();
}