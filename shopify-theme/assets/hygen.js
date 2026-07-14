(function () {
  function initCollection(root) {
    if (!root) return;

    var seasonButtons = root.querySelectorAll("[data-hygen-season]");
    var seasons = root.querySelectorAll(".hygen-season");
    var modal = root.querySelector("[data-hygen-modal]");
    var modalSeasons = root.querySelectorAll(".hygen-modal-season");
    var openBtn = root.querySelector("[data-hygen-open-index]");
    var closeBtn = root.querySelector("[data-hygen-close-index]");
    var activeSeason = 0;

    function setSeason(index) {
      activeSeason = index;
      seasons.forEach(function (el, i) {
        el.classList.toggle("is-active", i === index);
      });
      seasonButtons.forEach(function (btn, i) {
        btn.classList.toggle("is-active", i === index);
      });
      modalSeasons.forEach(function (el, i) {
        el.classList.toggle("is-active", i === index);
      });
      setSlide(0);
    }

    function currentSeason() {
      return seasons[activeSeason];
    }

    function setSlide(index) {
      var season = currentSeason();
      if (!season) return;
      var slides = season.querySelectorAll(".hygen-slide");
      if (!slides.length) return;
      var next = ((index % slides.length) + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle("is-active", i === next);
      });
      season.setAttribute("data-slide-index", String(next));
    }

    function currentIndex() {
      var season = currentSeason();
      return Number((season && season.getAttribute("data-slide-index")) || 0);
    }

    function go(dir) {
      var season = currentSeason();
      if (!season) return;
      var slides = season.querySelectorAll(".hygen-slide");
      setSlide(currentIndex() + dir);
    }

    seasonButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        setSeason(i);
      });
    });

    root.querySelectorAll("[data-hygen-prev]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        go(-1);
      });
    });

    root.querySelectorAll("[data-hygen-next]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        go(1);
      });
    });

    if (openBtn && modal) {
      openBtn.addEventListener("click", function () {
        modal.classList.add("is-open");
        document.documentElement.classList.add("hygen-modal-lock");
      });
    }

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", function () {
        modal.classList.remove("is-open");
        document.documentElement.classList.remove("hygen-modal-lock");
      });
    }

    if (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.classList.remove("is-open");
          document.documentElement.classList.remove("hygen-modal-lock");
        }
      });
    }

    root.querySelectorAll("[data-hygen-thumb]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var season = Number(btn.getAttribute("data-season") || 0);
        var slide = Number(btn.getAttribute("data-slide") || 0);
        setSeason(season);
        setSlide(slide);
        if (modal) {
          modal.classList.remove("is-open");
          document.documentElement.classList.remove("hygen-modal-lock");
        }
      });
    });

    document.addEventListener("keydown", function (e) {
      if (!modal || !modal.classList.contains("is-open")) {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
        return;
      }
      if (e.key === "Escape") {
        modal.classList.remove("is-open");
        document.documentElement.classList.remove("hygen-modal-lock");
      }
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    });

    setSeason(0);
  }

  function initChrome() {
    var burger = document.querySelector("[data-hygen-burger]");
    var menu = document.querySelector("[data-hygen-menu]");
    var nav = document.querySelector("[data-hygen-nav]");
    if (!burger || !menu) return;

    function setOpen(open) {
      burger.classList.toggle("is-open", open);
      menu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.documentElement.classList.toggle("hygen-menu-lock", open);
    }

    burger.addEventListener("click", function () {
      setOpen(!menu.classList.contains("is-open"));
    });

    menu.querySelectorAll("[data-hygen-menu-close]").forEach(function (el) {
      el.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) {
        setOpen(false);
      }
    });

    if (!nav || !("IntersectionObserver" in window)) return;

    var ids = ["concept", "about", "collection", "stockist"];
    var elements = ids
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);

    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) {
            return e.isIntersecting;
          })
          .sort(function (a, b) {
            return b.intersectionRatio - a.intersectionRatio;
          });
        if (!visible[0]) return;
        var id = visible[0].target.id;
        nav.querySelectorAll("[data-nav-id]").forEach(function (link) {
          link.classList.toggle("is-active", link.getAttribute("data-nav-id") === id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75] }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-hygen-collection]").forEach(initCollection);
    initChrome();
  });
})();
