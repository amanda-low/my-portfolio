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
  const singleTargets = document.querySelectorAll(
    '.case-figure img, .research-grid__item img, .comparison__item img'
  );
  const galleries = document.querySelectorAll('.gallery');

  if (singleTargets.length === 0 && galleries.length === 0) return;

  // Build lightbox once
  const lightbox = document.createElement('div');
  lightbox.className = 'codex-lightbox';
  lightbox.setAttribute('aria-hidden', 'true');
  lightbox.innerHTML = `
    <div class="codex-lightbox__controls">
      <button type="button" class="codex-lightbox__zoom codex-lightbox__zoom--out" aria-label="Zoom out">−</button>
      <span class="codex-lightbox__zoom-level" aria-live="polite">100%</span>
      <button type="button" class="codex-lightbox__zoom codex-lightbox__zoom--in" aria-label="Zoom in">+</button>
      <button type="button" class="codex-lightbox__close" aria-label="Close">Close</button>
    </div>
    <div class="codex-lightbox__scroll">
      <div class="codex-lightbox__content"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lbContent = lightbox.querySelector('.codex-lightbox__content');
  const lbClose = lightbox.querySelector('.codex-lightbox__close');
  const lbScroll = lightbox.querySelector('.codex-lightbox__scroll');
  const lbZoomIn = lightbox.querySelector('.codex-lightbox__zoom--in');
  const lbZoomOut = lightbox.querySelector('.codex-lightbox__zoom--out');
  const lbZoomLevel = lightbox.querySelector('.codex-lightbox__zoom-level');

  // Zoom state
  const ZOOM_STEPS = [0.5, 0.75, 1, 1.25, 1.5, 2];
  let zoomIndex = 2; // default 100%

  const applyZoom = () => {
    const scale = ZOOM_STEPS[zoomIndex];
    lbContent.style.transform = `scale(${scale})`;
    lbZoomLevel.textContent = `${Math.round(scale * 100)}%`;
    lbZoomOut.disabled = zoomIndex === 0;
    lbZoomIn.disabled = zoomIndex === ZOOM_STEPS.length - 1;
  };

  const resetZoom = () => {
    zoomIndex = 2;
    applyZoom();
  };

  const openSingle = (src, alt) => {
    lbContent.innerHTML = '';
    const img = document.createElement('img');
    img.className = 'codex-lightbox__img';
    img.src = src;
    img.alt = alt || '';
    lbContent.appendChild(img);
    resetZoom();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  const openGroup = (items) => {
    lbContent.innerHTML = '';
    const group = document.createElement('div');
    group.className = 'codex-lightbox__group';
    items.forEach(({ src, alt, label }) => {
      const fig = document.createElement('figure');
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt || '';
      fig.appendChild(img);
      if (label) {
        const cap = document.createElement('figcaption');
        cap.textContent = label;
        fig.appendChild(cap);
      }
      group.appendChild(fig);
    });
    lbContent.appendChild(group);
    resetZoom();
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  };

  const close = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lbContent.innerHTML = '';
    resetZoom();
  };

  lbZoomIn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (zoomIndex < ZOOM_STEPS.length - 1) { zoomIndex++; applyZoom(); }
  });
  lbZoomOut.addEventListener('click', (e) => {
    e.stopPropagation();
    if (zoomIndex > 0) { zoomIndex--; applyZoom(); }
  });

  // Single-image zoom targets
  singleTargets.forEach((img) => {
    // Skip if it's inside a gallery — handled below
    if (img.closest('.gallery')) return;
    img.classList.add('is-zoomable');
    img.addEventListener('click', () => openSingle(img.currentSrc || img.src, img.alt));
  });

  // Gallery groups
  galleries.forEach((gallery) => {
    const items = Array.from(gallery.querySelectorAll('img')).map((img) => {
      const fig = img.closest('.comparison__item, .research-grid__item, .case-figure');
      const labelEl = fig && fig.querySelector('.comparison__label, .research-grid__label');
      return {
        src: img.currentSrc || img.src,
        alt: img.alt,
        label: labelEl ? labelEl.textContent.trim() : '',
      };
    });

    // Add "click to view full" text hint below the images
    const hint = document.createElement('button');
    hint.type = 'button';
    hint.className = 'gallery__hint';
    hint.textContent = 'Click to view full';
    hint.setAttribute('aria-label', 'Open all images side by side');
    hint.addEventListener('click', () => openGroup(items));
    gallery.appendChild(hint);

    // Individual images also open the group
    gallery.querySelectorAll('img').forEach((img) => {
      img.classList.add('is-zoomable');
      img.addEventListener('click', () => openGroup(items));
    });
  });

  lbClose.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lbScroll) close();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === '+' || e.key === '=') {
      if (zoomIndex < ZOOM_STEPS.length - 1) { zoomIndex++; applyZoom(); }
    } else if (e.key === '-' || e.key === '_') {
      if (zoomIndex > 0) { zoomIndex--; applyZoom(); }
    } else if (e.key === '0') {
      resetZoom();
    }
  });
});
