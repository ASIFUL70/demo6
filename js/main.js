/**
 * MAIN JAVASCRIPT FILE - TEACHER PORTFOLIO
 * Features: Mobile menu toggle, active page highlighting, config data injection,
 * resource search & filtering, FAQ accordion, contact form validation & mailto fallback,
 * certificate modal, and accessibility enhancements.
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  highlightActiveNavLink();
  injectDynamicConfigData();
  initBackToTopButton();
  initFaqAccordions();
  initResourceFilterAndSearch();
  initContactForm();
  initCertificateModal();
});

/**
 * 1. Mobile Menu Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon-svg");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", (!isExpanded).toString());
    mobileMenu.classList.toggle("hidden");

    if (menuIcon) {
      if (!isExpanded) {
        // Change icon to 'X'
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
      } else {
        // Change icon to Hamburger
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
      }
    }
  });

  // Close mobile menu when pressing Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
      toggleBtn.setAttribute("aria-expanded", "false");
      mobileMenu.classList.add("hidden");
      if (menuIcon) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />`;
      }
    }
  });
}

/**
 * 2. Active Navigation Link Highlighting
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav a.nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("text-blue-900", "font-bold", "border-b-2", "border-blue-800");
      link.classList.remove("text-slate-600");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("text-blue-900", "font-bold", "border-b-2", "border-blue-800");
      link.classList.add("text-slate-600");
      link.removeAttribute("aria-current");
    }
  });
}

/**
 * 3. Dynamic Configuration Data Injection
 */
function injectDynamicConfigData() {
  if (typeof window.TEACHER_CONFIG === "undefined") return;
  const cfg = window.TEACHER_CONFIG;

  // Elements targeting config attributes
  document.querySelectorAll("[data-config]").forEach((el) => {
    const key = el.getAttribute("data-config");
    const val = getNestedValue(cfg, key);
    if (val !== undefined && val !== null && val !== "") {
      if (el.tagName === "IMG") {
        el.src = val;
      } else if (el.tagName === "A") {
        if (key.startsWith("contact.email")) {
          el.href = `mailto:${val}`;
        } else if (key.startsWith("contact.phone")) {
          el.href = `tel:${val.replace(/[^0-9+]/g, "")}`;
        } else if (key.startsWith("contact.whatsapp")) {
          el.href = `https://wa.me/${val}`;
        } else {
          el.href = val;
        }
      } else {
        el.textContent = val;
      }
    }
  });

  // Inject Current Year in Footer
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function getNestedValue(obj, keyPath) {
  return keyPath.split(".").reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

/**
 * 4. Back-to-Top Button
 */
function initBackToTopButton() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (!backToTopBtn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove("hidden", "opacity-0");
      backToTopBtn.classList.add("opacity-100");
    } else {
      backToTopBtn.classList.add("opacity-0");
      backToTopBtn.classList.add("hidden");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * 5. FAQ Accordion Functionality
 */
function initFaqAccordions() {
  const accordionButtons = document.querySelectorAll(".faq-trigger");

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const targetId = btn.getAttribute("aria-controls");
      const contentEl = document.getElementById(targetId);
      const icon = btn.querySelector(".faq-icon");

      // Close all other accordion items for accordion behavior
      accordionButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          const otherTargetId = otherBtn.getAttribute("aria-controls");
          const otherContent = document.getElementById(otherTargetId);
          if (otherContent) otherContent.classList.add("hidden");
          const otherIcon = otherBtn.querySelector(".faq-icon");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current item
      btn.setAttribute("aria-expanded", (!isExpanded).toString());
      if (contentEl) {
        contentEl.classList.toggle("hidden");
      }
      if (icon) {
        icon.style.transform = isExpanded ? "rotate(0deg)" : "rotate(180deg)";
      }
    });
  });
}

/**
 * 6. Resource Filtering and Search
 */
