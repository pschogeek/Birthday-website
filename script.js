// Confetti burst when page loads
window.onload = () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, i * 500);
  }
};

// Extra button-triggered confetti
function celebrate() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 }
  });
}

// Show emoji reaction when clicking a photo
function showEmoji(emoji) {
  let span = document.createElement("span");
  span.innerText = emoji;
  span.style.position = "absolute";
  span.style.fontSize = "2rem";
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = Math.random() * window.innerHeight + "px";
  span.style.animation = "floatUp 2s ease-out forwards";
  document.body.appendChild(span);

  setTimeout(() => span.remove(), 2000);
}

// Floating animation for emojis
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100px); opacity: 0; }
}`;
document.head.appendChild(style);

// Toggle background music
function toggleMusic() {
  let music = document.getElementById("bgMusic");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
