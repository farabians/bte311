let startTime;
let money = 0;
let timerInterval;

function updateTimer() {
    const now = new Date();
    const elapsed = now - startTime;

    const seconds = Math.floor(elapsed / 1000) % 60;
    const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
    const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 30;
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30)) % 12;
    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));

    document.getElementById('timer').innerText = 
        `${years.toString().padStart(2, '0')}:${months.toString().padStart(2, '0')}:${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function addMoney() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        money += amount;
        document.getElementById('money').innerText = `${money} TL`;
        document.getElementById('amount').value = ''; // Giriş alanını temizle
    } else {
        alert("Lütfen geçerli bir miktar girin.");
    }
}

function startTimer() {
    if (!timerInterval) {
        startTime = new Date();
        timerInterval = setInterval(updateTimer, 1000);
    }
}
