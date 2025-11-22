const chatArea = document.getElementById('chat-area');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Fungsi untuk menambahkan pesan pengguna ke area chat
function addUserMessage(text) {
    const messageHtml = `
        <div class="user-message">
            <div class="message-bubble">${text}</div>
        </div>
    `;
    chatArea.innerHTML += messageHtml;
    // Scroll ke pesan terbaru
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Fungsi untuk menambahkan pesan AI (respons) ke area chat
function addAIMessage(text) {
    const messageHtml = `
        <div class="ai-message">
            <div class="avatar">AI</div>
            <div class="message-bubble">${text}</div>
        </div>
    `;
    chatArea.innerHTML += messageHtml;
    // Scroll ke pesan terbaru
    chatArea.scrollTop = chatArea.scrollHeight;
}

// Fungsi untuk memproses pesan
function processMessage() {
    const message = userInput.value.trim();
    if (message === "") return;

    // 1. Tampilkan pesan pengguna
    addUserMessage(message);
    
    // 2. Kosongkan input
    userInput.value = '';

    // 3. Simulasikan respons AI setelah jeda (Anda bisa mengganti dengan logika AI sesungguhnya di sini)
    setTimeout(() => {
        let aiResponse = "Terima kasih atas pertanyaannya. Sebagai AI simulasi, saya sarankan Anda mencari latihan peregangan 'Upper Trapezius Stretch' untuk leher Anda.";
        
        if (message.toLowerCase().includes("lordosis")) {
            aiResponse = "Lordosis adalah kelengkungan berlebihan ke dalam di punggung bawah. Latihan 'Dead Bug' sangat baik untuk memperkuat core dan mengoreksi Lordosis.";
        } else if (message.toLowerCase().includes("latihan")) {
             aiResponse = "Anda bisa melihat kategori 'Koreksi Postur' dan 'Stretching' di halaman Latihan untuk memulai program Anda.";
        }

        addAIMessage(aiResponse);
    }, 1000); 
}

// Event Listeners
sendButton.addEventListener('click', processMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        processMessage();
    }
});