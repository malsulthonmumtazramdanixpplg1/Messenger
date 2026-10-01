// 1. Efek Teks Mengetik
const text = "Setelah sekian lama, aku sadar kalau cerita kita sebenarnya belum selesai. Kalau kamu berkenan, mungkinkah kita mulai lagi dari awal?";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeWriter() {
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// 2. Efek Tombol "Enggak Dulu" Melarikan Diri
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    // Ubah ke absolute hanya saat kursor mendekat agar bebas bergerak
    noBtn.style.position = "absolute";

    // Hitung posisi acak di dalam area kartu
    const randomX = Math.floor(Math.random() * 260) - 130;
    const randomY = Math.floor(Math.random() * 160) - 80;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// 3. Aksi Saat Klik Tombol "Mau Banget"
const yesBtn = document.getElementById("yesBtn");
const btnGroup = document.getElementById("btn-group");
const successMessage = document.getElementById("successMessage");

yesBtn.addEventListener("click", () => {
    btnGroup.classList.add("hidden");
    typingElement.classList.add("hidden");
    successMessage.classList.remove("hidden");
});

// Jalankan saat halaman selesai dimuat
window.onload = typeWriter;