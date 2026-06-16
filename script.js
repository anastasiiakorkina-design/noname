// Nav scroll state
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// Cursor glow
const glow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// Floating particles
const particlesEl = document.getElementById('particles');
const PARTICLE_COUNT = 40;
for (let i = 0; i < PARTICLE_COUNT; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.bottom = '-10px';
  p.style.animationDuration = (10 + Math.random() * 15) + 's';
  p.style.animationDelay = (Math.random() * 15) + 's';
  particlesEl.appendChild(p);
}

// Generic reveal-on-scroll observer
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item, .exp-block').forEach(el => revealObserver.observe(el));

// Timeline progress line
const timelineSection = document.getElementById('timeline');
const timelineProgress = document.getElementById('timelineProgress');
function updateTimelineProgress() {
  const rect = timelineSection.getBoundingClientRect();
  const vh = window.innerHeight;
  const total = rect.height - vh * 0.5;
  const scrolled = -rect.top + vh * 0.5;
  const pct = Math.min(Math.max(scrolled / total, 0), 1) * 100;
  timelineProgress.style.height = pct + '%';
}
window.addEventListener('scroll', updateTimelineProgress);
updateTimelineProgress();

// Experience sticky image swap
const expImage = document.getElementById('expImage');
const expBlocks = document.querySelectorAll('.exp-block');
const expObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      expImage.style.backgroundImage = `url('${entry.target.dataset.img}')`;
    }
  });
}, { threshold: 0.6 });
expBlocks.forEach(b => expObserver.observe(b));

// Animated number counters
const numberObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      const target = parseInt(entry.target.dataset.target, 10);
      const suffix = entry.target.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();
      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * target);
        entry.target.textContent = value + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.number-value').forEach(el => numberObserver.observe(el));
