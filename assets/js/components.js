/* ============================================================
   ASUGALAKX — Shared chrome (window.ASGX)
   Injects navbar + mobile drawer + footer into every page.
   Pages declare BEFORE this script loads:
     window.ASGX_PAGE = { title: "...", active: "home|markets|news|analysis|web3|academy|community" }
   This script then:
     - appends " — ASUGALAKX" to document.title when title is given
     - inserts a default meta description when the page has none
     - renders navbar into #asgx-nav and footer into #asgx-footer
     - marks the active nav item from ASGX_PAGE.active
     - dispatches `asgx:ready` on document for page-specific scripts
   ============================================================ */
(function () {
  "use strict";

  var PAGE = window.ASGX_PAGE || {};
  var LOGO = "/assets/img/asgx-coin.jpg";

  var NAV = [
    { label: "Markets", key: "markets", children: [
      { label: "Crypto", href: "/crypto/" },
      { label: "Stocks", href: "/stocks/" },
      { label: "Forex", href: "/forex/" },
      { label: "Commodities", href: "/markets/#commodities" },
      { label: "Macro", href: "/markets/#macro" }
    ]},
    { label: "News", key: "news", children: [
      { label: "Latest", href: "/news/" },
      { label: "Crypto", href: "/news/#crypto" },
      { label: "Stocks", href: "/news/#stocks" },
      { label: "Forex", href: "/news/#forex" },
      { label: "Web3", href: "/news/#web3" },
      { label: "Macro", href: "/news/#macro" }
    ]},
    { label: "Analysis", key: "analysis", children: [
      { label: "Market Analysis", href: "/analysis/#market" },
      { label: "Technical Analysis", href: "/analysis/#technical" },
      { label: "Macro", href: "/analysis/#macro" },
      { label: "Research", href: "/analysis/#research" }
    ]},
    { label: "Web3", key: "web3", children: [
      { label: "Ecosystem", href: "/web3/" },
      { label: "NFT", href: "/nft/" },
      { label: "ASGX", href: "/asgx/" },
      { label: "AI Agents", href: "/ai-agents/" }
    ]},
    { label: "Academy", key: "academy", children: [
      { label: "Beginner", href: "/academy/#beginner" },
      { label: "Intermediate", href: "/academy/#intermediate" },
      { label: "Advanced", href: "/academy/#advanced" },
      { label: "Courses", href: "/academy/#courses" }
    ]},
    { label: "Community", key: "community", children: [
      { label: "Discussions", href: "/community/#discussions" },
      { label: "Events", href: "/community/#events" },
      { label: "Trading Journal", href: "/community/#journal" }
    ]}
  ];

  /* Keys used by pages that live under the Web3 dropdown */
  var ACTIVE_ALIASES = { "ai-agents": "web3", "asgx": "web3", "nft": "web3", "character": "web3" };

  function activeKey() {
    var a = PAGE.active || "";
    return ACTIVE_ALIASES[a] || a;
  }

  /* ---------- Navbar ---------- */
  function renderNavbar(mount) {
    if (!mount) return;
    var active = activeKey();

    var header = document.createElement("header");
    header.className = "asgx-nav";

    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#asgx-main";
    skip.textContent = "Skip to content";
    header.appendChild(skip);

    var inner = document.createElement("div");
    inner.className = "nav-inner";

    /* logo */
    var logo = document.createElement("a");
    logo.className = "nav-logo";
    logo.href = "/";
    logo.setAttribute("aria-label", "ASUGALAKX home");
    var logoImg = document.createElement("img");
    logoImg.src = LOGO;
    logoImg.alt = "ASUGALAKX wolf coin logo";
    logoImg.width = 36; logoImg.height = 36;
    var wordmark = document.createElement("span");
    wordmark.className = "nav-wordmark";
    wordmark.textContent = "ASUGALAKX";
    logo.appendChild(logoImg);
    logo.appendChild(wordmark);
    inner.appendChild(logo);

    /* menu */
    var menu = document.createElement("ul");
    menu.className = "nav-menu";
    menu.setAttribute("aria-label", "Primary");

    NAV.forEach(function (item, idx) {
      var li = document.createElement("li");
      li.className = "nav-item";

      var btn = document.createElement("button");
      btn.className = "nav-link" + (item.key === active ? " is-active" : "");
      btn.type = "button";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-haspopup", "true");
      btn.setAttribute("aria-controls", "nav-dd-" + idx);
      if (item.key === active) btn.setAttribute("aria-current", "page");

      var label = document.createElement("span");
      label.textContent = item.label;
      var caret = document.createElement("span");
      caret.className = "nav-caret";
      caret.setAttribute("aria-hidden", "true");
      btn.appendChild(label);
      btn.appendChild(caret);

      var dd = document.createElement("ul");
      dd.className = "nav-dropdown";
      dd.id = "nav-dd-" + idx;
      dd.setAttribute("aria-label", item.label + " submenu");

      item.children.forEach(function (child) {
        var cLi = document.createElement("li");
        var a = document.createElement("a");
        a.className = "dropdown-link";
        a.href = child.href;
        a.textContent = child.label;
        cLi.appendChild(a);
        dd.appendChild(cLi);
      });

      btn.addEventListener("click", function () {
        var open = li.classList.toggle("dropdown-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        /* close siblings */
        Array.prototype.forEach.call(menu.children, function (sib) {
          if (sib !== li) {
            sib.classList.remove("dropdown-open");
            var b = sib.querySelector(".nav-link");
            if (b) b.setAttribute("aria-expanded", "false");
          }
        });
      });
      btn.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          li.classList.remove("dropdown-open");
          btn.setAttribute("aria-expanded", "false");
          btn.focus();
        }
      });

      li.appendChild(btn);
      li.appendChild(dd);
      menu.appendChild(li);
    });
    inner.appendChild(menu);

    /* close dropdowns on outside click / escape */
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-item")) {
        Array.prototype.forEach.call(menu.querySelectorAll(".nav-item.dropdown-open"), function (li) {
          li.classList.remove("dropdown-open");
          var b = li.querySelector(".nav-link");
          if (b) b.setAttribute("aria-expanded", "false");
        });
      }
    });

    /* actions */
    var actions = document.createElement("div");
    actions.className = "nav-actions";

    var searchWrap = document.createElement("div");
    searchWrap.className = "nav-search";
    var searchForm = document.createElement("form");
    searchForm.setAttribute("role", "search");
    searchForm.addEventListener("submit", function (e) { e.preventDefault(); });
    var searchInput = document.createElement("input");
    searchInput.type = "search";
    searchInput.placeholder = "Search\u2026 (demo)";
    searchInput.setAttribute("aria-label", "Search the site (demo placeholder, non-functional)");
    searchInput.title = "Search is a visual placeholder in this demo";
    var sIcon = document.createElement("span");
    sIcon.className = "search-icon";
    sIcon.setAttribute("aria-hidden", "true");
    sIcon.textContent = "\u2315";
    searchForm.appendChild(sIcon);
    searchForm.appendChild(searchInput);
    searchWrap.appendChild(searchForm);
    actions.appendChild(searchWrap);

    var cta = document.createElement("a");
    cta.className = "btn btn-primary btn-sm";
    cta.href = "/community/";
    cta.textContent = "Join Community";
    actions.appendChild(cta);

    var toggle = document.createElement("button");
    toggle.className = "nav-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-label", "Open menu");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-controls", "asgx-drawer");
    var burger = document.createElement("span");
    burger.setAttribute("aria-hidden", "true");
    toggle.appendChild(burger);
    actions.appendChild(toggle);

    inner.appendChild(actions);
    header.appendChild(inner);
    mount.appendChild(header);

    renderDrawer(mount, toggle, active);
  }

  /* ---------- Mobile drawer ---------- */
  function renderDrawer(mount, toggle, active) {
    var overlay = document.createElement("div");
    overlay.className = "drawer-overlay";
    overlay.setAttribute("aria-hidden", "true");

    var drawer = document.createElement("nav");
    drawer.className = "asgx-drawer";
    drawer.id = "asgx-drawer";
    drawer.setAttribute("aria-label", "Mobile navigation");

    var head = document.createElement("div");
    head.className = "drawer-head";
    var dLogo = document.createElement("a");
    dLogo.className = "nav-logo";
    dLogo.href = "/";
    dLogo.setAttribute("aria-label", "ASUGALAKX home");
    var dImg = document.createElement("img");
    dImg.src = LOGO; dImg.alt = ""; dImg.width = 32; dImg.height = 32;
    var dWord = document.createElement("span");
    dWord.className = "nav-wordmark";
    dWord.textContent = "ASUGALAKX";
    dLogo.appendChild(dImg); dLogo.appendChild(dWord);
    var close = document.createElement("button");
    close.className = "drawer-close";
    close.type = "button";
    close.setAttribute("aria-label", "Close menu");
    close.innerHTML = "&times;";
    head.appendChild(dLogo); head.appendChild(close);
    drawer.appendChild(head);

    var body = document.createElement("div");
    body.className = "drawer-body";

    var dSearch = document.createElement("div");
    dSearch.className = "drawer-search";
    var dInput = document.createElement("input");
    dInput.type = "search";
    dInput.placeholder = "Search\u2026 (demo)";
    dInput.setAttribute("aria-label", "Search the site (demo placeholder, non-functional)");
    dSearch.appendChild(dInput);
    body.appendChild(dSearch);

    NAV.forEach(function (item, idx) {
      var group = document.createElement("div");
      group.className = "drawer-group";

      var subToggle = document.createElement("button");
      subToggle.className = "drawer-subtoggle";
      subToggle.type = "button";
      subToggle.setAttribute("aria-expanded", "false");
      subToggle.setAttribute("aria-controls", "drawer-sub-" + idx);
      var stLabel = document.createElement("span");
      stLabel.textContent = item.label;
      var stCaret = document.createElement("span");
      stCaret.className = "nav-caret";
      stCaret.setAttribute("aria-hidden", "true");
      subToggle.appendChild(stLabel);
      subToggle.appendChild(stCaret);

      var sub = document.createElement("ul");
      sub.className = "drawer-sub";
      sub.id = "drawer-sub-" + idx;

      item.children.forEach(function (child) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.className = "drawer-link";
        a.href = child.href;
        a.textContent = child.label;
        li.appendChild(a);
        sub.appendChild(li);
      });

      subToggle.addEventListener("click", function () {
        var open = sub.classList.toggle("is-open");
        subToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });

      group.appendChild(subToggle);
      group.appendChild(sub);
      body.appendChild(group);

      /* auto-expand the active section */
      if (item.key === active) {
        sub.classList.add("is-open");
        subToggle.setAttribute("aria-expanded", "true");
      }
    });

    var ctaWrap = document.createElement("div");
    ctaWrap.className = "drawer-cta";
    var dCta = document.createElement("a");
    dCta.className = "btn btn-primary btn-block";
    dCta.href = "/community/";
    dCta.textContent = "Join Community";
    ctaWrap.appendChild(dCta);
    body.appendChild(ctaWrap);

    drawer.appendChild(body);
    mount.appendChild(overlay);
    mount.appendChild(drawer);

    var lastFocus = null;
    function openDrawer() {
      lastFocus = document.activeElement;
      drawer.classList.add("is-open");
      overlay.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
      document.body.style.overflow = "hidden";
      close.focus();
    }
    function closeDrawer() {
      drawer.classList.remove("is-open");
      overlay.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    toggle.addEventListener("click", function () {
      if (drawer.classList.contains("is-open")) closeDrawer(); else openDrawer();
    });
    close.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    });
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeDrawer();
    });
  }

  /* ---------- Footer ---------- */
  var FOOTER_COLS = [
    { title: "Markets", links: [
      { label: "Crypto", href: "/crypto/" }, { label: "Stocks", href: "/stocks/" },
      { label: "Forex", href: "/forex/" }, { label: "Commodities", href: "/markets/#commodities" },
      { label: "Macro", href: "/markets/#macro" } ] },
    { title: "News", links: [
      { label: "Latest", href: "/news/" }, { label: "Crypto", href: "/news/#crypto" },
      { label: "Stocks", href: "/news/#stocks" }, { label: "Forex", href: "/news/#forex" },
      { label: "Web3", href: "/news/#web3" } ] },
    { title: "Analysis", links: [
      { label: "Market Analysis", href: "/analysis/#market" }, { label: "Technical", href: "/analysis/#technical" },
      { label: "Macro", href: "/analysis/#macro" }, { label: "Research", href: "/analysis/#research" } ] },
    { title: "Web3", links: [
      { label: "Ecosystem", href: "/web3/" }, { label: "NFT", href: "/nft/" },
      { label: "ASGX", href: "/asgx/" }, { label: "AI Agents", href: "/ai-agents/" } ] },
    { title: "Company", links: [
      { label: "Academy", href: "/academy/" }, { label: "Community", href: "/community/" },
      { label: "Roadmap", href: "/roadmap/" }, { label: "Whitepaper", href: "/whitepaper/" },
      { label: "About", href: "/about/" } ] }
  ];

  var SOCIALS = [
    { label: "X (Twitter)", short: "X", href: "#" },
    { label: "Telegram", short: "TG", href: "#" },
    { label: "Instagram", short: "IG", href: "#" },
    { label: "YouTube", short: "YT", href: "#" }
  ];

  function renderFooter(mount) {
    if (!mount) return;
    var footer = document.createElement("footer");
    footer.className = "asgx-footer";

    var container = document.createElement("div");
    container.className = "container";

    var grid = document.createElement("div");
    grid.className = "footer-grid";

    /* brand block */
    var brand = document.createElement("div");
    brand.className = "footer-brand";
    var bImg = document.createElement("img");
    bImg.src = LOGO; bImg.alt = "ASUGALAKX wolf coin logo"; bImg.width = 44; bImg.height = 44;
    var bWord = document.createElement("div");
    bWord.className = "footer-wordmark";
    bWord.textContent = "ASUGALAKX";
    var tagline = document.createElement("p");
    tagline.className = "footer-tagline";
    var tagStrong = document.createElement("strong");
    tagStrong.textContent = "MARKET INTELLIGENCE & TRADING COMMUNITY";
    tagline.appendChild(tagStrong);
    tagline.appendChild(document.createTextNode("Trade \u00D7 Learn \u00D7 Grow"));
    var socials = document.createElement("div");
    socials.className = "footer-social";
    SOCIALS.forEach(function (s) {
      var a = document.createElement("a");
      a.className = "social-link is-placeholder";
      a.href = s.href;
      a.setAttribute("aria-label", s.label + " (coming soon)");
      a.title = s.label + " \u2014 coming soon";
      a.textContent = s.short;
      socials.appendChild(a);
    });
    brand.appendChild(bImg); brand.appendChild(bWord);
    brand.appendChild(tagline); brand.appendChild(socials);
    grid.appendChild(brand);

    /* link columns */
    FOOTER_COLS.forEach(function (col) {
      var div = document.createElement("div");
      div.className = "footer-col";
      var h = document.createElement("h3");
      h.className = "footer-col-title";
      h.textContent = col.title;
      var ul = document.createElement("ul");
      ul.className = "footer-links";
      col.links.forEach(function (l) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.className = "footer-link";
        a.href = l.href;
        a.textContent = l.label;
        li.appendChild(a);
        ul.appendChild(li);
      });
      div.appendChild(h); div.appendChild(ul);
      grid.appendChild(div);
    });
    container.appendChild(grid);

    /* legal */
    var legal = document.createElement("div");
    legal.className = "footer-legal";
    var disc = document.createElement("p");
    disc.className = "footer-disclaimer";
    disc.textContent = "ASUGALAKX provides information, research and educational content. Nothing on this website constitutes financial advice or a guarantee of investment performance.";
    var bottom = document.createElement("div");
    bottom.className = "footer-bottom";
    var copy = document.createElement("span");
    copy.textContent = "\u00A9 2026 ASUGALAKX. All rights reserved.";
    var legalLinks = document.createElement("ul");
    legalLinks.className = "footer-legal-links";
    [["Terms", "/about/#legal"], ["Privacy", "/about/#legal"], ["Risk Disclosure", "/about/#legal"]].forEach(function (pair) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.className = "footer-link";
      a.href = pair[1];
      a.textContent = pair[0];
      li.appendChild(a);
      legalLinks.appendChild(li);
    });
    bottom.appendChild(copy);
    bottom.appendChild(legalLinks);
    legal.appendChild(disc);
    legal.appendChild(bottom);
    container.appendChild(legal);

    footer.appendChild(container);
    mount.appendChild(footer);
  }

  /* ---------- Boot ---------- */
  function boot() {
    /* document title suffix */
    if (PAGE.title && document.title.indexOf("ASUGALAKX") === -1) {
      document.title = PAGE.title + " \u2014 ASUGALAKX";
    }
    /* default meta description */
    if (!document.querySelector('meta[name="description"]')) {
      var m = document.createElement("meta");
      m.name = "description";
      m.content = "ASUGALAKX \u2014 Market intelligence, analysis, education, and community for Crypto, Stocks, Forex & Web3.";
      document.head.appendChild(m);
    }

    renderNavbar(document.getElementById("asgx-nav"));
    renderFooter(document.getElementById("asgx-footer"));

    /* signal page-specific scripts that shared chrome is ready */
    document.dispatchEvent(new CustomEvent("asgx:ready"));
  }

  window.ASGX = {
    NAV: NAV,
    renderNavbar: renderNavbar,
    renderFooter: renderFooter,
    page: PAGE
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
