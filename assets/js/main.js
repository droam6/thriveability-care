(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    /* ---------- Header scroll behaviour ---------- */
    var header = document.getElementById('site-header');
    if (header) {
      var onScroll = function () {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    /* ---------- Mobile nav toggle ---------- */
    var navToggle = document.querySelector('.nav-toggle');
    var mobileNav = document.querySelector('.mobile-nav');
    var body = document.body;

    if (navToggle && mobileNav) {
      navToggle.addEventListener('click', function () {
        var isOpen = mobileNav.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        body.classList.toggle('nav-open', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      });

      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileNav.classList.remove('open');
          navToggle.classList.remove('open');
          body.classList.remove('nav-open');
          navToggle.setAttribute('aria-expanded', 'false');
          navToggle.setAttribute('aria-label', 'Open menu');
        });
      });
    }

    /* ---------- Smooth scroll for anchor links ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var href = anchor.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        var target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* ---------- AOS init ---------- */
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: true,
        offset: 80,
        disable: 'phone'
      });
    }

    /* ---------- Formspree form handler ---------- */
    var forms = document.querySelectorAll('form[data-formspree]');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();

        var submitBtn = form.querySelector('button[type="submit"]');
        var fieldset = form.querySelector('fieldset') || form;
        var successEl = form.parentElement.querySelector('.form-success');
        var errorEl = form.parentElement.querySelector('.form-error');

        if (errorEl) errorEl.classList.remove('visible');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.dataset.originalText = submitBtn.textContent;
          submitBtn.textContent = 'Sending...';
        }

        var data = new FormData(form);

        fetch('https://formspree.io/f/FORMSPREE_ID_HERE', {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        })
          .then(function (response) {
            if (response.status === 200) {
              if (successEl) successEl.classList.add('visible');
              form.reset();
              if (fieldset && fieldset !== form) {
                fieldset.style.display = 'none';
                setTimeout(function () { fieldset.style.display = ''; }, 4000);
              }
            } else {
              throw new Error('Form submission failed with status ' + response.status);
            }
          })
          .catch(function () {
            if (errorEl) {
              errorEl.textContent = 'Sorry, something went wrong. Please try again or call us on 1300 500 821.';
              errorEl.classList.add('visible');
            }
          })
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = submitBtn.dataset.originalText || 'Send Message';
            }
          });
      });
    });
  });
})();
