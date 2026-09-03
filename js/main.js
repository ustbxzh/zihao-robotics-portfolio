(() => {
  const root = document.documentElement;
  const revealItems = [...document.querySelectorAll(".reveal")];
  const motionVideos = [...document.querySelectorAll(".motion-card video")];

  if (revealItems.length) {
    root.classList.add("js");

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.1, rootMargin: "0px 0px -36px 0px" });

      revealItems.forEach(item => revealObserver.observe(item));
    } else {
      revealItems.forEach(item => item.classList.add("in-view"));
    }
  }

  if (motionVideos.length && "IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.28, rootMargin: "120px 0px" });

    motionVideos.forEach(video => videoObserver.observe(video));
  } else {
    motionVideos.forEach(video => video.play().catch(() => {}));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
