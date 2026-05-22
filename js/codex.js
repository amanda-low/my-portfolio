// Codex — copy email pill with text-swap feedback
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.copy-email');

  buttons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const email = btn.dataset.email;
      const defaultLabel = btn.dataset.default || btn.textContent;
      const copiedLabel = btn.dataset.copied || 'Copied';

      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch {}
        document.body.removeChild(ta);
      }

      btn.textContent = copiedLabel;
      btn.classList.add('is-copied');
      btn.setAttribute('aria-live', 'polite');

      clearTimeout(btn._copyTimer);
      btn._copyTimer = setTimeout(() => {
        btn.textContent = defaultLabel;
        btn.classList.remove('is-copied');
      }, 1600);
    });
  });

  // Codex — zoom-on-click lightbox for case study figures
  const zoomTargets = document.querySelectorAll(
    '.case-figure img, .research-grid__item img'
  );

  if (zoomTargets.length === 0) return;

  // Build lightbox once
  const lightbox = document.createElement('div');
  lightbox.className = 'codex-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <button type="button" class="codex-lightbox__close" aria-label="Close">Close</button>
    <div class="codex-lightbox__scroll">
      <img class="codex-lightbox__img" src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector('.codex-lightbox__img');
  const lbClose = lightbox.querySelector('.codex-lightbox__close');
  const lbScroll = lightbox.querySelector('.codex-lightbox__scroll');

  const open = (src, alt) => {
    lbImg.src = src;
    lbImg.alt = alt || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbImg.src = '';
  };

  zoomTargets.forEach((img) => {
    img.classList.add('is-zoomable');
    img.addEventListener('click', () => open(img.currentSrc || img.src, img.alt));
  });

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lbScroll) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('is-open')) close();
  });
});
