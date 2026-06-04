(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.getElementById('siteHeader');
  const progress = document.querySelector('.scroll-progress span');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('mainMenu');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const updateScrollState = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', scrollTop > 24);
    if (progress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const value = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
    }
  };

  updateScrollState();
  window.addEventListener('scroll', updateScrollState, { passive: true });

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navToggle.classList.toggle('is-open');
      navMenu.classList.toggle('is-open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('is-open');
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('[data-reveal]');
  if (revealItems.length) {
    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

      revealItems.forEach((item, index) => {
        item.style.setProperty('--delay', `${Math.min(index % 5, 4) * 0.055}s`);
        observer.observe(item);
      });
    } else {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    }
  }

  if (!prefersReducedMotion) {
    const glow = document.querySelector('.cursor-glow');
    if (glow && window.matchMedia('(pointer: fine)').matches) {
      document.addEventListener('pointermove', (event) => {
        glow.style.opacity = '1';
        glow.style.left = `${event.clientX}px`;
        glow.style.top = `${event.clientY}px`;
      }, { passive: true });

      document.addEventListener('pointerleave', () => {
        glow.style.opacity = '0';
      });
    }

    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 7;
        const rotateX = ((0.5 - (y / rect.height)) * 7);
        card.style.setProperty('--rx', `${rotateX.toFixed(2)}deg`);
        card.style.setProperty('--ry', `${rotateY.toFixed(2)}deg`);
      });

      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      });
    });

    const magneticItems = document.querySelectorAll('.magnetic');
    magneticItems.forEach((item) => {
      item.addEventListener('pointermove', (event) => {
        const rect = item.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * 0.18;
        const y = (event.clientY - rect.top - rect.height / 2) * 0.18;
        item.style.transform = `translate(${x}px, ${y}px)`;
      });

      item.addEventListener('pointerleave', () => {
        item.style.transform = '';
      });
    });
  }

  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      const selector = button.getAttribute('data-copy');
      const target = selector ? document.querySelector(selector) : null;
      if (!target) return;

      const text = target.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const originalText = button.textContent;
        button.textContent = 'Tersalin';
        setTimeout(() => { button.textContent = originalText; }, 1400);
      } catch (error) {
        button.textContent = 'Copy manual';
      }
    });
  });

  const params = new URLSearchParams(window.location.search);
  const product = params.get('product');
  const productSelect = document.getElementById('productSelect');
  const messageBox = document.getElementById('messageBox');

  if (product) {
    if (productSelect) {
      const options = Array.from(productSelect.options);
      const exactOption = options.find((option) => option.value === product || option.text === product);
      if (exactOption) {
        productSelect.value = exactOption.value || exactOption.text;
      } else {
        productSelect.value = 'Custom Request';
      }
    }

    if (messageBox && !messageBox.value) {
      messageBox.value = `Halo CV. Ridho Utama Berkah, saya ingin bertanya tentang ${product}. Mohon info harga, minimum order, dan ketersediaan stok.`;
    }
  }
})();