function initResourceFilterAndSearch() {
  const searchInput = document.getElementById("resource-search");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const resourceCards = document.querySelectorAll(".resource-card");
  const emptyState = document.getElementById("resource-empty-state");

  if (!resourceCards.length) return;

  let activeCategory = "all";
  let activeSearchQuery = "";

  function filterResources() {
    let visibleCount = 0;

    resourceCards.forEach((card) => {
      const category = card.getAttribute("data-category") || "";
      const title = (card.querySelector(".resource-title")?.textContent || "").toLowerCase();
      const desc = (card.querySelector(".resource-desc")?.textContent || "").toLowerCase();
      const subject = (card.querySelector(".resource-subject")?.textContent || "").toLowerCase();

      const matchesCategory = activeCategory === "all" || category === activeCategory;
      const matchesSearch =
        !activeSearchQuery ||
        title.includes(activeSearchQuery) ||
        desc.includes(activeSearchQuery) ||
        subject.includes(activeSearchQuery);

      if (matchesCategory && matchesSearch) {
        card.classList.remove("hidden");
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    if (emptyState) {
      if (visibleCount === 0) {
        emptyState.classList.remove("hidden");
      } else {
        emptyState.classList.add("hidden");
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeSearchQuery = e.target.value.toLowerCase().trim();
      filterResources();
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("bg-blue-900", "text-white", "shadow");
        b.classList.add("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
        b.setAttribute("aria-pressed", "false");
      });

      btn.classList.remove("bg-slate-100", "text-slate-700", "hover:bg-slate-200");
      btn.classList.add("bg-blue-900", "text-white", "shadow");
      btn.setAttribute("aria-pressed", "true");

      activeCategory = btn.getAttribute("data-filter") || "all";
      filterResources();
    });
  });
}

/**
 * 7. Contact Form Client-Side Validation and Static mailto Handling
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const messageError = document.getElementById("message-error");

  const statusBanner = document.getElementById("contact-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Reset error messages
    [nameError, emailError, subjectError, messageError].forEach((err) => {
      if (err) err.classList.add("hidden");
    });

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
      if (nameError) nameError.classList.remove("hidden");
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      if (emailError) emailError.classList.remove("hidden");
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      if (subjectError) subjectError.classList.remove("hidden");
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      if (messageError) messageError.classList.remove("hidden");
      isValid = false;
    }

    if (!isValid) return;

    // Static site fallback: Construct mailto link
    const recipient = window.TEACHER_CONFIG ? window.TEACHER_CONFIG.contact.email : "sarah.jenkins.educator@example.com";
    const mailtoSubject = encodeURIComponent(`[Website Contact] ${subjectInput.value.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
    );

    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Display clear status explanation
    if (statusBanner) {
      statusBanner.className = "p-4 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-sm space-y-2";
      statusBanner.innerHTML = `
        <div class="font-bold flex items-center space-x-2">
          <svg class="w-5 h-5 text-blue-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Opening Your Email Client</span>
        </div>
        <p>This static website prepares your message directly in your default email application. If it does not open automatically, <a href="${mailtoUrl}" class="underline font-semibold hover:text-blue-700">click here to send message via email</a>.</p>
      `;
      statusBanner.classList.remove("hidden");
    }

    // Trigger email client
    window.location.href = mailtoUrl;
  });
}

/**
 * 8. Certificate Preview Modal
 */
function initCertificateModal() {
  const modal = document.getElementById("cert-modal");
  const modalImg = document.getElementById("cert-modal-img");
  const modalTitle = document.getElementById("cert-modal-title");
  const modalClose = document.getElementById("cert-modal-close");
  const triggerBtns = document.querySelectorAll(".open-cert-modal");

  if (!modal || !modalImg || !modalTitle) return;

  triggerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const imgSrc = btn.getAttribute("data-cert-src");
      const title = btn.getAttribute("data-cert-title");

      if (imgSrc) modalImg.src = imgSrc;
      if (title) modalTitle.textContent = title;

      modal.classList.remove("hidden");
      modal.classList.add("flex");
      document.body.classList.add("overflow-hidden");
    });
  });

  const closeModal = () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  };

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
