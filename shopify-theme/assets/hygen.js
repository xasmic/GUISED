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

  function initCurrency() {
    var root = document.querySelector("[data-hygen-currency]");
    if (!root) return;
    var toggle = root.querySelector("[data-hygen-currency-toggle]");
    var panel = root.querySelector("[data-hygen-currency-panel]");
    var list = root.querySelector("[data-hygen-currency-list]");
    var filter = root.querySelector("[data-hygen-currency-filter]");
    var form = document.getElementById("HygenLocalizationForm");
    var countryInput = form && form.querySelector("[data-hygen-country-code]");
    var options = list && list.querySelectorAll("[data-hygen-country-option]");
    var empty = list && list.querySelector("[data-hygen-currency-empty]");
    if (!toggle || !panel || !list || !form || !countryInput || !options) return;

    if (panel.parentElement !== document.body) {
      document.body.appendChild(panel);
    }

    function positionPanel() {
      var rect = toggle.getBoundingClientRect();
      panel.style.top = rect.bottom + 14 + "px";
      panel.style.right = window.innerWidth - rect.right + "px";
      panel.style.left = "auto";
    }

    function setOpen(open) {
      root.classList.toggle("is-open", open);
      panel.hidden = !open;
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        positionPanel();
        if (filter) {
          filter.value = "";
          filterOptions("");
          filter.focus();
        }
      }
    }

    function filterOptions(query) {
      var q = String(query || "").trim().toLowerCase();
      var visible = 0;
      options.forEach(function (item) {
        var search = item.getAttribute("data-search") || "";
        var match = !q || search.indexOf(q) !== -1;
        item.hidden = !match;
        if (match) visible += 1;
      });
      if (empty) empty.hidden = visible !== 0;
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(panel.hidden);
    });

    if (filter) {
      filter.addEventListener("input", function () {
        filterOptions(filter.value);
      });
    }

    list.addEventListener("click", function (e) {
      var button = e.target.closest("[data-country-code]");
      if (!button) return;
      var nextCountry = button.getAttribute("data-country-code");
      if (!nextCountry || nextCountry === countryInput.value) {
        setOpen(false);
        return;
      }
      countryInput.value = nextCountry;
      button.disabled = true;
      form.submit();
    });

    document.addEventListener("mousedown", function (e) {
      if (root.contains(e.target) || panel.contains(e.target)) return;
      setOpen(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    window.addEventListener("resize", function () {
      if (!panel.hidden) positionPanel();
    });

    filterOptions("");
  }

  function initChrome() {
    var chrome = document.querySelector("[data-hygen-chrome]");
    if (chrome) {
      var onScroll = function () {
        chrome.classList.toggle("is-scrolled", window.scrollY > 24);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

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

    var searchWrap = document.querySelector("[data-hygen-utils] .hygen-utils__search");
    var searchToggle = document.querySelector("[data-hygen-search-toggle]");
    var searchInput = document.querySelector("#hygen-search-input");
    if (searchWrap && searchToggle) {
      searchToggle.addEventListener("click", function () {
        var open = !searchWrap.classList.contains("is-open");
        searchWrap.classList.toggle("is-open", open);
        searchToggle.setAttribute("aria-expanded", open ? "true" : "false");
        if (open && searchInput) searchInput.focus();
      });
    }

    initCurrency();

    if (!nav || !("IntersectionObserver" in window)) return;

    var ids = ["about", "collection", "stockist"];
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

  function cartRootUrl() {
    return window.Shopify && Shopify.routes ? Shopify.routes.root : "/";
  }

  function initCartCount() {
    var badge = document.querySelector("[data-hygen-cart-count]");
    if (!badge) return;

    function render(count) {
      var n = Number(count) || 0;
      badge.textContent = String(n);
      badge.hidden = n === 0;
      badge.classList.toggle("is-empty", n === 0);
    }

    function refresh() {
      fetch(cartRootUrl() + "cart.js", {
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (cart) {
          render(cart.item_count);
        })
        .catch(function () {});
    }

    document.addEventListener("hygen:cart:update", refresh);
  }

  function initCartPage() {
    var root = document.querySelector("[data-hygen-cart]");
    if (!root) return;

    var form = root.querySelector("#hygen-cart-form");
    if (!form) return;

    var currency = root.getAttribute("data-currency") || "USD";
    var timers = {};
    var pending = null;

    function money(cents) {
      try {
        return (cents / 100).toLocaleString(undefined, {
          style: "currency",
          currency: currency,
        });
      } catch (e) {
        return "$" + (cents / 100).toFixed(2);
      }
    }

    function setBusy(busy) {
      root.classList.toggle("is-updating", busy);
    }

    function applyCart(cart) {
      if (!cart.item_count) {
        window.location.reload();
        return;
      }

      var keys = {};
      cart.items.forEach(function (item) {
        keys[item.key] = item;
        var row = form.querySelector('[data-hygen-cart-item][data-key="' + item.key + '"]');
        if (!row) return;
        var qty = row.querySelector("[data-hygen-cart-qty]");
        var linePrice = row.querySelector("[data-hygen-line-price]");
        if (qty && document.activeElement !== qty) qty.value = item.quantity;
        if (linePrice) linePrice.textContent = money(item.final_line_price);
      });

      form.querySelectorAll("[data-hygen-cart-item]").forEach(function (row) {
        if (!keys[row.getAttribute("data-key")]) row.remove();
      });

      var subtotal = form.querySelector("[data-hygen-cart-subtotal]");
      if (subtotal) subtotal.textContent = money(cart.total_price);

      document.dispatchEvent(new CustomEvent("hygen:cart:update"));
    }

    function changeLine(key, quantity) {
      var qty = Math.max(0, parseInt(quantity, 10) || 0);
      if (pending) pending.abort();
      pending = typeof AbortController !== "undefined" ? new AbortController() : null;
      setBusy(true);

      return fetch(cartRootUrl() + "cart/change.js", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: key, quantity: qty }),
        signal: pending ? pending.signal : undefined,
      })
        .then(function (res) {
          if (!res.ok) throw new Error("Could not update cart");
          return res.json();
        })
        .then(function (cart) {
          applyCart(cart);
        })
        .catch(function (err) {
          if (err && err.name === "AbortError") return;
          window.location.reload();
        })
        .finally(function () {
          setBusy(false);
          pending = null;
        });
    }

    function scheduleChange(input) {
      var key = input.getAttribute("data-key");
      if (!key) return;
      if (timers[key]) clearTimeout(timers[key]);
      timers[key] = setTimeout(function () {
        changeLine(key, input.value);
      }, 400);
    }

    form.addEventListener("input", function (event) {
      var input = event.target.closest("[data-hygen-cart-qty]");
      if (!input || !form.contains(input)) return;
      scheduleChange(input);
    });

    form.addEventListener("change", function (event) {
      var input = event.target.closest("[data-hygen-cart-qty]");
      if (!input || !form.contains(input)) return;
      var key = input.getAttribute("data-key");
      if (timers[key]) clearTimeout(timers[key]);
      changeLine(key, input.value);
    });

    form.addEventListener("click", function (event) {
      var remove = event.target.closest("[data-hygen-cart-remove]");
      if (!remove || !form.contains(remove)) return;
      event.preventDefault();
      var key = remove.getAttribute("data-key");
      if (timers[key]) clearTimeout(timers[key]);
      changeLine(key, 0);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-hygen-collection]").forEach(initCollection);
    initChrome();
    initCartCount();
    initCartPage();
  });
})();

