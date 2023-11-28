let isRunning = false;
let intervalId;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(intervalId);
        document.getElementById("startStop").innerHTML = "Iniciar";
    } else {
        intervalId = setInterval(updateDisplay, 1000);
        document.getElementById("startStop").innerHTML = "Pausar";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(intervalId);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    document.getElementById("startStop").innerHTML = "Iniciar";
}

function updateDisplay() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById("display");
    display.innerHTML =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}
