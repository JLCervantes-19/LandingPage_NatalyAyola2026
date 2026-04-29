/**
 * NATALY AYOLA — Media Kit Landing Page
 * Archivo: js/main.js
 * Descripción: Lógica de animaciones, scroll, carousel, y micro-interacciones.
 *
 * Módulos:
 * 1. Utilidades
 * 2. Barra de progreso de scroll
 * 3. Header sticky / scroll
 * 4. Menú hamburguesa (móvil)
 * 5. Reveal on Scroll (IntersectionObserver)
 * 6. Stagger parents
 * 7. Animación contadores (stats)
 * 8. Carousel del Hero
 * 9. Tilt 3D en tarjetas de servicio
 * 10. Cursor personalizado (desktop)
 * 11. Parallax sutil en sección About
 * 12. Magnetic buttons
 * 13. Init
 */

'use strict';

/* ============================================================
   1. UTILIDADES
   ============================================================ */

/**
 * Interpola entre dos valores usando una curva easeOutExpo.
 * @param {number} t  - progreso 0..1
 * @returns {number}
 */
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

/**
 * Hace clamp de un valor entre min y max.
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Mapea un valor de un rango a otro.
 */
function mapRange(value, inMin, inMax, outMin, outMax) {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

/**
 * Devuelve true si el dispositivo es táctil (no hover).
 */
function isTouchDevice() {
  return window.matchMedia('(hover: none)').matches;
}

/* ============================================================
   2. BARRA DE PROGRESO DE SCROLL
   ============================================================ */
function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  function update() {
    const scrollTop  = window.scrollY;
    const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
    const progress   = docHeight > 0 ? scrollTop / docHeight : 0;
    bar.style.transform = `scaleX(${progress})`;
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   3. HEADER STICKY
   ============================================================ */
function initHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  let lastY    = 0;
  let ticking  = false;

  function update() {
    const y = window.scrollY;

    if (y > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastY    = y;
    ticking  = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   4. MENÚ HAMBURGUESA
   ============================================================ */
function initMobileMenu() {
  const hamburger  = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuLinks  = document.querySelectorAll('.mobile-menu a');

  if (!hamburger || !mobileMenu) return;

  function openMenu() {
    hamburger.classList.add('is-active');
    mobileMenu.classList.add('is-open');
    document.body.classList.add('menu-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    hamburger.classList.remove('is-active');
    mobileMenu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.addEventListener('click', () => {
    if (mobileMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al hacer click en un link
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

/* ============================================================
   5. REVEAL ON SCROLL (IntersectionObserver)
   ============================================================ */
function initRevealObserver() {
  const targets = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Desconectar tras animar (performance)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -48px 0px'
  });

  targets.forEach(el => observer.observe(el));
}

/* ============================================================
   6. STAGGER PARENTS
   ============================================================ */
function initStaggerObserver() {
  const parents = document.querySelectorAll('.stagger-parent');
  if (!parents.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  parents.forEach(el => observer.observe(el));
}

/* ============================================================
   7. ANIMACIÓN CONTADORES (stats)
   ============================================================ */
function animateCounter(el, target, duration, suffix) {
  const start     = 0;
  let startTime   = null;
  const isFloat   = target % 1 !== 0;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed  = timestamp - startTime;
    const progress = clamp(elapsed / duration, 0, 1);
    const eased    = easeOutExpo(progress);
    const current  = start + (target - start) * eased;

    el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = (isFloat ? target.toFixed(1) : target) + suffix;
    }
  }

  requestAnimationFrame(step);
}

function initCounters() {
  const stats = [
    { id: 'stat-followers',  end: 64.5, suffix: 'K' },
    { id: 'stat-reach',      end: 400,  suffix: 'K' },
    { id: 'stat-impressions',end: 1.7,  suffix: 'M' },
    { id: 'stat-engagement', end: 8.2,  suffix: '%' },
    // Demografía
    { id: 'stat-women',      end: 75,   suffix: '%' },
    { id: 'stat-men',        end: 25,   suffix: '%' },
    { id: 'stat-age-25-35',  end: 75,   suffix: '%' },
    { id: 'stat-age-18-24',  end: 18,   suffix: '%' },
    // Geografía
    { id: 'stat-colombia',   end: 92,   suffix: '%' },
    { id: 'stat-latam',      end: 68,   suffix: '%' },
    { id: 'stat-usa',        end: 6,    suffix: '%' },
    { id: 'stat-spain',      end: 3,    suffix: '%' },
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const cfg = stats.find(s => s.id === entry.target.id);
        if (cfg) {
          entry.target.dataset.animated = 'true';
          animateCounter(entry.target, cfg.end, 2200, cfg.suffix);
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ============================================================
   8. CAROUSEL DEL HERO
   ============================================================ */
function initCarousel() {
  const track    = document.getElementById('carousel-track');
  const slides   = document.querySelectorAll('.carousel-slide');
  const dots     = document.querySelectorAll('.carousel-dot');
  const btnPrev  = document.getElementById('carousel-prev');
  const btnNext  = document.getElementById('carousel-next');

  if (!slides.length) return;

  let current  = 0;
  let timer    = null;
  const delay  = 2000;

  function goTo(index) {
    // Remove active
    slides[current].classList.remove('is-active');
    dots[current]?.classList.remove('is-active');

    // Update index
    current = (index + slides.length) % slides.length;

    // Add active
    slides[current].classList.add('is-active');
    dots[current]?.classList.add('is-active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, delay);
  }

  function resetTimer() {
    startTimer();
  }

  // Botones
  btnNext?.addEventListener('click', () => { next(); resetTimer(); });
  btnPrev?.addEventListener('click', () => { prev(); resetTimer(); });

  // Dots
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); resetTimer(); });
  });

  // Swipe touch para móvil
  let touchStartX = 0;
  let touchStartY = 0;

  const heroEl = document.querySelector('.hero');
  heroEl?.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  heroEl?.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    // Solo si es swipe horizontal (más horizontal que vertical)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) { next(); } else { prev(); }
      resetTimer();
    }
  }, { passive: true });

  // Pausar al hover (desktop)
  if (!isTouchDevice()) {
    heroEl?.addEventListener('mouseenter', () => clearInterval(timer));
    heroEl?.addEventListener('mouseleave', startTimer);
  }

  // Iniciar
  startTimer();
}

/* ============================================================
   9. TILT 3D EN TARJETAS (desktop only)
   ============================================================ */
function initTiltCards() {
  if (isTouchDevice()) return;

  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect    = card.getBoundingClientRect();
      const cx      = rect.left + rect.width  / 2;
      const cy      = rect.top  + rect.height / 2;
      const dx      = (e.clientX - cx) / (rect.width  / 2);
      const dy      = (e.clientY - cy) / (rect.height / 2);
      const rotateX = clamp(-dy * 8, -8, 8);
      const rotateY = clamp( dx * 8, -8, 8);

      card.style.transform = `
        perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(8px)
      `;
      card.style.boxShadow = `
        ${-rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,0.10)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
}

/* ============================================================
   10. CURSOR PERSONALIZADO (desktop)
   ============================================================ */
function initCustomCursor() {
  if (isTouchDevice()) return;

  // Crear cursor
  const cursor = document.createElement('div');
  cursor.id    = 'custom-cursor';
  cursor.innerHTML = `
    <div class="cursor-dot"></div>
    <div class="cursor-ring"></div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    #custom-cursor { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9999; }
    .cursor-dot {
      position: absolute;
      width: 6px; height: 6px;
      background: #1d1d1f;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.1s ease, opacity 0.3s ease;
    }
    .cursor-ring {
      position: absolute;
      width: 32px; height: 32px;
      border: 1.5px solid rgba(29,29,31,0.35);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: transform 0.18s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease;
      will-change: transform;
    }
    body.cursor-hover .cursor-ring {
      width: 56px; height: 56px;
      background: rgba(29,29,31,0.06);
      border-color: rgba(29,29,31,0.5);
    }
    body.cursor-hover .cursor-dot { transform: translate(-50%, -50%) scale(0); }
  `;

  document.head.appendChild(style);
  document.body.appendChild(cursor);

  const dot  = cursor.querySelector('.cursor-dot');
  const ring = cursor.querySelector('.cursor-ring');

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let rafId  = null;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
    if (!rafId) rafId = requestAnimationFrame(animateRing);
  }, { passive: true });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }

  // Hover en elementos interactivos
  const hoverTargets = 'a, button, .gallery-item, .service-card, .social-card, .stat-card';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ============================================================
   11. PARALLAX SUTIL EN SECCIÓN ABOUT
   ============================================================ */
function initParallax() {
  if (isTouchDevice()) return;

  const aboutImg = document.querySelector('.about-img-main img');
  if (!aboutImg) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const rect     = aboutImg.closest('.about-img-wrap')?.getBoundingClientRect();
        if (!rect) return;

        const vh       = window.innerHeight;
        const centerY  = rect.top + rect.height / 2;
        const progress = (vh / 2 - centerY) / (vh / 2);
        const offsetY  = clamp(progress * 30, -30, 30);

        aboutImg.style.transform = `translateY(${offsetY}px) scale(1.08)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ============================================================
   12. MAGNETIC BUTTONS
   ============================================================ */
function initMagneticButtons() {
  if (isTouchDevice()) return;

  const magnets = document.querySelectorAll('.btn-primary, .btn-ghost, .btn-header');

  magnets.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const cx   = rect.left + rect.width  / 2;
      const cy   = rect.top  + rect.height / 2;
      const dx   = (e.clientX - cx) * 0.35;
      const dy   = (e.clientY - cy) * 0.35;

      btn.style.transform = `translate(${dx}px, ${dy}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ============================================================
   13. SMOOTH SCROLL para links internos
   ============================================================ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ============================================================
   14. GALLERY ITEM — Reveal stagger mejorado
   ============================================================ */
function initGalleryReveal() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const i = parseInt(entry.target.dataset.index || 0);
        setTimeout(() => {
          entry.target.style.opacity    = '1';
          entry.target.style.transform  = 'translateY(0) scale(1)';
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  items.forEach((item, i) => {
    item.dataset.index      = i;
    item.style.opacity      = '0';
    item.style.transform    = 'translateY(40px) scale(0.96)';
    item.style.transition   = `opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)`;
    observer.observe(item);
  });
}

/* ============================================================
   15. HERO TEXT — Entrada palabra por palabra
   ============================================================ */
function initHeroTextEntrance() {
  // La animación ya está en CSS con @keyframes char-enter
  // Aquí simplemente aseguramos que el overlay del hero sea visible
  // tras el breve retraso de carga de fuentes
  const overlay = document.querySelector('.hero-overlay');
  if (overlay) {
    overlay.style.visibility = 'visible';
  }
}

/* ============================================================
   INIT — Punto de entrada principal
   ============================================================ */
function init() {
  initScrollProgress();
  initHeader();
  initMobileMenu();
  initRevealObserver();
  initStaggerObserver();
  initCounters();
  initCarousel();
  initTiltCards();
  initCustomCursor();
  initParallax();
  initMagneticButtons();
  initSmoothScroll();
  initGalleryReveal();
  initHeroTextEntrance();
}

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
