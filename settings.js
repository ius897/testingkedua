document.addEventListener('DOMContentLoaded', () => {
    const freqDisplay = document.getElementById('freq-display');
    const freqOptionsContainer = document.getElementById('freq-options');
    const selectedFreqText = document.getElementById('selected-freq');
    const radioInputs = freqOptionsContainer.querySelectorAll('input[name="frequency"]');

    // Karena di CSS kita menggunakan .options-container.active untuk menampilkan, 
    // pastikan kelas ini di-toggle.

    // 1. Tampilkan Opsi saat Dropdown diklik
    freqDisplay.addEventListener('click', () => {
        // Toggle tampilan overlay (CSS akan menangani transisi dari display: none ke display: flex)
        freqOptionsContainer.classList.add('active');
    });

    // 2. Pilih Opsi Saat Radio/Label Diklik
    radioInputs.forEach(radio => {
        // Tambahkan event listener ke setiap radio
        radio.addEventListener('change', () => {
            const newValue = radio.value;
            
            // Update tampilan di kartu dan dropdown
            freqDisplay.textContent = newValue;
            selectedFreqText.textContent = newValue; // Update teks di bawah 'Frekuensi Reminder'
            
            // Sembunyikan setelah dipilih (gunakan sedikit delay agar terlihat transisinya)
            setTimeout(() => {
                freqOptionsContainer.classList.remove('active');
            }, 150);
        });
    });

    // 3. Sembunyikan Opsi saat mengklik di luar kotak opsi (di overlay gelap)
    freqOptionsContainer.addEventListener('click', (e) => {
        // Hanya sembunyikan jika yang diklik adalah area overlay, BUKAN kotak opsi itu sendiri
        const optionGroup = freqOptionsContainer.querySelector('.option-group');
        if (!optionGroup.contains(e.target) && e.target !== freqDisplay) {
            freqOptionsContainer.classList.remove('active');
        }
    });

    // Inisialisasi: set tampilan awal
    const checkedRadio = freqOptionsContainer.querySelector('input[name="frequency"]:checked');
    if (checkedRadio) {
        freqDisplay.textContent = checkedRadio.value;
        selectedFreqText.textContent = checkedRadio.value;
    }
});