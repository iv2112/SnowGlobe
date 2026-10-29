const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "You are someone's favourite person.",
  "You don't have to be perfect to be worthy of love.",
  "Look in the mirror and love what you see.",
  "Billions of people, yet you are the most beautiful one.",
  "Hot chocolate tastes better after a hard day. You've earned it.",
  "I will always love you, my dear.",
];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});
