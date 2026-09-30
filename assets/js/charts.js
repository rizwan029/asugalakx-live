/* ============================================================
   ASUGALAKX — Hand-rolled SVG chart helpers (no external libs)
   window.ASGX_CHARTS = { sparkline, donut, line }
   All charts respect prefers-reduced-motion (no draw animation).
   ============================================================ */
(function () {
  "use strict";

  var SVG_NS = "http://www.w3.org/2000/svg";
  var reducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(name, attrs) {
    var node = document.createElementNS(SVG_NS, name);
    if (attrs) {
      for (var k in attrs) {
        if (Object.prototype.hasOwnProperty.call(attrs, k)) {
          node.setAttribute(k, attrs[k]);
        }
      }
    }
    return node;
  }

  function minMax(data) {
    var min = Infinity, max = -Infinity, i;
    for (i = 0; i < data.length; i++) {
      if (data[i] < min) min = data[i];
      if (data[i] > max) max = data[i];
    }
    if (min === max) { min -= 1; max += 1; }
    return { min: min, max: max };
  }

  function trendColor(data, opts) {
    opts = opts || {};
    if (opts.color) return opts.color;
    var up = data[data.length - 1] >= data[0];
    return up ? "#22C55E" : "#EF4444";
  }

  /* Draw-in animation for stroke paths (skipped under reduced motion) */
  function animateDraw(path) {
    if (reducedMotion) return;
    try {
      var len = path.getTotalLength();
      path.style.strokeDasharray = String(len);
      path.style.strokeDashoffset = String(len);
      path.getBoundingClientRect(); /* force reflow */
      path.style.transition = "stroke-dashoffset 1.1s cubic-bezier(.22,1,.36,1)";
      path.style.strokeDashoffset = "0";
    } catch (e) { /* non-fatal */ }
  }

  /**
   * sparkline(el, data, opts)
   * Renders a compact line + subtle area fill.
   * opts: { width, height, color, strokeWidth, fill (bool), ariaLabel }
   */
  function sparkline(target, data, opts) {
    if (!target || !data || data.length < 2) return;
    opts = opts || {};
    var W = opts.width || 220, H = opts.height || 56, PAD = 4;
    var color = trendColor(data, opts);
    var sw = opts.strokeWidth || 1.8;
    var mm = minMax(data);

    target.innerHTML = "";
    var svg = el("svg", {
      viewBox: "0 0 " + W + " " + H,
      role: "img",
      "aria-label": opts.ariaLabel || ("Sparkline trend, " + (data[data.length - 1] >= data[0] ? "up" : "down"))
    });

    var pts = data.map(function (v, i) {
      var x = PAD + (i / (data.length - 1)) * (W - PAD * 2);
      var y = PAD + (1 - (v - mm.min) / (mm.max - mm.min)) * (H - PAD * 2);
      return [x.toFixed(2), y.toFixed(2)];
    });
    var linePath = "M" + pts.map(function (p) { return p.join(" "); }).join(" L");

    if (opts.fill !== false) {
      var gid = "asgx-sg-" + Math.random().toString(36).slice(2, 8);
      var defs = el("defs", {});
      var grad = el("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1" });
      grad.appendChild(el("stop", { offset: "0%", "stop-color": color, "stop-opacity": ".28" }));
      grad.appendChild(el("stop", { offset: "100%", "stop-color": color, "stop-opacity": "0" }));
      defs.appendChild(grad);
      svg.appendChild(defs);
      var area = el("path", {
        d: linePath + " L" + pts[pts.length - 1][0] + " " + H + " L" + pts[0][0] + " " + H + " Z",
        fill: "url(#" + gid + ")", stroke: "none"
      });
      svg.appendChild(area);
    }

    var line = el("path", {
      d: linePath, fill: "none", stroke: color,
      "stroke-width": sw, "stroke-linecap": "round", "stroke-linejoin": "round"
    });
    svg.appendChild(line);

    /* end dot */
    var last = pts[pts.length - 1];
    svg.appendChild(el("circle", { cx: last[0], cy: last[1], r: 2.6, fill: color }));

    target.appendChild(svg);
    animateDraw(line);
  }

  /**
   * donut(el, segments)
   * segments: [{ label, value, color }]
   * Renders a donut + accessible legend list.
   */
  function donut(target, segments) {
    if (!target || !segments || !segments.length) return;
    var SIZE = 220, R = 80, CX = SIZE / 2, CY = SIZE / 2;
    var CIRC = 2 * Math.PI * R;
    var total = segments.reduce(function (s, seg) { return s + seg.value; }, 0) || 1;

    target.innerHTML = "";
    var wrap = document.createElement("div");
    wrap.className = "donut-wrap";

    var holder = document.createElement("div");
    holder.className = "donut-svg";
    var svg = el("svg", { viewBox: "0 0 " + SIZE + " " + SIZE, role: "img", "aria-label": "Donut chart" });
    svg.appendChild(el("circle", { cx: CX, cy: CY, r: R, fill: "none", stroke: "rgba(255,255,255,.06)", "stroke-width": 26 }));

    var offset = 0.25; /* start at top */
    var animTargets = [];
    segments.forEach(function (seg) {
      var frac = seg.value / total;
      var c = el("circle", {
        cx: CX, cy: CY, r: R, fill: "none",
        stroke: seg.color || "#7B2DFF", "stroke-width": 26,
        "stroke-dasharray": (frac * CIRC).toFixed(2) + " " + CIRC.toFixed(2),
        "stroke-dashoffset": (-offset * CIRC).toFixed(2),
        transform: "rotate(-90 " + CX + " " + CY + ")",
        "stroke-linecap": "butt"
      });
      svg.appendChild(c);
      animTargets.push({ node: c, frac: frac });
      offset += frac;
    });

    /* center label */
    var center = el("text", {
      x: CX, y: CY - 6, "text-anchor": "middle",
      fill: "#F5F5F5", "font-size": "22", "font-weight": "700",
      "font-family": "Space Grotesk, sans-serif"
    });
    center.textContent = "100%";
    svg.appendChild(center);
    var sub = el("text", {
      x: CX, y: CY + 18, "text-anchor": "middle",
      fill: "#71717A", "font-size": "11", "letter-spacing": "2"
    });
    sub.textContent = "ALLOCATION";
    svg.appendChild(sub);

    holder.appendChild(svg);
    wrap.appendChild(holder);

    var legend = document.createElement("ul");
    legend.className = "donut-legend";
    segments.forEach(function (seg) {
      var li = document.createElement("li");
      var sw = document.createElement("span");
      sw.className = "legend-swatch";
      sw.style.background = seg.color || "#7B2DFF";
      li.appendChild(sw);
      li.appendChild(document.createTextNode(seg.label + " "));
      var b = document.createElement("b");
      b.textContent = ((seg.value / total) * 100).toFixed(1) + "%";
      li.appendChild(b);
      legend.appendChild(li);
    });
    wrap.appendChild(legend);
    target.appendChild(wrap);

    if (!reducedMotion) {
      animTargets.forEach(function (t, i) {
        var finalDash = t.node.getAttribute("stroke-dasharray");
        t.node.style.transition = "none";
        t.node.setAttribute("stroke-dasharray", "0 " + CIRC.toFixed(2));
        setTimeout(function () {
          t.node.style.transition = "stroke-dasharray 1s cubic-bezier(.22,1,.36,1)";
          t.node.setAttribute("stroke-dasharray", finalDash);
        }, 60 + i * 90);
      });
    }
  }

  /**
   * line(target, series, opts)
   * series: [{ label, color, data: [numbers] }] or a single { label, color, data }
   * opts: { width, height, labels: [x-axis labels], yLabel, ariaLabel }
   * Renders a larger multi-series line chart with gridlines + axes.
   */
  function line(target, series, opts) {
    if (!target || !series) return;
    opts = opts || {};
    if (!Array.isArray(series)) series = [series];
    series = series.filter(function (s) { return s && s.data && s.data.length > 1; });
    if (!series.length) return;

    var W = opts.width || 720, H = opts.height || 320;
    var PADL = 52, PADR = 16, PADT = 16, PADB = 34;
    var iw = W - PADL - PADR, ih = H - PADT - PADB;

    var all = [];
    series.forEach(function (s) { all = all.concat(s.data); });
    var mm = minMax(all);
    var n = Math.max.apply(null, series.map(function (s) { return s.data.length; }));

    function X(i) { return PADL + (i / (n - 1)) * iw; }
    function Y(v) { return PADT + (1 - (v - mm.min) / (mm.max - mm.min)) * ih; }

    target.innerHTML = "";
    var svg = el("svg", {
      viewBox: "0 0 " + W + " " + H,
      role: "img",
      "aria-label": opts.ariaLabel || "Line chart"
    });

    /* gridlines + y labels */
    var ticks = 4, t;
    for (t = 0; t <= ticks; t++) {
      var tv = mm.min + (mm.max - mm.min) * (t / ticks);
      var ty = Y(tv);
      svg.appendChild(el("line", { x1: PADL, y1: ty, x2: W - PADR, y2: ty, stroke: "rgba(255,255,255,.07)", "stroke-width": 1 }));
      var lbl = el("text", {
        x: PADL - 8, y: ty + 4, "text-anchor": "end",
        fill: "#71717A", "font-size": "11", "font-family": "Inter, sans-serif"
      });
      lbl.textContent = formatTick(tv);
      svg.appendChild(lbl);
    }

    /* x labels */
    var xlabels = opts.labels || [];
    if (xlabels.length) {
      var step = Math.max(1, Math.floor(xlabels.length / 6));
      for (var xi = 0; xi < xlabels.length; xi += step) {
        var xl = el("text", {
          x: X(xi), y: H - 10, "text-anchor": "middle",
          fill: "#71717A", "font-size": "11", "font-family": "Inter, sans-serif"
        });
        xl.textContent = xlabels[xi];
        svg.appendChild(xl);
      }
    }

    /* series */
    var animated = [];
    series.forEach(function (s) {
      var color = s.color || "#7B2DFF";
      var d = s.data.map(function (v, i) {
        return (i === 0 ? "M" : "L") + X(i).toFixed(1) + " " + Y(v).toFixed(1);
      }).join(" ");
      var p = el("path", {
        d: d, fill: "none", stroke: color,
        "stroke-width": 2.2, "stroke-linecap": "round", "stroke-linejoin": "round"
      });
      svg.appendChild(p);
      animated.push(p);
    });

    target.appendChild(svg);
    animated.forEach(animateDraw);

    /* legend */
    if (series.length > 1 || series[0].label) {
      var legend = document.createElement("div");
      legend.className = "chart-legend";
      series.forEach(function (s) {
        var item = document.createElement("span");
        item.className = "legend-item";
        var sw = document.createElement("span");
        sw.className = "legend-swatch";
        sw.style.background = s.color || "#7B2DFF";
        item.appendChild(sw);
        item.appendChild(document.createTextNode(s.label || "Series"));
        legend.appendChild(item);
      });
      target.appendChild(legend);
    }
  }

  function formatTick(v) {
    if (Math.abs(v) >= 1000) return (v / 1000).toFixed(v >= 10000 ? 0 : 1) + "k";
    if (Math.abs(v) >= 100) return v.toFixed(0);
    if (Math.abs(v) >= 1) return v.toFixed(1);
    return v.toFixed(3);
  }

  window.ASGX_CHARTS = {
    sparkline: sparkline,
    donut: donut,
    line: line
  };
})();
