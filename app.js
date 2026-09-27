/* ==========================================================================
   Executive Coaching Manual Portal & McKinsey Presentation Engine (app.js)
   Features:
   1. Global Keyword Search across Books, Chapters, Slides & Cases
   2. Interactive 5-Question Organizational Diagnostic Tool (Action Filter)
   3. McKinsey Presentation Slide Mode / Full-Deck Mode & Keyboard Navigation
   ========================================================================== */

(function () {
  "use strict";

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function highlightText(text, query) {
    const clean = escapeHtml(text);
    if (!query || !query.trim()) return clean;
    const terms = query
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    if (!terms.length) return clean;
    const regex = new RegExp(`(${terms.join("|")})`, "gi");
    return clean.replace(regex, '<span class="search-highlight">$1</span>');
  }

  /* ------------------------------------------------------------------------
     1. Portal Homepage Initialization (Search + Book Catalog + 5Q Diagnostic)
     ------------------------------------------------------------------------ */
  function initPortalPage() {
    const searchInput = document.getElementById("global-search-input");
    const searchResultsBox = document.getElementById("global-search-results");
    const clearSearchBtn = document.getElementById("clear-search-btn");
    const bookGrid = document.getElementById("book-catalog-grid");

    if (bookGrid && window.PORTAL_DATA && window.PORTAL_DATA.books) {
      bookGrid.innerHTML = window.PORTAL_DATA.books
        .map((b) => {
          const isPub = b.status === "published";
          return `
            <article class="book-card ${isPub ? "active-book" : ""}">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.65rem;">
                  <span class="mck-pill ${isPub ? "pill-navy" : "pill-blue"}">${escapeHtml(b.number)} · ${escapeHtml(b.category)}</span>
                  <span class="mck-pill ${isPub ? "pill-green" : "pill-amber"}">${escapeHtml(b.statusLabel)}</span>
                </div>
                <h3 style="font-family:var(--font-serif);font-size:1.22rem;color:var(--mck-navy);margin-bottom:0.2rem;">
                  ${escapeHtml(b.title)}
                </h3>
                <div style="font-size:0.78rem;color:var(--mck-muted);margin-bottom:0.75rem;">
                  ${escapeHtml(b.englishTitle)} ｜ ${escapeHtml(b.author)}
                </div>
                <p style="font-size:0.85rem;color:var(--mck-text-secondary);margin-bottom:0.9rem;line-height:1.55;">
                  ${escapeHtml(b.summary)}
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:1rem;">
                  ${(b.tags || [])
                    .map((t) => `<span class="mck-pill pill-cyan" style="text-transform:none;">#${escapeHtml(t)}</span>`)
                    .join("")}
                </div>
              </div>
              <div style="border-top:1px solid var(--mck-border-light);padding-top:0.85rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                <span style="font-size:0.76rem;font-weight:700;color:var(--mck-muted);">簡報頁數：${b.slideCount} 頁（含圖表與表格）</span>
                <a href="${escapeHtml(b.url)}" class="mck-btn ${isPub ? "mck-btn-primary" : ""}">
                  ${isPub ? "開啟麥肯錫簡報教材 →" : "查看跨書對照 →"}
                </a>
              </div>
            </article>
          `;
        })
        .join("");
    }

    function runGlobalSearch(q) {
      if (!searchResultsBox || !window.PORTAL_DATA) return;
      const query = (q || "").trim();
      if (!query) {
        searchResultsBox.classList.remove("active");
        searchResultsBox.innerHTML = "";
        return;
      }

      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const matches = (window.PORTAL_DATA.searchIndex || []).filter((item) => {
        const hay = [
          item.slideNum,
          item.bookTitle,
          item.section,
          item.title,
          item.excerpt,
          ...(item.keywords || [])
        ]
          .join(" ")
          .toLowerCase();
        return terms.every((t) => hay.includes(t));
      });

      searchResultsBox.classList.add("active");
      if (!matches.length) {
        searchResultsBox.innerHTML = `
          <div style="padding:1rem;background:var(--mck-surface-alt);border-left:4px solid var(--mck-amber);font-size:0.88rem;">
            找不到與「<strong>${escapeHtml(query)}</strong>」完全相符的簡報頁。建議嘗試：<code>GROW</code>、<code>蘇與莫</code>、<code>上海專案</code>、<code>績效曲線</code>、<code>Level E</code>、<code>800% ROI</code>、<code>帶人要慢</code>、<code>次人格</code>。
          </div>
        `;
        return;
      }

      searchResultsBox.innerHTML = `
        <div style="font-size:0.8rem;font-weight:700;color:var(--mck-navy);margin-bottom:0.65rem;">
          共檢索到 <span style="color:var(--mck-blue);">${matches.length}</span> 頁麥肯錫簡報教材符合「${escapeHtml(query)}」：
        </div>
        ${matches
          .map(
            (m) => `
          <a href="${escapeHtml(m.url)}" class="search-result-card">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem;gap:0.5rem;flex-wrap:wrap;">
              <span class="mck-pill pill-navy">${escapeHtml(m.slideNum)} · ${escapeHtml(m.section)}</span>
              <span style="font-size:0.75rem;color:var(--mck-blue);font-weight:700;">點擊直達該簡報頁 →</span>
            </div>
            <div style="font-weight:700;font-size:0.95rem;color:var(--mck-navy);margin-bottom:0.25rem;">
              ${highlightText(m.title, query)}
            </div>
            <div style="font-size:0.82rem;color:var(--mck-text-secondary);">
              ${highlightText(m.excerpt, query)}
            </div>
          </a>
        `
          )
          .join("")}
      `;
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => runGlobalSearch(e.target.value));
    }
    if (clearSearchBtn && searchInput) {
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        runGlobalSearch("");
        searchInput.focus();
      });
    }

    document.querySelectorAll("[data-search-tag]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const tag = btn.getAttribute("data-search-tag") || "";
        if (searchInput) {
          searchInput.value = tag;
          runGlobalSearch(tag);
          searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });

    initFiveQuestionDiagnostic();
  }

  /* ------------------------------------------------------------------------
     2. Interactive 5-Question Organizational Diagnostic Tool
        Solves Gap 3 & Gap 4 (90-Action Overload -> Top 3-5 Priority Actions)
     ------------------------------------------------------------------------ */
  function initFiveQuestionDiagnostic() {
    const q1 = document.getElementById("diag-q1");
    const q2 = document.getElementById("diag-q2");
    const q3 = document.getElementById("diag-q3");
    const q4 = document.getElementById("diag-q4");
    const q5 = document.getElementById("diag-q5");
    const outputBox = document.getElementById("diag-result-output");

    if (!q1 || !outputBox) return;

    function updateDiagnostic() {
      const recs = [];

      if (q1.value === "small") {
        recs.push({
          ch: "Ch 4 & Ch 6",
          action: "【隨手在職教練＋交還選擇權】部屬請示時先問「你覺得最重要的下一步是什麼？（蘇與莫案例）」，交辦任務改問「誰自願負責？（彼得找梯子）」。",
          kpi: "每週替部屬做決策次數下降 50%｜部屬自備方案率 ≥ 80%",
          slide: "book-coaching-for-performance.html#slide-6"
        });
      } else {
        recs.push({
          ch: "Ch 15 & Ch 20",
          action: "【三重角色工作協議＋主管考核改革】與中階主管簽訂「有意識的工作協議」，並將「發展部屬之教練表現」納入主管績效考核權重（≥20%）。",
          kpi: "正式 1-on-1 教練完成率 100%｜主管考核含教練指標 100%",
          slide: "book-coaching-for-performance.html#slide-12"
        });
      }

      if (q2.value === "high") {
        recs.push({
          ch: "Ch 7 & Ch 8",
          action: "【戒除專家給答案癮】禁用「為什麼沒做好」，全面改問「發生了什麼？還有什麼選擇？」，且每次提問後強制沉默數 3 秒。",
          kpi: "領導者說話佔比 < 30%｜每週救火時間減少 5–10 小時",
          slide: "book-coaching-for-performance.html#slide-8"
        });
      } else {
        recs.push({
          ch: "Ch 12",
          action: "【破框創新選項激發】在策略會議中運用「米歇爾案例」與「九點練習」，規定每個議題必須列出至少 5 個選項才准評估。",
          kpi: "每議題平均選項數 ≥ 5 個｜創新方案採納率 ≥ 30%",
          slide: "book-coaching-for-performance.html#slide-11"
        });
      }

      if (q3.value === "dependent") {
        recs.push({
          ch: "Ch 3 & Ch 5",
          action: "【從依賴走向自主】撕掉員工「能力不足」標籤（畢馬威效應），賦予小範圍方法選擇權，把指責改為「我們從中學到什麼」。",
          kpi: "依賴型部屬獨立完成任務比例提升 25%｜推諉事件歸零",
          slide: "book-coaching-for-performance.html#slide-5"
        });
      } else {
        recs.push({
          ch: "Ch 11 & Ch 16",
          action: "【從個人英雄走向相互依賴共創】運用「山姆案例」與舒茨團隊四階段（包融➔主張➔合作➔共創），打破明星員工單打獨鬥與部門牆。",
          kpi: "團隊發展推進 1 個階段｜跨部門協作滿意度 ≥ 8.5/10",
          slide: "book-coaching-for-performance.html#slide-13"
        });
      }

      if (q4.value === "result-only") {
        recs.push({
          ch: "Ch 10 & Ch 13",
          action: "【拆解 100% 可控表現目標＋Level E 回饋】以跳遠冠軍林·戴維斯為戒，將業績拆解為可控行為；結尾必問「1-10分有幾分把握」，事後用 Level E 三問複盤。",
          kpi: "行動方案 7 天執行率達 90%｜Level E 回饋使用率 100%",
          slide: "book-coaching-for-performance.html#slide-10"
        });
      } else {
        recs.push({
          ch: "Ch 17 & Ch 18",
          action: "【精實 PDCA 與安全承諾轉化】如「愛麗絲與吉姆案例」消滅「盡快/盡量」等模糊詞，並將安全合規從「我必須」轉為「我選擇」。",
          kpi: "一線流程改善提案 > 70%｜違規與工安風險下降 50%",
          slide: "book-coaching-for-performance.html#slide-14"
        });
      }

      if (q5.value === "burnout") {
        recs.push({
          ch: "Ch 21–23",
          action: "【領導者自我修煉：不刻意嘗試＋次人格整合】停止自我批判，每天對目標習慣進行 1–10 分無評判觀察；覺察內在衝突次人格，跨越事業「叫醒牆」。",
          kpi: "情緒失控決策 = 0 次｜4 週內領導習慣自評升至 8 分以上",
          slide: "book-coaching-for-performance.html#slide-16"
        });
      }

      outputBox.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.85rem;flex-wrap:wrap;gap:0.5rem;">
          <div>
            <span class="mck-pill pill-cyan">MCKINSEY DIAGNOSTIC OUTPUT · 本季優先處方箋</span>
            <h4 style="font-family:var(--font-serif);font-size:1.15rem;margin-top:0.35rem;color:#FFFFFF;">
              為您從全書 90 項行動中精準篩選出本季最優先的 ${recs.length} 項高槓桿行動：
            </h4>
          </div>
          <a href="book-coaching-for-performance.html#slide-20" class="mck-btn mck-btn-primary" style="background:var(--mck-cyan);color:var(--mck-navy);border:none;">
            查看完整 90 天路線圖簡報 (Slide 20) →
          </a>
        </div>
        <div class="mck-table-wrap">
          <table class="mck-table">
            <thead>
              <tr>
                <th style="width:110px;">對應章節</th>
                <th>本季優先落實行動方案（已排除行動過載）</th>
                <th style="width:240px;">量化成功指標（KPI）</th>
                <th style="width:110px;">簡報教材</th>
              </tr>
            </thead>
            <tbody>
              ${recs
                .map(
                  (r) => `
                <tr>
                  <td><span class="mck-pill pill-navy">${escapeHtml(r.ch)}</span></td>
                  <td>${escapeHtml(r.action)}</td>
                  <td><strong>${escapeHtml(r.kpi)}</strong></td>
                  <td><a href="${escapeHtml(r.slide)}" style="font-weight:700;">對應簡報 →</a></td>
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    [q1, q2, q3, q4, q5].forEach((sel) => {
      if (sel) sel.addEventListener("change", updateDiagnostic);
    });
    updateDiagnostic();
  }

  /* ------------------------------------------------------------------------
     3. Presentation Deck Engine (Slide Mode / Scroll Mode / Filter / Keys)
     ------------------------------------------------------------------------ */
  function initDeckPage() {
    const slides = Array.from(document.querySelectorAll(".mck-slide"));
    if (!slides.length) return;

    const tocContainer = document.getElementById("slide-toc-list");
    const modeScrollBtn = document.getElementById("mode-scroll-btn");
    const modeSlideBtn = document.getElementById("mode-slide-btn");
    const prevBtn = document.getElementById("prev-slide-btn");
    const nextBtn = document.getElementById("next-slide-btn");
    const counterLabel = document.getElementById("slide-counter-label");
    const deckSearchInput = document.getElementById("deck-search-input");

    let currentMode = "scroll"; // "scroll" or "slide"
    let currentIndex = 0;

    // Build TOC Sidebar
    if (tocContainer) {
      tocContainer.innerHTML = slides
        .map((s, idx) => {
          const num = String(idx + 1).padStart(2, "0");
          const shortTitle = s.getAttribute("data-short-title") || `Slide ${num}`;
          return `
            <button type="button" class="toc-item ${idx === 0 ? "active" : ""}" data-slide-idx="${idx}">
              <span class="toc-num">${num}</span>
              <span>${escapeHtml(shortTitle)}</span>
            </button>
          `;
        })
        .join("");

      tocContainer.querySelectorAll(".toc-item").forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetIdx = parseInt(btn.getAttribute("data-slide-idx"), 10) || 0;
          goToSlide(targetIdx);
        });
      });
    }

    function updateUI() {
      if (counterLabel) {
        counterLabel.textContent = `SLIDE ${String(currentIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      }
      if (tocContainer) {
        tocContainer.querySelectorAll(".toc-item").forEach((b, i) => {
          b.classList.toggle("active", i === currentIndex);
        });
      }
      if (currentMode === "slide") {
        slides.forEach((s, i) => {
          s.classList.toggle("hidden-slide", i !== currentIndex);
        });
      }
    }

    function goToSlide(idx) {
      currentIndex = Math.max(0, Math.min(slides.length - 1, idx));
      updateUI();
      if (currentMode === "scroll") {
        slides[currentIndex].scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    function setMode(mode) {
      currentMode = mode;
      if (modeScrollBtn) modeScrollBtn.classList.toggle("active", mode === "scroll");
      if (modeSlideBtn) modeSlideBtn.classList.toggle("active", mode === "slide");
      if (mode === "scroll") {
        slides.forEach((s) => s.classList.remove("hidden-slide"));
      }
      updateUI();
    }

    if (modeScrollBtn) modeScrollBtn.addEventListener("click", () => setMode("scroll"));
    if (modeSlideBtn) modeSlideBtn.addEventListener("click", () => setMode("slide"));
    if (prevBtn) prevBtn.addEventListener("click", () => goToSlide(currentIndex - 1));
    if (nextBtn) nextBtn.addEventListener("click", () => goToSlide(currentIndex + 1));

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.target && (e.target.tagName === "INPUT" || e.target.tagName === "SELECT" || e.target.tagName === "TEXTAREA")) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      }
    });

    // Deck in-page keyword filter
    if (deckSearchInput) {
      deckSearchInput.addEventListener("input", (e) => {
        const q = (e.target.value || "").trim().toLowerCase();
        if (!q) {
          setMode(currentMode);
          return;
        }
        // Switch to scroll view to show all matching slides
        if (modeScrollBtn) modeScrollBtn.classList.add("active");
        if (modeSlideBtn) modeSlideBtn.classList.remove("active");
        currentMode = "scroll";
        slides.forEach((s) => {
          const text = s.innerText.toLowerCase();
          s.classList.toggle("hidden-slide", !text.includes(q));
        });
      });
    }

    // Handle hash jump (e.g. #slide-5)
    if (window.location.hash && window.location.hash.startsWith("#slide-")) {
      const n = parseInt(window.location.hash.replace("#slide-", ""), 10);
      if (!isNaN(n) && n >= 1 && n <= slides.length) {
        currentIndex = n - 1;
      }
    }

    // Scroll spy in scroll mode
    window.addEventListener(
      "scroll",
      () => {
        if (currentMode !== "scroll") return;
        let bestIdx = currentIndex;
        let bestDist = Infinity;
        slides.forEach((s, idx) => {
          if (s.classList.contains("hidden-slide")) return;
          const rect = s.getBoundingClientRect();
          const dist = Math.abs(rect.top - 150);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = idx;
          }
        });
        if (bestIdx !== currentIndex) {
          currentIndex = bestIdx;
          updateUI();
        }
      },
      { passive: true }
    );

    updateUI();
    initFiveQuestionDiagnostic();
  }

  document.addEventListener("DOMContentLoaded", () => {
    initPortalPage();
    initDeckPage();
  });
})();
