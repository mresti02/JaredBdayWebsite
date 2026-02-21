const MESSAGES = [
  "Hope your day is as amazing as you are!",
  "Many more adventures to come!",
  "Cheers to another year of awesomeness!",
  "You deserve all the cake in the world!",
  "Wishing you joy, laughter, and lots of cake!",
];

function getRandomMessage(messages) {
  const index = Math.floor(Math.random() * messages.length);
  return messages[index];
}

function celebrate() {
  const messageEl = document.getElementById("message");
  if (messageEl) {
    messageEl.textContent = getRandomMessage(MESSAGES);
  }
}

/* eslint-disable no-undef */
if (typeof module !== "undefined") {
  module.exports = { getRandomMessage, celebrate, MESSAGES };
}
/* eslint-enable no-undef */
