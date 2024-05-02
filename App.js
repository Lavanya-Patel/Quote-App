const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "It does not matter how slowly you go as long as you do not stop. - Confucius"
];

let timer;
let targetDate;

function updateClock() {
  const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const [date, time] = now.split(', ');
  const [month, day, year] = date.split('/');
  const [hour, minute, second] = time.split(':');

  let ampm = 'AM';
  let displayHour = parseInt(hour);
  if (displayHour > 12) {
    displayHour -= 12;
    ampm = 'PM';
  } else if (displayHour === 0) {
    displayHour = 12;
  }

  document.getElementById('clock').innerHTML = `${day}/${month}/${year} ${hour}:${minute}:${second}`;

  if (targetDate) {
    const target = new Date(targetDate);
    const diff = target.getTime() - new Date().getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('clock').innerHTML = `Countdown: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until ${target.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })}`;
  }

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerHTML = randomQuote;
}

function startTimer() {
  timer = setInterval(updateClock, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

const input = document.getElementById("target-date");
input.addEventListener("input", () => {
  targetDate = input.value;
});

updateClock();




