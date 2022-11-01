
const hoursElt = document.querySelector('.hours .number')
const minutesElt = document.querySelector('.minutes .number')
const secondesElt = document.querySelector('.secondes .number')
const ampmElt = document.querySelector('.ampm')

console.log(hoursElt.textContent, secondesElt, minutesElt, ampmElt);

function updateClock() {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    hoursElt.textContent = hours;
    minutesElt.textContent = minutes;

    if (seconds < 10) {
        secondesElt.textContent = "0"+seconds
    } else {
        secondesElt.textContent = seconds;
    }
}

setInterval(() => {
    updateClock()
}, 1000);