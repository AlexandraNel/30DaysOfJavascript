
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const allHands = document.querySelectorAll(".hand");

function setDate() {
    const now = new Date()

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;

    if (seconds === 0 || minutes === 0 || hours === 0) {
        allHands.forEach(hand => hand.style.transition = "none");
    } else {
        allHands.forEach(hand => hand.style.transition = "");
    }


    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);