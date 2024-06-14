let timerDisplay = document.querySelector('.timer');
let interval;
let timer = 0;

function startTimer() {
    interval = setInterval(() => {
        timer++;
        updateTimerDisplay();
    }, 1000);
}

function pauseTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timer = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}