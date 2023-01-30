const hungerBarDiv = document.querySelector('#hungerBar');
const happinessBarDiv = document.querySelector('#happinessBar');

let hunger = 100;
let happiness = 100;

function feed() {
    hunger += 10;
    if (hunger > 100) {
        hunger = 100;
    }
    hungerBarDiv.innerText = hunger;
}
function play() {
    happiness += 10;
    if (happiness > 100) {
        happiness = 100;
    }
    happinessBarDiv.innerText = happiness;
}

setInterval(function() {
    hunger -= 1;
    happiness -= 1;

    hungerBarDiv.innerText = hunger;
    happinessBarDiv.innerText = happiness;

    if (hunger === 0 || happiness === 0) {
        alert('Is dead :/');
        hunger = 100;
        happiness = 100;
    }
}, 1000);

// let hunger = 100;
// let happiness = 100;

// setInterval(function() {
//     hunger -= 1;
//     happiness -= 1;
// })