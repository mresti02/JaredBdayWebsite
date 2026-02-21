/* ============================================
   JARED'S BIRTHDAY WEBSITE - INTERACTIVE JS
   ============================================ */

'use strict';

/* ─── Confetti Engine ──────────────────────────────────────────────── */

const confettiCanvas = document.getElementById('confetti-canvas');
const ctx = confettiCanvas.getContext('2d');
let confettiParticles = [];
let confettiAnimating = false;
let confettiTimeout = null;

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const CONFETTI_COLORS = [
  '#6C63FF', '#FF6B9D', '#FFD93D', '#6BCB77',
  '#4D96FF', '#FF6B1A', '#C77DFF', '#48CAE4',
];

function createParticle(x, y) {
  const size = Math.random() * 10 + 5;
  const shape = Math.random() < 0.5 ? 'rect' : 'circle';
  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 12,
    vy: Math.random() * -12 - 5,
    gravity: 0.35,
    friction: 0.99,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.2,
    color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
    size,
    shape,
    opacity: 1,
    fadeRate: Math.random() * 0.01 + 0.005,
  };
}

function spawnConfettiBurst(x, y, count = 60) {
  for (let i = 0; i < count; i++) {
    confettiParticles.push(createParticle(
      x + (Math.random() - 0.5) * 40,
      y + (Math.random() - 0.5) * 40,
    ));
  }
}

function spawnRainConfetti() {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const p = createParticle(
      Math.random() * confettiCanvas.width,
      -20,
    );
    p.vy = Math.random() * 4 + 2;
    p.vx = (Math.random() - 0.5) * 3;
    p.gravity = 0.05;
    confettiParticles.push(p);
  }
}

