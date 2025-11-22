// SIMULASI PENGUKURAN SCOLIOMETER

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const measurementValue = document.getElementById('measurement-value');
const gaugeLine = document.getElementById('gauge-line');
const interpretationText = document.getElementById('interpretation-text');

let isMeasuring = false;
let intervalId;

function updateGauge(angle) {
    // Memastikan sudut berada dalam rentang yang wajar
    const displayAngle = Math.min(Math.max(angle, -30), 30);
    
    // Rotasi jarum
    gaugeLine.style.transform = `rotate(${displayAngle}deg)`;
    measurementValue.textContent = `${Math.abs(angle)}°`; 

    // Interpretasi Hasil (sesuai standar Scoliometer)
    const absAngle = Math.abs(angle);
    if (absAngle >= 7) {
        gaugeLine.style.backgroundColor = 'red';
        interpretationText.style.color = 'red';
        interpretationText.textContent = `Rotasi: ${absAngle}°. Waspada, disarankan segera konsultasi medis/fisioterapis.`;
    } else if (absAngle >= 5) {
        gaugeLine.style.backgroundColor = 'orange';
        interpretationText.style.color = 'orange';
        interpretationText.textContent = `Rotasi: ${absAngle}°. Perlu pemantauan rutin dan latihan koreksi.`;
    } else {
        gaugeLine.style.backgroundColor = '#4863f7';
        interpretationText.style.color = '#666';
        interpretationText.textContent = `Rotasi: ${absAngle}°. Hasil dalam batas normal.`;
    }
}

function startMeasurement() {
    if (isMeasuring) return;
    isMeasuring = true;
    startButton.textContent = 'Mengukur...';
    startButton.disabled = true;

    clearInterval(intervalId);

    // Simulasi pembacaan setiap 200ms
    intervalId = setInterval(() => {
        // Hasilkan sudut acak dalam rentang -10 hingga 10 untuk simulasi
        const randomAngle = Math.floor(Math.random() * 21) - 10; 
        updateGauge(randomAngle);
    }, 200);

    // Hentikan simulasi setelah 5 detik
    setTimeout(() => {
        clearInterval(intervalId);
        isMeasuring = false;
        startButton.textContent = 'Ulangi Pengukuran';
        startButton.disabled = false;
    }, 5000); 
}

function resetMeasurement() {
    clearInterval(intervalId);
    isMeasuring = false;
    updateGauge(0); // Reset ke 0 derajat
    startButton.textContent = 'Mulai Pengukuran';
    startButton.disabled = false;
    gaugeLine.style.backgroundColor = '#4863f7';
    interpretationText.style.color = '#666';
    interpretationText.textContent = 'Tekan "Mulai Pengukuran" untuk memulai proses.';
}

// Event Listeners
startButton.addEventListener('click', startMeasurement);
resetButton.addEventListener('click', resetMeasurement);

// Inisialisasi tampilan awal
resetMeasurement();