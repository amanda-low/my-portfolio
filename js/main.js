// Portfolio - Minimal JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('nav__link--active');
    }
  });

  // Simple form handling (prevents default, shows confirmation)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');

      // Show simple confirmation
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Message Sent!';
      submitBtn.disabled = true;

      // Reset after delay
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    });
  }

  // Scroll-triggered fade-in animations
  // Elements above the fold appear instantly; elements below animate on scroll
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const isAboveFold = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight;
    };

    // Make elements already in viewport visible immediately (no animation)
    fadeElements.forEach(el => {
      if (isAboveFold(el)) {
        el.style.transition = 'none';
        el.classList.add('visible');
        // Re-enable transitions after paint
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = '';
          });
        });
      }
    });

    // Observe elements below the fold for scroll animation
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    fadeElements.forEach(el => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  }

  // Header background on scroll (for inner pages with standard header)
  const header = document.querySelector('.header--standard');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 1px 0 rgba(0,0,0,0.05)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox__img');
  const lightboxCaption = lightbox?.querySelector('.lightbox__caption');
  const lightboxClose = lightbox?.querySelector('.lightbox__close');
  const lightboxPrev = lightbox?.querySelector('.lightbox__nav--prev');
  const lightboxNext = lightbox?.querySelector('.lightbox__nav--next');
  const workExpandButtons = document.querySelectorAll('.work__expand');
  const carouselImages = document.querySelectorAll('.research-carousel__image');

  let lightboxItems = []; // Array of {img, label}
  let lightboxIndex = 0;

  const updateLightboxNav = () => {
    if (!lightboxPrev || !lightboxNext) return;

    if (lightboxItems.length > 1) {
      lightboxPrev.classList.add('lightbox__nav--visible');
      lightboxNext.classList.add('lightbox__nav--visible');
      lightboxPrev.disabled = lightboxIndex === 0;
      lightboxNext.disabled = lightboxIndex >= lightboxItems.length - 1;
    } else {
      lightboxPrev.classList.remove('lightbox__nav--visible');
      lightboxNext.classList.remove('lightbox__nav--visible');
    }
  };

  const showLightboxImage = (index) => {
    if (index < 0 || index >= lightboxItems.length) return;
    lightboxIndex = index;
    const item = lightboxItems[index];
    lightboxImg.src = item.img.src;
    lightboxImg.alt = item.img.alt;
    if (lightboxCaption) {
      lightboxCaption.textContent = item.label || '';
    }
    updateLightboxNav();
  };

  const openLightbox = (img, items = [], index = 0, label = '') => {
    if (img && lightboxImg && lightbox) {
      lightboxItems = items;
      lightboxIndex = index;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      if (lightboxCaption) {
        lightboxCaption.textContent = items.length > 0 ? items[index].label : label;
      }
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
      updateLightboxNav();
    }
  };

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
      lightboxItems = [];
      lightboxIndex = 0;
      if (lightboxCaption) lightboxCaption.textContent = '';
      updateLightboxNav();
    }
  };

  // Work grid expand buttons (single image, no navigation)
  workExpandButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const img = btn.closest('.work__image').querySelector('img');
      openLightbox(img);
    });
  });

  // Zoomable images (click to open zoomable lightbox with labels)
  const zoomableLightbox = document.getElementById('zoomable-lightbox');
  const zoomableLightboxContent = zoomableLightbox?.querySelector('.zoomable-lightbox__content');
  const zoomableLightboxClose = zoomableLightbox?.querySelector('.zoomable-lightbox__close');
  const zoomableLightboxZoomIn = zoomableLightbox?.querySelector('.zoomable-lightbox__zoom--in');
  const zoomableLightboxZoomOut = zoomableLightbox?.querySelector('.zoomable-lightbox__zoom--out');
  const zoomableLightboxZoomLevel = zoomableLightbox?.querySelector('.zoomable-lightbox__zoom-level');
  let currentZoom = 100;

  let baseWidth = 0;

  const openZoomableLightbox = (caseImage) => {
    if (!zoomableLightbox || !zoomableLightboxContent) return;

    // Get the original rendered width of the image
    const originalImg = caseImage.querySelector('img');
    baseWidth = originalImg.offsetWidth;

    const clone = caseImage.cloneNode(true);
    clone.classList.remove('case-image--wide', 'case-image--zoomable');

    // Set the cloned image to match the viewport width
    const clonedImg = clone.querySelector('img');
    if (clonedImg) {
      clonedImg.style.width = baseWidth + 'px';
      clonedImg.style.maxWidth = 'none';
    }

    zoomableLightboxContent.innerHTML = '';
    zoomableLightboxContent.appendChild(clone);

    currentZoom = 100;
    updateZoom();

    zoomableLightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeZoomableLightbox = () => {
    if (!zoomableLightbox) return;
    zoomableLightbox.classList.remove('active');
    document.body.style.overflow = '';
    currentZoom = 100;
  };

  const updateZoom = () => {
    if (!zoomableLightboxContent || !zoomableLightboxZoomLevel) return;
    zoomableLightboxContent.style.transform = `scale(${currentZoom / 100})`;
    zoomableLightboxZoomLevel.textContent = `${currentZoom}%`;
  };

  const zoomableImages = document.querySelectorAll('.zoomable-image');
  zoomableImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const caseImage = img.closest('.case-image');
      if (caseImage) {
        openZoomableLightbox(caseImage);
      }
    });
  });

  if (zoomableLightbox) {
    zoomableLightboxClose?.addEventListener('click', closeZoomableLightbox);

    zoomableLightboxZoomIn?.addEventListener('click', () => {
      if (currentZoom < 200) {
        currentZoom += 25;
        updateZoom();
      }
    });

    zoomableLightboxZoomOut?.addEventListener('click', () => {
      if (currentZoom > 50) {
        currentZoom -= 25;
        updateZoom();
      }
    });

    zoomableLightbox.addEventListener('click', (e) => {
      if (e.target === zoomableLightbox) closeZoomableLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!zoomableLightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeZoomableLightbox();
      if (e.key === '+' || e.key === '=') {
        if (currentZoom < 200) {
          currentZoom += 25;
          updateZoom();
        }
      }
      if (e.key === '-') {
        if (currentZoom > 50) {
          currentZoom -= 25;
          updateZoom();
        }
      }
    });
  }

  // Carousel images (click to open lightbox with navigation)
  carouselImages.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const carousel = img.closest('.research-carousel');
      const carouselItems = Array.from(carousel.querySelectorAll('.research-carousel__item'));
      const items = carouselItems.map(item => ({
        img: item.querySelector('.research-carousel__image'),
        label: item.querySelector('.research-carousel__label')?.textContent || ''
      }));
      const currentItem = img.closest('.research-carousel__item');
      const currentIndex = carouselItems.indexOf(currentItem);
      openLightbox(items[currentIndex].img, items, currentIndex);
    });
  });

  // Vision slides (click to open lightbox with navigation)
  const visionSlides = document.querySelectorAll('.vision-slides__image');
  visionSlides.forEach(img => {
    img.addEventListener('click', (e) => {
      e.preventDefault();
      const container = img.closest('.vision-slides');
      const allImages = Array.from(container.querySelectorAll('.vision-slides__image'));
      const items = allImages.map(image => ({
        img: image,
        label: image.dataset.label || ''
      }));
      const currentIndex = allImages.indexOf(img);
      openLightbox(items[currentIndex].img, items, currentIndex);
    });
  });

  if (lightbox) {
    lightboxClose?.addEventListener('click', closeLightbox);
    lightboxPrev?.addEventListener('click', () => showLightboxImage(lightboxIndex - 1));
    lightboxNext?.addEventListener('click', () => showLightboxImage(lightboxIndex + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft' && lightboxImages.length > 1) {
        showLightboxImage(lightboxIndex - 1);
      } else if (e.key === 'ArrowRight' && lightboxImages.length > 1) {
        showLightboxImage(lightboxIndex + 1);
      }
    });
  }

  // Research carousel navigation
  const carousels = document.querySelectorAll('.research-carousel');

  carousels.forEach(carousel => {
    const track = carousel.querySelector('.research-carousel__track');
    const prevBtn = carousel.querySelector('.research-carousel__arrow--prev');
    const nextBtn = carousel.querySelector('.research-carousel__arrow--next');

    if (!track || !prevBtn || !nextBtn) return;

    const items = track.querySelectorAll('.research-carousel__item');
    let currentIndex = 0;
    const peekAmount = 40; // pixels to show of adjacent items

    const updateArrowStates = () => {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= items.length - 1;
    };

    const scrollToIndex = (index) => {
      if (index < 0 || index >= items.length) return;
      currentIndex = index;

      const item = items[index];
      let scrollTarget;

      if (index === 0) {
        // First item: align to start
        scrollTarget = 0;
      } else if (index === items.length - 1) {
        // Last item: align to end
        scrollTarget = track.scrollWidth - track.clientWidth;
      } else {
        // Middle items: show peek of previous item
        scrollTarget = item.offsetLeft - peekAmount;
      }

      track.scrollTo({ left: scrollTarget, behavior: 'smooth' });
      updateArrowStates();
    };

    prevBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      scrollToIndex(currentIndex + 1);
    });

    // Keyboard navigation when track is focused
    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        scrollToIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        scrollToIndex(currentIndex + 1);
      }
    });

    // Update current index on manual scroll
    track.addEventListener('scrollend', () => {
      const scrollLeft = track.scrollLeft;
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const distance = Math.abs(item.offsetLeft - peekAmount - scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentIndex = closestIndex;
      updateArrowStates();
    });

    // Set initial state
    updateArrowStates();
  });

  // Comparison carousel navigation
  const comparisonCarousels = document.querySelectorAll('.comparison-carousel');

  comparisonCarousels.forEach(carousel => {
    const track = carousel.querySelector('.comparison-carousel__track');
    const prevBtn = carousel.querySelector('.comparison-carousel__arrow--prev');
    const nextBtn = carousel.querySelector('.comparison-carousel__arrow--next');

    if (!track || !prevBtn || !nextBtn) return;

    const items = track.querySelectorAll('.comparison-carousel__item');
    let currentIndex = 0;

    const updateArrowStates = () => {
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= items.length - 1;
      prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
      nextBtn.style.opacity = currentIndex >= items.length - 1 ? '0.3' : '1';
    };

    const scrollToIndex = (index) => {
      if (index < 0 || index >= items.length) return;
      currentIndex = index;
      const item = items[index];
      track.scrollTo({ left: item.offsetLeft, behavior: 'smooth' });
      updateArrowStates();
    };

    prevBtn.addEventListener('click', () => scrollToIndex(currentIndex - 1));
    nextBtn.addEventListener('click', () => scrollToIndex(currentIndex + 1));

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') scrollToIndex(currentIndex - 1);
      else if (e.key === 'ArrowRight') scrollToIndex(currentIndex + 1);
    });

    track.addEventListener('scrollend', () => {
      const scrollLeft = track.scrollLeft;
      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const distance = Math.abs(item.offsetLeft - scrollLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      currentIndex = closestIndex;
      updateArrowStates();
    });

    updateArrowStates();
  });

  // Feature timeline table lightbox
  const featureTimelineWrapper = document.querySelector('.feature-timeline__wrapper');
  const featureTimelineLightbox = document.getElementById('feature-timeline-lightbox');
  const featureTimelineLightboxContent = featureTimelineLightbox?.querySelector('.feature-timeline-lightbox__content');
  const featureTimelineLightboxClose = featureTimelineLightbox?.querySelector('.feature-timeline-lightbox__close');

  if (featureTimelineWrapper && featureTimelineLightbox && featureTimelineLightboxContent) {
    featureTimelineWrapper.addEventListener('click', () => {
      const table = featureTimelineWrapper.querySelector('.feature-timeline--horizontal');
      const clone = table.cloneNode(true);
      featureTimelineLightboxContent.innerHTML = '';
      featureTimelineLightboxContent.appendChild(clone);
      featureTimelineLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    const closeLightboxTable = () => {
      featureTimelineLightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    featureTimelineLightboxClose?.addEventListener('click', closeLightboxTable);

    featureTimelineLightbox.addEventListener('click', (e) => {
      if (e.target === featureTimelineLightbox) closeLightboxTable();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && featureTimelineLightbox.classList.contains('active')) {
        closeLightboxTable();
      }
    });
  }
});