function drawParticle(p) {
  ctx.save();
  ctx.globalAlpha = p.opacity;
  ctx.fillStyle = p.color;
  ctx.translate(p.x, p.y);
  ctx.rotate(p.rotation);

  if (p.shape === 'rect') {
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
  } else {
    ctx.beginPath();
    ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function updateAndDrawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiParticles = confettiParticles.filter(p => p.opacity > 0.01 && p.y < confettiCanvas.height + 50);

  for (const p of confettiParticles) {
    p.vy += p.gravity;
    p.vx *= p.friction;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;
    p.opacity -= p.fadeRate;
    drawParticle(p);
  }

  if (confettiParticles.length > 0) {
    requestAnimationFrame(updateAndDrawConfetti);
  } else {
    confettiAnimating = false;
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

function startConfetti(duration = 4000) {
  if (!confettiAnimating) {
    confettiAnimating = true;
    updateAndDrawConfetti();
  }

  // Initial burst from center-top
  spawnConfettiBurst(confettiCanvas.width / 2, confettiCanvas.height * 0.3, 80);

  // Rain confetti
  const rainInterval = setInterval(spawnRainConfetti, 120);

  if (confettiTimeout) clearTimeout(confettiTimeout);
  confettiTimeout = setTimeout(() => {
    clearInterval(rainInterval);
  }, duration);
}

/* ─── Countdown Timer ───────────────────────────────────────────────── */

// Birthday — update this date to Jared's actual birthday
// Format: 'YYYY-MM-DD'
const BIRTHDAY = '1995-06-15';

function getAge(birthdayStr) {
  const birthday = new Date(birthdayStr);
  const now = new Date();

  let years = now.getFullYear() - birthday.getFullYear();
  let days = 0;

  // Calculate total days lived
  const totalMs = now - birthday;
  const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
  days = totalDays % 365;

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Adjust years if birthday hasn't occurred this year
  const thisYearBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
  if (now < thisYearBirthday) {
    years -= 1;
  }

  return { years, days, hours, minutes, seconds };
}

function animateNumber(el, target) {
  const current = parseInt(el.textContent, 10) || 0;
  if (current === target) return;

  const diff = target - current;
  const step = diff > 0 ? Math.max(1, Math.floor(Math.abs(diff) / 5)) : -Math.max(1, Math.floor(Math.abs(diff) / 5));
  const next = current + step;

  el.textContent = Math.abs(next - target) <= Math.abs(step) ? target : next;
  if (el.textContent != target) {
    requestAnimationFrame(() => animateNumber(el, target));
  }
}

function updateCountdown() {
  const { years, days, hours, minutes, seconds } = getAge(BIRTHDAY);

  document.getElementById('years').textContent = years;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update every second
updateCountdown();
setInterval(updateCountdown, 1000);

/* ─── Wishes System ─────────────────────────────────────────────────── */

const wishForm = document.getElementById('wishForm');
const wishesList = document.getElementById('wishesList');
const emojiPicker = document.getElementById('emojiPicker');
const wishEmojiInput = document.getElementById('wishEmoji');

// Emoji picker
emojiPicker.addEventListener('click', (e) => {
  const btn = e.target.closest('.emoji-btn');
  if (!btn) return;

  emojiPicker.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  wishEmojiInput.value = btn.dataset.emoji;
});

// Load saved wishes from localStorage
function loadWishes() {
  const saved = JSON.parse(localStorage.getItem('jaredBdayWishes') || '[]');
  saved.forEach(wish => renderWish(wish, false));
}

function renderWish(wish, prepend = true) {
  const card = document.createElement('div');
  card.className = 'wish-card';
  card.innerHTML = `
    <div class="wish-emoji">${wish.emoji}</div>
    <div class="wish-content">
      <p class="wish-message">"${escapeHtml(wish.message)}"</p>
      <span class="wish-author">— ${escapeHtml(wish.name)}</span>
    </div>
  `;

  if (prepend) {
    wishesList.insertBefore(card, wishesList.firstChild);
  } else {
    wishesList.appendChild(card);
  }
}

function saveWish(wish) {
  const existing = JSON.parse(localStorage.getItem('jaredBdayWishes') || '[]');
  existing.unshift(wish);
  localStorage.setItem('jaredBdayWishes', JSON.stringify(existing.slice(0, 50)));
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

wishForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('wishName').value.trim();
  const message = document.getElementById('wishMessage').value.trim();
  const emoji = wishEmojiInput.value;

  if (!name || !message) return;

  const wish = { name, message, emoji, timestamp: Date.now() };
  renderWish(wish, true);
  saveWish(wish);
  wishForm.reset();

  // Reset emoji picker
  emojiPicker.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('active'));
  emojiPicker.querySelector('[data-emoji="🎉"]').classList.add('active');
  wishEmojiInput.value = '🎉';

  // Celebrate!
  startConfetti(2000);

  // Scroll to wishes
  wishesList.scrollTop = 0;
});

loadWishes();

/* ─── Scroll Animations ─────────────────────────────────────────────── */

function setupScrollAnimations() {
  const animatedEls = document.querySelectorAll(
    '.countdown-card, .memory-card, .section-header, .wish-form-wrapper, .wishes-display'
  );

  animatedEls.forEach(el => el.classList.add('animate-on-scroll'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, i * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  animatedEls.forEach(el => observer.observe(el));
}

setupScrollAnimations();

/* ─── Button Event Handlers ─────────────────────────────────────────── */

document.getElementById('triggerConfetti').addEventListener('click', () => {
  startConfetti(5000);
});

document.getElementById('startCelebration').addEventListener('click', () => {
  startConfetti(4000);
  // Also burst from the button position
  const btn = document.getElementById('startCelebration');
  const rect = btn.getBoundingClientRect();
  spawnConfettiBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 50);
});

/* ─── Nav active state on scroll ───────────────────────────────────── */

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--text-primary)'
            : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));

/* ─── Auto-celebrate on load ────────────────────────────────────────── */

window.addEventListener('load', () => {
  setTimeout(() => {
    startConfetti(3000);
  }, 800);
});

/* ─── Keyboard shortcut ─────────────────────────────────────────────── */

document.addEventListener('keydown', (e) => {
  // Press 'C' to trigger confetti
  if (e.key === 'c' || e.key === 'C') {
    if (!e.ctrlKey && !e.metaKey && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
      startConfetti(3000);
    }
  }
});
