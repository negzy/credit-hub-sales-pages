/**
 * Credit Hub Elite — Funnel logic
 * Form handling, GHL webhook placeholder, abandoned lead tracking
 */

(function () {
  'use strict';

  var CONFIG = {
    checkoutPage: 'https://www.skool.com/tch/about',
    ghlWebhookUrl: 'https://services.leadconnectorhq.com/hooks/WXjXphFwjf74lxJdenZt/webhook-trigger/NlWKYBDFh6bYcJnJ3QXJ', // Replace with your GHL webhook endpoint
    skoolCheckoutUrl: 'https://www.skool.com/tch/about', // Replace with your Skool paid community checkout URL
    testimonialsUrl: 'https://www.thecredithub.io/testimonials', // Replace with your testimonials page URL
    storageKey: 'credit_hub_elite_lead',
    abandonPingIntervalMs: 10000
  };              

  /**
   * Get stored lead from session (for checkout page)
   */
  function getStoredLead() {
    try {
      var raw = sessionStorage.getItem(CONFIG.storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  /**
   * Store lead and redirect to checkout
   */
  function captureAndRedirect(lead) {
    try {
      sessionStorage.setItem(CONFIG.storageKey, JSON.stringify(lead));
    } catch (e) {}
    window.location.href = CONFIG.checkoutPage;
  }

  /**
   * Send lead to GHL webhook. Sends both snake_case and camelCase so GHL workflow
   * mapping works either way. Check GHL: workflow ON, trigger = Inbound Webhook,
   * then an action like "Create Contact" / "Add Contact" with fields mapped from
   * first_name, last_name, email, phone, source.
   */
  function sendToGHL(lead, done) {
    if (!CONFIG.ghlWebhookUrl) {
      if (done) done(new Error('No GHL webhook URL configured'));
      return;
    }
    var payload = {
      first_name: lead.firstName,
      last_name: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      source: 'credit_hub_elite_optin'
    };
    var xhr = new XMLHttpRequest();
    xhr.open('POST', CONFIG.ghlWebhookUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        if (typeof console !== 'undefined' && console.log) console.log('[GHL] Lead sent:', lead.email);
        if (done) done(null);
      } else {
        if (typeof console !== 'undefined' && console.warn) console.warn('[GHL] Webhook response:', xhr.status, xhr.responseText || xhr.statusText);
        if (done) done(new Error('Webhook ' + xhr.status));
      }
    };
    xhr.onerror = function () {
      if (typeof console !== 'undefined' && console.warn) console.warn('[GHL] Network error sending lead');
      if (done) done(new Error('Network error'));
    };
    xhr.send(JSON.stringify(payload));
  }

  /**
   * Abandoned lead ping (placeholder — hook for your tracking)
   */
  function startAbandonTracking() {
    var start = Date.now();
    var ping = function () {
      if (document.visibilityState === 'hidden') {
        // Optional: send heartbeat to your endpoint
        // e.g. fetch('/api/abandon-ping', { method: 'POST', body: JSON.stringify({ timeOnPage: Date.now() - start }) });
      }
    };
    setInterval(ping, CONFIG.abandonPingIntervalMs);
  }

  /**
   * Bind opt-in form
   */
  function bindOptInForm() {
    var form = document.getElementById('optin-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var btn = form.querySelector('.funnel-btn');
      var firstName = (form.querySelector('[name="first_name"]') || {}).value;
      var lastName = (form.querySelector('[name="last_name"]') || {}).value;
      var email = (form.querySelector('[name="email"]') || {}).value;
      var phone = (form.querySelector('[name="phone"]') || {}).value;

      if (!firstName || !lastName || !email || !phone) {
        if (btn) btn.disabled = false;
        return;
      }

      if (btn) btn.disabled = true;

      var lead = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim()
      };

      sendToGHL(lead);
      if (typeof confetti === 'function' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        var colors = ['#ff7a1a', '#ff9a4a', '#ffffff', '#1a1a1a'];
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: colors });
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 }, colors: colors });
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 }, colors: colors });
        requestAnimationFrame(function () {
          var canvas = document.querySelector('canvas');
          if (canvas) canvas.style.zIndex = '10001';
        });
        setTimeout(function () { captureAndRedirect(lead); }, 700);
      } else {
        captureAndRedirect(lead);
      }
    });
  }

  /**
   * Inject config from data attributes (so you can set URLs in HTML)
   */
  function readConfig() {
    var meta = document.querySelector('meta[name="funnel-config"]');
    if (meta && meta.content) {
      try {
        var data = JSON.parse(meta.content);
        if (data.checkoutPage) CONFIG.checkoutPage = data.checkoutPage;
        if (data.ghlWebhookUrl) CONFIG.ghlWebhookUrl = data.ghlWebhookUrl;
        if (data.skoolCheckoutUrl) CONFIG.skoolCheckoutUrl = data.skoolCheckoutUrl;
        if (data.testimonialsUrl) CONFIG.testimonialsUrl = data.testimonialsUrl;
      } catch (err) {}
    }
  }

  /**
   * Apply Skool URL to CTAs (checkout page only; hero opens modal) and testimonials links
   */
  function applyCheckoutCTA() {
    var skoolUrl = CONFIG.skoolCheckoutUrl || '';
    var heroCta = document.getElementById('hero-cta-primary');
    if (heroCta && !heroCta.getAttribute('data-modal-open')) {
      if (skoolUrl) heroCta.href = skoolUrl;
    }

    var cta = document.getElementById('skool-cta');
    if (cta) {
      var url = skoolUrl || (cta.getAttribute('data-skool-checkout') || '').trim();
      if (url) cta.href = url;
    }

    var tUrl = CONFIG.testimonialsUrl || '';
    [ 'testimonials-link', 'testimonials-link-2' ].forEach(function (id) {
      var link = document.getElementById(id);
      if (link && tUrl) link.href = tUrl;
    });
  }

  /**
   * Modal — lead capture popup
   */
  var modalEl = null;

  var lastFocusedBeforeModal = null;

  function openModal() {
    if (!modalEl) modalEl = document.getElementById('lead-modal');
    if (modalEl) {
      lastFocusedBeforeModal = document.activeElement;
      modalEl.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        var firstInput = modalEl.querySelector('.funnel-input');
        if (firstInput) firstInput.focus();
      }, 100);
    }
  }

  function closeModal() {
    if (!modalEl) modalEl = document.getElementById('lead-modal');
    if (modalEl) {
      modalEl.classList.remove('is-open');
      document.body.style.overflow = '';
      if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
        lastFocusedBeforeModal.focus();
      }
    }
  }

  function bindModal() {
    modalEl = document.getElementById('lead-modal');
    if (!modalEl) return;

    document.querySelectorAll('[data-modal-open]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    modalEl.querySelectorAll('[data-modal-close]').forEach(function (btn) {
      btn.addEventListener('click', closeModal);
    });

    modalEl.addEventListener('click', function (e) {
      if (e.target === modalEl) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalEl && modalEl.classList.contains('is-open')) closeModal();
    });
  }

  /**
   * Sticky CTA bar — show after user scrolls past hero (fintech: repeat CTA on scroll)
   */
  function initStickyCta() {
    var bar = document.getElementById('sticky-cta-bar');
    if (!bar) return;

    var barTriggers = bar.querySelectorAll('[data-modal-open]');
    barTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    function checkScroll() {
      var y = window.scrollY || window.pageYOffset;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var nearBottom = docHeight > 0 && y >= docHeight - 140;
      if (y > 400 && !nearBottom) {
        bar.classList.add('is-visible');
        bar.setAttribute('aria-hidden', 'false');
        document.body.classList.add('sticky-cta-bar-visible');
        var fl = document.getElementById('floating-cta');
        if (fl) fl.classList.remove('is-visible');
      } else {
        bar.classList.remove('is-visible');
        bar.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('sticky-cta-bar-visible');
      }
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  /**
   * Floating CTA — show after 45s or 60% scroll (research: time-on-page triggers can outperform ~25%)
   */
  function initFloatingCta() {
    var floating = document.getElementById('floating-cta');
    if (!floating) return;

    var stickyBar = document.getElementById('sticky-cta-bar');
    var shown = false;

    var floatingTriggers = floating.querySelectorAll('[data-modal-open]');
    floatingTriggers.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    });

    function showFloating() {
      if (shown) return;
      if (stickyBar && stickyBar.classList.contains('is-visible')) return;
      shown = true;
      floating.classList.add('is-visible');
      floating.setAttribute('aria-hidden', 'false');
    }

    setTimeout(showFloating, 45000);

    function checkScroll() {
      if (shown) return;
      var scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent > 0.6) showFloating();
    }

    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  /**
   * Show lead recap on checkout (optional)
   */
  function showLeadOnCheckout() {
    var el = document.getElementById('lead-recap');
    if (!el) return;
    var lead = getStoredLead();
    if (lead) {
      el.textContent = lead.email;
      el.style.display = 'inline';
    }
  }

  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    function updateVisibility() {
      if (window.scrollY > 400) {
        btn.classList.add('back-to-top--visible');
      } else {
        btn.classList.remove('back-to-top--visible');
      }
    }
    window.addEventListener('scroll', updateVisibility, { passive: true });
    updateVisibility();
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function init() {
    readConfig();
    bindOptInForm();
    applyCheckoutCTA();
    bindModal();
    initStickyCta();
    initFloatingCta();
    showLeadOnCheckout();
    startAbandonTracking();
    initBackToTop();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.CreditHubFunnel = {
    getStoredLead: getStoredLead,
    config: CONFIG
  };
})();
