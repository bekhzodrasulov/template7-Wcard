const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const elements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 50); // задержка между появлениями
      }
    });
  },
  {
    threshold: 0.1,
  }
);

elements.forEach((el) => observer.observe(el));

const playButton = document.getElementById("playButton");
const playIcon = document.getElementById("playIcon");
const bgMusic = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    playIcon.src = "images/pouse.png";
    playIcon.alt = "Pause";
  } else {
    bgMusic.pause();
    playIcon.src = "images/play.png";
    playIcon.alt = "Play";
  }
});

function updateCountdown() {
  const weddingDate = new Date("2025-09-31T19:00:00");
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = Number(0);
    document.getElementById("hours").textContent = Number(0);
    document.getElementById("minutes").textContent = Number(0);
    document.getElementById("seconds").textContent = Number(0);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = Number(days);
  document.getElementById("hours").textContent = Number(hours);
  document.getElementById("minutes").textContent = Number(minutes);
  document.getElementById("seconds").textContent = Number(seconds);
}

setInterval(updateCountdown, 1000);
updateCountdown();

if (!/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
  document.body.innerHTML = `
      <div style="text-align:center; padding: 50px; font-family: sans-serif;">
        <h2>Faqat mobil qurilmalardan kirish mumkin 📱</h2>
        <p>Havolani telefonda oching.</p>
        <h2>Доступ только с мобильных устройств 📱</h2>
        <p>Пожалуйста, откройте сайт на телефоне.</p>
        <h2>Only mobile devices are allowed 📱</h2>
        <p>Please open the site on a phone.</p>
        <a href="https://t.me/inviteuio">inviteu.io</a>
      </div>
    `;
}
