const portfolioCategories = [
  { id: 'web', label: 'Website development', count: 6 },
  { id: 'logo', label: 'Logo design', count: 6 },
  { id: 'branding', label: 'Branding', count: 6 },
  { id: 'motion', label: 'Motion graphics', count: 6 },
  { id: 'app', label: 'App development', count: 6 }
];

// Package names, published prices and feature summaries were checked against
// https://brandversestudios.com/packages in October 2026.
const packages = [
  { id: 'logo', label: 'Logo design', cards: [
    ['Basic Logo', 49, 99, ['3 initial logo concepts', '2 rounds of revisions', 'PNG, JPG and SVG files', 'Black and white version', 'Color palette suggestions', '1 week delivery']],
    ['Premium Logo', 125, 249, ['5 initial logo concepts', 'Unlimited revisions', 'All file formats', 'Horizontal, vertical and icon variations', 'Brand guidelines', 'Business card design']],
    ['Enterprise Logo', 249, 499, ['8 initial logo concepts', 'Unlimited revisions', 'Complete logo system', 'Full brand identity package', 'Comprehensive brand guidelines', 'Social media kit']],
    ['3D Logo Package', 499, 749, ['3 unique 3D concepts', 'Lighting effects and VFX', 'Fully rendered logo', 'Multiple viewing angles', '3 dedicated designers', '72-hour turnaround']],
    ['MascotPro Package', 399, 649, ['2 mascot concepts', 'Hand-drawn sketch', 'Unlimited revisions', 'Presentation mockup', 'AI, EPS, PNG, JPEG and PDF files', '24 to 48 hour turnaround']],
    ['BrandMaster Package', 999, 1499, ['Unlimited original concepts', '5-page informative website', 'Stationery design', 'Brand book', '500 business cards', 'Social media designs']]
  ]},
  { id: 'website', label: 'Website development', cards: [
    ['Starter Package', 249, 399, ['3-page website', 'Custom layout design', 'Contact or query form', '1 banner design', '2 stock photos', 'Favicon and source files']],
    ['Professional Package', 499, 799, ['5-page website', 'Custom layout design', 'Contact or query form', '3 banner designs', '5 stock photos', 'Google-friendly sitemap']],
    ['Business Package', 999, 1499, ['Up to 10 unique pages', 'CMS or admin panel', '5+ stock photos and banners', 'Social media integration', 'Google-friendly sitemap', 'Interactive design']],
    ['Ecommerce Package', 649, 999, ['Custom ecommerce website', 'Up to 200 products', 'CMS or admin integration', 'Mobile responsive', 'Shopping cart and payment gateway', 'Order management']],
    ['Premium Package', 1799, 2499, ['Up to 15 unique pages', 'Interactive WordPress or PHP design', 'Mobile responsive', 'Up to 10 banner designs', 'Content management system', 'Newsletter signup']],
    ['Elite Package', 3499, 6499, ['Up to 20 unique pages', 'Dynamic interactive design', 'WordPress or PHP development', 'Mobile responsive', 'CMS and custom forms', 'Optional booking and payments']]
  ]},
  { id: 'branding', label: 'Branding', cards: [
    ['Brand Essentials', 699, 899, ['Logo design', 'Brand color palette', 'Typography selection', 'Basic brand guidelines', 'Business card design', '2 rounds of revisions']],
    ['Complete Branding', 1899, 2499, ['Complete logo system', 'Full brand identity', 'Comprehensive guidelines', 'Stationery and email signature', 'Social media templates', 'Photography direction']],
    ['Brand Transformation', 4499, 5999, ['Rebranding strategy', 'Complete identity system', 'Guidelines and print materials', 'Digital brand assets', 'Photography and video direction', 'Brand workshops']],
    ['Brand Expansion', 5499, 7999, ['Multi-market strategy', 'Sub-brand identities', 'Packaging for up to 5 items', 'Extended guidelines', 'Social templates', 'Marketing collateral']],
    ['Enterprise Branding', 6999, 8999, ['Enterprise brand architecture', 'Master and sub-brand systems', 'Corporate identity suite', 'Digital and social templates', 'Internal communication kit', 'Messaging and tone system']],
    ['Global Branding', 10999, 14999, ['Full brand audit and research', 'Global strategy', 'Multi-language identity', 'International rollout plan', 'Packaging systems', 'Digital ecosystem design']]
  ]},
  { id: 'seo', label: 'Search engine optimization', cards: [
    ['SEO Starter', 399, 499, ['On-page optimization', 'Research for 20 keywords', 'Meta tags', 'Analytics and Search Console setup', 'Basic technical SEO', 'Monthly report']],
    ['SEO Growth', 999, 1299, ['Complete SEO audit', 'Research for 50+ keywords', 'On-page and off-page work', 'Technical fixes', 'Content optimization', 'Local SEO']],
    ['SEO Enterprise', 2299, 2999, ['Comprehensive SEO audit', 'Strategy for 100+ keywords', 'Technical overhaul', 'Content strategy', 'Advanced link building', 'Competitor analysis']]
  ]},
  { id: 'revamp', label: 'Website revamp', cards: [
    ['Website Refresh', 749, 999, ['Homepage plus 3-page refresh', 'Mobile optimization', 'Performance improvements', 'Content updates', '1 revision round', '2 to 3 week delivery']],
    ['Complete Revamp', 2299, 2999, ['Complete redesign', 'Responsive design', 'Performance optimization', 'SEO improvements', 'Content restructuring', '3 months of support']],
    ['Enterprise Revamp', 5499, 6999, ['Full website redesign', 'Custom web application', 'Advanced integrations', 'Complete SEO overhaul', 'User experience optimization', '6 months of support']]
  ]},
  { id: 'video', label: 'Video production', cards: [
    ['Video Starter', 599, 799, ['1 video up to 60 seconds', 'Basic editing', 'Music and sound effects', '1 revision round', 'HD delivery', '2 to 3 week delivery']],
    ['Video Professional', 1899, 2499, ['2 to 3 videos up to 2 minutes each', 'Professional editing', 'Motion graphics', 'Color grading', 'Voiceover', 'Multiple formats']],
    ['Video Enterprise', 4499, 5999, ['5+ videos', 'Cinematic production', 'Advanced motion graphics', 'Custom music', 'Multi-language versions', 'Complete video strategy']]
  ]},
  { id: 'mobile', label: 'Mobile application', cards: [
    ['App Basic', 2299, 2999, ['iOS or Android app', 'Basic features', 'User authentication', 'UI/UX design', 'App store submission', '2 months of support']],
    ['App Professional', 5999, 7999, ['iOS and Android apps', 'Advanced features', 'Custom UI/UX', 'Backend development', 'API integration', 'Push notifications']],
    ['App Enterprise', 14999, 19999, ['iOS and Android apps', 'Advanced integrations', 'Custom backend', 'Enterprise security', 'Custom admin panel', '6 months of support']]
  ]},
  { id: 'social', label: 'Social media management', cards: [
    ['Social Starter', 299, 399, ['3 platforms', '8 posts per month', 'Basic content creation', 'Community management', 'Monthly report', '1-month commitment']],
    ['Social Growth', 799, 999, ['5 platforms', '20 posts per month', 'Professional content', 'Video content', 'Influencer outreach', 'Paid ad management']],
    ['Social Enterprise', 1899, 2499, ['All platforms', 'Unlimited posts', 'Premium content', 'Video production', 'Influencer partnerships', 'Complete ad campaigns']]
  ]}
];

