const body = document.getElementById("body");
const increment = document.getElementById("incrBtn");
const counter = document.getElementById("counter");
let count=0;

function incrementing () {
    count++;
    counter.textContent = count;
}