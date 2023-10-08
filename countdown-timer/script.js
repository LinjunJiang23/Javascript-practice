const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const custom = document.getElementById('custom-time');



let countdown;

function startTimer(duration) {
	const startTime = Date.now();
	const endTime = startTime + duration * 1000;

	function updateTimer() {
		const currentTime = Date.now();
		const timeLeft = endTime - currentTime;

		if (timeLeft <= 0) {
			clearInterval(countdown);
			timeDisplay.textContent = 'Time\'s up!';
			return;
		}

		const minutes = Math.floor(timeLeft / 1000 / 60);
		const seconds = Math.floor((timeLeft / 1000) % 60);
		timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;}
	updateTimer();
	countdown = setInterval(updateTimer, 1000);
}

startButton.addEventListener('click', () => {
	let minutes;
	minutes = parseInt(custom.value, 10);
	const duration = minutes * 60;
	startTimer(duration);});

stopButton.addEventListener('click', () => {
	clearInterval(countdown);
	timerDisplay.textContent = 'Timer stopped';
});


