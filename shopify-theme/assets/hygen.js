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

  var MARKETS = [
    { country: "Singapore", currency: "SGD", rateFromSgd: 1, symbol: "S$" },
    { country: "Australia", currency: "AUD", rateFromSgd: 1.12, symbol: "A$" },
    { country: "Austria", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Belgium", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Bulgaria", currency: "BGN", rateFromSgd: 1.33, symbol: "лв" },
    { country: "Canada", currency: "CAD", rateFromSgd: 1.02, symbol: "C$" },
    { country: "China", currency: "CNY", rateFromSgd: 5.35, symbol: "¥" },
    { country: "Croatia", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Cyprus", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Czechia", currency: "CZK", rateFromSgd: 16.8, symbol: "Kč" },
    { country: "Denmark", currency: "DKK", rateFromSgd: 5.07, symbol: "kr" },
    { country: "Finland", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "France", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Germany", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Hong Kong", currency: "HKD", rateFromSgd: 5.78, symbol: "HK$" },
    { country: "Ireland", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Italy", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Japan", currency: "JPY", rateFromSgd: 110, symbol: "¥" },
    { country: "Malaysia", currency: "MYR", rateFromSgd: 3.45, symbol: "RM" },
    { country: "Netherlands", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "New Zealand", currency: "NZD", rateFromSgd: 1.22, symbol: "NZ$" },
    { country: "Norway", currency: "NOK", rateFromSgd: 7.85, symbol: "kr" },
    { country: "Poland", currency: "PLN", rateFromSgd: 2.9, symbol: "zł" },
    { country: "Portugal", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "South Korea", currency: "KRW", rateFromSgd: 1020, symbol: "₩" },
    { country: "Spain", currency: "EUR", rateFromSgd: 0.68, symbol: "€" },
    { country: "Sweden", currency: "SEK", rateFromSgd: 7.55, symbol: "kr" },
    { country: "Switzerland", currency: "CHF", rateFromSgd: 0.65, symbol: "CHF" },
    { country: "Taiwan", currency: "TWD", rateFromSgd: 23.5, symbol: "NT$" },
    { country: "Thailand", currency: "THB", rateFromSgd: 25.5, symbol: "฿" },
    { country: "United Kingdom", currency: "GBP", rateFromSgd: 0.58, symbol: "£" },
    { country: "United States", currency: "USD", rateFromSgd: 0.74, symbol: "$" },
  ];
  var CURRENCY_KEY = "guised-market-country";

  function findMarket(country) {
    for (var i = 0; i < MARKETS.length; i++) {
      if (MARKETS[i].country === country) return MARKETS[i];
    }
    return MARKETS[0];
  }

  function formatPrice(base, market) {
    var match = String(base).replace(/,/g, "").match(/(\d+(?:\.\d{1,2})?)/);
    if (!match) return { whole: base, cents: null };
    var amount = Number(match[1]) * market.rateFromSgd;
    if (market.currency === "JPY" || market.currency === "KRW") {
      return {
        whole: market.symbol + Math.round(amount).toLocaleString("en-US"),
        cents: null,
      };
    }
    var fixed = amount.toFixed(2).split(".");
    return {
      whole: market.symbol + Number(fixed[0]).toLocaleString("en-US"),
      cents: "." + fixed[1],
    };
  }

  function applyMarket(market) {
    document.querySelectorAll("[data-hygen-price]").forEach(function (el) {
      var base = el.getAttribute("data-hygen-price-base");
      if (!base) return;
      var formatted = formatPrice(base, market);
      var whole = el.querySelector("[data-hygen-price-whole]");
      var cents = el.querySelector("[data-hygen-price-cents]");
      if (whole) whole.textContent = formatted.whole;
      if (cents) {
        if (formatted.cents) {
          cents.textContent = formatted.cents;
          cents.hidden = false;
        } else {
          cents.textContent = "";
          cents.hidden = true;
        }
      }
    });
  }

  function initCurrency() {
    var root = document.querySelector("[data-hygen-currency]");
    if (!root) return;
    var toggle = root.querySelector("[data-hygen-currency-toggle]");
    var panel = root.querySelector("[data-hygen-currency-panel]");
    var list = root.querySelector("[data-hygen-currency-list]");
    var filter = root.querySelector("[data-hygen-currency-filter]");
    var codeEl = root.querySelector("[data-hygen-currency-code]");
    if (!toggle || !panel || !list) return;

    var saved = null;
    try {
      saved = localStorage.getItem(CURRENCY_KEY);
    } catch (e) {}
    var market = findMarket(saved || "Singapore");

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
          renderList("");
          filter.focus();
        }
      }
    }

    function selectMarket(next) {
      market = next;
      if (codeEl) codeEl.textContent = next.currency;
      toggle.setAttribute("aria-label", "Currency " + next.currency);
      try {
        localStorage.setItem(CURRENCY_KEY, next.country);
      } catch (e) {}
      applyMarket(next);
      setOpen(false);
    }

    function renderList(query) {
      var q = String(query || "").trim().toLowerCase();
      list.innerHTML = "";
      var sorted = MARKETS.slice().sort(function (a, b) {
        return a.country.localeCompare(b.country);
      });
      sorted.forEach(function (item) {
        if (
          q &&
          item.country.toLowerCase().indexOf(q) === -1 &&
          item.currency.toLowerCase().indexOf(q) === -1
        ) {
          return;
        }
        var li = document.createElement("li");
        var btn = document.createElement("button");
        btn.type = "button";
        btn.textContent = item.country;
        btn.setAttribute("role", "option");
        if (item.country === market.country) btn.classList.add("is-active");
        btn.addEventListener("click", function () {
          selectMarket(item);
        });
        li.appendChild(btn);
        list.appendChild(li);
      });
      if (!list.children.length) {
        var empty = document.createElement("li");
        empty.style.padding = "12px";
        empty.style.color = "#9a9a9a";
        empty.textContent = "No matches";
        list.appendChild(empty);
      }
    }

    toggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setOpen(panel.hidden);
    });

    if (filter) {
      filter.addEventListener("input", function () {
        renderList(filter.value);
      });
    }

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

    selectMarket(market);
    renderList("");
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

