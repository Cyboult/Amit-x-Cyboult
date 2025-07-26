
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

window.addEventListener("DOMContentLoaded", () => {
  const thoughts = [
    "Believe in yourself and all that you are.",
    "Success is the sum of small efforts repeated day in and day out.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Stay focused and never give up.",
    "Every day is a new beginning. Take a deep breath and start again."
  ];

  const randomThought = thoughts[Math.floor(Math.random() * thoughts.length)];
  const thoughtElement = document.getElementById("randomThought");

  if (thoughtElement) {
    thoughtElement.textContent = randomThought;
    setTimeout(() => {
      thoughtElement.style.opacity = 1;
    }, 200);
  }
});