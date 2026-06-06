/* ============================================================
   M&A STUDY APP — LOGIC
   ============================================================ */
(function () {
  "use strict";
  const { SUMMARY, FLASHCARDS, MCQ, CALC, TOPICS } = window.MADATA;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const LS_NAME  = "ma_user_name";
  const LS_BOARD = "ma_leaderboard";
  const LS_CARDS = "ma_card_status";
  const MAX_MC   = MCQ.length * 2;        // 2 pts per MC question
  const MAX_CALC = CALC.length * 4;       // 4 pts per calculation
  const MAX_TOTAL = MAX_MC + MAX_CALC;

  let user = null;
  let mcScore = 0;
  let calcScore = 0;
  const calcSolved = new Array(CALC.length).fill(false); // avoid double-counting

  /* ---------------- NAME GATE ---------------- */
  function initGate() {
    const saved = localStorage.getItem(LS_NAME);
    if (saved) { enter(saved); return; }
    const form = $("#gate-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#gate-name").value.trim();
      if (!name) { $("#gate-error").hidden = false; return; }
      localStorage.setItem(LS_NAME, name);
      enter(name);
    });
  }

  function enter(name) {
    user = name;
    $("#gate").hidden = true;
    $("#app").hidden = false;
    window.scrollTo(0, 0);
    $("#user-name").textContent = name;
    ensureBoardEntry(name);
    renderAll();
    updateScore();
  }

  function logout() {
    localStorage.removeItem(LS_NAME);
    location.reload();
  }

  /* ---------------- NAVIGATION ---------------- */
  function initNav() {
    $$(".tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        $$(".tab").forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const v = tab.dataset.view;
        $$(".view").forEach((s) => s.classList.remove("active"));
        $("#view-" + v).classList.add("active");
        if (v === "board") renderBoard();
        if (v === "overview") renderOverview();
      });
    });
    $("#logout").addEventListener("click", logout);
  }

  /* ---------------- CARD STATUS (mastery) ---------------- */
  function loadCardStatus() {
    try { return JSON.parse(localStorage.getItem(LS_CARDS)) || {}; }
    catch (e) { return {}; }
  }
  function saveCardStatus(m) { localStorage.setItem(LS_CARDS, JSON.stringify(m)); }
  function getCardStatus(i) { return loadCardStatus()[i] || "new"; }
  function setCardStatus(i, s) {
    const m = loadCardStatus();
    m[i] = s;
    saveCardStatus(m);
  }
  function getCardCounts() {
    const m = loadCardStatus();
    let got = 0, learning = 0;
    FLASHCARDS.forEach((_, i) => {
      if (m[i] === "got") got++;
      else if (m[i] === "learning") learning++;
    });
    const total = FLASHCARDS.length;
    return { got, learning, neu: total - got - learning, total };
  }

  /* ---------------- OVERVIEW ---------------- */
  const RING_CIRC = 2 * Math.PI * 52;
  function renderOverview() {
    $("#ov-name").textContent = user || "there";
    const c = getCardCounts();
    $("#ov-new").textContent = c.neu;
    $("#ov-learning").textContent = c.learning;
    $("#ov-got").textContent = c.got;
    $("#ov-fc").textContent = FLASHCARDS.length;
    $("#ov-mc").textContent = MCQ.length;
    $("#ov-calc").textContent = CALC.length;
    const pct = c.total ? Math.round((c.got / c.total) * 100) : 0;
    $("#ov-ring-pct").textContent = pct + "%";
    $("#ov-ring-sub").textContent = `${c.got} / ${c.total} cards`;
    setRing(pct);
    renderTopics();
  }
  function setRing(pct) {
    const fg = $("#ov-ring-fg");
    if (!fg) return;
    fg.style.strokeDasharray = RING_CIRC;
    fg.style.strokeDashoffset = RING_CIRC * (1 - pct / 100);
  }
  function renderTopics() {
    const wrap = $("#ov-topics");
    if (!wrap || !TOPICS) return;
    wrap.innerHTML = "";
    TOPICS.forEach((t, i) => {
      const row = document.createElement("div");
      row.className = "ov-topic";
      const pri = (t.priority || "").toLowerCase();
      row.innerHTML =
        `<span class="ov-rank">${i + 1}</span>
         <div class="ov-topic-main">
           <div class="ov-topic-title">${t.title}</div>
           <div class="ov-pri"><span class="ov-dot ${pri}"></span>${t.priority} priority · ${t.cards} cards</div>
         </div>
         ${sparkSvg(t.spark)}
         <span class="ov-chev">›</span>`;
      row.addEventListener("click", () => goToSummary(t.summaryIndex));
      wrap.appendChild(row);
    });
  }
  function sparkSvg(data) {
    if (!data || !data.length) return "";
    const w = 84, h = 30, pad = 3;
    const min = Math.min(...data), max = Math.max(...data);
    const span = max - min || 1;
    const step = (w - pad * 2) / (data.length - 1);
    const pts = data.map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - ((v - min) / span) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    const last = pts[pts.length - 1].split(",");
    return `<svg class="ov-spark" viewBox="0 0 ${w} ${h}">` +
      `<polyline fill="none" points="${pts.join(" ")}"></polyline>` +
      `<circle cx="${last[0]}" cy="${last[1]}" r="2.5"></circle></svg>`;
  }
  function goToSummary(index) {
    $$(".tab").forEach((t) => t.classList.toggle("active", t.dataset.view === "summary"));
    $$(".view").forEach((s) => s.classList.remove("active"));
    $("#view-summary").classList.add("active");
    $$("#summary-list .sum-item").forEach((it) => {
      it.classList.toggle("open", Number(it.dataset.idx) === index);
    });
    const target = $(`#summary-list .sum-item[data-idx="${index}"]`);
    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - 72;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
    } else {
      window.scrollTo(0, 0);
    }
  }

  /* ---------------- SUMMARY ---------------- */
  function renderSummary() {
    const wrap = $("#summary-list");
    wrap.innerHTML = "";
    SUMMARY.forEach((s, i) => {
      const item = document.createElement("div");
      item.className = "sum-item";
      item.dataset.idx = i;
      item.innerHTML =
        `<button class="sum-head">${s.title}<span class="sum-chevron">›</span></button>
         <div class="sum-body">${s.html}</div>`;
      item.querySelector(".sum-head").addEventListener("click", () =>
        item.classList.toggle("open")
      );
      wrap.appendChild(item);
    });
    // open the first by default
    if (wrap.firstChild) wrap.firstChild.classList.add("open");
  }

  /* ---------------- FLASHCARDS ---------------- */
  let deck = [];
  let idx = 0;
  function renderFlash() {
    deck = FLASHCARDS.map((c, i) => i);
    idx = 0;
    showCard();
    $("#flashcard").addEventListener("click", () =>
      $("#flashcard").classList.toggle("flipped")
    );
    $("#flash-prev").addEventListener("click", () => move(-1));
    $("#flash-next").addEventListener("click", () => move(1));
    $("#flash-shuffle").addEventListener("click", shuffleDeck);
    $("#rate-learning").addEventListener("click", () => rateCard("learning"));
    $("#rate-got").addEventListener("click", () => rateCard("got"));
  }
  function showCard() {
    const card = FLASHCARDS[deck[idx]];
    $("#flashcard").classList.remove("flipped");
    // tiny delay so the flip-back isn't visible while text swaps
    setTimeout(() => {
      $("#flash-front").textContent = card.front;
      $("#flash-back").textContent = card.back;
    }, 90);
    $("#flash-counter").textContent = `${idx + 1} / ${deck.length}`;
    showStatus();
  }
  function rateCard(status) {
    setCardStatus(deck[idx], status);
    move(1);
  }
  function showStatus() {
    const el = $("#flash-status");
    if (!el) return;
    const s = getCardStatus(deck[idx]);
    if (s === "got") { el.textContent = "✓ Got it"; el.className = "flash-status got"; }
    else if (s === "learning") { el.textContent = "↻ Still learning"; el.className = "flash-status learning"; }
    else { el.textContent = ""; el.className = "flash-status"; }
  }
  function move(d) {
    idx = (idx + d + deck.length) % deck.length;
    showCard();
  }
  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    idx = 0;
    showCard();
  }

  /* ---------------- MC QUIZ ---------------- */
  function renderQuiz() {
    const wrap = $("#quiz-list");
    wrap.innerHTML = "";
    MCQ.forEach((item, qi) => {
      const card = document.createElement("div");
      card.className = "qcard";
      card.dataset.qi = qi;
      let opts = "";
      item.options.forEach((opt, oi) => {
        opts +=
          `<label class="opt" data-oi="${oi}">
             <input type="checkbox" data-qi="${qi}" data-oi="${oi}">
             <span>${opt}</span>
           </label>`;
      });
      card.innerHTML =
        `<div class="qnum">Question ${qi + 1} <span class="qbadge" hidden></span></div>
         <div class="qtext">${item.q}</div>
         ${opts}
         <div class="qexplain">${item.explain}</div>`;
      wrap.appendChild(card);
    });
    // limit to 2 selections per question
    $$('#quiz-list input[type=checkbox]').forEach((box) => {
      box.addEventListener("change", () => {
        const qi = box.dataset.qi;
        const checked = $$(`#quiz-list input[data-qi="${qi}"]:checked`);
        if (checked.length > 2) box.checked = false;
      });
    });
    $("#quiz-submit").addEventListener("click", gradeQuiz);
    $("#quiz-reset").addEventListener("click", renderQuiz);
    $("#quiz-result").textContent = "";
    $("#quiz-result").className = "quiz-result";
  }

  function gradeQuiz() {
    mcScore = 0;
    MCQ.forEach((item, qi) => {
      const card = $(`#quiz-list .qcard[data-qi="${qi}"]`);
      const chosen = $$(`#quiz-list input[data-qi="${qi}"]:checked`).map((b) =>
        Number(b.dataset.oi)
      );
      const correct = item.correct;
      const isRight =
        chosen.length === correct.length &&
        chosen.every((c) => correct.includes(c));
      if (isRight) mcScore += 2;

      // colour the options
      $$(".opt", card).forEach((opt) => {
        const oi = Number(opt.dataset.oi);
        opt.classList.remove("correct", "wrong", "missed");
        const picked = chosen.includes(oi);
        const right = correct.includes(oi);
        if (picked && right) opt.classList.add("correct");
        else if (picked && !right) opt.classList.add("wrong");
        else if (!picked && right) opt.classList.add("missed");
      });
      const badge = $(".qbadge", card);
      badge.hidden = false;
      badge.textContent = isRight ? "✓ +2" : "✗ 0";
      badge.className = "qbadge " + (isRight ? "ok" : "no");
      $(".qexplain", card).classList.add("show");
    });

    const res = $("#quiz-result");
    res.textContent = `You scored ${mcScore} / ${MAX_MC} points`;
    res.className = "quiz-result " + (mcScore === MAX_MC ? "ok" : "no");
    updateScore();
    saveScore();
  }

  /* ---------------- CALCULATIONS ---------------- */
  function renderCalc() {
    const wrap = $("#calc-list");
    wrap.innerHTML = "";
    CALC.forEach((item, ci) => {
      const card = document.createElement("div");
      card.className = "qcard";
      card.innerHTML =
        `<div class="qnum">Calculation ${ci + 1} (4 pts)</div>
         <div class="qtext">${item.q}</div>
         <div class="calc-input-row">
           <input type="text" inputmode="decimal" placeholder="answer" data-ci="${ci}">
           <span class="calc-unit">${item.unit || ""}</span>
           <button class="calc-check" data-ci="${ci}">Check</button>
           <button class="calc-hintbtn" data-ci="${ci}">Hint</button>
         </div>
         <div class="calc-feedback"></div>
         <div class="calc-hint">${item.hint || ""}</div>
         <div class="calc-explain">${item.explain}</div>`;
      wrap.appendChild(card);

      card.querySelector(".calc-check").addEventListener("click", () => checkCalc(ci, card));
      card.querySelector(".calc-hintbtn").addEventListener("click", () =>
        card.querySelector(".calc-hint").classList.toggle("show")
      );
      card.querySelector("input").addEventListener("keydown", (e) => {
        if (e.key === "Enter") checkCalc(ci, card);
      });
    });
    $("#calc-result").textContent = "";
    $("#calc-result").className = "quiz-result";
  }

  function parseNum(str) {
    if (!str) return NaN;
    // accept comma decimals and stray spaces / thousands separators
    str = str.trim().replace(/\s/g, "").replace(/'/g, "");
    // if both , and . present assume , = thousands
    if (str.includes(",") && str.includes(".")) str = str.replace(/,/g, "");
    else str = str.replace(",", ".");
    return parseFloat(str);
  }

  function checkCalc(ci, card) {
    const item = CALC[ci];
    const val = parseNum(card.querySelector("input").value);
    const fb = card.querySelector(".calc-feedback");
    const ok = !isNaN(val) && Math.abs(val - item.answer) <= item.tolerance;

    fb.classList.add("show");
    if (ok) {
      fb.textContent = `✓ Correct! +4 points`;
      fb.className = "calc-feedback show ok";
      if (!calcSolved[ci]) { calcSolved[ci] = true; calcScore += 4; }
    } else {
      fb.textContent = isNaN(val)
        ? "Please enter a number."
        : `✗ Not quite. Correct answer: ${item.answer}${item.unit || ""}`;
      fb.className = "calc-feedback show no";
    }
    card.querySelector(".calc-explain").classList.add("show");

    const res = $("#calc-result");
    const solved = calcSolved.filter(Boolean).length;
    res.textContent = `Calculations solved: ${solved} / ${CALC.length}  ·  ${calcScore} / ${MAX_CALC} points`;
    res.className = "quiz-result " + (calcScore === MAX_CALC ? "ok" : "");
    updateScore();
    saveScore();
  }

  /* ---------------- SCORE + LEADERBOARD ---------------- */
  function updateScore() {
    const total = mcScore + calcScore;
    $("#user-score").textContent = `${total} pts`;
  }

  function loadBoard() {
    try { return JSON.parse(localStorage.getItem(LS_BOARD)) || {}; }
    catch (e) { return {}; }
  }
  function writeBoard(b) { localStorage.setItem(LS_BOARD, JSON.stringify(b)); }

  function ensureBoardEntry(name) {
    const b = loadBoard();
    if (!(name in b)) { b[name] = 0; writeBoard(b); }
  }

  function saveScore() {
    const total = mcScore + calcScore;
    const b = loadBoard();
    if (!(user in b) || total > b[user]) { b[user] = total; writeBoard(b); }
  }

  function renderBoard() {
    const b = loadBoard();
    const rows = Object.entries(b).sort((a, c) => c[1] - a[1]);
    const body = $("#board-body");
    body.innerHTML = "";
    if (!rows.length) {
      body.innerHTML = `<tr><td colspan="4" class="board-empty">No scores yet — take the quiz!</td></tr>`;
      return;
    }
    const medals = ["🥇", "🥈", "🥉"];
    rows.forEach(([name, score], i) => {
      const tr = document.createElement("tr");
      if (name === user) tr.className = "me";
      const rank = medals[i]
        ? `<span class="medal">${medals[i]}</span>`
        : `<span class="rank">${i + 1}</span>`;
      tr.innerHTML =
        `<td>${rank}</td>
         <td>${escapeHtml(name)}${name === user ? " (you)" : ""}</td>
         <td><strong>${score}</strong> pts</td>
         <td>${MAX_TOTAL}</td>`;
      body.appendChild(tr);
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  }

  function initBoardClear() {
    $("#board-clear").addEventListener("click", () => {
      if (confirm("Clear the whole leaderboard on this device?")) {
        const b = {};
        b[user] = mcScore + calcScore; // keep current user with current score
        writeBoard(b);
        renderBoard();
      }
    });
  }

  /* ---------------- INIT ---------------- */
  function renderAll() {
    renderSummary();
    renderFlash();
    renderQuiz();
    renderCalc();
    renderBoard();
    renderOverview();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initGate();
    initNav();
    initBoardClear();
  });
})();