const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const formatPrice = value => '$' + value.toLocaleString('en-US');

const galleryGrid = document.querySelector('#gallery-grid');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const dialog = document.querySelector('#image-dialog');
const motionAllowed = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
const revealObserver = motionAllowed && 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 40px 0px' })
  : null;

function registerReveals(elements) {
  if (!revealObserver) return;
  Array.from(elements).forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${Math.min(index % 3, 2) * 85}ms`);
    revealObserver.observe(element);
  });
}

function renderGallery(id) {
  const category = portfolioCategories.find(item => item.id === id);
  if (!category || !galleryGrid) return;
  galleryGrid.innerHTML = Array.from({ length: category.count }, (_, index) => {
    const number = index + 1;
    const file = `assets/portfolio/${id}-${number}.webp`;
    return `<article class="gallery-item"><button type="button" class="gallery-image" data-image="${file}" data-title="${escapeHTML(category.label)} / ${String(number).padStart(2, '0')}" aria-label="Open ${escapeHTML(category.label)} image ${number}"><img src="${file}" alt="${escapeHTML(category.label)} portfolio reference image ${number}" loading="lazy"></button><div class="gallery-caption"><span>${escapeHTML(category.label)}</span><span>${String(number).padStart(2, '0')} / 06</span></div></article>`;
  }).join('');
  registerReveals(galleryGrid.querySelectorAll('.gallery-item'));
  galleryTabs.forEach(tab => {
    const selected = tab.dataset.gallery === id;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
}

galleryTabs.forEach(tab => tab.addEventListener('click', () => renderGallery(tab.dataset.gallery)));
galleryGrid?.addEventListener('click', event => {
  const button = event.target.closest('button[data-image]');
  if (!button || !dialog) return;
  dialog.querySelector('img').src = button.dataset.image;
  dialog.querySelector('img').alt = button.querySelector('img').alt;
  dialog.querySelector('p').textContent = button.dataset.title + ' · Brand Verse Studios portfolio reference';
  dialog.showModal();
  document.body.classList.add('dialog-open');
});
dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => document.body.classList.remove('dialog-open'));

const pricingTabs = document.querySelector('#pricing-tabs');
const pricingGrid = document.querySelector('#pricing-grid');
if (pricingTabs && pricingGrid) {
  pricingTabs.innerHTML = packages.map(item => `<button type="button" class="price-tab" data-package="${item.id}" aria-selected="false">${escapeHTML(item.label)}</button>`).join('');
}
function renderPricing(id) {
  const category = packages.find(item => item.id === id);
  if (!category || !pricingGrid || !pricingTabs) return;
  const heading = document.querySelector('#pricing-heading');
  const count = document.querySelector('#pricing-count');
  if (heading) heading.textContent = category.label;
  if (count) count.textContent = String(category.cards.length).padStart(2, '0') + ' PACKAGES';
  pricingGrid.innerHTML = category.cards.map(([name, price, oldPrice, features], index) => `<article class="price-card"><div class="price-card-top"><span class="price-card-index">PACKAGE / ${String(index + 1).padStart(2, '0')}</span><span class="price-card-index">${escapeHTML(category.label.toUpperCase())}</span></div><h3>${escapeHTML(name)}</h3><div class="price-line"><strong>${formatPrice(price)}</strong><del>${formatPrice(oldPrice)}</del></div><ul>${features.map(feature => `<li>${escapeHTML(feature)}</li>`).join('')}</ul><a class="price-card-more" href="#contact" data-inquiry-service="${category.id}" data-inquiry-package="${escapeHTML(name)}">ASK ABOUT THIS PACKAGE ↗</a></article>`).join('');
  registerReveals(pricingGrid.querySelectorAll('.price-card'));
  pricingTabs.querySelectorAll('.price-tab').forEach(tab => {
    const selected = tab.dataset.package === id;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });
}
pricingTabs?.addEventListener('click', event => {
  const tab = event.target.closest('.price-tab');
  if (tab) renderPricing(tab.dataset.package);
});
pricingGrid?.addEventListener('click', event => {
  const link = event.target.closest('[data-inquiry-package]');
  if (!link) return;
  document.querySelector('#inquiry-service').value = link.dataset.inquiryService;
  document.querySelector('#inquiry-package').value = link.dataset.inquiryPackage;
});
const inquiryForm = document.querySelector('#inquiry-form');
const formAccessKey = document.querySelector('#web3forms-access-key');
const formSubmit = inquiryForm?.querySelector('button[type="submit"]');
const formStatus = document.querySelector('#form-status');
if (inquiryForm && formAccessKey && formSubmit && formStatus) {
  const formEnabled = Boolean(formAccessKey.value.trim());
  formSubmit.disabled = !formEnabled;
  if (formEnabled) {
    const formAvail = document.querySelector('#form-availability'); if (formAvail) formAvail.textContent = 'Tell us about your project and we will get back to you by email.';
    formStatus.textContent = 'Ready to send';
  }
  inquiryForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!formAccessKey.value.trim()) return;

    formSubmit.disabled = true;
    formStatus.textContent = 'Sending your enquiry...';
    delete formStatus.dataset.state;
    try {
      const response = await fetch(inquiryForm.action, {
        method: 'POST',
        body: new FormData(inquiryForm),
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error('Submission failed');
      inquiryForm.reset();
      formStatus.textContent = 'Thanks - your enquiry has been sent.';
      formStatus.dataset.state = 'success';
    } catch {
      formStatus.textContent = 'Could not send right now. Please try again.';
      formStatus.dataset.state = 'error';
    } finally {
      formSubmit.disabled = false;
    }
  });
}

const heroSlider = document.querySelector('#hero-slider');
const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = [...document.querySelectorAll('.slider-dot')];
let activeHeroSlide = 0;
function showHeroSlide(index) {
  activeHeroSlide = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    const active = slideIndex === activeHeroSlide;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  heroDots.forEach((dot, dotIndex) => {
    const active = dotIndex === activeHeroSlide;
    dot.classList.toggle('is-active', active);
    if (active) dot.setAttribute('aria-current', 'true');
    else dot.removeAttribute('aria-current');
  });
  const slideCountEl = document.querySelector('#hero-slide-count'); if (slideCountEl) slideCountEl.textContent = `${String(activeHeroSlide + 1).padStart(2, '0')} / ${String(heroSlides.length).padStart(2, '0')}`;
}
heroSlider?.addEventListener('click', event => {
  const button = event.target.closest('button[data-slide], button[data-slide-direction]');
  if (!button) return;
  if (button.dataset.slide !== undefined) showHeroSlide(Number(button.dataset.slide));
  else showHeroSlide(activeHeroSlide + Number(button.dataset.slideDirection));
});

// Keep the reading-position indicator lightweight and off the scroll hot path.
const scrollProgress = document.querySelector('.scroll-progress');
let scrollFramePending = false;
function updateScrollProgress() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight)) : 0;
  scrollProgress.style.transform = `scaleX(${progress})`;
  scrollFramePending = false;
}
if (scrollProgress) {
  updateScrollProgress();
  window.addEventListener('scroll', () => {
    if (scrollFramePending) return;
    scrollFramePending = true;
    requestAnimationFrame(updateScrollProgress);
  }, { passive: true });
  window.addEventListener('resize', updateScrollProgress, { passive: true });
}

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const yearEl = document.querySelector('#year'); if (yearEl) yearEl.textContent = new Date().getFullYear();
if (revealObserver) {
  document.documentElement.classList.add('motion-ready');
  registerReveals(document.querySelectorAll('.statement-inner > *, .services > div, .section-intro > *, .interlude .container > *, .pricing-meta, .process-inner > *, .process-list > div, .closing .container > *, .service-deep-card, .standard-card, .team-card, .faq-row, .gallery-item, .contact-item, .price-card'));
  requestAnimationFrame(() => document.documentElement.classList.add('intro-visible'));
}
if (galleryGrid) renderGallery('web');
if (pricingGrid && pricingTabs) renderPricing('logo');

document.querySelectorAll('.faq-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const row = btn.closest('.faq-row');
    if (!row) return;
    const wasOpen = row.classList.contains('is-open');
    document.querySelectorAll('.faq-row').forEach(r => r.classList.remove('is-open'));
    if (!wasOpen) row.classList.add('is-open');
  });
});


function ensureInitialContent() {
  if (galleryGrid && (!galleryGrid.children || galleryGrid.children.length === 0)) {
    renderGallery('web');
  }
  if (pricingGrid && pricingTabs && (!pricingGrid.children || pricingGrid.children.length === 0)) {
    renderPricing('logo');
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ensureInitialContent);
} else {
  ensureInitialContent();
}
