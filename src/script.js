const body = document.getElementById("body");
const increment = document.getElementById("incrBtn");
const save = document.getElementById("saveBtn");
const counter = document.getElementById("counter");
const entries = document.getElementById("entries");
let count=0;

function incrementing () {
    count++;
    counter.textContent = count;
}
function saving () {
    let str=count+" - ";
    entries.textContent += str;
    count=0;
    counter.textContent = count;

}