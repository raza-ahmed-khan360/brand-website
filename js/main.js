/**
 * TANGIBLE DIGITAL AGENCY - INTERACTIVE SCRIPTS
 * Clean, lightweight, user-friendly micro-interactions,
 * portfolio filtering, FAQ accordions, and consultation modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Mobile Menu Toggle
  // -------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNavDrawer.classList.toggle('active');
    });

    // Close on navigation link click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (mobileNavDrawer.classList.contains('active') && 
          !mobileNavDrawer.contains(e.target) && 
          !mobileMenuBtn.contains(e.target)) {
        mobileNavDrawer.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. Portfolio Category Filtering
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 180);
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 3. FAQ Accordion Interaction
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all other accordions
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
        });

        // Toggle current item
        if (!isOpen) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // -------------------------------------------------------------------------
  // 4. Consultation Modal & Form Handling
  // -------------------------------------------------------------------------
  const modalOverlay = document.getElementById('auditModal');
  const openModalBtns = document.querySelectorAll('.open-audit-modal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const auditModalForm = document.getElementById('auditModalForm');
  const toastNotice = document.getElementById('toastNotice');

  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Toast Notification
  function showToast(message) {
    if (toastNotice) {
      const toastText = toastNotice.querySelector('.toast-text');
      if (toastText) toastText.textContent = message;
      toastNotice.classList.add('show');
      setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 4000);
    }
  }

  // Modal Form Submit
  if (auditModalForm) {
    auditModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const companyInput = document.getElementById('modalCompany');
      const companyName = companyInput && companyInput.value ? companyInput.value : 'your company';
      closeModal();
      showToast(`Thank you! Consultation requested for ${companyName}. We will be in touch shortly.`);
      auditModalForm.reset();
    });
  }

  // Inline CTA Form Submit
  const inlineCtaForm = document.getElementById('inlineCtaForm');
  if (inlineCtaForm) {
    inlineCtaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('ctaName');
      const nameVal = nameInput && nameInput.value ? nameInput.value : 'there';
      showToast(`Thank you, ${nameVal}! We will contact you within 4 business hours.`);
      inlineCtaForm.reset();
    });
  }
});
