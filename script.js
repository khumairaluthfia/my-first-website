// ===== Edit bagian ini untuk mengganti fakta tentang dirimu =====
const facts = [
  "Aku lebih suka hujan daripada panas.",
  "Fakta kecil: aku selalu salah membawa payung.",
  "Aku bisa menghabiskan satu jam hanya untuk memilih lagu.",
  "Makanan favoritku: apa saja yang masih hangat.",
  "Aku percaya semua proyek besar dimulai dari coretan."
];
// ================================================================

const bubble = document.getElementById("bubble");
const blob = document.getElementById("blob");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Bintang-bintang kecil di latar belakang
const starBox = document.getElementById("stars");
for (let i = 0; i < 36; i++) {
  const s = document.createElement("span");
  const size = 2 + Math.random() * 4;
  s.className = "star";
  s.style.cssText =
    `left:${Math.random() * 100}%;top:${Math.random() * 100}%;` +
    `width:${size}px;height:${size}px;animation-delay:${Math.random() * 4}s;`;
  starBox.appendChild(s);
}

// Mata makhluk mengikuti kursor
const eyes = document.querySelectorAll(".eye");
const pupils = document.querySelectorAll(".pupil");

function lookAt(x, y) {
  eyes.forEach((eye, i) => {
    const box = eye.getBoundingClientRect();
    const cx = box.left + box.width / 2;
    const cy = box.top + box.height / 2;
    const angle = Math.atan2(y - cy, x - cx);
    const reach = 7; // satuan SVG
    pupils[i].setAttribute("cx", +eye.getAttribute("cx") + Math.cos(angle) * reach);
    pupils[i].setAttribute("cy", +eye.getAttribute("cy") + Math.sin(angle) * reach);
  });
}

if (!reduceMotion) {
  window.addEventListener("pointermove", (e) => lookAt(e.clientX, e.clientY));
}

// Klik makhluk untuk membaca fakta acak
let last = -1;
blob.addEventListener("click", () => {
  let next;
  do { next = Math.floor(Math.random() * facts.length); } while (next === last && facts.length > 1);
  last = next;
  bubble.textContent = facts[next];
});
