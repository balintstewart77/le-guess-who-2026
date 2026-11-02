(() => {
  const VENUES = window.LGW_VENUES;
  const LINEUP_URL = "https://leguesswho.com/lineup/";
  const VENUE_URL = "https://leguesswho.com/about/venues/";

  const PROJECT_COLORS = {
    "aja monet": "#d9476b",
    "Tropical Fuck Storm": "#2f9a5f",
    "Los Thuthanaka": "#8a5cd6",
    "KMRU presents WAI8": "#2a8fbf",
    "24 HOUR DUB": "#c98112",
    "Sounds of Cabo Verde": "#0f9d9a",
    "WAS.": "#5560e0",
    "totally wired": "#c0449f",
    "COSMOS": "#7d8f1f",
    "Sound & Culture Summit": "#8c7a66",
    "Film": "#8c7a66",
  };
  const DEFAULT_COLOR = "#8f887e";
  const colorFor = (p) => PROJECT_COLORS[p] || (p.startsWith("Curated by") ? "#b0603a" : DEFAULT_COLOR);

  // ---------- parse timetable text ----------
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
  const fmt = (min) => { const m = ((min % 1440) + 1440) % 1440; return String(Math.floor(m / 60)).padStart(2, "0") + ":" + String(m % 60).padStart(2, "0"); };

  const days = [];
  let day = null, stage = null, offset = 0, prevStart = -1;
  for (const raw of window.LGW_TIMETABLE.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith("## ")) {
      const date = line.slice(3).trim();
      const d = new Date(date + "T12:00:00");
      day = {
        date,
        key: d.toLocaleDateString("en-GB", { weekday: "short" }).toLowerCase(),
        short: d.toLocaleDateString("en-GB", { weekday: "short" }),
        long: d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" }),
        num: d.getDate(),
        stages: [],
      };
      days.push(day);
    } else if (line.startsWith("# ")) {
      const [venue, name] = line.slice(2).split(" |").map((s) => s.trim());
      if (!VENUES[venue]) console.warn("Unknown venue", venue);
      stage = { id: day.date + "/" + venue + "/" + (name || ""), venue, name: name || "", sets: [] };
      day.stages.push(stage);
      offset = 0; prevStart = -1;
    } else {
      const [times, name, project, slug] = line.split(" |").map((s) => (s || "").trim());
      const [a, b] = times.split("-");
      let s = toMin(a) + offset;
      if (s < prevStart) { offset += 1440; s += 1440; }   // rolled past midnight
      prevStart = s;
      let e = toMin(b) + offset;
      if (e <= s) e += 1440;
      stage.sets.push({ id: stage.id + "/" + a, s, e, name, project: project || "", slug: slug || "", stage, day });
    }
  }
  const allSets = days.flatMap((d) => d.stages.flatMap((st) => st.sets));
  const byId = new Map(allSets.map((x) => [x.id, x]));

  // ---------- persisted prefs ----------
  const store = {
    get(k, fallback) { try { const v = localStorage.getItem("lgw26:" + k); return v == null ? fallback : JSON.parse(v); } catch { return fallback; } },
    set(k, v) { try { localStorage.setItem("lgw26:" + k, JSON.stringify(v)); } catch { /* private mode etc. */ } },
  };
  const stars = new Set(store.get("stars", []).filter((id) => byId.has(id)));
  const state = {
    dayIdx: 0,
    showExtra: store.get("showExtra", false),
    showMap: store.get("showMap", window.innerWidth > 760),
    showPlan: store.get("showPlan", false),
    selected: null,
  };

  // default day: from the URL hash, else tonight's festival night, else Thursday
  const nightOf = (date) => {
    const t = new Date(date.getTime() - 7 * 3600e3);   // 03:00 still counts as the previous night
    return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, "0")}-${String(t.getDate()).padStart(2, "0")}`;
  };
  const fromHash = days.findIndex((d) => "#" + d.key === location.hash);
  const tonight = days.findIndex((d) => d.date === nightOf(new Date()));
  state.dayIdx = fromHash >= 0 ? fromHash : tonight >= 0 ? tonight : 0;

  // ---------- helpers ----------
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, attrs = {}, ...kids) => {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "style") n.style.cssText = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat()) if (kid != null) n.append(kid);
    return n;
  };
  const overlaps = (a, b) => a.s < b.e && b.s < a.e;
  const dirUrl = (v) => "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent(v.page ? `${v.name}, ${v.address}, Utrecht` : `${v.lat},${v.lng}`);
  const ppm = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--ppm")) || 1.8;

  const visibleStages = (d) => d.stages.filter((st) => state.showExtra || !VENUES[st.venue].extra);
  const venueOrder = (stages) => [...new Set(stages.map((st) => st.venue))];

  // ---------- tabs / toolbar ----------
  function renderTabs() {
    const tabs = $("#tabs");
    tabs.replaceChildren(...days.map((d, i) => el("button", {
      class: "tab", role: "tab", "aria-selected": String(i === state.dayIdx),
      onclick: () => setDay(i),
    }, d.short, el("small", {}, d.num + " Nov"))));
  }
  function setDay(i) {
    state.dayIdx = i;
    state.selected = null;
    history.replaceState(null, "", "#" + days[i].key);
    renderAll(true);
  }
  function syncToggles() {
    $("#toggleMap").setAttribute("aria-pressed", String(state.showMap));
    $("#toggleExtra").setAttribute("aria-pressed", String(state.showExtra));
    $("#togglePlan").setAttribute("aria-pressed", String(state.showPlan));
    $("#planCount").textContent = stars.size;
    $("#mapPanel").hidden = !state.showMap;
    $("#planPanel").hidden = !state.showPlan;
    const extraCount = days[state.dayIdx].stages.filter((st) => VENUES[st.venue].extra).reduce((n, st) => n + st.sets.length, 0);
    $("#toggleExtra").textContent = `Talks, film & art (${extraCount})`;
    $("#toggleExtra").disabled = extraCount === 0;
  }
  $("#toggleMap").onclick = () => { state.showMap = !state.showMap; store.set("showMap", state.showMap); syncToggles(); if (state.showMap) renderMap(); measure(); };
  $("#toggleExtra").onclick = () => { state.showExtra = !state.showExtra; store.set("showExtra", state.showExtra); renderAll(false); };
  $("#togglePlan").onclick = () => { state.showPlan = !state.showPlan; store.set("showPlan", state.showPlan); syncToggles(); renderPlan(); measure(); };

  function renderLegend(stages) {
    const projects = [...new Set(stages.flatMap((st) => st.sets.map((x) => x.project)).filter(Boolean))]
      .filter((p) => p !== "Film" && p !== "Sound & Culture Summit" && !p.startsWith("Curated by"));
    $("#legend").replaceChildren(...projects.map((p) => el("span", {}, el("i", { style: `background:${colorFor(p)}` }), p)));
  }

  // ---------- grid ----------
  let range = { start: 0, end: 0 };
  function renderGrid() {
    const d = days[state.dayIdx];
    const stages = visibleStages(d);
    const venues = venueOrder(stages);
    const sets = stages.flatMap((st) => st.sets);
    range.start = Math.floor(Math.min(...sets.map((x) => x.s)) / 60) * 60;
    range.end = Math.ceil(Math.max(...sets.map((x) => x.e)) / 60) * 60;
    const px = ppm();
    const H = (range.end - range.start) * px;

    const grid = $("#grid");
    grid.style.gridTemplateColumns = `var(--timecol) repeat(${stages.length}, var(--col))`;
    const kids = [el("div", { class: "corner" })];

    // venue header row (spans its stages) + stage row + columns
    let c = 2;
    for (const vk of venues) {
      const v = VENUES[vk];
      const its = stages.filter((st) => st.venue === vk);
      kids.push(el("div", { class: "vhead", style: `grid-column:${c} / span ${its.length}`, title: `${v.name} — ${v.address}` },
        el("span", { class: "num", title: "Show on map", onclick: () => focusVenue(vk) }, String(venues.indexOf(vk) + 1)),
        el("a", { href: dirUrl(v), target: "_blank", rel: "noopener" }, v.name)));
      its.forEach((st, j) => {
        kids.push(el("div", { class: "shead" + (j === 0 ? " first" : ""), style: `grid-column:${c + j}`, title: st.name }, st.name || " "));
        const col = el("div", { class: "col" + (j === 0 ? " first" : ""), style: `grid-column:${c + j};height:${H}px` });
        for (const x of st.sets) col.append(setButton(x, px));
        kids.push(col);
      });
      c += its.length;
    }

    // time labels
    const times = el("div", { class: "times", style: `height:${H}px` });
    for (let m = range.start; m <= range.end; m += 30) {
      const onHour = m % 60 === 0;
      if (m === range.start) continue;
      times.append(el("span", { class: onHour ? "h" : "", style: `top:${(m - range.start) * px}px` }, fmt(m)));
    }
    kids.push(times);
    kids.push(el("div", { class: "overlay", id: "overlay", style: `height:${H}px` }));

    grid.replaceChildren(...kids);
    applyMarks();
    drawNow();
  }

  function setButton(x, px) {
    const h = (x.e - x.s) * px;
    const b = el("button", {
      class: "set" + (h < 34 ? " tiny" : ""),
      "data-id": x.id,
      style: `top:${(x.s - range.start) * px + 1}px;height:${Math.max(h - 2, 13)}px;--c:${colorFor(x.project)}`,
      title: `${fmt(x.s)}–${fmt(x.e)} ${x.name}${x.project ? " · " + x.project : ""}`,
      onclick: () => select(state.selected === x.id ? null : x.id),
    },
      el("span", { class: "tm" }, `${fmt(x.s)}–${fmt(x.e)}`),
      el("span", { class: "nm" }, x.name),
      x.project ? el("span", { class: "pj" }, x.project) : null);
    return b;
  }

  // stars, star clashes, selection highlighting
  function applyMarks() {
    const d = days[state.dayIdx];
    const daysStars = [...stars].map((id) => byId.get(id)).filter((x) => x.day === d);
    const sel = state.selected && byId.get(state.selected);
    const grid = $("#grid");
    grid.classList.toggle("selecting", !!sel);
    for (const b of grid.querySelectorAll(".set")) {
      const x = byId.get(b.dataset.id);
      const starred = stars.has(x.id);
      b.classList.toggle("starred", starred);
      b.classList.toggle("starclash", starred && daysStars.some((y) => y !== x && overlaps(x, y)));
      b.classList.toggle("sel", !!sel && x === sel);
      b.classList.toggle("overlap", !!sel && x !== sel && overlaps(x, sel));
    }
    const overlay = $("#overlay");
    overlay.querySelector(".band")?.remove();
    if (sel) {
      const px = ppm();
      overlay.append(el("div", { class: "band", style: `top:${(sel.s - range.start) * px}px;height:${(sel.e - sel.s) * px}px` }));
    }
  }

  function drawNow() {
    const overlay = $("#overlay");
    if (!overlay) return;
    overlay.querySelector(".nowLine")?.remove();
    const d = days[state.dayIdx];
    const mins = (Date.now() - new Date(d.date + "T00:00:00").getTime()) / 60000;
    if (mins < range.start || mins > range.end) return null;
    const top = (mins - range.start) * ppm();
    overlay.append(el("div", { class: "nowLine", style: `top:${top}px` }));
    return top;
  }
  setInterval(drawNow, 60_000);

  // ---------- selection sheet ----------
  function select(id) {
    state.selected = id;
    applyMarks();
    renderSheet();
  }
  function renderSheet() {
    const sheet = $("#sheet");
    const x = state.selected && byId.get(state.selected);
    if (!x) { sheet.hidden = true; return; }
    const v = VENUES[x.stage.venue];
    const others = visibleStages(x.day).flatMap((st) => st.sets)
      .filter((y) => y !== x && overlaps(x, y))
      .sort((a, b) => a.s - b.s);
    const on = stars.has(x.id);
    sheet.replaceChildren(...[
      el("button", { class: "close", "aria-label": "Close", onclick: () => select(null) }, "×"),
      el("h3", {}, x.name),
      el("div", { class: "meta" },
        el("b", {}, `${x.day.short} ${fmt(x.s)}–${fmt(x.e)}`), ` (${x.e - x.s} min) · `,
        el("b", {}, v.name), x.stage.name ? ` ${x.stage.name}` : "",
        x.project ? ` · ${x.project}` : ""),
      el("div", { class: "actions" },
        el("button", { class: "starBtn" + (on ? " on" : ""), onclick: () => toggleStar(x.id) }, on ? "★ In my plan" : "☆ Add to my plan"),
        x.slug ? el("a", { href: LINEUP_URL + x.slug, target: "_blank", rel: "noopener" }, "Artist info ↗") : null,
        el("a", { href: dirUrl(v), target: "_blank", rel: "noopener" }, "Directions ↗")),
      others.length
        ? [el("h4", {}, `Clashes with ${others.length}`),
           el("ul", {}, others.map((y) => el("li", { class: stars.has(y.id) ? "star" : "", onclick: () => { select(y.id); scrollToSet(y.id); } },
             el("span", { class: "t" }, `${fmt(y.s)}–${fmt(y.e)}`), y.name, " ",
             el("span", { class: "v" }, `· ${VENUES[y.stage.venue].name}${y.stage.name ? " " + y.stage.name : ""}`))))]
        : el("p", { class: "meta" }, "Nothing else on at the same time.")].flat());
    sheet.hidden = false;
  }
  function scrollToSet(id) {
    const b = document.querySelector(`.set[data-id="${CSS.escape(id)}"]`);
    if (b) b.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }
  function toggleStar(id) {
    stars.has(id) ? stars.delete(id) : stars.add(id);
    store.set("stars", [...stars]);
    applyMarks(); renderSheet(); renderPlan(); syncToggles();
  }
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && state.selected) select(null); });

  // ---------- my plan ----------
  function renderPlan() {
    const panel = $("#planPanel");
    if (!state.showPlan) return;
    const d = days[state.dayIdx];
    const mine = [...stars].map((id) => byId.get(id)).filter((x) => x.day === d).sort((a, b) => a.s - b.s);
    const otherDays = days.filter((dd) => dd !== d)
      .map((dd) => [dd, [...stars].filter((id) => byId.get(id).day === dd).length]).filter(([, n]) => n);
    panel.replaceChildren(
      el("h2", {}, `My plan · ${d.long}`),
      mine.length
        ? el("ul", {}, mine.map((x) => {
            const clash = mine.filter((y) => y !== x && overlaps(x, y));
            return el("li", { onclick: () => { select(x.id); scrollToSet(x.id); } },
              el("span", { class: "t" }, `${fmt(x.s)}–${fmt(x.e)}`),
              el("span", {}, x.name, " ", el("span", { class: "v" }, `· ${VENUES[x.stage.venue].name}${x.stage.name ? " " + x.stage.name : ""}`)),
              clash.length ? el("span", { class: "warn" }, `⚠ overlaps ${clash.map((y) => y.name).join(", ")}`) : null);
          }))
        : el("p", { class: "empty" }, "Nothing starred for this day yet — tap a set, then “Add to my plan”."),
      otherDays.length ? el("p", { class: "empty" }, "Also starred: ", otherDays.map(([dd, n]) => `${dd.short} (${n})`).join(", ")) : "");
  }

  // ---------- map ----------
  let map = null, markers = {};
  function renderMap() {
    if (!state.showMap || !window.L) return;
    const d = days[state.dayIdx];
    const stages = visibleStages(d);
    const venues = venueOrder(stages);
    if (!map) {
      map = L.map("map", { scrollWheelZoom: false, zoomControl: true }).setView([52.092, 5.115], 14);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19, attribution: "© OpenStreetMap",
      }).addTo(map);
    }
    Object.values(markers).forEach((m) => m.remove());
    markers = {};
    for (const [vk, v] of Object.entries(VENUES)) {
      const i = venues.indexOf(vk);
      const active = i >= 0;
      if (!active && v.extra && !state.showExtra) continue;
      const m = L.marker([v.lat, v.lng], {
        icon: L.divIcon({ className: "", html: `<div class="pin${active ? "" : " off"}">${active ? i + 1 : ""}</div>`, iconSize: [22, 22], iconAnchor: [11, 11] }),
        zIndexOffset: active ? 1000 : 0,
        title: v.name,
      }).addTo(map);
      const its = stages.filter((st) => st.venue === vk);
      m.bindPopup(
        `<b>${v.name}</b><br>${v.address}` +
        (its.length ? `<br><small>${d.short}: ${its.map((st) => `${st.name || "main"} (${st.sets.length})`).join(", ")}</small>` : `<br><small>Nothing on ${d.short}</small>`) +
        `<br><a href="${dirUrl(v)}" target="_blank" rel="noopener">Directions ↗</a>` +
        (v.page ? ` · <a href="${VENUE_URL + v.page}" target="_blank" rel="noopener">Venue info ↗</a>` : ""));
      markers[vk] = m;
    }
    const pts = venues.map((vk) => [VENUES[vk].lat, VENUES[vk].lng]);
    map.invalidateSize();
    if (pts.length) map.fitBounds(pts, { padding: [24, 24], maxZoom: 16 });

    $("#venueList").replaceChildren(...venues.map((vk, i) => {
      const v = VENUES[vk];
      return el("li", { onclick: () => focusVenue(vk) },
        el("span", { class: "num" }, String(i + 1)),
        el("span", {}, v.name, el("br"), el("span", { class: "addr" }, v.address)),
        el("a", { href: dirUrl(v), target: "_blank", rel: "noopener", onclick: (e) => e.stopPropagation() }, "Directions ↗"));
    }));
  }
  function focusVenue(vk) {
    if (!state.showMap) { state.showMap = true; store.set("showMap", true); syncToggles(); renderMap(); measure(); }
    const m = markers[vk];
    if (m) { map.setView(m.getLatLng(), Math.max(map.getZoom(), 15)); m.openPopup(); }
  }

  // ---------- layout ----------
  function measure() {
    if (map) map.invalidateSize();
  }
  window.addEventListener("hashchange", () => {
    const i = days.findIndex((d) => "#" + d.key === location.hash);
    if (i >= 0 && i !== state.dayIdx) setDay(i);
  });

  function renderAll(resetScroll) {
    const d = days[state.dayIdx];
    renderTabs();
    renderLegend(visibleStages(d));
    syncToggles();
    renderGrid();
    renderSheet();
    renderPlan();
    renderMap();
    measure();
    if (resetScroll) {
      const wrap = $("#gridWrap");
      const now = drawNow();
      wrap.scrollTo({ top: now != null ? Math.max(0, now - 120) : 0, left: 0 });
    }
  }
  renderAll(true);
})();
