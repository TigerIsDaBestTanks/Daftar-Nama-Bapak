const namaOriginal = [
"Ibnu","Pramudiya","Mandala","Nabil","Rayyan","Linux","Asap","Asep","Knalpot","Nasi Goreng","Pempek","Habibi","Habib","Essy","Desta","Wardana","Kurnia","Kurniawan","Iwan","Levina","Putra","Muhammad","Ayu","Bumi","Yustin","Zafka","Ammar","Marhen","Radhea","Firas","Naufan","Fabian","Bian","Empang","Tembok","Sahroni","Raka","Malela","Ikrar","Dafa","Gathan","Raga","Febriano","Ezra","Yehezkiel","Remi","Nadif","Fauzan","Perkasa","Baharudin","Bayu","Desvita","April","Samarna","Harimurti","Wigunna","Mahayuda","Malaka","Geprek","Jagung Bakar","Sendal Jepit","Sabun Colek","Odol","Kerupuk","Ujang","Jumadi","Parto","Gondes","Wakwaw","Cecep","Ucup","Tarno","Sutarman","Suwatmi","Tarmin","Uus","Gibran","Samsul","Paijo","Warto","Bejo","Suro","Yanto","Toyib","Sumanto","Komeng","Kiwil","Mad Dog","Jaya Sakti","Lumbung","Jangkrik","Telo","Otong","Boneng","Makmur","Virli","Ateng","Petruk","Gareng","Bagong"
];

const animatedNames = ["Ibnu","Mahayuda","Pramudiya","Nabil","Mandala","Rayyan","Ikrar","Habibi","Ayu","Desvita","Desta","Virli"]; // warna-warni

// --- PILIH 30 NAMA RANDOM UNTUK ANIMASI ---
// ambil semua nama kecuali yang colorful
const filtered = namaOriginal.filter(n => !animatedNames.includes(n));

// acak urutan
const shuffled = filtered.sort(() => Math.random() - 0.5);

// ambil 30 teratas
const randomAnimated = shuffled.slice(0, 30);

const namaSorted = [...new Set(namaOriginal)].sort();

// Tampilkan gambar glitch 3 detik
function showGlitch() {
    const img = document.createElement("img");
    img.id = "glitchImg";
    img.src = "realistic-vhs-effect-background.png";
    document.body.appendChild(img);

    img.style.display = "block";

    setTimeout(() => {
        img.remove();
    }, 3000);
}

const modeSwitch = document.getElementById("modeSwitch");
const modeIcon = document.getElementById("modeIcon");
const modeText = document.getElementById("modeText");

let darkMode = true; // default dark

function applyMode() {
    if (darkMode) {
        // DARK MODE
        document.body.style.background = "#111";
        document.body.style.color = "white";

        modeIcon.src = "sun.png";
        modeText.textContent = "Light Mode";

    } else {
        // LIGHT MODE
        document.body.style.background = "#fff";
        document.body.style.color = "#111";

        modeIcon.src = "night.png";
        modeText.textContent = "Dark Mode";
    }

    // animasi
    modeIcon.style.transform = "rotate(180deg)";
    modeIcon.style.opacity = "0";
    modeText.style.opacity = "0";

    setTimeout(() => {
        modeIcon.style.transform = "rotate(0deg)";
        modeIcon.style.opacity = "1";
        modeText.style.opacity = "1";
    }, 200);
}

// Klik (laptop) dan sentuh (HP)
modeSwitch.addEventListener("click", () => {
    darkMode = !darkMode;
    applyMode();
});

modeSwitch.addEventListener("touchstart", () => {
    darkMode = !darkMode;
    applyMode();
});

// set awal
applyMode();

const wrapper = document.getElementById("tablesWrapper");

let chunk = 20; // satu tabel = 20 nama (10 kiri, 10 kanan)

for (let i = 0; i < namaSorted.length; i += chunk) {

    const group = document.createElement("div");
    group.className = "tableGroup";

    const table = document.createElement("table");

    for (let r = 0; r < 10; r++) {
        let leftIndex = i + r;
        let rightIndex = i + r + 10;

        if (namaSorted[leftIndex] === undefined) break;

        const tr = document.createElement("tr");

        // Kolom kiri
        const left = namaSorted[leftIndex];
        let td1 = document.createElement("td");
        td1.textContent = `${leftIndex + 1}. ${left}`;

        // animasi colorful
        if (animatedNames.includes(left)) td1.classList.add("colorful");

        // animasi random
        if (randomAnimated.includes(left)) td1.classList.add("randomAnim");

        tr.appendChild(td1);

        // Kolom kanan
        if (namaSorted[rightIndex]) {
            const right = namaSorted[rightIndex];
            let td2 = document.createElement("td");
            td2.textContent = `${rightIndex + 1}. ${right}`;

            if (animatedNames.includes(right)) td2.classList.add("colorful");
            if (randomAnimated.includes(right)) td2.classList.add("randomAnim");

            tr.appendChild(td2);
        }

        table.appendChild(tr);
    }

    group.appendChild(table);
    wrapper.appendChild(group);
}

document.getElementById("adsBox").addEventListener("click", () => {
    window.location.href = "https://go.rcvlink.com/go/?bp=cgPiIZjH9gN6-atCZn4tnuYBwTbAAk1tij7DjC-Jd9h9ty8ekaleI237wlB2sBCgh3sw21CHrPdeVahMjuuy__gAfcdIXd7GaW_sGrxMzqL8n70gbTXmmOvjVsISicKZ40L70A7nEYP4tg1fgyYxgmj8XYEO-aFQw-saM4qiainh9QOn-sgqLJ3clSVr54aDQI-gFTpU_Q&tp=7nkYT1BuauT7eBGhDtLtgBRZY82JVf9ND6R62pV8Cf5vDlYq6TxhbY2k-PMHYT8ccFDO3_ELFJgOHi3PTOL9ZRXewr3UmhhM5a8zemUrrik&rc=sJTc7NbZv2r62Q&cs=2.2.0.0.0.0.2&c=61.41.14-638947-541-23&d=61.7&s2=1&ver=251021-2120&pb=1&im=1-0.5-1-1-14300&ref=https%3A%2F%2F";
});

// === AUTO GLITCH CUMA 2x ===

function autoGlitch() {
    let img = document.getElementById("autoGlitch");

    // bikin elemen kalau belum ada
    if (!img) {
        img = document.createElement("img");
        img.id = "autoGlitch";
        img.src = "realistic-vhs-effect-background.png";
        document.body.appendChild(img);
    }

    // tampil 3 detik
    img.style.display = "block";
    setTimeout(() => {
        img.style.display = "none";
    }, 3000);
}

// glitch pertama muncul setelah 15 detik
setTimeout(() => {
    autoGlitch();

    // glitch kedua 42 detik setelah glitch pertama selesai
    setTimeout(() => {
        autoGlitch();
    }, 42000);

}, 15000);
