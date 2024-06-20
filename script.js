let startTime;
let money = 0;
let timerInterval;
const targetAmount = 60000; // Hedef 60,000 TL

function updateTimer() {
    const now = new Date();
    const elapsed = now - new Date(startTime);

    const seconds = Math.floor(elapsed / 1000) % 60;
    const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
    const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 30;
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30)) % 12;
    const years = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365));

    document.getElementById('timer').innerText = 
        `${years.toString().padStart(2, '0')}:${months.toString().padStart(2, '0')}:${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgressBar() {
    const progress = (money / targetAmount) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
}

function addMoney() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0) {
        money += amount;
        document.getElementById('money').innerText = `${money.toFixed(2)} TL`;
        localStorage.setItem('money', money.toFixed(2)); // Para miktarını kaydet
        document.getElementById('amount').value = ''; // Giriş alanını temizle
        updateProgressBar(); // Progress barı güncelle
    } else {
        alert("Lütfen geçerli bir miktar girin.");
    }
}

function removeMoney() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (!isNaN(amount) && amount > 0 && amount <= money) {
        money -= amount;
        document.getElementById('money').innerText = `${money.toFixed(2)} TL`;
        localStorage.setItem('money', money.toFixed(2)); // Güncellenmiş para miktarını kaydet
        document.getElementById('amount').value = ''; // Giriş alanını temizle
        updateProgressBar(); // Progress barı güncelle
    } else if (amount > money) {
        alert("Silmek istediğiniz miktar, mevcut paradan fazla olamaz.");
    } else {
        alert("Lütfen geçerli bir miktar girin.");
    }
}

function startTimer() {
    if (!timerInterval) {
        startTime = new Date().toISOString();
        localStorage.setItem('startTime', startTime); // Başlangıç zamanını kaydet
        timerInterval = setInterval(updateTimer, 1000);
    }
}

function loadSavedData() {
    const savedMoney = localStorage.getItem('money');
    if (savedMoney) {
        money = parseFloat(savedMoney);
        document.getElementById('money').innerText = `${money.toFixed(2)} TL`;
        updateProgressBar(); // Progress barı güncelle
    }

    const savedStartTime = localStorage.getItem('startTime');
    if (savedStartTime) {
        startTime = new Date(savedStartTime);
        timerInterval = setInterval(updateTimer, 1000);
        updateTimer(); // Timer'ı hemen güncelle
    }
}

window.onload = loadSavedData;
