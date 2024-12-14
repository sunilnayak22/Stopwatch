const display = document.getElementById('display');
const [startButton, stopButton, resetButton] = document.querySelectorAll('button');

let timer, elapsedTime = 0;

const updateDisplay = () => display.textContent = new Date(elapsedTime * 1000).toISOString().substr(11, 8);

startButton.onclick = () => {
    startButton.disabled = true;
    stopButton.disabled = resetButton.disabled = false;
    timer = setInterval(() => (elapsedTime++, updateDisplay()), 1000);
};

stopButton.onclick = () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timer);
};

resetButton.onclick = () => {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    resetButton.disabled = stopButton.disabled = true;
    startButton.disabled = false;
};

updateDisplay();