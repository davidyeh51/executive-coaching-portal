/* ==========================================================================
   Executive Coaching Manual Portal — Global Knowledge Base & Search Index
   McKinsey Presentation Edition (Three-Source Integrated Version)
   ========================================================================== */

window.PORTAL_DATA = {
  portalMeta: {
    title: "高階經理人教練手冊入口網站",
    subtitle: "McKinsey Executive Coaching & Leadership Briefing Portal",
    version: "v2.0 · McKinsey Presentation Edition",
    totalPlannedBooks: 30,
    activeBooks: 1
  },

  books: [
    {
      id: "book-01",
      number: "BOOK 01",
      status: "published",
      statusLabel: "已上線｜三源整合麥肯錫簡報版（20頁完整圖表）",
      category: "核心教練典範 · 績效領導",
      title: "《高績效教練（原書第5版）》",
      englishTitle: "Coaching for Performance (5th Edition)",
      author: "約翰·惠特默爵士（Sir John Whitmore）",
      sources: [
        "來源 A：《高績效教練》廣行解讀（樊登實戰案例）",
        "來源 B：《高績效教練（原書第5版）》PDF 280頁（含圖2/表2/圖6及附錄題庫）",
        "來源 C：《高績效教練_逐章分析與行動方案.md》（23章洞察、KPI與跨書比較）"
      ],
      url: "book-coaching-for-performance.html",
      markdownUrl: "高績效教練/《高績效教練》重點摘要、亮點分析與高階經理人教戰手冊.md",
      summary: "全球教練領導力開山之作。整合三份核心檔案，以「六層同心圓」架構貫穿 23 章，從「空容器 vs. 橡樹種子」心智轉移、「覺察與責任」雙開關、GROW 四步對話、績效曲線四階段，一路延伸至 800% ROI 衡量、心理綜合法次人格與「帶人要慢 vs. 測市場要快」雙軌決策。",
      slideCount: 20,
      tags: ["GROW模型", "覺察與責任", "橡樹種子", "績效曲線四階段", "蘇與莫", "上海專案", "Level E回饋", "800% ROI", "次人格與叫醒牆", "帶人要慢測市場要快"]
    },
    {
      id: "book-02",
      number: "BOOK 02",
      status: "planned",
      statusLabel: "雙軌對照書目｜跨書張力已納入 Book 01 Slide 19",
      category: "創業驗證 · 商業測試",
      title: "《把熱愛變成事業》",
      englishTitle: "Turn Passion into Business (Kelly Peng)",
      author: "凱莉·彭（Kelly Peng）",
      sources: ["已於 Book 01 第 19 頁建立「帶人要慢 vs. 測市場要快」跨書決策矩陣"],
      url: "book-coaching-for-performance.html#slide-19",
      summary: "強調「7天最小可行測試（MVP）」、「媽媽測試」與「專業術語是流量毒藥」。與《高績效教練》形成高階領導者必備的雙軌張力：對內培養人要慢（建立責任感），對外測試市場要快（快速驗證需求）。",
      slideCount: 16,
      tags: ["7天最小測試", "媽媽測試", "帶人要慢測市場要快", "年收入倒推法"]
    },
    {
      id: "book-03",
      number: "BOOK 03",
      status: "planned",
      statusLabel: "規劃中 · 預計納入",
      category: "微習慣教練 · 提問實戰",
      title: "《教練自己與團隊：微習慣提問術》",
      englishTitle: "The Coaching Habit",
      author: "麥可·邦格·史坦尼爾（Michael Bungay Stanier）",
      sources: ["待匯入簡報教材"],
      url: "#catalog-section",
      summary: "聚焦 7 個日常高頻教練問題（開場問題、AWE 問題「還有呢？」、聚焦問題、基礎問題、懶人問題、策略問題、學習問題），幫助忙碌高管在 10 分鐘內完成高效教練對話。",
      slideCount: 16,
      tags: ["7個提問習慣", "AWE問題", "戒除建議癖", "10分鐘教練"]
    },
    {
      id: "book-04",
      number: "BOOK 04",
      status: "planned",
      statusLabel: "規劃中 · 預計納入",
      category: "組織文化 · 坦誠回饋",
      title: "《徹底坦率：不當好人也不當混蛋的領導法則》",
      englishTitle: "Radical Candor",
      author: "金·史考特（Kim Scott）",
      sources: ["待匯入簡報教材"],
      url: "#catalog-section",
      summary: "以「個人關懷（Care Personally）」與「直接挑戰（Challenge Directly）」雙維度，破解高管陷入「毀滅性同理心（爛好人）」或「令人反感的侵略性」之兩難。",
      slideCount: 16,
      tags: ["徹底坦率", "毀滅性同理心", "直接挑戰", "回饋文化"]
    },
    {
      id: "book-05",
      number: "BOOK 05",
      status: "planned",
      statusLabel: "規劃中 · 預計納入",
      category: "高管轉型 · 行為改變",
      title: "《高管教練：成功人士如何更成功》",
      englishTitle: "What Got You Here Won't Get You There",
      author: "馬歇爾·葛史密斯（Marshall Goldsmith）",
      sources: ["待匯入簡報教材"],
      url: "#catalog-section",
      summary: "剖析高階經理人最常見的 20 種職場壞習慣（如急於展現聰明、總愛加一句「但是」、過度爭勝），並導入「前饋機制（Feedforward）」協助高管突破晉升瓶頸。",
      slideCount: 16,
      tags: ["20個高管壞習慣", "前饋Feedforward", "高管行為改變"]
    },
    {
      id: "book-06",
      number: "BOOK 06",
      status: "planned",
      statusLabel: "規劃中 · 預計納入",
      category: "高難度溝通 · 衝突化解",
      title: "《關鍵對話：高風險情境下的溝通藝術》",
      englishTitle: "Crucial Conversations",
      author: "凱瑞·派特森（Kerry Patterson）等",
      sources: ["待匯入簡報教材"],
      url: "#catalog-section",
      summary: "當觀點對立、情緒激烈且風險極高時，如何建立共同安全池（Safe Pool），運用 STATE 法則做到既100%坦誠又不破壞關係。",
      slideCount: 16,
      tags: ["關鍵對話", "安全池", "STATE法則", "衝突管理"]
    }
  ],

  searchIndex: [
    {
      id: "s01",
      slideNum: "Slide 01",
      bookTitle: "《高績效教練》",
      section: "總覽與三源整合",
      title: "三份核心材料交叉比對與互補修正：消除圖表缺口並建立 23 章可量化行動體系",
      url: "book-coaching-for-performance.html#slide-1",
      keywords: ["三源整合", "廣行解讀", "原書第5版", "逐章分析與行動方案", "缺口1補齊", "800% ROI", "同心圓結構"],
      excerpt: "整合樊登《廣行解讀》、惠特默《原書第5版》PDF（含P.52-53圖表還原）與《逐章分析與行動方案》顧問報告，100%補齊績效曲線四階段與領導力三角圖表缺口。"
    },
    {
      id: "s02",
      slideNum: "Slide 02",
      bookTitle: "《高績效教練》",
      section: "全書架構",
      title: "全書「六層同心圓」知識架構：以「覺察與責任」為圓心向外擴張的系統工程",
      url: "book-coaching-for-performance.html#slide-2",
      keywords: ["同心圓", "六層結構", "覺察與責任", "提問與傾聽", "GROW模型", "四大場景", "自我超越"],
      excerpt: "全書不是23個分散章節，而是以Ch6覺察與責任為內核，向外擴展至Ch7-8提問傾聽、Ch9-13 GROW結構、Ch15-18四大組織場景、Ch19-20文化ROI與Ch21-23領導者修煉。"
    },
    {
      id: "s03",
      slideNum: "Slide 03",
      bookTitle: "《高績效教練》",
      section: "Ch 1 & Ch 5 典範轉移",
      title: "從「空容器」到「橡樹種子」：破解員工僅發揮 40% 潛能與「員工發展排最後」之盲點",
      url: "book-coaching-for-performance.html#slide-3",
      keywords: ["空容器", "橡樹種子", "胡蘿蔔加大棒", "40%潛能", "畢馬威效應", "真自信", "假自信", "專家陷阱"],
      excerpt: "高管常把員工發展排在四大改變行為最後一名；員工平均只發揮40%潛能。專家每多輸入一分建議，被教練者的責任感就減少一分。"
    },
    {
      id: "s04",
      slideNum: "Slide 04",
      bookTitle: "《高績效教練》",
      section: "Ch 2 內心博弈",
      title: "添·高威「內心博弈公式」P = p - i：減法除干擾比加法灌技術更能瞬間釋放潛能",
      url: "book-coaching-for-performance.html#slide-4",
      keywords: ["內心博弈", "添高威", "滑雪教練教網球", "潛能減干擾", "三個問題", "恐懼", "微觀管理"],
      excerpt: "實際表現(P) = 內在潛能(p) - 內外干擾(i)。滑雪教練不示範網球姿勢，只問球正反轉、過網高度、落地轉速三個觀察問題，消除自我懷疑後身體本能自然接管。"
    },
    {
      id: "s05",
      slideNum: "Slide 05",
      bookTitle: "《高績效教練》",
      section: "Ch 3 績效曲線四階段",
      title: "原書圖 2 與表 2 完整還原：組織必須跨越「獨立自主」陷阱，邁向「相互依賴」共創高績效",
      url: "book-coaching-for-performance.html#slide-5",
      keywords: ["績效曲線", "衝動任性", "依賴他人", "獨立自主", "相互依賴", "馬斯洛需求", "高情商78%利潤", "圖2表2"],
      excerpt: "100%還原原書P.52-53圖2與表2：衝動任性（低績效）➔ 依賴他人（遵守規則/指責推諉）➔ 獨立自主（個人英雄凌駕團隊）➔ 相互依賴（我們一起共創成功）。"
    },
    {
      id: "s06",
      slideNum: "Slide 06",
      bookTitle: "《高績效教練》",
      section: "Ch 4 在職教練本質",
      title: "在職教練經典案例「蘇與莫（Sue & Mo）」：教練不是開車載部屬，而是邊走邊把鑰匙交出去",
      url: "book-coaching-for-performance.html#slide-6",
      keywords: ["蘇與莫", "Sue and Mo", "桑傑", "在職教練", "交出鑰匙", "教練型領導力三角", "圖6"],
      excerpt: "莫面對蘇的專案卡關，全程沒給一個建議，只問「你認為最重要的下一步是什麼？」「還有呢？」「你從中學到什麼？」，讓蘇自己決定直接找桑傑溝通。"
    },
    {
      id: "s07",
      slideNum: "Slide 07",
      bookTitle: "《高績效教練》",
      section: "Ch 6 覺察與責任雙開關",
      title: "全書內核「覺察 × 責任」雙開關：從「彼得找梯子」與「喬治娜備忘錄」看治本之道",
      url: "book-coaching-for-performance.html#slide-7",
      keywords: ["覺察", "責任", "雙開關", "彼得找梯子", "喬治娜", "演講緊張", "有選擇才有責任", "治標vs治本"],
      excerpt: "命令彼得去拿梯子，梯子不在他就空手回來；問誰自願去拿梯子，他找不到也會去借。喬治娜不發備忘錄只是表面問題，抗拒心態才是必須教練的根本原因。"
    },
    {
      id: "s08",
      slideNum: "Slide 08",
      bookTitle: "《高績效教練》",
      section: "Ch 7–8 提問與傾聽",
      title: "教練的兩項對話基本功：十大強有力提問原則（禁用為什麼）與三層深度傾聽技巧",
      url: "book-coaching-for-performance.html#slide-8",
      keywords: ["強有力提問", "禁用為什麼", "開放式問題", "由廣入深漏斗", "三層傾聽", "沉默3秒", "反映感受"],
      excerpt: "把充滿審判感的「為什麼沒做好？」全面改為「發生了什麼？缺了什麼？」。搭配提問後沉默3秒留白、複述、總結與反映感受，讓部屬大腦進入深度思考。"
    },
    {
      id: "s09",
      slideNum: "Slide 09",
      bookTitle: "《高績效教練》",
      section: "Ch 9 GROW 總覽與上海專案",
      title: "GROW 四步對話架構與「上海專案小張與小王不出活」案例：沒有覺察的 GROW 只是審訊",
      url: "book-coaching-for-performance.html#slide-9",
      keywords: ["GROW模型", "上海專案", "小張與小王", "老李偏見", "最晚進組", "偽裝成提問的審訊"],
      excerpt: "主管原想開除上海專案不出活的小張與小王，經GROW四步追問現狀，才驚覺小王做過更難的北京專案，真因是主管聽信老李偏見且兩人最晚進組缺乏支援。"
    },
    {
      id: "s10",
      slideNum: "Slide 10",
      bookTitle: "《高績效教練》",
      section: "Ch 10–11 G 目標與 R 現狀",
      title: "G 目標（林·戴維斯跳遠啟示）與 R 現狀（山姆硬扛案例）：鎖定 100% 可控表現並區分事實與觀點",
      url: "book-coaching-for-performance.html#slide-10",
      keywords: ["終極目標", "表現目標", "林戴維斯", "跳遠冠軍", "SMART", "PURE", "CLEAR", "山姆案例", "事實與觀點"],
      excerpt: "1968奧運跳遠冠軍林·戴維斯因只盯金牌（不可控終極目標）而忽略起跳動作（100%可控表現目標）落敗。山姆案例證明靠個人加班硬扛必潰敗，須轉向跨部門協作。"
    },
    {
      id: "s11",
      slideNum: "Slide 11",
      bookTitle: "《高績效教練》",
      section: "Ch 12–13 O 選擇與 W 意願",
      title: "O 選擇（米歇爾與九點練習）與 W 意願（1-10分測試 ＋ Level E 自我評估回饋）：確保 90% 執行率",
      url: "book-coaching-for-performance.html#slide-11",
      keywords: ["米歇爾", "九點練習", "還有呢", "請求許可", "1到10分意願測試", "Level E回饋", "70:20:10", "山姆發郵件"],
      excerpt: "連問「還能怎樣？」逼出5個以上破框選項；行動結束必測1–10分意願（低於8分當場調整）；事後以Level E三問讓部屬自我評估，彻底取代空洞誇獎與指責。"
    },
    {
      id: "s12",
      slideNum: "Slide 12",
      bookTitle: "《高績效教練》",
      section: "Ch 14–15 意義教練與一對一教練",
      title: "意義教練（80歲回望練習）與正式 1-on-1「三重角色衝突」解方：簽訂有意識的工作協議",
      url: "book-coaching-for-performance.html#slide-12",
      keywords: ["意義與目的", "80歲回望", "受害者轉創造者", "三重角色衝突", "發起人領導者教練", "有意識的工作協議"],
      excerpt: "永遠不要問部屬你自己還沒回答過的意義問題。中小企業高管身兼發起人（老闆）、領導者與教練三重角色，必須先建立明確的「工作協議」才能創造心理安全。"
    },
    {
      id: "s13",
      slideNum: "Slide 13",
      bookTitle: "《高績效教練》",
      section: "Ch 16 團隊發展四階段",
      title: "舒茨（Schutz）團隊發展四階段與九大實踐：帶領團隊從「假和諧／內鬥」躍升至「高績效共創」",
      url: "book-coaching-for-performance.html#slide-13",
      keywords: ["舒茨團隊四階段", "包融", "主張", "合作", "共創", "九項團隊實踐", "團隊教練"],
      excerpt: "團隊發展必經：1.包融（Inclusion，建立歸屬）➔ 2.主張（Assertion，敢於表達異議）➔ 3.合作（Cooperation，跨界互助）➔ 4.共創（Co-creation，1+1>2）。"
    },
    {
      id: "s14",
      slideNum: "Slide 14",
      bookTitle: "《高績效教練》",
      section: "Ch 17–18 精實生產與安全教練",
      title: "精實 PDCA 教練（愛麗絲與吉姆案例）與安全教練：消除模糊詞彙，把「我必須」轉為「我選擇」",
      url: "book-coaching-for-performance.html#slide-14",
      keywords: ["精實生產", "Lean", "PDCA", "愛麗絲與吉姆", "安全績效教練", "我必須轉為我選擇", "量化時間"],
      excerpt: "吉姆用提問幫愛麗絲把模糊的「需要盡可能多的資訊」收斂為「提前2週拿到排程表」。安全教練讓員工自己評估風險後果，從被動合規轉為主動守護。"
    },
    {
      id: "s15",
      slideNum: "Slide 15",
      bookTitle: "《高績效教練》",
      section: "Ch 19–20 投資回報率與教練文化",
      title: "衡量教練 800% ROI（營運經理肯 £7.8萬案例）與澳紐銀行文化變革：用「原則」取代僵化「規則」",
      url: "book-coaching-for-performance.html#slide-15",
      keywords: ["800% ROI", "營運經理肯", "7.8萬英鎊", "三步基線追蹤", "交易型變革", "澳紐銀行", "原則取代規則"],
      excerpt: "營運經理肯3個月內領導力從1分升至9分，創造7.8萬英鎊淨回報。打造教練文化必須「硬體制度＋軟體行為」同步變革，並像澳紐銀行一樣以指導原則取代繁瑣規則。"
    },
    {
      id: "s16",
      slideNum: "Slide 16",
      bookTitle: "《高績效教練》",
      section: "Ch 21–23 領導者自我超越",
      title: "領導者的高階內功：「不刻意嘗試（1-10分無批判自評）」、阿薩吉奧利次人格整合與「叫醒牆」",
      url: "book-coaching-for-performance.html#slide-16",
      keywords: ["不刻意嘗試", "1到10分自評", "卡尼曼", "心理綜合法", "阿薩吉奧利", "次人格", "叫醒牆", "超個人教練"],
      excerpt: "用1–10分不批判的自我覺察直接跳過「有意識無能力」的痛苦掙扎；透過心理綜合法認出內在衝突的「次人格」；在撞上事業「叫醒牆」時轉向服務更大整體的公僕領導。"
    },
    {
      id: "s17",
      slideNum: "Slide 17",
      bookTitle: "《高績效教練》",
      section: "附錄 2 工具箱",
      title: "原書附錄 2「PCI 七大教練問題工具箱」實戰速查卡：高階經理人案頭必備提問腳本",
      url: "book-coaching-for-performance.html#slide-17",
      keywords: ["PCI工具箱", "七大問題工具箱", "自我教練", "工作協議", "請求許可", "十大強有力問題", "後續跟進三情境"],
      excerpt: "完整收錄原書P.256-273七大工具：1.自我教練、2.工作協議、3.請求許可、4.十大強有力問題、5.GROW全階段題庫、6.後續跟進三情境（成功/未達標/沒做）、7.GROW回饋。"
    },
    {
      id: "s18",
      slideNum: "Slide 18",
      bookTitle: "《高績效教練》",
      section: "逐章行動與 KPI 總表",
      title: "全書 23 章「本週／本月／本季」行動方案與量化成功指標（KPI）全景作戰表",
      url: "book-coaching-for-performance.html#slide-18",
      keywords: ["23章行動方案", "KPI指標", "本週本月本季", "量化追蹤", "行動藍圖"],
      excerpt: "濃縮《逐章分析與行動方案.md》全書23章之具體落地行動與量化KPI：替部屬決策次數降50%、請示自備方案達80%、開放式提問>70%、行動7天執行率達90%。"
    },
    {
      id: "s19",
      slideNum: "Slide 19",
      bookTitle: "《高績效教練》×《把熱愛變成事業》",
      section: "跨書策略對照",
      title: "跨書高階決策矩陣（惠特默 × 凱莉彭）：掌握「對內帶人要慢 vs. 對外測市場要快」的黃金分野",
      url: "book-coaching-for-performance.html#slide-19",
      keywords: ["把熱愛變成事業", "凱莉彭", "帶人要慢", "測市場要快", "7天最小測試", "媽媽測試", "專家傲慢", "跨書比較"],
      excerpt: "高階經理人與創業者最易混淆速度感：對內培養部屬必須「慢下來提問」以建立長期責任感；對外驗證商業模式必須「快起來做7天最小測試」。兩者共同點是收起專家傲慢。"
    },
    {
      id: "s20",
      slideNum: "Slide 20",
      bookTitle: "《高績效教練》",
      section: "組織診斷與 90 天路線圖",
      title: "破解「90項行動過載」：高階經理人「五問組織現況診斷器」與 90 天精準落地路線圖",
      url: "book-coaching-for-performance.html#slide-20",
      keywords: ["五問組織診斷", "行動過載", "把握度自檢", "四大缺口", "90天路線圖", "優先行動篩選"],
      excerpt: "面對全書23章90項行動，透過5個組織診斷問題（團隊規模、救火時間佔比、績效曲線階段、現有KPI制度、領導者個人狀態），每季精準鎖定3–5項最高槓桿行動。"
    }
  ]
};
