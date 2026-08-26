(() => {
  const root = document.documentElement;
  const revealItems = [...document.querySelectorAll(".reveal")];

  if (revealItems.length) {
    root.classList.add("js");

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.12,
        rootMargin: "0px 0px -42px 0px"
      });

      revealItems.forEach(item => revealObserver.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add("in-view"));
    }
  }

  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const modalTitle = document.getElementById("modal-title");
  const videoTriggers = [...document.querySelectorAll("[data-video]")];
  const closeTriggers = [...document.querySelectorAll("[data-close-modal]")];
  const pageRegions = [
    document.querySelector(".site-header"),
    document.getElementById("main-content"),
    document.querySelector(".footer")
  ].filter(Boolean);

  let lastFocused = null;

  function setPageInert(isInert) {
    pageRegions.forEach(region => {
      region.inert = isInert;
    });
  }

  function getModalFocusables() {
    if (!modal) return [];
    return [...modal.querySelectorAll(
      "button:not([disabled]), a[href], video[controls], [tabindex]:not([tabindex='-1'])"
    )].filter(element => !element.hasAttribute("hidden"));
  }

  function openVideo(trigger) {
    if (!modal || !modalVideo || !modalTitle) return;

    const source = trigger.dataset.video;
    const title = trigger.dataset.title || "Portfolio video";
    if (!source) return;

    lastFocused = document.activeElement;
    modalTitle.textContent = title;
    modalVideo.src = source;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setPageInert(true);
    modalVideo.load();

    window.setTimeout(() => {
      modal.querySelector(".modal-close")?.focus();
      modalVideo.play().catch(() => {});
    }, 80);
  }

  function closeVideo() {
    if (!modal?.classList.contains("is-open") || !modalVideo) return;

    modalVideo.pause();
    modalVideo.removeAttribute("src");
    modalVideo.load();
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setPageInert(false);

    if (lastFocused instanceof HTMLElement) {
      lastFocused.focus();
    }
  }

  function trapModalFocus(event) {
    if (event.key !== "Tab" || !modal?.classList.contains("is-open")) return;

    const focusables = getModalFocusables();
    if (!focusables.length) {
      event.preventDefault();
      return;
    }

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  videoTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => openVideo(trigger));
  });

  closeTriggers.forEach(trigger => {
    trigger.addEventListener("click", closeVideo);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeVideo();
    trapModalFocus(event);
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
