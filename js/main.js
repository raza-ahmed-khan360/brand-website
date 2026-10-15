/**
 * TANGIBLE DIGITAL EXECUTION - INTERACTIVE SCRIPTS
 * Handcrafted micro-interactions, clay tab switches, pricing calculator,
 * portfolio filtering, FAQ accordions, and audit modal handlers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------------------
  // 1. Mobile Menu Toggle
  // -------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');

  if (mobileMenuBtn && mobileNavDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileNavDrawer.classList.toggle('active');
    });

    // Close on navigation click
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNavDrawer.classList.remove('active');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
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
          }, 200);
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 3. Industry Playbook Data & Tab Switcher
  // -------------------------------------------------------------------------
  const industryPlaybooks = {
    'real-estate': {
      title: 'Real Estate & PropTech Playbook',
      lead: 'High-value property buyers demand cinematic speed, immersive virtual tours, and hyper-local SEO dominance before making multi-million dollar inquiries.',
      points: [
        {
          title: 'IDX & MLS Live Synchronized Portals',
          desc: 'Custom headless property search with sub-second filtering by school district, walkability score, and architectural style.'
        },
        {
          title: 'Geo-Targeted High Net Worth Inbound Funnels',
          desc: 'Programmatic Google Ads and Meta campaigns specifically mapped to verified luxury zip codes and investor demographics.'
        },
        {
          title: 'Automated Lead Qualification & CRM Routing',
          desc: 'Instant WhatsApp and SMS routing to senior brokers within 60 seconds of verified valuation submissions.'
        }
      ],
      kpis: [
        { label: 'Avg. Inbound Lead Lift', val: '+380%' },
        { label: 'Cost Per Qualified Tour Request', val: '$42 avg' },
        { label: 'Average Pipeline Timeline', val: '21 Days' }
      ]
    },
    'tech-saas': {
      title: 'Technology & B2B SaaS Playbook',
      lead: 'Modern software companies fail when they hide behind vague buzzwords. We translate complex product architectures into clear conversion mechanics.',
      points: [
        {
          title: 'Product-Led Storytelling & Interactive Previews',
          desc: 'High-contrast product interactive UI modules that showcase your product workflow before requiring a credit card.'
        },
        {
          title: 'Bottom-of-Funnel Technical SEO Dominance',
          desc: 'Targeting high-intent alternatives, migration guides, and integrations pages that convert at 4x the rate of top-of-funnel blogs.'
        },
        {
          title: 'Enterprise Security & SOC2 Compliant Frontends',
          desc: 'Ultra-fast Next.js engineering with strict CSP headers, sub-second TTFB, and zero-downtime CI/CD.'
        }
      ],
      kpis: [
        { label: 'Self-Serve Trial Conversion', val: '+4.2x' },
        { label: 'Reduction in Paid CAC', val: '-48%' },
        { label: 'Enterprise Demo Booking Rate', val: '14.8%' }
      ]
    },
    'fashion-retail': {
      title: 'Luxury Retail & D2C Playbook',
      lead: 'Generic Shopify templates destroy brand equity. We engineer bespoke, tactile storefronts that elevate average order value and command premium pricing.',
      points: [
        {
          title: 'Headless Shopify & Hydrogen Infrastructure',
          desc: 'Custom headless storefronts with instant page transitions, predictive cart drawers, and bespoke bundling.'
        },
        {
          title: 'Visual Storytelling & High-Retention Motion',
          desc: 'Cinema-grade video reels and 3D product previews that drive 65%+ higher time-on-site.'
        },
        {
          title: 'First-Party Data & Retention Architecture',
          desc: 'Server-side Meta CAPI tracking combined with tiered VIP loyalty loops to maximize lifetime value.'
        }
      ],
      kpis: [
        { label: 'Average Order Value (AOV)', val: '+68%' },
        { label: 'Mobile Checkout Velocity', val: '1.2s' },
        { label: 'Direct Return on Ad Spend (ROAS)', val: '5.4x' }
      ]
    },
    'hospitality': {
      title: 'Hospitality & Luxury Travel Playbook',
      lead: 'Guests do not book hotel rooms; they book an aspiration. We replace confusing third-party booking widgets with direct, high-margin reservation engines.',
      points: [
        {
          title: 'Direct Booking Engine Optimization',
          desc: 'Frictionless reservation funnels designed to capture guests directly and eliminate 18% OTA commission commissions.'
        },
        {
          title: 'Local Discovery & Culinary Search Dominance',
          desc: 'Dominating regional Google Maps packs and luxury lifestyle keywords for weekend getaways and private events.'
        },
        {
          title: 'Bespoke Visual Aesthetic & Guest Experience',
          desc: 'Editorial design systems that mirror the physical interior design of your property.'
        }
      ],
      kpis: [
        { label: 'Direct Booking Share', val: '72%' },
        { label: 'Commission Savings to OTA', val: '$240k/yr' },
        { label: 'Private Event Inbound Lift', val: '+215%' }
      ]
    },
    'professional-services': {
      title: 'Professional Services (Legal & Finance) Playbook',
      lead: 'High-stake corporate clients do not buy from generic agency templates. They demand authoritative proof, discreet credibility, and instant clarity.',
      points: [
        {
          title: 'Authority Architecture & Partner Profiles',
          desc: 'Positioning senior partners with deep case histories, verified deal transcripts, and clean press citations.'
        },
        {
          title: 'High-Intent Search Capture for Complex Matters',
          desc: 'Capturing lucrative high-intent inquiries across commercial litigation, M&A advisory, and private wealth.'
        },
        {
          title: 'Secure Client Onboarding Portals',
          desc: 'Clean, client-facing intake portals that streamline document collection and initial conflict checks.'
        }
      ],
      kpis: [
        { label: 'Retainer Client Deal Size', val: '+120%' },
        { label: 'Google Local Map Pack Rank', val: '#1 in 18 Cities' },
        { label: 'Lead-to-Retained Client Ratio', val: '31%' }
      ]
    },
    'health-wellness': {
      title: 'Health, Wellness & MedTech Playbook',
      lead: 'Patient trust requires clinical precision combined with warm accessibility. We build HIPAA-conscious digital ecosystems that patients trust instinctively.',
      points: [
        {
          title: 'HIPAA-Conscious Patient Intake & Telehealth',
          desc: 'Streamlined appointment booking, telehealth integration, and verified multi-location clinic schedules.'
        },
        {
          title: 'Patient Education & E-E-A-T Search Dominance',
          desc: 'Physician-reviewed medical content architecture that ranks at the top of Google for treatment symptoms.'
        },
        {
          title: 'Multi-Location Patient Acquisition Funnels',
          desc: 'Geo-targeted search campaigns delivering pre-qualified patient inquiries directly to clinic front desks.'
        }
      ],
      kpis: [
        { label: 'Monthly Patient Appointments', val: '18,400+' },
        { label: 'Patient Booking Drop-off Rate', val: '< 6%' },
        { label: 'Organic Search Share', val: '84%' }
      ]
    }
  };

  const industryTabBtns = document.querySelectorAll('.industry-tab-btn');
  const playbookTitle = document.getElementById('playbookTitle');
  const playbookLead = document.getElementById('playbookLead');
  const playbookPoints = document.getElementById('playbookPoints');
  const playbookKpis = document.getElementById('playbookKpis');

  industryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      industryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const industryKey = btn.getAttribute('data-industry');
      const data = industryPlaybooks[industryKey];

      if (data && playbookTitle && playbookLead && playbookPoints && playbookKpis) {
        // Smooth transition
        const displayBox = document.querySelector('.industry-playbook-display');
        displayBox.style.opacity = '0.5';
        displayBox.style.transform = 'translateY(4px)';

        setTimeout(() => {
          playbookTitle.textContent = data.title;
          playbookLead.textContent = data.lead;

          playbookPoints.innerHTML = data.points.map((pt, idx) => `
            <div class="playbook-point-item">
              <span class="point-bullet">0${idx + 1}</span>
              <div class="point-text">
                <strong>${pt.title}</strong>
                <p>${pt.desc}</p>
              </div>
            </div>
          `).join('');

          playbookKpis.innerHTML = data.kpis.map(kpi => `
            <div class="kpi-row">
              <span class="kpi-label">${kpi.label}</span>
              <span class="kpi-value">${kpi.val}</span>
            </div>
          `).join('');

          displayBox.style.opacity = '1';
          displayBox.style.transform = 'translateY(0)';
        }, 150);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. Pricing Switcher (Monthly Retainer vs Sprints)
  // -------------------------------------------------------------------------
  const pricingRetainerBtn = document.getElementById('pricingRetainerBtn');
  const pricingSprintBtn = document.getElementById('pricingSprintBtn');
  const pricingCards = document.querySelectorAll('.pricing-card');

  const pricingData = {
    retainer: [
      {
        name: 'Sprint Launch Pod',
        desc: 'Dedicated rapid sprint for MVP launch or complete digital overhaul.',
        price: '$5,900',
        period: '/ sprint',
        btnText: 'Start Sprint Pod'
      },
      {
        name: 'Growth Execution Pod',
        desc: 'Full dedicated cross-functional pod (Engineering, SEO, Paid Ads, UI/UX).',
        price: '$8,900',
        period: '/ month',
        btnText: 'Claim Growth Pod'
      },
      {
        name: 'Enterprise Scale Pod',
        desc: 'Dedicated multi-squad pod with VP of Execution for high-volume enterprises.',
        price: '$16,500',
        period: '/ month',
        btnText: 'Consult on Enterprise'
      }
    ],
    sprint: [
      {
        name: 'Sprint Launch Pod',
        desc: '3-week fixed milestone delivery with full source code hand-off.',
        price: '$6,500',
        period: 'fixed investment',
        btnText: 'Book 3-Week Sprint'
      },
      {
        name: 'Growth Execution Pod',
        desc: '6-week end-to-end web platform and search engine acquisition build.',
        price: '$12,800',
        period: 'fixed investment',
        btnText: 'Book 6-Week Sprint'
      },
      {
        name: 'Enterprise Scale Pod',
        desc: 'Custom multi-brand migration, complex API ecosystem, and brand re-platform.',
        price: '$24,500',
        period: 'fixed investment',
        btnText: 'Request Custom Scope'
      }
    ]
  };

  function updatePricing(mode) {
    const list = pricingData[mode];
    pricingCards.forEach((card, index) => {
      const item = list[index];
      if (item) {
        card.querySelector('.tier-name').textContent = item.name;
        card.querySelector('.tier-description').textContent = item.desc;
        card.querySelector('.tier-price').textContent = item.price;
        card.querySelector('.tier-period').textContent = item.period;
        card.querySelector('.pricing-cta-btn span').textContent = item.btnText;
      }
    });
  }

  if (pricingRetainerBtn && pricingSprintBtn) {
    pricingRetainerBtn.addEventListener('click', () => {
      pricingRetainerBtn.classList.add('active');
      pricingSprintBtn.classList.remove('active');
      updatePricing('retainer');
    });

    pricingSprintBtn.addEventListener('click', () => {
      pricingSprintBtn.classList.add('active');
      pricingRetainerBtn.classList.remove('active');
      updatePricing('sprint');
    });
  }

  // -------------------------------------------------------------------------
  // 5. FAQ Accordion Interaction
  // -------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Close all other accordions
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-trigger').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // -------------------------------------------------------------------------
  // 6. Interactive Growth Audit Modal
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

  // Escape key closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // -------------------------------------------------------------------------
  // 7. Toast Notification Handler
  // -------------------------------------------------------------------------
  function showToast(message) {
    if (toastNotice) {
      const toastText = toastNotice.querySelector('.toast-text');
      if (toastText) toastText.textContent = message;
      toastNotice.classList.add('show');
      setTimeout(() => {
        toastNotice.classList.remove('show');
      }, 4500);
    }
  }

  // Modal Form Submission
  if (auditModalForm) {
    auditModalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const companyInput = document.getElementById('modalCompany');
      const companyName = companyInput ? companyInput.value : 'your company';
      closeModal();
      showToast(`Audit request received for ${companyName}! A senior partner will review your URL within 4 hours.`);
      auditModalForm.reset();
    });
  }

  // Inline CTA Form Submission
  const inlineCtaForm = document.getElementById('inlineCtaForm');
  if (inlineCtaForm) {
    inlineCtaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('ctaEmail');
      const emailVal = emailInput ? emailInput.value : 'your email';
      showToast(`Diagnostic briefing dispatched to ${emailVal}! Expect our initial tear-down report shortly.`);
      inlineCtaForm.reset();
    });
  }

  // -------------------------------------------------------------------------
  // 8. Live Clock / Timezone in Footer
  // -------------------------------------------------------------------------
  const liveClock = document.getElementById('liveClock');
  if (liveClock) {
    function updateClock() {
      const now = new Date();
      // Format Central US Time (Dallas HQ)
      const options = { timeZone: 'America/Chicago', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
      const timeString = new Intl.DateTimeFormat([], options).format(now);
      liveClock.textContent = `${timeString} CST (Dallas HQ)`;
    }
    updateClock();
    setInterval(updateClock, 1000);
  }
});
