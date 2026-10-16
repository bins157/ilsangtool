(function () {
  var TOOLS = [
    { id: "home", name: "홈", ico: "⌂", blurb: "32가지 필수 일상 도구", title: "일상툴 - 그림판, 사과게임, 계산기, 단위변환, BMI, 환율, 연봉실수령, PDF변환, 환갑칠순 등 32가지 생활 도구", desc: "그림판, 사과게임(과일박스), 계산기, 단위변환, BMI, 환율, 연봉 실수령, PDF 변환, 환갑·칠순·팔순, 온라인 메모장, 주휴·실업급여, 부가세, 더치페이, QR코드 등 32가지 필수 일상 웹 도구. 회원가입 없이 브라우저에서 즉시 무료 사용." },
    { id: "calc", name: "공학용계산기", ico: "fx", blurb: "삼각함수, 로그, 제곱근", title: "공학용계산기 sin cos log - 일상툴", desc: "삼각함수, 로그, 제곱근, 거듭제곱을 지원하는 공학용 계산기입니다." },
    { id: "unit", name: "단위 변환", ico: "↔", blurb: "길이, 무게, 온도, 평, 데이터", title: "단위 변환기 cm inch kg lb 섭씨 화씨 - 일상툴", desc: "길이, 무게, 온도, 넓이(평), 부피, 데이터 단위를 바로 변환합니다." },
    { id: "bmi", name: "BMI 계산", ico: "⚖", blurb: "아시아-태평양 기준 체질량", title: "BMI 계산기 - 키 몸무게 정상범위 - 일상툴", desc: "키와 몸무게로 BMI와 정상 체중 범위를 계산합니다. 아시아-태평양 기준." },
    { id: "fx", name: "환율 환산", ico: "$", blurb: "원 달러 엔 유로 위안", title: "환율 계산기 원달러 - 일상툴", desc: "KRW, USD, JPY, EUR, CNY 참고 환율로 금액을 환산합니다." },
    { id: "salary", name: "연봉 실수령", ico: "₩", blurb: "4대보험 단순 추정", title: "연봉 실수령액 계산기 - 일상툴", desc: "세전 연봉으로 월 실수령액을 추정합니다. 4대보험·소득세 참고값." },
    { id: "tax", name: "연말정산", ico: "정산", blurb: "환급·추가납부 간단 추정", title: "연말정산 계산기 환급 - 일상툴", desc: "연봉, 부양가족, 납부 소득세로 환급 또는 추가납부를 추정하고 환급 극대화 전략을 안내합니다." },
    { id: "vat", name: "부가세 계산", ico: "10%", blurb: "한국 부가세 10% 포함/별도", title: "부가세 계산기 10% - 일상툴", desc: "대한민국 부가가치세 10% 기준 공급가액, 세액, 합계를 계산합니다." },
    { id: "split", name: "더치페이", ico: "1/N", blurb: "모임비 인원 나눔", title: "더치페이 계산기 1/N - 일상툴", desc: "총금액과 인원, 팁으로 1인당 금액을 나눕니다." },
    { id: "calorie", name: "칼로리 계산", ico: "kcal", blurb: "BMR·유지 칼로리", title: "칼로리 계산기 BMR - 일상툴", desc: "Mifflin-St Jeor로 기초대사량과 유지 칼로리를 추정합니다." },
    { id: "qr", name: "QR코드 생성", ico: "▣", blurb: "URL·텍스트 QR 이미지", title: "QR코드 생성기 - 일상툴", desc: "URL이나 텍스트를 QR 코드 이미지로 만듭니다." },
    { id: "counter", name: "글자수 세기", ico: "¶", blurb: "공백 포함/제외, 읽기시간", title: "글자수 세기 공백 포함 제외 - 일상툴", desc: "공백 포함·제외 글자수, 단어 수, 예상 읽기 시간을 셉니다." },
    { id: "age", name: "나이 계산", ico: "🎂", blurb: "만나이, 세는나이", title: "만나이 계산기 세는나이 - 일상툴", desc: "생년월일로 만나이, 세는나이, 살아온 날, 다음 생일을 계산합니다." },
    { id: "hwangap", name: "환갑·칠순·팔순 계산", ico: "壽", blurb: "환갑, 칠순, 팔순 연도와 날짜", title: "환갑 칠순 팔순 계산기 - 일상툴", desc: "생년월일로 환갑, 칠순, 팔순, 진갑, 희수, 구순 연도와 남은 날짜를 계산합니다." },
    { id: "notepad", name: "온라인 메모장", ico: "메모", blurb: "줄노트 · 모눈종이 · 포스트잇", title: "온라인 메모장 - 줄노트 모눈종이 포스트잇 메모 - 일상툴", desc: "RapidTables 스타일의 감성 온라인 메모장. 줄노트, 모눈종이(그리드), 포스트잇(무지) 3가지 타입 지원, 실시간 자동 저장 및 텍스트 다운로드/인쇄 지원." },
    { id: "dday", name: "디데이", ico: "📅", blurb: "기념일까지 남은 날", title: "디데이 계산기 - 일상툴", desc: "시험, 여행, 기념일까지 남은 날을 D-day로 계산합니다." },
    { id: "loan", name: "대출 이자", ico: "%", blurb: "원리금균등 월 납입", title: "대출 이자 계산기 원리금균등 - 일상툴", desc: "원리금균등 상환 월 납입액과 총이자를 계산합니다." },
    { id: "compound", name: "복리이자", ico: "복리", blurb: "예금·적금 만기 금액", title: "복리이자 계산기 예금 적금 - 일상툴", desc: "원금, 연이율, 복리 주기, 월 적립으로 만기 금액과 이자를 계산합니다." },
    { id: "percent", name: "퍼센트 / 할인", ico: "%", blurb: "할인가, 비율, 증감률", title: "퍼센트 할인 계산기 - 일상툴", desc: "할인율, 할인가, 비율, 증감률을 계산합니다." },
    { id: "password", name: "비밀번호 생성", ico: "#", blurb: "안전한 랜덤 비밀번호", title: "비밀번호 생성기 - 일상툴", desc: "암호학 난수로 랜덤 비밀번호를 생성합니다." },
    { id: "alarm", name: "알람 / 타이머", ico: "⏱", blurb: "지정 시간 브라우저 알림", title: "알람 타이머 - 일상툴", desc: "지정한 시각에 브라우저 알림과 소리를 울립니다." },
    { id: "worldclock", name: "세계 시계", ico: "🌐", blurb: "서울 도쿄 뉴욕 현재시각", title: "세계 시계 시차 - 일상툴", desc: "서울, 도쿄, 뉴욕, 런던 등 주요 도시 현재 시각입니다." },
    { id: "color", name: "컬러 피커", ico: "◆", blurb: "HEX RGB HSL 변환", title: "컬러 피커 HEX RGB - 일상툴", desc: "색을 고르고 HEX, RGB, HSL 값을 변환합니다." },
    { id: "preg", name: "임신 주수", ico: "♥", blurb: "LMP 기준 예정일", title: "임신 주수 계산기 예정일 - 일상툴", desc: "마지막 생리일 기준 임신 주수와 예정일을 계산합니다. 의료 진단이 아닙니다." },
    { id: "stopwatch", name: "스톱워치", ico: "▶", blurb: "랩 기록 스톱워치", title: "스톱워치 - 일상툴", desc: "랩 기록이 가능한 웹 스톱워치입니다." },
    { id: "datecalc", name: "날짜 계산", ico: "↔", blurb: "두 날짜 사이 일수", title: "날짜 계산기 며칠 후 - 일상툴", desc: "두 날짜 사이 일수와 N일 후 날짜를 계산합니다." },
    { id: "postcode", name: "우편번호 검색", ico: "우편", blurb: "도로명·지번 우편번호", title: "우편번호 검색기 도로명 주소 - 일상툴", desc: "도로명 또는 지번으로 우편번호와 주소를 찾습니다. 다음 우편번호 서비스 사용." },
    { id: "enaddr", name: "영문 주소 변환", ico: "EN", blurb: "한글 주소를 영문으로", title: "영문 주소 변환기 한글주소 로마자 - 일상툴", desc: "한글 도로명·지번 주소를 영문으로 변환합니다. 해외 배송·입국신고서용." },
    { id: "pdf", name: "PDF 변환기", ico: "PDF", blurb: "이미지↔PDF, 합치기, 분할, 회전, 압축", title: "PDF 변환기 - 이미지 PDF 변환, 합치기, 분할, 회전, 압축 - 일상툴", desc: "Smallpdf 스타일의 무료 온라인 PDF 솔루션. 이미지 to PDF, PDF to 이미지(JPG/PNG), PDF 병합(합치기), 분할/추출, 페이지 회전, 용량 압축, 텍스트 추출을 100% 브라우저 메모리 연산으로 안전하고 빠르게 제공합니다." },
    { id: "apple", name: "사과게임", ico: "🍎", blurb: "합이 10이 되는 사과를 드래그!", title: "사과게임 (과일박스 게임) - 합이 10이 되는 상자 만들기 - 일상툴", desc: "인기 웹 두뇌 퍼즐 사과게임(Fruit Box Game). 17x10 격자에서 직사각형으로 드래그하여 합이 10이 되는 사과들을 수확하세요! 120초 타임어택과 무제한 연습 모드, 힌트 기능, 최고 기록 저장 지원." },
    { id: "paint", name: "그림판", ico: "🎨", blurb: "윈도우 스타일 그림판 · 에셋 보드 · 공유", title: "그림판 - 윈도우 스타일 웹 그림판, 복사 에셋 보드, 텍스트 입력, 이미지 다운로드 & 공유 - 일상툴", desc: "윈도우 기본 그림판 스타일의 무료 온라인 그림판 도구. 연필, 브러시, 지우개, 도형, 페인트통, 텍스트 도구 지원. 복사한 이미지 자료(Ctrl+V)를 즉시 보관하는 우측 에셋 보드와 캔버스 스탬프 기능, 고화질 이미지 다운로드 및 원클릭 공유 기능을 제공합니다." },
    { id: "board", name: "도구 요청", ico: "글", blurb: "만들고 싶은 도구를 남기세요", title: "도구 요청 게시판 - 일상툴", desc: "만들고 싶은 계산기나 웹 도구를 요청하는 게시판입니다." }
  ];

  var pageTitle = document.getElementById("pageTitle");
  var crumb = document.getElementById("crumb");
  var toastEl = document.getElementById("toast");
  var descMeta = document.querySelector('meta[name="description"]');
  var alarmTarget = null;
  var audioCtx = null;
  var navButtons = Array.prototype.slice.call(document.querySelectorAll(".nav button"));

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.style.display = "block";
    setTimeout(function () { toastEl.style.display = "none"; }, 1800);
  }

  function setSeo(tool) {
    document.title = tool.title || (tool.name + " - 일상툴");
    if (descMeta) descMeta.setAttribute("content", tool.desc || "");
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", tool.id === "home" ? "https://ilsangtool.kr/" : "https://ilsangtool.kr/#" + tool.id);
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", tool.title || (tool.name + " - 일상툴"));
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", tool.desc || "");
    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("href", tool.id === "home" ? "https://ilsangtool.kr/" : "https://ilsangtool.kr/#" + tool.id);
  }

  var drawer = document.getElementById("mobileDrawer");
  var drawerBackdrop = document.getElementById("drawerBackdrop");
  var menuBtn = document.getElementById("mobileMenuBtn");
  var dockMenuTrigger = document.getElementById("dockMenuTrigger");
  var drawerClose = document.getElementById("drawerClose");
  var mobileSearchBtn = document.getElementById("mobileSearchBtn");
  var drawerSearch = document.getElementById("drawerSearch");

  function openDrawer() {
    if (drawer) drawer.classList.add("open");
    if (drawerBackdrop) drawerBackdrop.classList.add("open");
  }
  function closeDrawer() {
    if (drawer) drawer.classList.remove("open");
    if (drawerBackdrop) drawerBackdrop.classList.remove("open");
  }
  if (menuBtn) menuBtn.addEventListener("click", openDrawer);
  if (dockMenuTrigger) dockMenuTrigger.addEventListener("click", openDrawer);
  if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);
  if (mobileSearchBtn) {
    mobileSearchBtn.addEventListener("click", function () {
      openDrawer();
      if (drawerSearch) setTimeout(function () { drawerSearch.focus(); }, 150);
    });
  }
  var activeDrawerCat = "all";
  function filterDrawerTools() {
    var q = drawerSearch ? drawerSearch.value.trim().toLowerCase() : "";
    document.querySelectorAll(".drawer-tools-wrap button").forEach(function (btn) {
      var cat = btn.dataset.cat || "util";
      var catMatch = (activeDrawerCat === "all" || cat === activeDrawerCat);
      var name = (btn.textContent || "").toLowerCase();
      var id = (btn.dataset.id || "").toLowerCase();
      var qMatch = !q || name.indexOf(q) !== -1 || id.indexOf(q) !== -1;
      btn.style.display = (catMatch && qMatch) ? "" : "none";
    });
  }
  if (drawerSearch) {
    drawerSearch.addEventListener("input", filterDrawerTools);
  }
  document.querySelectorAll(".drawer-cat-pill").forEach(function (pill) {
    pill.addEventListener("click", function () {
      document.querySelectorAll(".drawer-cat-pill").forEach(function (p) { p.classList.remove("active"); });
      pill.classList.add("active");
      activeDrawerCat = pill.dataset.cat || "all";
      filterDrawerTools();
    });
  });

  function show(id) {
    document.querySelectorAll(".view").forEach(function (el) {
      el.classList.toggle("hidden", el.id !== id);
    });
    document.querySelectorAll(".nav button, .mobile-nav button, .drawer-tools-wrap button, .dock-btn[data-id]").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.id === id);
    });
    var tool = TOOLS.find(function (t) { return t.id === id; }) || TOOLS[0];
    pageTitle.textContent = tool.name;
    crumb.innerHTML = id === "home"
      ? '<span class="live-dot" aria-hidden="true"></span>홈'
      : '<span class="live-dot" aria-hidden="true"></span>홈 / ' + tool.name;
    setSeo(tool);
    if (history.replaceState) history.replaceState(null, "", id === "home" ? location.pathname : "#" + id);
    else location.hash = id === "home" ? "" : id;
    if (id === "postcode") initPostcode();
    if (id === "apple" && window.onShowAppleGame) window.onShowAppleGame();
    else if (id !== "apple" && window.onHideAppleGame) window.onHideAppleGame();
    if (id === "paint" && window.onShowPaintTool) window.onShowPaintTool();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeDrawer();
    setTimeout(function () {
      renderVisibleAds(id);
    }, 60);
  }

  document.querySelectorAll(".nav button, .mobile-nav button, .drawer-tools-wrap button, .dock-btn[data-id], .brand[data-id], .mobile-brand[data-id]").forEach(function (btn) {
    btn.addEventListener("click", function () { show(btn.dataset.id); });
  });
  document.querySelectorAll(".tool-card[data-tool]").forEach(function (card) {
    card.addEventListener("click", function () { show(card.getAttribute("data-tool")); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter") show(card.getAttribute("data-tool"));
    });
  });

  document.getElementById("navSearch").addEventListener("input", function () {
    var q = this.value.trim().toLowerCase();
    navButtons.forEach(function (btn) {
      var name = (btn.textContent || "").toLowerCase();
      var hit = !q || name.indexOf(q) !== -1 || (btn.dataset.id || "").indexOf(q) !== -1;
      btn.style.display = hit ? "" : "none";
    });
  });

  var categoryTabs = document.getElementById("categoryTabs");
  if (categoryTabs) {
    categoryTabs.querySelectorAll(".cat-chip").forEach(function (chip) {
      chip.addEventListener("click", function () {
        categoryTabs.querySelectorAll(".cat-chip").forEach(function (c) {
          c.classList.remove("active");
          c.setAttribute("aria-selected", "false");
        });
        chip.classList.add("active");
        chip.setAttribute("aria-selected", "true");
        var cat = chip.dataset.cat;
        document.querySelectorAll("#homeGrid .tool-card").forEach(function (card) {
          if (cat === "all" || card.dataset.cat === cat) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  function tickClock() {
    var now = new Date();
    document.getElementById("liveTime").textContent = now.toLocaleTimeString("ko-KR");
    document.getElementById("liveDate").textContent = now.toLocaleDateString("ko-KR", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });
    renderWorld();
    checkAlarm(now);
  }

  function beep() {
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      var o = audioCtx.createOscillator();
      var g = audioCtx.createGain();
      o.type = "sine";
      o.frequency.value = 880;
      g.gain.value = 0.08;
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      setTimeout(function () { o.stop(); }, 700);
    } catch (e) {}
  }

  function checkAlarm(now) {
    if (!alarmTarget) return;
    if (now >= alarmTarget) {
      var note = document.getElementById("alarmNote").value || "설정한 시간입니다";
      document.getElementById("alarmBanner").style.display = "flex";
      document.getElementById("alarmText").textContent = "알람: " + note;
      beep();
      if (window.Notification && Notification.permission === "granted") {
        new Notification("일상툴 알람", { body: note });
      }
      alarmTarget = null;
      localStorage.removeItem("dailytool-alarm");
      document.getElementById("alarmStatus").textContent = "알람이 울렸습니다.";
    }
  }

  document.getElementById("setAlarm").onclick = function () {
    var val = document.getElementById("alarmTime").value;
    if (!val) return toast("시간을 선택하세요");
    var parts = val.split(":");
    var d = new Date();
    d.setHours(+parts[0], +parts[1], 0, 0);
    if (d <= new Date()) d.setDate(d.getDate() + 1);
    alarmTarget = d;
    localStorage.setItem("dailytool-alarm", String(d.getTime()));
    if (window.Notification && Notification.permission !== "granted") Notification.requestPermission();
    document.getElementById("alarmStatus").textContent = "알람 예정: " + d.toLocaleString("ko-KR");
    toast("알람이 설정되었습니다");
  };
  document.getElementById("clearAlarm").onclick = function () {
    alarmTarget = null;
    localStorage.removeItem("dailytool-alarm");
    document.getElementById("alarmStatus").textContent = "설정된 알람이 없습니다.";
  };
  document.getElementById("stopAlarm").onclick = function () {
    document.getElementById("alarmBanner").style.display = "none";
  };
  var savedAlarm = localStorage.getItem("dailytool-alarm");
  if (savedAlarm) {
    alarmTarget = new Date(+savedAlarm);
    document.getElementById("alarmStatus").textContent = "알람 예정: " + alarmTarget.toLocaleString("ko-KR");
  }

  var UNITS = {
    길이: { cm: 0.01, m: 1, km: 1000, inch: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344 },
    무게: { g: 0.001, kg: 1, lb: 0.453592, oz: 0.0283495, t: 1000 },
    온도: { C: 1, F: 1, K: 1 },
    넓이: { "m2": 1, "km2": 1e6, "ft2": 0.092903, 평: 3.305785 },
    부피: { ml: 0.001, L: 1, gal: 3.78541, cup: 0.24 },
    데이터: { B: 1, KB: 1024, MB: 1048576, GB: 1073741824, TB: 1099511627776 }
  };
  var unitCat = "길이";

  function fillUnits() {
    var map = UNITS[unitCat];
    var keys = Object.keys(map);
    var from = document.getElementById("unitFrom");
    var to = document.getElementById("unitTo");
    from.innerHTML = to.innerHTML = keys.map(function (k) {
      return "<option value=\"" + k + "\">" + k + "</option>";
    }).join("");
    from.selectedIndex = 0;
    to.selectedIndex = Math.min(1, keys.length - 1);
    convertUnit();
  }
  function convertTemp(v, from, to) {
    var c = v;
    if (from === "F") c = (v - 32) * 5 / 9;
    if (from === "K") c = v - 273.15;
    if (to === "C") return c;
    if (to === "F") return c * 9 / 5 + 32;
    return c + 273.15;
  }
  function convertUnit() {
    var v = parseFloat(document.getElementById("unitValue").value);
    var from = document.getElementById("unitFrom").value;
    var to = document.getElementById("unitTo").value;
    if (isNaN(v)) { document.getElementById("unitOut").textContent = "-"; return; }
    var out = unitCat === "온도" ? convertTemp(v, from, to) : (v * UNITS[unitCat][from]) / UNITS[unitCat][to];
    document.getElementById("unitOut").textContent = Number(out.toPrecision(8)) + " " + to;
    document.getElementById("unitHint").textContent = v + " " + from + " → " + to;
  }
  var tabs = document.getElementById("unitTabs");
  Object.keys(UNITS).forEach(function (cat, i) {
    var c = document.createElement("button");
    c.type = "button";
    c.className = "chip" + (i === 0 ? " on" : "");
    c.textContent = cat;
    c.onclick = function () {
      unitCat = cat;
      tabs.querySelectorAll(".chip").forEach(function (x) { x.classList.remove("on"); });
      c.classList.add("on");
      fillUnits();
    };
    tabs.appendChild(c);
  });
  ["unitValue", "unitFrom", "unitTo"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", convertUnit);
    document.getElementById(id).addEventListener("change", convertUnit);
  });
  fillUnits();

  function calcBmi() {
    var h = parseFloat(document.getElementById("bmiH").value) / 100;
    var w = parseFloat(document.getElementById("bmiW").value);
    if (!h || !w) return;
    var bmi = w / (h * h);
    var cat = bmi < 18.5 ? "저체중" : bmi < 23 ? "정상" : bmi < 25 ? "과체중" : bmi < 30 ? "비만" : "고도비만";
    var low = 18.5 * h * h;
    var high = 22.9 * h * h;
    document.getElementById("bmiVal").textContent = bmi.toFixed(1);
    document.getElementById("bmiCat").textContent = cat;
    document.getElementById("bmiRange").textContent = low.toFixed(1) + " ~ " + high.toFixed(1) + " kg";
    var tip = "";
    if (bmi >= 18.5 && bmi < 23) {
      tip = "이미 정상 범위입니다. 유지를 위해 하루 7천~1만 보 걷기, 또는 빠르게 걷기 30분이면 충분합니다.";
    } else if (bmi >= 23) {
      var lose = Math.max(0.5, w - high);
      var weeks = Math.max(4, Math.round(lose / 0.4));
      var daily = Math.round((lose * 7700) / (weeks * 7));
      var walk = Math.max(30, Math.round(daily / 4.5));
      var jog = Math.max(15, Math.round(daily / 10));
      var cycle = Math.max(20, Math.round(daily / 8));
      tip = "정상 상한(" + high.toFixed(1) + "kg)까지 약 " + lose.toFixed(1) + "kg입니다. " + weeks + "주 목표면 하루 약 " + daily + "kcal를 더 쓰면 됩니다. 예: 빠르게 걷기 " + walk + "분, 가벼운 조깅 " + jog + "분, 자전거 " + cycle + "분 중 하나. 의료 조언이 아닙니다.";
    } else {
      var gain = Math.max(0.5, low - w);
      tip = "정상 하한(" + low.toFixed(1) + "kg)까지 약 " + gain.toFixed(1) + "kg입니다. 근력 운동 주 3회와 식사량 소폭 증가가 도움이 됩니다. 격한 유산소보다 걷기 20~30분 정도가 무난합니다.";
    }
    document.getElementById("bmiTip").textContent = tip;
  }
  ["bmiH", "bmiW"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcBmi);
  });
  calcBmi();

  function calcAge() {
    var v = document.getElementById("birthDate").value;
    if (!v) return;
    var b = new Date(v);
    var n = new Date();
    var years = n.getFullYear() - b.getFullYear();
    var md = n.getMonth() - b.getMonth();
    if (md < 0 || (md === 0 && n.getDate() < b.getDate())) years--;
    var days = Math.floor((n - b) / 86400000);
    var next = new Date(n.getFullYear(), b.getMonth(), b.getDate());
    if (next < n) next.setFullYear(n.getFullYear() + 1);
    var left = Math.ceil((next - n) / 86400000);
    document.getElementById("ageInt").textContent = years + "세";
    document.getElementById("ageKor").textContent = (n.getFullYear() - b.getFullYear() + 1) + "세";
    document.getElementById("ageDays").textContent = days.toLocaleString("ko-KR") + "일";
    document.getElementById("ageNext").textContent = left + "일";
  }
  document.getElementById("birthDate").valueAsDate = new Date(1995, 0, 1);
  document.getElementById("birthDate").addEventListener("input", calcAge);
  calcAge();

  var STEMS = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
  var BRANCHES = [
    { name: "자", animal: "쥐" },
    { name: "축", animal: "소" },
    { name: "인", animal: "호랑이" },
    { name: "묘", animal: "토끼" },
    { name: "진", animal: "용" },
    { name: "사", animal: "뱀" },
    { name: "오", animal: "말" },
    { name: "미", animal: "양" },
    { name: "신", animal: "원숭이" },
    { name: "유", animal: "닭" },
    { name: "술", animal: "개" },
    { name: "해", animal: "돼지" }
  ];

  function getGanji(year) {
    var s = (year - 4) % 10;
    if (s < 0) s += 10;
    var b = (year - 4) % 12;
    if (b < 0) b += 12;
    return STEMS[s] + BRANCHES[b].name + "년 (" + BRANCHES[b].animal + "띠)";
  }

  function getLongevityMilestones(isKorean) {
    if (isKorean) {
      return [
        { title: "환갑 (회갑 · 回甲)", shortName: "환갑", ageMan: 60, ageKor: 61, addYears: 60, desc: "만 60세 생신, 태어난 간지가 다시 돌아옴" },
        { title: "진갑 (進甲)", shortName: "진갑", ageMan: 61, ageKor: 62, addYears: 61, desc: "환갑 다음 해 (만 61세 생신)" },
        { title: "칠순 (고희 · 古稀)", shortName: "칠순", ageMan: 69, ageKor: 70, addYears: 69, desc: "세는나이 70세 (만 69세 생신, 인생칠십고래희)" },
        { title: "희수 (喜壽)", shortName: "희수", ageMan: 76, ageKor: 77, addYears: 76, desc: "세는나이 77세 (喜자의 초서체가 七十七)" },
        { title: "팔순 (산수 · 傘壽)", shortName: "팔순", ageMan: 79, ageKor: 80, addYears: 79, desc: "세는나이 80세 (만 79세 생신, 傘자의 약자가 八十)" },
        { title: "미수 (米壽)", shortName: "미수", ageMan: 87, ageKor: 88, addYears: 87, desc: "세는나이 88세 (米자를 풀면 八十八)" },
        { title: "구순 (졸수 · 卒壽)", shortName: "구순", ageMan: 89, ageKor: 90, addYears: 89, desc: "세는나이 90세 (만 89세 생신, 卒자의 약자가 九十)" },
        { title: "백수 (白壽)", shortName: "백수", ageMan: 98, ageKor: 99, addYears: 98, desc: "세는나이 99세 (百에서 一을 빼면 白)" },
        { title: "상수 (上壽)", shortName: "상수", ageMan: 99, ageKor: 100, addYears: 99, desc: "세는나이 100세 (사람의 최상급 장수 100세 축하)" }
      ];
    }
    return [
      { title: "환갑 (회갑 · 回甲)", shortName: "환갑", ageMan: 60, ageKor: 61, addYears: 60, desc: "만 60세 생신, 태어난 간지가 다시 돌아옴" },
      { title: "진갑 (進甲)", shortName: "진갑", ageMan: 61, ageKor: 62, addYears: 61, desc: "환갑 다음 해 (만 61세 생신)" },
      { title: "칠순 (고희 · 古稀)", shortName: "칠순", ageMan: 70, ageKor: 71, addYears: 70, desc: "만 70세 생신 (세는나이 71세)" },
      { title: "희수 (喜壽)", shortName: "희수", ageMan: 77, ageKor: 78, addYears: 77, desc: "만 77세 생신" },
      { title: "팔순 (산수 · 傘壽)", shortName: "팔순", ageMan: 80, ageKor: 81, addYears: 80, desc: "만 80세 생신 (세는나이 81세)" },
      { title: "미수 (米壽)", shortName: "미수", ageMan: 88, ageKor: 89, addYears: 88, desc: "만 88세 생신" },
      { title: "구순 (졸수 · 卒壽)", shortName: "구순", ageMan: 90, ageKor: 91, addYears: 90, desc: "만 90세 생신 (세는나이 91세)" },
      { title: "백수 (白壽)", shortName: "백수", ageMan: 99, ageKor: 100, addYears: 99, desc: "만 99세 생신" },
      { title: "상수 (上壽)", shortName: "상수", ageMan: 100, ageKor: 101, addYears: 100, desc: "만 100세 생신 축하" }
    ];
  }

  function calcHwangap() {
    var v = document.getElementById("hgBirth") ? document.getElementById("hgBirth").value : "";
    if (!v) return;
    var b = new Date(v);
    var now = new Date();
    var bYear = b.getFullYear();
    var bMonth = b.getMonth();
    var bDate = b.getDate();

    var curMan = now.getFullYear() - bYear;
    var md = now.getMonth() - bMonth;
    if (md < 0 || (md === 0 && now.getDate() < bDate)) curMan--;
    var curKor = now.getFullYear() - bYear + 1;

    var modeEl = document.getElementById("hgMode");
    var isKorean = !modeEl || modeEl.value !== "western";

    var zodiacEl = document.getElementById("hgZodiac");
    var ageIntEl = document.getElementById("hgAgeInt");
    var ageKorEl = document.getElementById("hgAgeKor");
    var nextEvEl = document.getElementById("hgNextEvent");
    if (zodiacEl) zodiacEl.textContent = getGanji(bYear);
    if (ageIntEl) ageIntEl.textContent = curMan + "세";
    if (ageKorEl) ageKorEl.textContent = curKor + "세";

    var badge60 = document.getElementById("hgBadge60");
    var badge70 = document.getElementById("hgBadge70");
    var badge80 = document.getElementById("hgBadge80");
    if (badge60) badge60.textContent = "세는나이 61세 · 만 60세";
    if (badge70) badge70.textContent = isKorean ? "세는나이 70세 · 만 69세" : "만 70세 · 세는나이 71세";
    if (badge80) badge80.textContent = isKorean ? "세는나이 80세 · 만 79세" : "만 80세 · 세는나이 81세";

    var milestonesData = [
      { key: "60", add: 60, name: "환갑" },
      { key: "70", add: isKorean ? 69 : 70, name: "칠순" },
      { key: "80", add: isKorean ? 79 : 80, name: "팔순" }
    ];

    var nextEventText = "-";
    var foundNext = false;
    var oneDay = 86400000;
    var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    milestonesData.forEach(function (m) {
      var targetYear = bYear + m.add;
      var targetDate = new Date(targetYear, bMonth, bDate);
      var yearEl = document.getElementById("hgYear" + m.key);
      var dateEl = document.getElementById("hgDate" + m.key);
      var statusEl = document.getElementById("hgStatus" + m.key);
      if (!yearEl || !dateEl || !statusEl) return;

      yearEl.textContent = targetYear + "년";
      dateEl.textContent = targetYear + "년 " + (bMonth + 1) + "월 " + bDate + "일";

      var startOfTarget = new Date(targetYear, bMonth, bDate);
      var diffDays = Math.round((startOfTarget - startOfToday) / oneDay);

      var statusText = "";
      var statusClass = "";

      if (now.getFullYear() === targetYear) {
        if (diffDays === 0) {
          statusText = "🎉 오늘이 " + m.name + " 당일입니다!";
          statusClass = "current";
        } else if (diffDays > 0) {
          statusText = "D-" + diffDays + "일 (올해 " + (bMonth + 1) + "월 " + bDate + "일)";
          statusClass = "current";
        } else {
          statusText = "올해 " + m.name + " 지남 (" + (bMonth + 1) + "월 " + bDate + "일)";
          statusClass = "passed";
        }
        if (!foundNext && diffDays >= 0) {
          nextEventText = m.name + " (" + (diffDays === 0 ? "오늘" : "D-" + diffDays) + ")";
          foundNext = true;
        }
      } else if (targetYear < now.getFullYear()) {
        var passedYears = now.getFullYear() - targetYear;
        statusText = passedYears + "년 전 지남 (" + targetYear + "년)";
        statusClass = "passed";
      } else {
        statusText = "D-" + diffDays + "일 남음 (" + (targetYear - now.getFullYear()) + "년 후)";
        statusClass = "upcoming";
        if (!foundNext) {
          nextEventText = m.name + " (" + targetYear + "년, D-" + diffDays + ")";
          foundNext = true;
        }
      }

      statusEl.textContent = statusText;
      statusEl.className = "hg-status " + statusClass;
    });

    if (nextEvEl) nextEvEl.textContent = nextEventText;

    var milestones = getLongevityMilestones(isKorean);
    var tbody = document.getElementById("hgTableBody");
    if (tbody) {
      tbody.innerHTML = milestones.map(function (lm) {
        var tYear = bYear + lm.addYears;
        var startOfTarget = new Date(tYear, bMonth, bDate);
        var diffDays = Math.round((startOfTarget - startOfToday) / oneDay);
        var dateStr = tYear + "년 " + (bMonth + 1) + "월 " + bDate + "일";

        var tagHtml = "";
        if (now.getFullYear() === tYear) {
          if (diffDays === 0) {
            tagHtml = '<span class="hg-tag current">오늘 당일!</span>';
          } else if (diffDays > 0) {
            tagHtml = '<span class="hg-tag current">올해 (D-' + diffDays + ')</span>';
          } else {
            tagHtml = '<span class="hg-tag passed">올해 지남</span>';
          }
        } else if (tYear < now.getFullYear()) {
          tagHtml = '<span class="hg-tag passed">' + (now.getFullYear() - tYear) + '년 전 지남</span>';
        } else {
          tagHtml = '<span class="hg-tag upcoming">D-' + diffDays + '일</span>';
        }

        var ageCol = isKorean
          ? "세는나이 " + lm.ageKor + "세 (만 " + lm.ageMan + "세)"
          : "만 " + lm.ageMan + "세 (세는나이 " + lm.ageKor + "세)";

        return "<tr>" +
          "<td><strong>" + lm.shortName + "</strong></td>" +
          "<td>" + lm.title + "</td>" +
          "<td>" + ageCol + "</td>" +
          "<td>" + tYear + "년</td>" +
          "<td>" + dateStr + "</td>" +
          "<td>" + tagHtml + "</td>" +
          "</tr>";
      }).join("");
    }
  }

  var hgBirthEl = document.getElementById("hgBirth");
  if (hgBirthEl) {
    hgBirthEl.value = "1964-08-15";
    hgBirthEl.addEventListener("input", calcHwangap);
    hgBirthEl.addEventListener("change", calcHwangap);
  }
  var hgModeEl = document.getElementById("hgMode");
  if (hgModeEl) {
    hgModeEl.addEventListener("change", calcHwangap);
  }
  var hgCopyBtn = document.getElementById("hgCopyBtn");
  if (hgCopyBtn) {
    hgCopyBtn.onclick = function () {
      var v = document.getElementById("hgBirth") ? document.getElementById("hgBirth").value : "";
      if (!v) return toast("생년월일을 입력해주세요.");
      var b = new Date(v);
      var bYear = b.getFullYear();
      var bMonth = b.getMonth() + 1;
      var bDate = b.getDate();
      var ganji = getGanji(bYear);

      var modeEl = document.getElementById("hgMode");
      var isKorean = !modeEl || modeEl.value !== "western";
      var modeTitle = isKorean ? "전통 세는나이 기준" : "만 나이 기준";
      var chilsunYear = bYear + (isKorean ? 69 : 70);
      var chilsunAge = isKorean ? "세는나이 70세 / 만 69세" : "만 70세 / 세는나이 71세";
      var palsunYear = bYear + (isKorean ? 79 : 80);
      var palsunAge = isKorean ? "세는나이 80세 / 만 79세" : "만 80세 / 세는나이 81세";
      var gusunYear = bYear + (isKorean ? 89 : 90);
      var gusunAge = isKorean ? "세는나이 90세 / 만 89세" : "만 90세 / 세는나이 91세";

      var text = "[부모님 환갑·칠순·팔순 일정 (" + modeTitle + ")]\n" +
        "생년월일: " + bYear + "년 " + bMonth + "월 " + bDate + "일 (" + ganji + ")\n" +
        "- 환갑 (회갑, 세는나이 61세/만 60세): " + (bYear + 60) + "년 " + bMonth + "월 " + bDate + "일\n" +
        "- 칠순 (고희, " + chilsunAge + "): " + chilsunYear + "년 " + bMonth + "월 " + bDate + "일\n" +
        "- 팔순 (산수, " + palsunAge + "): " + palsunYear + "년 " + bMonth + "월 " + bDate + "일\n" +
        "- 구순 (졸수, " + gusunAge + "): " + gusunYear + "년 " + bMonth + "월 " + bDate + "일\n" +
        "* 출처: 일상툴 (ilsangtool.kr/#hwangap)";

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          toast("환갑·칠순·팔순 일정이 복사되었습니다!");
        }).catch(function () {
          var ta = document.createElement("textarea");
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          toast("환갑·칠순·팔순 일정이 복사되었습니다!");
        });
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        toast("환갑·칠순·팔순 일정이 복사되었습니다!");
      }
    };
  }
  calcHwangap();

  // --- ONLINE NOTEPAD CONTROLLER (줄노트 · 모눈종이 · 포스트잇) ---
  (function initNotepad() {
    var npText = document.getElementById("npText");
    if (!npText) return;

    var npWrap = document.getElementById("notepadWrap");
    var npBinderLabel = document.getElementById("npBinderLabel");
    var npSaveStatus = document.getElementById("npSaveStatus");
    var npSaveText = document.getElementById("npSaveText");

    var npCharCount = document.getElementById("npCharCount");
    var npCharNoSpace = document.getElementById("npCharNoSpace");
    var npWordCount = document.getElementById("npWordCount");
    var npLineCount = document.getElementById("npLineCount");
    var npCursorPos = document.getElementById("npCursorPos");

    var npZoomIn = document.getElementById("npZoomIn");
    var npZoomOut = document.getElementById("npZoomOut");
    var npSizeVal = document.getElementById("npSizeVal");
    var npFontSelect = document.getElementById("npFontSelect");

    var npNewBtn = document.getElementById("npNewBtn");
    var npOpenBtn = document.getElementById("npOpenBtn");
    var npFileInput = document.getElementById("npFileInput");
    var npDownloadBtn = document.getElementById("npDownloadBtn");
    var npCopyBtn = document.getElementById("npCopyBtn");
    var npPrintBtn = document.getElementById("npPrintBtn");

    var typeButtons = Array.prototype.slice.call(document.querySelectorAll(".np-type-btn"));
    var themeButtons = Array.prototype.slice.call(document.querySelectorAll(".np-chip"));

    var STORAGE_TEXT = "ilsangtool_np_text";
    var STORAGE_TYPE = "ilsangtool_np_type";
    var STORAGE_THEME = "ilsangtool_np_theme";
    var STORAGE_SIZE = "ilsangtool_np_size";
    var STORAGE_FONT = "ilsangtool_np_font";

    var FONT_SIZES = [
      { size: 14, line: 26 },
      { size: 15, line: 28 },
      { size: 17, line: 32 },
      { size: 20, line: 38 },
      { size: 24, line: 44 }
    ];
    var currentSizeIdx = 2; // 17px default

    var currentType = "lined";
    var currentTheme = "yellow";
    var currentFont = "sans";

    var TYPE_LABELS = {
      lined: "📝 줄노트 메모장",
      grid: "📐 모눈종이 메모장",
      plain: "📌 포스트잇 메모장"
    };

    // Load saved settings
    try {
      var savedText = localStorage.getItem(STORAGE_TEXT);
      if (savedText !== null) {
        npText.value = savedText;
      }
      var savedType = localStorage.getItem(STORAGE_TYPE);
      if (savedType && ["lined", "grid", "plain"].indexOf(savedType) !== -1) {
        currentType = savedType;
      }
      var savedTheme = localStorage.getItem(STORAGE_THEME);
      if (savedTheme && ["yellow", "white", "mint", "lavender", "dark"].indexOf(savedTheme) !== -1) {
        currentTheme = savedTheme;
      }
      var savedSize = parseInt(localStorage.getItem(STORAGE_SIZE), 10);
      if (!isNaN(savedSize)) {
        for (var i = 0; i < FONT_SIZES.length; i++) {
          if (FONT_SIZES[i].size === savedSize) {
            currentSizeIdx = i;
            break;
          }
        }
      }
      var savedFont = localStorage.getItem(STORAGE_FONT);
      if (savedFont && ["sans", "serif", "mono"].indexOf(savedFont) !== -1) {
        currentFont = savedFont;
      }
    } catch (e) {}

    function setType(type) {
      currentType = type;
      npText.className = "np-paper type-" + type + " font-" + currentFont;
      if (npBinderLabel) npBinderLabel.textContent = TYPE_LABELS[type] || "온라인 메모장";

      typeButtons.forEach(function (btn) {
        var isActive = btn.getAttribute("data-type") === type;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      try { localStorage.setItem(STORAGE_TYPE, type); } catch (e) {}
    }

    function setTheme(theme) {
      currentTheme = theme;
      if (npWrap) {
        npWrap.className = "notepad-wrap theme-" + theme;
      }
      themeButtons.forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-theme") === theme);
      });
      try { localStorage.setItem(STORAGE_THEME, theme); } catch (e) {}
    }

    function applySize() {
      var cur = FONT_SIZES[currentSizeIdx];
      if (npWrap) {
        npWrap.style.setProperty("--np-font-size", cur.size + "px");
        npWrap.style.setProperty("--np-line-height", cur.line + "px");
      }
      if (npSizeVal) npSizeVal.textContent = cur.size + "px";
      try { localStorage.setItem(STORAGE_SIZE, cur.size); } catch (e) {}
    }

    function applyFont(font) {
      currentFont = font;
      npText.className = "np-paper type-" + currentType + " font-" + font;
      if (npFontSelect) npFontSelect.value = font;
      try { localStorage.setItem(STORAGE_FONT, font); } catch (e) {}
    }

    var saveTimeout = null;
    function updateCounts() {
      var val = npText.value;
      var charWithSpace = val.length;
      var charNoSpace = val.replace(/\s/g, "").length;
      var words = val.trim() ? val.trim().split(/\s+/).length : 0;
      var lines = val.length ? val.split("\n").length : 1;

      if (npCharCount) npCharCount.textContent = charWithSpace.toLocaleString("ko-KR");
      if (npCharNoSpace) npCharNoSpace.textContent = charNoSpace.toLocaleString("ko-KR");
      if (npWordCount) npWordCount.textContent = words.toLocaleString("ko-KR");
      if (npLineCount) npLineCount.textContent = lines.toLocaleString("ko-KR");

      updateCursor();

      if (npSaveStatus) {
        npSaveStatus.classList.add("saving");
        if (npSaveText) npSaveText.textContent = "저장 중...";
      }
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(function () {
        try {
          localStorage.setItem(STORAGE_TEXT, npText.value);
        } catch (e) {}
        if (npSaveStatus) {
          npSaveStatus.classList.remove("saving");
          if (npSaveText) npSaveText.textContent = "자동 저장됨";
        }
      }, 350);
    }

    function updateCursor() {
      if (!npCursorPos) return;
      var selStart = npText.selectionStart || 0;
      var textBefore = npText.value.substring(0, selStart);
      var lines = textBefore.split("\n");
      var curLine = lines.length;
      var curCol = lines[lines.length - 1].length + 1;
      npCursorPos.textContent = "줄 " + curLine + ", 열 " + curCol;
    }

    // Initialize state
    setType(currentType);
    setTheme(currentTheme);
    applySize();
    applyFont(currentFont);
    updateCounts();

    // Type and Theme clicks
    typeButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setType(btn.getAttribute("data-type"));
      });
    });

    themeButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTheme(btn.getAttribute("data-theme"));
      });
    });

    // Zoom buttons
    if (npZoomIn) {
      npZoomIn.addEventListener("click", function () {
        if (currentSizeIdx < FONT_SIZES.length - 1) {
          currentSizeIdx++;
          applySize();
        } else {
          toast("최대 글자 크기입니다.");
        }
      });
    }
    if (npZoomOut) {
      npZoomOut.addEventListener("click", function () {
        if (currentSizeIdx > 0) {
          currentSizeIdx--;
          applySize();
        } else {
          toast("최소 글자 크기입니다.");
        }
      });
    }

    // Font select
    if (npFontSelect) {
      npFontSelect.addEventListener("change", function () {
        applyFont(npFontSelect.value);
      });
    }

    // Textarea input and cursor listeners
    npText.addEventListener("input", updateCounts);
    npText.addEventListener("keyup", updateCursor);
    npText.addEventListener("click", updateCursor);
    npText.addEventListener("select", updateCursor);

    // Keyboard support: Tab indent & Ctrl+S save
    npText.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault();
        var start = npText.selectionStart;
        var end = npText.selectionEnd;
        var tabStr = "  "; // 2 spaces
        npText.value = npText.value.substring(0, start) + tabStr + npText.value.substring(end);
        npText.selectionStart = npText.selectionEnd = start + tabStr.length;
        updateCounts();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "s" || e.key === "S")) {
        e.preventDefault();
        downloadNote();
      }
    });

    // File Drag and drop
    npText.addEventListener("dragover", function (e) {
      e.preventDefault();
      npText.style.opacity = "0.75";
    });
    npText.addEventListener("dragleave", function () {
      npText.style.opacity = "1";
    });
    npText.addEventListener("drop", function (e) {
      e.preventDefault();
      npText.style.opacity = "1";
      if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
        readFile(e.dataTransfer.files[0]);
      }
    });

    function readFile(file) {
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (evt) {
        npText.value = evt.target.result;
        updateCounts();
        toast("'" + file.name + "' 파일을 불러왔습니다.");
      };
      reader.onerror = function () {
        toast("파일을 읽을 수 없습니다.");
      };
      reader.readAsText(file, "UTF-8");
    }

    // New note button
    if (npNewBtn) {
      npNewBtn.addEventListener("click", function () {
        if (!npText.value.trim()) return;
        if (confirm("작성 중인 메모를 모두 비우시겠습니까?")) {
          npText.value = "";
          updateCounts();
          toast("메모장이 비워졌습니다.");
        }
      });
    }

    // Open button
    if (npOpenBtn && npFileInput) {
      npOpenBtn.addEventListener("click", function () {
        npFileInput.click();
      });
      npFileInput.addEventListener("change", function () {
        if (npFileInput.files && npFileInput.files[0]) {
          readFile(npFileInput.files[0]);
          npFileInput.value = "";
        }
      });
    }

    // Download button
    function downloadNote() {
      var val = npText.value;
      if (!val.trim()) return toast("저장할 메모 내용이 없습니다.");
      var dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      var filename = "notepad-" + dateStr + ".txt";

      var blob = new Blob([val], { type: "text/plain;charset=utf-8" });
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast("메모가 '" + filename + "' 파일로 저장되었습니다.");
    }
    if (npDownloadBtn) {
      npDownloadBtn.addEventListener("click", downloadNote);
    }

    // Copy button
    if (npCopyBtn) {
      npCopyBtn.addEventListener("click", function () {
        var val = npText.value;
        if (!val) return toast("복사할 내용이 없습니다.");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(val).then(function () {
            toast("메모 내용이 클립보드에 복사되었습니다!");
          }).catch(function () {
            npText.select();
            document.execCommand("copy");
            toast("메모 내용이 클립보드에 복사되었습니다!");
          });
        } else {
          npText.select();
          document.execCommand("copy");
          toast("메모 내용이 클립보드에 복사되었습니다!");
        }
      });
    }

    // Print button
    if (npPrintBtn) {
      npPrintBtn.addEventListener("click", function () {
        window.print();
      });
    }

    // --- EXTERNAL SHARE CONTROLLER (외부 공유) ---
    var npShareBtn = document.getElementById("npShareBtn");
    var npShareModal = document.getElementById("npShareModal");
    var npModalClose = document.getElementById("npModalClose");
    var npPreviewType = document.getElementById("npPreviewType");
    var npPreviewChars = document.getElementById("npPreviewChars");
    var npPreviewSnippet = document.getElementById("npPreviewSnippet");
    var npNativeShareBtn = document.getElementById("npNativeShareBtn");
    var npShareUrlInput = document.getElementById("npShareUrlInput");
    var npCopyLinkBtn = document.getElementById("npCopyLinkBtn");
    var npShareKakaoBtn = document.getElementById("npShareKakaoBtn");
    var npShareTelegramBtn = document.getElementById("npShareTelegramBtn");
    var npShareXBtn = document.getElementById("npShareXBtn");
    var npShareMailBtn = document.getElementById("npShareMailBtn");

    function buildShareUrl(text, type, theme) {
      var baseUrl = window.location.origin + window.location.pathname;
      try {
        var utf8Bytes = encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, function (match, p1) {
          return String.fromCharCode("0x" + p1);
        });
        var b64 = btoa(utf8Bytes);
        return baseUrl + "#notepad?n=" + encodeURIComponent(b64) + "&t=" + type;
      } catch (e) {
        return baseUrl + "#notepad?note=" + encodeURIComponent(text.substring(0, 1500));
      }
    }

    function openShareModal() {
      var val = npText.value;
      if (!val.trim()) return toast("공유할 메모 내용이 없습니다.");

      var shareUrl = buildShareUrl(val, currentType, currentTheme);

      if (npPreviewType) npPreviewType.textContent = TYPE_LABELS[currentType] || "메모장";
      if (npPreviewChars) npPreviewChars.textContent = val.length.toLocaleString("ko-KR") + "자";
      if (npPreviewSnippet) npPreviewSnippet.textContent = val.substring(0, 240) + (val.length > 240 ? "..." : "");

      if (npShareUrlInput) npShareUrlInput.value = shareUrl;

      var titleText = "일상툴 온라인 메모 (" + (TYPE_LABELS[currentType] || "메모") + ")";
      var summaryText = val.substring(0, 120).replace(/\n/g, " ");
      if (val.length > 120) summaryText += "...";

      if (npShareTelegramBtn) {
        npShareTelegramBtn.href = "https://t.me/share/url?url=" + encodeURIComponent(shareUrl) + "&text=" + encodeURIComponent(titleText + "\n" + summaryText);
      }
      if (npShareXBtn) {
        npShareXBtn.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(titleText + " - " + summaryText) + "&url=" + encodeURIComponent(shareUrl);
      }
      if (npShareMailBtn) {
        var mailSubject = encodeURIComponent("[일상툴] 공유된 메모");
        var mailBody = encodeURIComponent("일상툴에서 공유된 메모입니다.\n\n" + val + "\n\n👉 웹에서 바로 열기:\n" + shareUrl);
        npShareMailBtn.onclick = function () {
          window.location.href = "mailto:?subject=" + mailSubject + "&body=" + mailBody;
        };
      }

      if (npNativeShareBtn) {
        if (navigator.share) {
          npNativeShareBtn.style.display = "flex";
        } else {
          npNativeShareBtn.style.display = "none";
        }
      }

      if (npShareModal) {
        npShareModal.style.display = "flex";
        npShareModal.setAttribute("aria-hidden", "false");
      }
    }

    function closeShareModal() {
      if (npShareModal) {
        npShareModal.style.display = "none";
        npShareModal.setAttribute("aria-hidden", "true");
      }
    }

    if (npShareBtn) npShareBtn.addEventListener("click", openShareModal);
    if (npModalClose) npModalClose.addEventListener("click", closeShareModal);
    if (npShareModal) {
      npShareModal.addEventListener("click", function (e) {
        if (e.target === npShareModal) closeShareModal();
      });
    }

    // Escape key closes modal
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && npShareModal && npShareModal.style.display !== "none") {
        closeShareModal();
      }
    });

    // Native Web Share API
    if (npNativeShareBtn) {
      npNativeShareBtn.addEventListener("click", function () {
        var val = npText.value;
        var shareUrl = npShareUrlInput ? npShareUrlInput.value : buildShareUrl(val, currentType, currentTheme);
        if (navigator.share) {
          navigator.share({
            title: "일상툴 온라인 메모 (" + (TYPE_LABELS[currentType] || "메모장") + ")",
            text: val.substring(0, 200) + (val.length > 200 ? "..." : "") + "\n\n",
            url: shareUrl
          }).then(function () {
            toast("메모가 공유되었습니다!");
            closeShareModal();
          }).catch(function () {});
        } else {
          toast("이 환경에서는 시스템 공유를 지원하지 않습니다. 링크 복사를 이용해주세요.");
        }
      });
    }

    // Copy Share Link
    if (npCopyLinkBtn && npShareUrlInput) {
      npCopyLinkBtn.addEventListener("click", function () {
        npShareUrlInput.select();
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(npShareUrlInput.value).then(function () {
            toast("공유 링크가 클립보드에 복사되었습니다!");
          }).catch(function () {
            document.execCommand("copy");
            toast("공유 링크가 클립보드에 복사되었습니다!");
          });
        } else {
          document.execCommand("copy");
          toast("공유 링크가 클립보드에 복사되었습니다!");
        }
      });
    }

    // Kakao / Messenger formatted copy
    if (npShareKakaoBtn) {
      npShareKakaoBtn.addEventListener("click", function () {
        var val = npText.value;
        var shareUrl = npShareUrlInput ? npShareUrlInput.value : buildShareUrl(val, currentType, currentTheme);
        var msg = "[일상툴 온라인 메모 (" + (TYPE_LABELS[currentType] || "메모장") + ")]\n" +
          val + "\n\n" +
          "👉 웹에서 이 메모 바로 열기:\n" + shareUrl;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(msg).then(function () {
            toast("카카오톡/메신저용 텍스트+링크가 복사되었습니다!");
          }).catch(function () {
            var ta = document.createElement("textarea");
            ta.value = msg;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            toast("카카오톡/메신저용 텍스트+링크가 복사되었습니다!");
          });
        } else {
          var ta = document.createElement("textarea");
          ta.value = msg;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          toast("카카오톡/메신저용 텍스트+링크가 복사되었습니다!");
        }
      });
    }

    // Load shared note on page load if present in URL
    function checkSharedNote() {
      var hash = window.location.hash || "";
      var search = window.location.search || "";
      var qStr = "";
      if (hash.indexOf("?") !== -1) {
        qStr = hash.substring(hash.indexOf("?") + 1);
      } else if (search.indexOf("?") !== -1) {
        qStr = search.substring(1);
      }
      if (!qStr) return;

      var params = new URLSearchParams(qStr);
      var sharedB64 = params.get("n");
      var sharedRaw = params.get("note");
      var sharedType = params.get("t") || params.get("type");

      var incomingText = "";
      if (sharedB64) {
        try {
          var decodedStr = atob(decodeURIComponent(sharedB64));
          incomingText = decodeURIComponent(Array.prototype.map.call(decodedStr, function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(""));
        } catch (e) {}
      } else if (sharedRaw) {
        incomingText = sharedRaw;
      }

      if (incomingText) {
        var shouldLoad = true;
        if (npText.value.trim() && npText.value.trim() !== incomingText.trim()) {
          shouldLoad = confirm("외부에서 공유받은 메모가 도착했습니다!\n\n기존 메모 대신 공유된 메모를 불러오시겠습니까?");
        }
        if (shouldLoad) {
          npText.value = incomingText;
          if (sharedType && ["lined", "grid", "plain"].indexOf(sharedType) !== -1) {
            setType(sharedType);
          }
          updateCounts();
          toast("공유받은 메모를 불러왔습니다!");
          if (history.replaceState) {
            history.replaceState(null, "", location.pathname + "#notepad");
          }
        }
      }
    }
    checkSharedNote();
  })();

  function won(n) {
    return Math.round(n).toLocaleString("ko-KR") + "원";
  }

  function calcPercent() {
    var orig = parseFloat(document.getElementById("pOrig").value) || 0;
    var off = parseFloat(document.getElementById("pOff").value) || 0;
    var a = parseFloat(document.getElementById("pA").value) || 0;
    var b = parseFloat(document.getElementById("pB").value) || 0;
    var sale = orig * (1 - off / 100);
    document.getElementById("pSale").textContent = won(sale);
    document.getElementById("pSave").textContent = won(orig - sale);
    document.getElementById("pRatio").textContent = b ? ((a / b) * 100).toFixed(1) + "%" : "-";
    document.getElementById("pDelta").textContent = a ? (((b - a) / a) * 100).toFixed(1) + "%" : "-";
  }
  ["pOrig", "pOff", "pA", "pB"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcPercent);
  });
  calcPercent();

  function calcLoan() {
    var p = parseFloat(document.getElementById("loanAmt").value) || 0;
    var r = (parseFloat(document.getElementById("loanRate").value) || 0) / 100 / 12;
    var n = (parseFloat(document.getElementById("loanYears").value) || 0) * 12;
    if (!n) return;
    var m = r === 0 ? p / n : p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    document.getElementById("loanMonth").textContent = won(m);
    document.getElementById("loanTotal").textContent = won(m * n);
    document.getElementById("loanInt").textContent = won(m * n - p);
  }
  ["loanAmt", "loanRate", "loanYears"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcLoan);
  });
  calcLoan();

  function genPw() {
    var sets = "";
    if (document.getElementById("pwUpper").checked) sets += "ABCDEFGHJKLMNPQRSTUVWXYZ";
    if (document.getElementById("pwLower").checked) sets += "abcdefghijkmnopqrstuvwxyz";
    if (document.getElementById("pwNum").checked) sets += "23456789";
    if (document.getElementById("pwSym").checked) sets += "!@#$%^&*_-+=?";
    if (!sets) return toast("문자 종류를 선택하세요");
    var len = Math.max(6, Math.min(64, parseInt(document.getElementById("pwLen").value, 10) || 16));
    var arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    var out = "";
    for (var i = 0; i < len; i++) out += sets[arr[i] % sets.length];
    document.getElementById("pwOut").textContent = out;
  }
  document.getElementById("pwGen").onclick = genPw;
  document.getElementById("pwCopy").onclick = function () {
    var t = document.getElementById("pwOut").textContent;
    if (t && t !== "-") navigator.clipboard.writeText(t).then(function () { toast("복사했습니다"); });
  };
  genPw();

  function countText() {
    var t = document.getElementById("countText").value;
    var no = t.replace(/\s/g, "");
    var words = t.trim() ? t.trim().split(/\s+/).length : 0;
    document.getElementById("cAll").textContent = t.length.toLocaleString("ko-KR");
    document.getElementById("cNo").textContent = no.length.toLocaleString("ko-KR");
    document.getElementById("cWord").textContent = words.toLocaleString("ko-KR");
    document.getElementById("cRead").textContent = (no.length ? Math.max(1, Math.round(no.length / 500)) : 0) + "분";
  }
  document.getElementById("countText").addEventListener("input", countText);

  function calcDday() {
    var v = document.getElementById("ddDate").value;
    if (!v) return;
    var t = new Date(v);
    t.setHours(0, 0, 0, 0);
    var n = new Date();
    n.setHours(0, 0, 0, 0);
    var d = Math.round((t - n) / 86400000);
    var title = document.getElementById("ddTitle").value || "선택한 날";
    document.getElementById("ddOut").textContent = d === 0 ? "D-DAY" : (d > 0 ? "D-" + d : "D+" + Math.abs(d));
    document.getElementById("ddSub").textContent = title + " · " + t.toLocaleDateString("ko-KR");
  }
  var nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 30);
  document.getElementById("ddDate").valueAsDate = nextWeek;
  ["ddDate", "ddTitle"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcDday);
  });
  calcDday();

  var CITIES = [
    { name: "서울", tz: "Asia/Seoul" },
    { name: "도쿄", tz: "Asia/Tokyo" },
    { name: "베이징", tz: "Asia/Shanghai" },
    { name: "런던", tz: "Europe/London" },
    { name: "뉴욕", tz: "America/New_York" },
    { name: "로스앤젤레스", tz: "America/Los_Angeles" },
    { name: "파리", tz: "Europe/Paris" },
    { name: "시드니", tz: "Australia/Sydney" }
  ];
  function renderWorld() {
    var body = document.getElementById("clockBody");
    if (!body) return;
    body.innerHTML = CITIES.map(function (c) {
      var d = new Date();
      var time = d.toLocaleTimeString("ko-KR", { timeZone: c.tz, hour: "2-digit", minute: "2-digit", second: "2-digit" });
      var date = d.toLocaleDateString("ko-KR", { timeZone: c.tz, month: "short", day: "numeric", weekday: "short" });
      return "<tr><td>" + c.name + "</td><td>" + time + "</td><td>" + date + "</td></tr>";
    }).join("");
  }

  var FX = { KRW: 1, USD: 1350, JPY: 9.1, EUR: 1470, CNY: 186 };
  function calcFx() {
    var amt = parseFloat(document.getElementById("fxAmt").value) || 0;
    var from = document.getElementById("fxFrom").value;
    var to = document.getElementById("fxTo").value;
    var out = (amt * FX[from]) / FX[to];
    document.getElementById("fxOut").textContent = out.toLocaleString("ko-KR", { maximumFractionDigits: 2 }) + " " + to;
    document.getElementById("fxNote").textContent = "참고환율 1USD=" + FX.USD + "원 · 실제 은행/카드 환율과 다를 수 있습니다.";
  }
  ["fxAmt", "fxFrom", "fxTo"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcFx);
    document.getElementById(id).addEventListener("change", calcFx);
  });
  calcFx();

  // --------------------------------------------------------------------------
  // Scientific Calculator (Casio fx Style Engine)
  // --------------------------------------------------------------------------
  var calcExpr = "";
  var calcAngleMode = "DEG"; // "DEG", "RAD", "GRAD"
  var calcAns = 0;
  var calcMemory = 0;
  var calcIsShift = false;
  var calcIsHyp = false;
  var calcIsResult = false;

  var calcDisp = document.getElementById("calcDisp");
  var calcExprDisp = document.getElementById("calcExprDisp");
  var indShift = document.getElementById("indShift");
  var indHyp = document.getElementById("indHyp");
  var indMem = document.getElementById("indMem");
  var indMode = document.getElementById("indMode");
  var btnShift = document.getElementById("btnShift");
  var btnHyp = document.getElementById("btnHyp");

  function updateCalcIndicators() {
    if (indShift) indShift.classList.toggle("on", calcIsShift);
    if (btnShift) btnShift.classList.toggle("active", calcIsShift);
    if (indHyp) indHyp.classList.toggle("on", calcIsHyp);
    if (btnHyp) btnHyp.classList.toggle("active", calcIsHyp);
    if (indMem) indMem.classList.toggle("on", calcMemory !== 0);
    if (indMode) indMode.textContent = calcAngleMode;
  }

  function setCalcAngleMode(mode) {
    calcAngleMode = mode;
    ["calcDeg", "calcRad", "calcGrad"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.classList.remove("on");
    });
    var activeBtn = document.getElementById(mode === "DEG" ? "calcDeg" : mode === "RAD" ? "calcRad" : "calcGrad");
    if (activeBtn) activeBtn.classList.add("on");
    updateCalcIndicators();
  }

  if (document.getElementById("calcDeg")) {
    document.getElementById("calcDeg").onclick = function () { setCalcAngleMode("DEG"); };
  }
  if (document.getElementById("calcRad")) {
    document.getElementById("calcRad").onclick = function () { setCalcAngleMode("RAD"); };
  }
  if (document.getElementById("calcGrad")) {
    document.getElementById("calcGrad").onclick = function () { setCalcAngleMode("GRAD"); };
  }

  function updateShiftLabels() {
    document.querySelectorAll("#calcPad .fn-shiftable").forEach(function (btn) {
      var k = btn.getAttribute("data-k");
      var lblSpan = btn.querySelector(".lbl");
      if (!lblSpan) return;
      if (k === "sin") {
        lblSpan.textContent = calcIsShift ? (calcIsHyp ? "sinh⁻¹" : "sin⁻¹") : (calcIsHyp ? "sinh" : "sin");
      } else if (k === "cos") {
        lblSpan.textContent = calcIsShift ? (calcIsHyp ? "cosh⁻¹" : "cos⁻¹") : (calcIsHyp ? "cosh" : "cos");
      } else if (k === "tan") {
        lblSpan.textContent = calcIsShift ? (calcIsHyp ? "tanh⁻¹" : "tan⁻¹") : (calcIsHyp ? "tanh" : "tan");
      } else if (k === "pi") {
        lblSpan.textContent = calcIsShift ? "Ran#" : "π";
      } else if (k === "e") {
        lblSpan.textContent = calcIsShift ? "1/x" : "e";
      } else if (k === "ln") {
        lblSpan.textContent = calcIsShift ? "eˣ" : "ln";
      } else if (k === "log") {
        lblSpan.textContent = calcIsShift ? "10ˣ" : "log";
      } else if (k === "sq") {
        lblSpan.textContent = calcIsShift ? "x³" : "x²";
      } else if (k === "pow") {
        lblSpan.textContent = calcIsShift ? "ʸ√x" : "xʸ";
      } else if (k === "sqrt") {
        lblSpan.textContent = calcIsShift ? "∛" : "√";
      }
    });
  }

  function cleanNum(num) {
    if (typeof num !== "number" || isNaN(num)) return NaN;
    if (!isFinite(num)) return num;
    if (Math.abs(num) < 1e-13) return 0;
    return Number(num.toPrecision(12));
  }

  function toRad(val) {
    if (calcAngleMode === "DEG") return (val * Math.PI) / 180;
    if (calcAngleMode === "GRAD") return (val * Math.PI) / 200;
    return val;
  }

  function fromRad(val) {
    if (calcAngleMode === "DEG") return (val * 180) / Math.PI;
    if (calcAngleMode === "GRAD") return (val * 200) / Math.PI;
    return val;
  }

  function sciSin(x) {
    if (calcAngleMode === "DEG") {
      var norm = ((x % 360) + 360) % 360;
      if (norm === 0 || norm === 180 || norm === 360) return 0;
      if (norm === 90) return 1;
      if (norm === 270) return -1;
    } else if (calcAngleMode === "GRAD") {
      var normG = ((x % 400) + 400) % 400;
      if (normG === 0 || normG === 200 || normG === 400) return 0;
      if (normG === 100) return 1;
      if (normG === 300) return -1;
    }
    return cleanNum(Math.sin(toRad(x)));
  }

  function sciCos(x) {
    if (calcAngleMode === "DEG") {
      var norm = ((x % 360) + 360) % 360;
      if (norm === 90 || norm === 270) return 0;
      if (norm === 0 || norm === 360) return 1;
      if (norm === 180) return -1;
    } else if (calcAngleMode === "GRAD") {
      var normG = ((x % 400) + 400) % 400;
      if (normG === 100 || normG === 300) return 0;
      if (normG === 0 || normG === 400) return 1;
      if (normG === 200) return -1;
    }
    return cleanNum(Math.cos(toRad(x)));
  }

  function sciTan(x) {
    if (calcAngleMode === "DEG") {
      var norm = ((x % 360) + 360) % 360;
      if (norm === 90 || norm === 270) throw new Error("Math ERROR");
      if (norm === 0 || norm === 180 || norm === 360) return 0;
      if (norm === 45 || norm === 225) return 1;
      if (norm === 135 || norm === 315) return -1;
    } else if (calcAngleMode === "GRAD") {
      var normG = ((x % 400) + 400) % 400;
      if (normG === 100 || normG === 300) throw new Error("Math ERROR");
      if (normG === 0 || normG === 200 || normG === 400) return 0;
    }
    return cleanNum(Math.tan(toRad(x)));
  }

  function sciAsin(x) {
    if (x < -1 || x > 1) throw new Error("Math ERROR");
    return cleanNum(fromRad(Math.asin(x)));
  }
  function sciAcos(x) {
    if (x < -1 || x > 1) throw new Error("Math ERROR");
    return cleanNum(fromRad(Math.acos(x)));
  }
  function sciAtan(x) {
    return cleanNum(fromRad(Math.atan(x)));
  }

  function sciFact(n) {
    n = Math.floor(n);
    if (n < 0 || n > 170) throw new Error("Math ERROR");
    var res = 1;
    for (var i = 2; i <= n; i++) res *= i;
    return res;
  }

  function sciNPr(n, r) {
    n = Math.round(n);
    r = Math.round(r);
    if (n < 0 || r < 0 || r > n) throw new Error("Math ERROR");
    var res = 1;
    for (var i = 0; i < r; i++) res *= (n - i);
    return res;
  }

  function sciNCr(n, r) {
    n = Math.round(n);
    r = Math.round(r);
    if (n < 0 || r < 0 || r > n) throw new Error("Math ERROR");
    r = Math.min(r, n - r);
    var num = 1, den = 1;
    for (var i = 1; i <= r; i++) {
      num *= (n - i + 1);
      den *= i;
    }
    return Math.round(num / den);
  }

  function sciYroot(y, x) {
    if (y === 0) throw new Error("Math ERROR");
    if (x < 0 && y % 2 === 0) throw new Error("Math ERROR");
    if (x < 0) return -Math.pow(-x, 1 / y);
    return cleanNum(Math.pow(x, 1 / y));
  }

  function evaluateCasio(rawExpr) {
    if (!rawExpr || rawExpr.trim() === "") return 0;
    var s = rawExpr.trim();

    // Auto-balance closing parentheses
    var openCount = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i] === "(") openCount++;
      if (s[i] === ")") openCount--;
    }
    while (openCount > 0) {
      s += ")";
      openCount--;
    }

    // Display operators to JS
    s = s.replace(/×/g, "*").replace(/÷/g, "/");

    // Functions with ⁻¹ before standalone ⁻¹
    s = s.replace(/sin⁻¹\(/g, "asin(")
         .replace(/cos⁻¹\(/g, "acos(")
         .replace(/tan⁻¹\(/g, "atan(")
         .replace(/sinh⁻¹\(/g, "asinh(")
         .replace(/cosh⁻¹\(/g, "acosh(")
         .replace(/tanh⁻¹\(/g, "atanh(")
         .replace(/√\(/g, "sqrt(")
         .replace(/∛\(/g, "cbrt(")
         .replace(/Abs\(/gi, "abs(");

    // Percentage replacement (% -> /100) before mod
    s = s.replace(/([0-9.]+|\([^\(\)]+\))%/g, "(($1)/100)");

    // Constants
    s = s.replace(/π/g, "(Math.PI)");
    s = s.replace(/(^|[^a-zA-Z0-9_])e($|[^a-zA-Z0-9_])/g, "$1(Math.E)$2");

    // Ans
    s = s.replace(/\bAns\b/g, "(" + calcAns + ")");

    // Powers & reciprocal
    s = s.replace(/²/g, "**2");
    s = s.replace(/³/g, "**3");
    s = s.replace(/⁻¹/g, "**(-1)");
    s = s.replace(/\^/g, "**");

    // Factorial
    var factRegex = /([0-9.]+|\([^\(\)]+\))!/;
    while (factRegex.test(s)) {
      s = s.replace(factRegex, "fact($1)");
    }

    // Permutation & Combination
    var pRegex = /([0-9.]+|\([^\(\)]+\))\s*P\s*([0-9.]+|\([^\(\)]+\))/;
    while (pRegex.test(s)) {
      s = s.replace(pRegex, "nPr($1, $2)");
    }
    var cRegex = /([0-9.]+|\([^\(\)]+\))\s*C\s*([0-9.]+|\([^\(\)]+\))/;
    while (cRegex.test(s)) {
      s = s.replace(cRegex, "nCr($1, $2)");
    }

    // yroot
    var yrootRegex = /([0-9.]+|\([^\(\)]+\))\s*yroot\s*([0-9.]+|\([^\(\)]+\))/i;
    while (yrootRegex.test(s)) {
      s = s.replace(yrootRegex, "yroot($1, $2)");
    }

    // mod
    var modRegex = /([0-9.]+|\([^\(\)]+\))\s*mod\s*([0-9.]+|\([^\(\)]+\))/i;
    while (modRegex.test(s)) {
      s = s.replace(modRegex, "mod($1, $2)");
    }

    // Implicit multiplication
    s = s.replace(/(\d)\s*(\()/g, "$1*$2");
    s = s.replace(/(\))\s*(\()/g, "$1*$2");
    s = s.replace(/(\))\s*(\d)/g, "$1*$2");
    s = s.replace(/(\d)\s*(sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|asinh|acosh|atanh|log|ln|sqrt|cbrt|abs|nPr|nCr|yroot|fact|mod)\(/gi, "$1*$2(");
    s = s.replace(/(\))\s*(sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|asinh|acosh|atanh|log|ln|sqrt|cbrt|abs|nPr|nCr|yroot|fact|mod)\(/gi, "$1*$2(");

    var fn = new Function(
      "sin", "cos", "tan",
      "asin", "acos", "atan",
      "sinh", "cosh", "tanh",
      "asinh", "acosh", "atanh",
      "log", "ln", "sqrt", "cbrt", "yroot",
      "fact", "nPr", "nCr", "abs", "mod",
      '"use strict"; return (' + s + ");"
    );

    var res = fn(
      sciSin, sciCos, sciTan,
      sciAsin, sciAcos, sciAtan,
      function(x){ return cleanNum(Math.sinh(x)); },
      function(x){ return cleanNum(Math.cosh(x)); },
      function(x){ return cleanNum(Math.tanh(x)); },
      function(x){ return cleanNum(Math.asinh(x)); },
      function(x){ if (x<1) throw new Error("Math ERROR"); return cleanNum(Math.acosh(x)); },
      function(x){ if (x<=-1||x>=1) throw new Error("Math ERROR"); return cleanNum(Math.atanh(x)); },
      function(x){ if (x<=0) throw new Error("Math ERROR"); return cleanNum(Math.log10(x)); },
      function(x){ if (x<=0) throw new Error("Math ERROR"); return cleanNum(Math.log(x)); },
      function(x){ if (x<0) throw new Error("Math ERROR"); return cleanNum(Math.sqrt(x)); },
      function(x){ return cleanNum(Math.cbrt(x)); },
      sciYroot,
      sciFact, sciNPr, sciNCr,
      function(x){ return Math.abs(x); },
      function(a, b){ return cleanNum(a % b); }
    );

    if (typeof res !== "number" || isNaN(res)) throw new Error("Math ERROR");
    return cleanNum(res);
  }

  function updateCalcScreen() {
    if (calcExprDisp) {
      calcExprDisp.textContent = calcExpr === "" ? "\u00A0" : calcExpr;
    }
    if (calcDisp) {
      if (calcExpr === "") {
        calcDisp.textContent = "0";
      } else if (calcIsResult) {
        // already showing formatted result
      } else {
        calcDisp.textContent = calcExpr;
      }
    }
  }

  function calcKey(k) {
    try {
      if (k === "shift") {
        calcIsShift = !calcIsShift;
        updateCalcIndicators();
        updateShiftLabels();
        return;
      }
      if (k === "hyp") {
        calcIsHyp = !calcIsHyp;
        updateCalcIndicators();
        updateShiftLabels();
        return;
      }
      if (k === "AC") {
        calcExpr = "";
        calcIsResult = false;
        calcIsShift = false;
        calcIsHyp = false;
        updateCalcIndicators();
        updateShiftLabels();
        if (calcExprDisp) calcExprDisp.textContent = "\u00A0";
        if (calcDisp) calcDisp.textContent = "0";
        return;
      }
      if (k === "DEL") {
        if (calcIsResult) {
          calcExpr = "";
          calcIsResult = false;
          if (calcExprDisp) calcExprDisp.textContent = "\u00A0";
          if (calcDisp) calcDisp.textContent = "0";
          return;
        }
        if (calcExpr.length > 0) {
          var tokenMatch = calcExpr.match(/(sinh⁻¹\(|cosh⁻¹\(|tanh⁻¹\(|sin⁻¹\(|cos⁻¹\(|tan⁻¹\(|sinh\(|cosh\(|tanh\(|sin\(|cos\(|tan\(|log\(|ln\(|10\^\(|e\^\(|√\(|∛\(|Abs\(|×10\^\(| yroot | mod | P | C |Ans)$/);
          if (tokenMatch) {
            calcExpr = calcExpr.slice(0, -tokenMatch[0].length);
          } else {
            calcExpr = calcExpr.slice(0, -1);
          }
        }
        updateCalcScreen();
        return;
      }
      if (k === "=") {
        if (calcExpr === "") return;
        var evaluated = evaluateCasio(calcExpr);
        calcAns = evaluated;
        var formatted = String(evaluated);
        if (Math.abs(evaluated) >= 1e12 || (Math.abs(evaluated) < 1e-9 && evaluated !== 0)) {
          formatted = evaluated.toExponential(6).replace("+", "");
        }
        if (calcExprDisp) calcExprDisp.textContent = calcExpr + " =";
        if (calcDisp) calcDisp.textContent = formatted;
        calcExpr = String(evaluated);
        calcIsResult = true;
        calcIsShift = false;
        calcIsHyp = false;
        updateCalcIndicators();
        updateShiftLabels();
        return;
      }
      if (k === "MC") {
        calcMemory = 0;
        updateCalcIndicators();
        return;
      }
      if (k === "MR") {
        if (calcIsResult) {
          calcExpr = String(calcMemory);
          calcIsResult = false;
        } else {
          calcExpr += String(calcMemory);
        }
        updateCalcScreen();
        return;
      }
      if (k === "M+" || k === "M-") {
        var mVal = 0;
        try {
          mVal = evaluateCasio(calcExpr === "" ? "0" : calcExpr);
        } catch (e) {
          mVal = calcAns;
        }
        if (k === "M+") calcMemory += mVal;
        else calcMemory -= mVal;
        calcMemory = cleanNum(calcMemory);
        updateCalcIndicators();
        return;
      }
      if (k === "Ans") {
        if (calcIsResult) {
          calcExpr = "Ans";
          calcIsResult = false;
        } else {
          calcExpr += "Ans";
        }
        updateCalcScreen();
        return;
      }
      if (k === "exp10") {
        if (calcIsResult) {
          calcExpr = "Ans×10^(";
          calcIsResult = false;
        } else {
          calcExpr += "×10^(";
        }
        updateCalcScreen();
        return;
      }
      if (k === "neg") {
        if (calcIsResult || calcExpr === "") {
          calcExpr = "-";
          calcIsResult = false;
        } else {
          calcExpr += "(-";
        }
        updateCalcScreen();
        return;
      }

      // Operators +, -, *, /
      if (k === "+" || k === "-" || k === "*" || k === "/") {
        var op = k === "*" ? "×" : k === "/" ? "÷" : k;
        if (calcIsResult) {
          calcExpr = "Ans" + op;
          calcIsResult = false;
        } else {
          calcExpr += op;
        }
        updateCalcScreen();
        return;
      }

      // Functions
      var fnInserted = "";
      if (k === "sin") {
        fnInserted = calcIsShift ? (calcIsHyp ? "sinh⁻¹(" : "sin⁻¹(") : (calcIsHyp ? "sinh(" : "sin(");
      } else if (k === "cos") {
        fnInserted = calcIsShift ? (calcIsHyp ? "cosh⁻¹(" : "cos⁻¹(") : (calcIsHyp ? "cosh(" : "cos(");
      } else if (k === "tan") {
        fnInserted = calcIsShift ? (calcIsHyp ? "tanh⁻¹(" : "tan⁻¹(") : (calcIsHyp ? "tanh(" : "tan(");
      } else if (k === "pi") {
        fnInserted = calcIsShift ? String(Math.floor(Math.random() * 1000) / 1000) : "π";
      } else if (k === "e") {
        fnInserted = calcIsShift ? "⁻¹" : "e";
      } else if (k === "ln") {
        fnInserted = calcIsShift ? "e^(" : "ln(";
      } else if (k === "log") {
        fnInserted = calcIsShift ? "10^(" : "log(";
      } else if (k === "sq") {
        fnInserted = calcIsShift ? "³" : "²";
      } else if (k === "pow") {
        fnInserted = calcIsShift ? " yroot " : "^";
      } else if (k === "sqrt") {
        fnInserted = calcIsShift ? "∛(" : "√(";
      } else if (k === "fact") {
        fnInserted = "!";
      } else if (k === "nPr") {
        fnInserted = " P ";
      } else if (k === "nCr") {
        fnInserted = " C ";
      } else if (k === "abs") {
        fnInserted = "Abs(";
      } else if (k === "mod") {
        fnInserted = " mod ";
      } else if (k === "%") {
        fnInserted = "%";
      } else if (k === "(" || k === ")") {
        fnInserted = k;
      } else if (/^[0-9.]$/.test(k)) {
        if (calcIsResult) {
          calcExpr = k === "." ? "0." : k;
          calcIsResult = false;
        } else {
          calcExpr += k;
        }
        updateCalcScreen();
        return;
      }

      if (fnInserted) {
        if (calcIsResult) {
          if (fnInserted === "²" || fnInserted === "³" || fnInserted === "!" || fnInserted === "⁻¹") {
            calcExpr = "Ans" + fnInserted;
          } else {
            calcExpr = fnInserted;
          }
          calcIsResult = false;
        } else {
          calcExpr += fnInserted;
        }
        if (calcIsShift) {
          calcIsShift = false;
          updateCalcIndicators();
          updateShiftLabels();
        }
        if (calcIsHyp && (k === "sin" || k === "cos" || k === "tan")) {
          calcIsHyp = false;
          updateCalcIndicators();
          updateShiftLabels();
        }
        updateCalcScreen();
      }
    } catch (err) {
      if (calcDisp) calcDisp.textContent = "수학 오류";
      calcIsResult = true;
    }
  }

  document.querySelectorAll("#calcPad [data-k]").forEach(function (b) {
    b.onclick = function () { calcKey(b.getAttribute("data-k")); };
  });

  // PC Keyboard Shortcuts
  window.addEventListener("keydown", function (e) {
    var calcSec = document.getElementById("calc");
    if (!calcSec || calcSec.classList.contains("hidden")) return;
    var tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea") return;

    if (e.key >= "0" && e.key <= "9") {
      calcKey(e.key);
      e.preventDefault();
    } else if (e.key === ".") {
      calcKey(".");
      e.preventDefault();
    } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
      calcKey(e.key);
      e.preventDefault();
    } else if (e.key === "Enter" || e.key === "=") {
      calcKey("=");
      e.preventDefault();
    } else if (e.key === "Backspace") {
      calcKey("DEL");
      e.preventDefault();
    } else if (e.key === "Escape" || e.key === "c" || e.key === "C") {
      calcKey("AC");
      e.preventDefault();
    } else if (e.key === "(" || e.key === ")" || e.key === "^" || e.key === "%") {
      calcKey(e.key);
      e.preventDefault();
    }
  });

  function calcSplit() {
    var total = parseFloat(document.getElementById("splitTotal").value) || 0;
    var people = Math.max(1, parseInt(document.getElementById("splitPeople").value, 10) || 1);
    var tip = parseFloat(document.getElementById("splitTip").value) || 0;
    var sum = total * (1 + tip / 100);
    document.getElementById("splitOut").textContent = won(sum / people) + " / 인";
    document.getElementById("splitSub").textContent = "총 " + won(sum) + " · " + people + "명";
  }
  ["splitTotal", "splitPeople", "splitTip"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcSplit);
  });
  calcSplit();

  function calcCal() {
    var sex = document.getElementById("calSex").value;
    var age = parseFloat(document.getElementById("calAge").value) || 0;
    var h = parseFloat(document.getElementById("calH").value) || 0;
    var w = parseFloat(document.getElementById("calW").value) || 0;
    var act = parseFloat(document.getElementById("calAct").value) || 1.2;
    var bmr = sex === "m" ? 10 * w + 6.25 * h - 5 * age + 5 : 10 * w + 6.25 * h - 5 * age - 161;
    var tdee = bmr * act;
    document.getElementById("calBmr").textContent = Math.round(bmr).toLocaleString("ko-KR") + " kcal";
    document.getElementById("calTdee").textContent = Math.round(tdee).toLocaleString("ko-KR") + " kcal";
    document.getElementById("calLoss").textContent = Math.round(tdee - 500).toLocaleString("ko-KR") + " kcal";
  }
  ["calSex", "calAge", "calH", "calW", "calAct"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcCal);
    document.getElementById(id).addEventListener("change", calcCal);
  });
  calcCal();

  document.getElementById("qrBtn").onclick = function () {
    var t = document.getElementById("qrText").value.trim();
    if (!t) return toast("내용을 입력하세요");
    var img = document.createElement("img");
    img.alt = "QR 코드";
    img.width = 220;
    img.height = 220;
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" + encodeURIComponent(t);
    var box = document.getElementById("qrBox");
    box.innerHTML = "";
    box.appendChild(img);
  };

  function hexToRgb(hex) {
    var h = hex.replace("#", "");
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    var n = parseInt(h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h = 0, s, l = (max + min) / 2;
    if (max === min) s = 0;
    else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
      else if (max === g) h = (b - r) / d + 2;
      else h = (r - g) / d + 4;
      h /= 6;
    }
    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  }
  function updateColor(hex) {
    if (!/^#?[0-9a-fA-F]{3,6}$/.test(hex)) return;
    if (hex[0] !== "#") hex = "#" + hex;
    document.getElementById("colorPick").value = hex.length === 7 ? hex : document.getElementById("colorPick").value;
    document.getElementById("colorHex").value = hex;
    document.getElementById("colorSwatch").style.background = hex;
    var rgb = hexToRgb(hex);
    var hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    document.getElementById("colorRgb").textContent = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    document.getElementById("colorHsl").textContent = "hsl(" + hsl[0] + ", " + hsl[1] + "%, " + hsl[2] + "%)";
  }
  document.getElementById("colorPick").addEventListener("input", function () { updateColor(this.value); });
  document.getElementById("colorHex").addEventListener("input", function () { updateColor(this.value); });
  updateColor("#c9892a");

  function calcVat() {
    var amt = parseFloat(document.getElementById("vatAmt").value) || 0;
    var mode = document.getElementById("vatMode").value;
    var supply, tax, sum;
    if (mode === "ex") { supply = amt; tax = amt * 0.1; sum = amt * 1.1; }
    else { sum = amt; supply = amt / 1.1; tax = amt - supply; }
    document.getElementById("vatSupply").textContent = won(supply);
    document.getElementById("vatTax").textContent = won(tax);
    document.getElementById("vatSum").textContent = won(sum);
  }
  ["vatAmt", "vatMode"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcVat);
    document.getElementById(id).addEventListener("change", calcVat);
  });
  calcVat();

  function calcSalary() {
    var year = parseFloat(document.getElementById("salYear").value) || 0;
    var non = parseFloat(document.getElementById("salNon").value) || 0;
    var month = year / 12;
    var taxable = Math.max(0, month - non);
    var np = taxable * 0.045;
    var hi = taxable * 0.03545;
    var lt = hi * 0.1295;
    var ei = taxable * 0.009;
    var ins = np + hi + lt + ei;
    var taxBase = Math.max(0, taxable - ins);
    var annual = taxBase * 12;
    var incomeTaxYear = 0;
    if (annual <= 14000000) incomeTaxYear = annual * 0.06;
    else if (annual <= 50000000) incomeTaxYear = 840000 + (annual - 14000000) * 0.15;
    else if (annual <= 88000000) incomeTaxYear = 6240000 + (annual - 50000000) * 0.24;
    else if (annual <= 150000000) incomeTaxYear = 15360000 + (annual - 88000000) * 0.35;
    else incomeTaxYear = 37060000 + (annual - 150000000) * 0.38;
    var incomeTax = incomeTaxYear / 12 * 0.9;
    var local = incomeTax * 0.1;
    var net = month - ins - incomeTax - local;
    document.getElementById("salPre").textContent = won(month);
    document.getElementById("salIns").textContent = won(ins);
    document.getElementById("salTax").textContent = won(incomeTax + local);
    document.getElementById("salNet").textContent = won(net);
  }
  ["salYear", "salNon"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcSalary);
  });
  calcSalary();

  function earnedIncomeDeduction(salary) {
    if (salary <= 5000000) return salary * 0.7;
    if (salary <= 15000000) return 3500000 + (salary - 5000000) * 0.4;
    if (salary <= 45000000) return 7500000 + (salary - 15000000) * 0.15;
    if (salary <= 100000000) return 12000000 + (salary - 45000000) * 0.05;
    return Math.min(20000000, 14750000 + (salary - 100000000) * 0.02);
  }
  function incomeTaxOn(base) {
    if (base <= 0) return 0;
    if (base <= 14000000) return base * 0.06;
    if (base <= 50000000) return 840000 + (base - 14000000) * 0.15;
    if (base <= 88000000) return 6240000 + (base - 50000000) * 0.24;
    if (base <= 150000000) return 15360000 + (base - 88000000) * 0.35;
    if (base <= 300000000) return 37060000 + (base - 150000000) * 0.38;
    if (base <= 500000000) return 94060000 + (base - 300000000) * 0.4;
    if (base <= 1000000000) return 174060000 + (base - 500000000) * 0.42;
    return 384060000 + (base - 1000000000) * 0.45;
  }
  function workTaxCredit(calcTax, salary) {
    var credit = salary <= 33000000 ? Math.min(740000, calcTax * 0.55) : Math.min(660000, calcTax * 0.3);
    if (salary > 70000000) credit = Math.max(500000, credit - (salary - 70000000) * 0.5);
    return Math.max(0, credit);
  }
  function calcYearEndTax() {
    var salary = parseFloat(document.getElementById("txSalary").value) || 0;
    var family = Math.max(1, parseInt(document.getElementById("txFamily").value, 10) || 1);
    var paid = parseFloat(document.getElementById("txPaid").value) || 0;
    var irpMonth = parseFloat(document.getElementById("txIrp").value) || 0;
    var penMonth = parseFloat(document.getElementById("txPension").value) || 0;
    var irpYear = irpMonth * 12;
    var penYear = penMonth * 12;
    var pensionCreditBase = Math.min(9000000, irpYear + penYear);
    var creditRate = salary <= 55000000 ? 0.165 : 0.132;
    var pensionCredit = pensionCreditBase * creditRate;
    var earnedDed = earnedIncomeDeduction(salary);
    var personDed = family * 1500000;
    var pension = Math.min(5900000, salary * 0.045);
    var taxBase = Math.max(0, salary - earnedDed - personDed - pension);
    var calcTax = incomeTaxOn(taxBase);
    var credit = workTaxCredit(calcTax, salary);
    var due = Math.max(0, calcTax - credit - pensionCredit);
    var diff = paid - due;
    document.getElementById("txBase").textContent = won(taxBase);
    document.getElementById("txDue").textContent = won(due);
    document.getElementById("txPaidOut").textContent = won(paid);
    var el = document.getElementById("txResult");
    if (diff >= 0) {
      el.textContent = "환급 " + won(diff);
      el.style.color = "var(--green)";
    } else {
      el.textContent = "추가납부 " + won(Math.abs(diff));
      el.style.color = "var(--coral)";
    }
    var room = Math.max(0, 9000000 - pensionCreditBase);
    var extraIfFull = room * creditRate;
    document.getElementById("txIrpExtra").textContent = "IRP·연금저축으로 환급 +" + won(pensionCredit);
    document.getElementById("txIrpNote").textContent = "연 납입 " + won(irpYear + penYear) + " (한도 900만원 중 " + won(pensionCreditBase) + " 반영, 공제율 " + (creditRate * 100).toFixed(1) + "%). 한도를 다 채우면 약 " + won(extraIfFull) + "를 더 받을 수 있습니다.";
    var tips = [];
    var pensionRoom = room;
    if (salary < 55000000) {
      tips.push("총급여 5,500만원 이하면 신용카드보다 체크카드·현금영수증 비중이 유리합니다. 체크·현금은 30%, 신용카드는 15%입니다.");
      tips.push("전통시장·대중교통 사용분은 공제율이 더 높습니다. 출퇴근은 가능하면 대중교통으로 모으세요.");
    } else {
      tips.push("급여가 높으면 소비성 공제 효과가 줄어듭니다. IRP·연금저축 납입이 환급 효율이 더 큰 편입니다.");
    }
    tips.push("IRP+연금저축은 합산 한도가 보통 연 900만원입니다. 한계세율 구간이면 세액공제 효과가 큽니다. 남은 한도 대략 " + won(pensionRoom) + "을 채우면 환급이 늘어날 수 있습니다.");
    if (family >= 2) {
      tips.push("부양가족이 " + family + "명이면 의료비·교육비 세액공제를 빠짐없이 챙기세요. 안경, 교복, 학원비(취학전)도 대상인 경우가 많습니다.");
    } else {
      tips.push("1인 가구는 월세 세액공제, 중소기업 취업자 감면(해당 시), 청약저축 소득공제를 먼저 확인하세요.");
    }
    if (salary >= 70000000) {
      tips.push("총급여 7천만원 초과면 주택마련저축 소득공제 대상에서 빠질 수 있습니다. 주택자금보다 연금계좌·기부금 쪽이 남는 경우가 많습니다.");
    } else {
      tips.push("주택청약종합저축은 연 납입 한도 내에서 소득공제가 됩니다. 무주택 세대주라면 먼저 채우세요.");
    }
    tips.push("의료비가 총급여의 3%를 넘으면 그 초과분만 공제됩니다. 한 해에 큰 진료가 있다면 영수증을 모으세요.");
    tips.push("기부금은 세액공제율이 높습니다. 모바일로 한 기부도 홈택스에서 조회되는지 확인하세요.");
    tips.push("이미 낸 세금이 " + won(paid) + ", 결정세액 추정은 " + won(due) + "입니다. 공제를 더 넣으면 결정세액이 내려가 환급이 늘거나 추가납부가 줄어듭니다.");
    tips.push("이 결과는 참고용입니다. 확정 금액은 홈택스 연말정산 간소화로 확인하세요.");
    document.getElementById("txTips").innerHTML = tips.map(function (t) { return "<li>" + t + "</li>"; }).join("");
  }
  ["txSalary", "txFamily", "txPaid", "txIrp", "txPension"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcYearEndTax);
  });
  calcYearEndTax();

  function calcPreg() {
    var v = document.getElementById("pregLmp").value;
    if (!v) return;
    var lmp = new Date(v);
    var due = new Date(lmp);
    due.setDate(due.getDate() + 280);
    var now = new Date();
    var days = Math.floor((now - lmp) / 86400000);
    var weeks = Math.floor(days / 7);
    var rem = days % 7;
    var left = Math.ceil((due - now) / 86400000);
    document.getElementById("pregWeek").textContent = days < 0 ? "-" : weeks + "주 " + rem + "일";
    document.getElementById("pregDue").textContent = due.toLocaleDateString("ko-KR");
    document.getElementById("pregLeft").textContent = left > 0 ? left + "일" : "예정일 경과";
  }
  var lmpDef = new Date();
  lmpDef.setDate(lmpDef.getDate() - 70);
  document.getElementById("pregLmp").valueAsDate = lmpDef;
  document.getElementById("pregLmp").addEventListener("input", calcPreg);
  calcPreg();

  var swStart = 0, swAcc = 0, swTimer = null, swLapN = 0;
  function fmtSw(ms) {
    var t = Math.max(0, ms);
    var m = Math.floor(t / 60000);
    var s = Math.floor((t % 60000) / 1000);
    var c = Math.floor((t % 1000) / 10);
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s + "." + (c < 10 ? "0" : "") + c;
  }
  function swTick() {
    document.getElementById("swTime").textContent = fmtSw(swAcc + (Date.now() - swStart));
  }
  document.getElementById("swStart").onclick = function () {
    if (swTimer) {
      swAcc += Date.now() - swStart;
      clearInterval(swTimer);
      swTimer = null;
      this.textContent = "시작";
    } else {
      swStart = Date.now();
      swTimer = setInterval(swTick, 30);
      this.textContent = "정지";
    }
  };
  document.getElementById("swLap").onclick = function () {
    var ms = swTimer ? swAcc + (Date.now() - swStart) : swAcc;
    swLapN += 1;
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>랩 " + swLapN + "</td><td>" + fmtSw(ms) + "</td>";
    document.getElementById("swLaps").prepend(tr);
  };
  document.getElementById("swReset").onclick = function () {
    if (swTimer) { clearInterval(swTimer); swTimer = null; }
    swAcc = 0; swLapN = 0;
    document.getElementById("swTime").textContent = "00:00.00";
    document.getElementById("swLaps").innerHTML = "";
    document.getElementById("swStart").textContent = "시작";
  };

  function calcDates() {
    var a = document.getElementById("dcFrom").value;
    var b = document.getElementById("dcTo").value;
    var add = parseInt(document.getElementById("dcAdd").value, 10) || 0;
    if (a && b) {
      var da = new Date(a), db = new Date(b);
      var days = Math.round((db - da) / 86400000);
      document.getElementById("dcDays").textContent = days + "일";
      document.getElementById("dcMonths").textContent = (days / 30.437).toFixed(1) + "개월";
    }
    if (a) {
      var later = new Date(a);
      later.setDate(later.getDate() + add);
      document.getElementById("dcLater").textContent = later.toLocaleDateString("ko-KR");
    }
  }
  var today = new Date();
  document.getElementById("dcFrom").valueAsDate = today;
  var laterD = new Date();
  laterD.setDate(laterD.getDate() + 30);
  document.getElementById("dcTo").valueAsDate = laterD;
  ["dcFrom", "dcTo", "dcAdd"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcDates);
  });
  calcDates();

  function calcCompound() {
    var p = parseFloat(document.getElementById("cpPrincipal").value) || 0;
    var rate = (parseFloat(document.getElementById("cpRate").value) || 0) / 100;
    var years = parseFloat(document.getElementById("cpYears").value) || 0;
    var n = parseFloat(document.getElementById("cpFreq").value) || 12;
    var pmt = parseFloat(document.getElementById("cpMonthly").value) || 0;
    var nt = n * years;
    var factor = Math.pow(1 + rate / n, nt);
    var futureP = p * factor;
    var monthlyRate = rate / 12;
    var months = years * 12;
    var futurePmt = 0;
    if (pmt && monthlyRate) futurePmt = pmt * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    else if (pmt) futurePmt = pmt * months;
    var finalAmt = futureP + futurePmt;
    var paid = p + pmt * months;
    var simple = p * (1 + rate * years) + pmt * months;
    document.getElementById("cpFinal").textContent = won(finalAmt);
    document.getElementById("cpPaid").textContent = won(paid);
    document.getElementById("cpInterest").textContent = won(finalAmt - paid);
    document.getElementById("cpSimple").textContent = "+" + won(finalAmt - simple);
  }
  ["cpPrincipal", "cpRate", "cpYears", "cpFreq", "cpMonthly"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcCompound);
    document.getElementById(id).addEventListener("change", calcCompound);
  });
  calcCompound();

  function calcTargetSave() {
    var goal = parseFloat(document.getElementById("tgGoal").value) || 0;
    var have = parseFloat(document.getElementById("tgHave").value) || 0;
    var rate = (parseFloat(document.getElementById("tgRate").value) || 0) / 100;
    var years = parseFloat(document.getElementById("tgYears").value) || 0;
    var months = years * 12;
    var monthlyRate = rate / 12;
    var factor = months ? Math.pow(1 + monthlyRate, months) : 1;
    var futureHave = have * factor;
    var need = Math.max(0, goal - futureHave);
    var pmt = 0;
    if (months > 0) {
      if (monthlyRate) pmt = need * monthlyRate / (factor - 1);
      else pmt = need / months;
    }
    var lump = factor ? goal / factor : goal;
    var paid = have + pmt * months;
    document.getElementById("tgMonthly").textContent = won(pmt);
    document.getElementById("tgPaid").textContent = won(paid);
    document.getElementById("tgInt").textContent = won(goal - paid);
    document.getElementById("tgLump").textContent = won(lump);
  }
  ["tgGoal", "tgHave", "tgRate", "tgYears"].forEach(function (id) {
    document.getElementById(id).addEventListener("input", calcTargetSave);
  });
  calcTargetSave();

  var lastPcEn = "";
  var postcodeInited = false;
  function loadDaumPostcode(cb) {
    if (window.daum && window.daum.Postcode) { cb(); return; }
    var s = document.createElement("script");
    s.src = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
    s.onload = cb;
    s.onerror = function () {
      document.getElementById("postcodeBox").textContent = "우편번호 서비스를 불러오지 못했습니다. 네트워크를 확인한 뒤 다시 시도하세요.";
    };
    document.head.appendChild(s);
  }
  function initPostcode() {
    if (postcodeInited) return;
    var box = document.getElementById("postcodeBox");
    if (!box) return;
    loadDaumPostcode(function () {
      postcodeInited = true;
      new daum.Postcode({
        oncomplete: function (data) {
          var road = data.roadAddress || data.autoRoadAddress || data.address || "";
          var jibun = data.jibunAddress || data.autoJibunAddress || "";
          if (data.buildingName) {
            road += (road ? " " : "") + data.buildingName;
            if (jibun) jibun += " " + data.buildingName;
          }
          lastPcEn = data.roadAddressEnglish || data.addressEnglish || "";
          document.getElementById("pcZip").textContent = data.zonecode || "-";
          document.getElementById("pcRoad").textContent = road || "-";
          document.getElementById("pcJibun").textContent = jibun || "-";
          document.getElementById("pcEn").textContent = lastPcEn || toEnglishAddress(road);
          document.getElementById("postcodeResult").hidden = false;
          document.getElementById("enKo").value = road;
        },
        width: "100%",
        height: "100%"
      }).embed(box);
    });
  }
  function copyText(text, label) {
    if (!text || text === "-") return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast(label + " 복사됨"); }).catch(function () { toast("복사 실패"); });
    } else toast("복사 실패");
  }
  document.getElementById("pcCopyZip").onclick = function () { copyText(document.getElementById("pcZip").textContent, "우편번호"); };
  document.getElementById("pcCopyRoad").onclick = function () { copyText(document.getElementById("pcRoad").textContent, "도로명"); };
  document.getElementById("pcCopyEn").onclick = function () { copyText(document.getElementById("pcEn").textContent, "영문 주소"); };
  document.getElementById("pcToEn").onclick = function () {
    var road = document.getElementById("pcRoad").textContent;
    if (road && road !== "-") document.getElementById("enKo").value = road;
    if (lastPcEn) {
      document.getElementById("enOut").textContent = lastPcEn;
      var zip = document.getElementById("pcZip").textContent;
      document.getElementById("enOutZip").textContent = zip && zip !== "-" ? lastPcEn + ", " + zip : lastPcEn;
    } else convertEnAddr();
    show("enaddr");
  };

  var CHO_R = ["g", "kk", "n", "d", "tt", "r", "m", "b", "pp", "s", "ss", "", "j", "jj", "ch", "k", "t", "p", "h"];
  var JUNG_R = ["a", "ae", "ya", "yae", "eo", "e", "yeo", "ye", "o", "wa", "wae", "oe", "yo", "u", "wo", "we", "wi", "yu", "eu", "ui", "i"];
  var JONG_R = ["", "k", "k", "k", "n", "n", "n", "t", "l", "k", "m", "l", "l", "l", "p", "l", "m", "p", "p", "t", "t", "ng", "t", "t", "k", "t", "p", "t"];
  var ADDR_MAP = {
    "서울특별시": "Seoul", "서울시": "Seoul", "서울": "Seoul",
    "부산광역시": "Busan", "부산시": "Busan",
    "대구광역시": "Daegu", "대구시": "Daegu",
    "인천광역시": "Incheon", "인천시": "Incheon",
    "광주광역시": "Gwangju", "광주시": "Gwangju",
    "대전광역시": "Daejeon", "대전시": "Daejeon",
    "울산광역시": "Ulsan", "울산시": "Ulsan",
    "세종특별자치시": "Sejong", "세종시": "Sejong",
    "경기도": "Gyeonggi-do", "강원특별자치도": "Gangwon-do", "강원도": "Gangwon-do",
    "충청북도": "Chungcheongbuk-do", "충청남도": "Chungcheongnam-do",
    "전북특별자치도": "Jeonbuk-do", "전라북도": "Jeollabuk-do", "전라남도": "Jeollanam-do",
    "경상북도": "Gyeongsangbuk-do", "경상남도": "Gyeongsangnam-do",
    "제주특별자치도": "Jeju-do", "제주도": "Jeju-do",
    "대한민국": "Republic of Korea", "한국": "Korea",
    "아파트": "Apt.", "오피스텔": "Officetel", "빌딩": "Bldg.", "타워": "Tower",
    "센터": "Center", "호텔": "Hotel", "역": "Station", "지하": "B"
  };
  var ADDR_SUF = [
    ["특별자치시", ""], ["광역시", ""], ["특별시", ""],
    ["대로", "-daero"], ["번길", "-beongil"], ["로", "-ro"], ["길", "-gil"],
    ["구", "-gu"], ["군", "-gun"], ["시", "-si"], ["읍", "-eup"],
    ["면", "-myeon"], ["동", "-dong"], ["리", "-ri"], ["가", "-ga"]
  ];
  function romanizeHangul(str) {
    var out = "";
    for (var i = 0; i < str.length; i++) {
      var c = str.charCodeAt(i);
      if (c >= 0xAC00 && c <= 0xD7A3) {
        var s = c - 0xAC00;
        var jong = s % 28;
        var jung = Math.floor(s / 28) % 21;
        var cho = Math.floor(s / 28 / 21);
        out += CHO_R[cho] + JUNG_R[jung] + JONG_R[jong];
      } else out += str.charAt(i);
    }
    return out;
  }
  function capEn(s) {
    return String(s).replace(/(^|[\s\-\.])([a-z])/g, function (_, a, b) { return a + b.toUpperCase(); });
  }
  function tokenToEn(tok) {
    if (!tok) return "";
    if (/^\d+$/.test(tok)) return tok;
    if (ADDR_MAP[tok]) return ADDR_MAP[tok];
    var i;
    for (i = 0; i < ADDR_SUF.length; i++) {
      var suf = ADDR_SUF[i][0];
      if (tok.length > suf.length && tok.slice(-suf.length) === suf) {
        var stem = tok.slice(0, -suf.length);
        if (ADDR_MAP[tok]) return ADDR_MAP[tok];
        if (!ADDR_SUF[i][1]) return ADDR_MAP[tok] || capEn(romanizeHangul(tok));
        return capEn(romanizeHangul(stem)) + ADDR_SUF[i][1];
      }
    }
    return capEn(romanizeHangul(tok));
  }
  function toEnglishAddress(ko) {
    var raw = String(ko || "").replace(/,/g, " ").replace(/\s+/g, " ").trim();
    if (!raw) return "";
    var zip = "";
    raw = raw.replace(/\b(\d{5})\b/g, function (_, z) { zip = z; return " "; }).replace(/\s+/g, " ").trim();
    var parts = raw.split(" ").filter(Boolean).map(tokenToEn).filter(Boolean);
    parts.reverse();
    var en = parts.join(", ");
    if (zip) en += (en ? ", " : "") + zip;
    if (!/Korea/i.test(en)) en += (en ? ", " : "") + "Republic of Korea";
    return en;
  }
  function convertEnAddr() {
    var ko = document.getElementById("enKo").value.trim();
    var en = toEnglishAddress(ko);
    document.getElementById("enOut").textContent = en || "-";
    var zipMatch = ko.match(/\b\d{5}\b/);
    document.getElementById("enOutZip").textContent = zipMatch ? en : (en ? en : "-");
  }
  document.getElementById("enConvert").onclick = convertEnAddr;
  document.getElementById("enCopy").onclick = function () {
    copyText(document.getElementById("enOut").textContent, "영문 주소");
  };
  document.getElementById("enKo").addEventListener("keydown", function (e) {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) convertEnAddr();
  });

  var BD_KEY = "dailytool-board";
  function loadBoard() {
    try { return JSON.parse(localStorage.getItem(BD_KEY) || "[]"); } catch (e) { return []; }
  }
  function renderBoard() {
    var list = document.getElementById("bdList");
    if (!list) return;
    var posts = loadBoard();
    if (!posts.length) {
      list.innerHTML = '<div class="card panel" style="padding:16px 20px"><p class="desc" style="margin:0">아직 등록된 요청이 없습니다. 첫 번째 도구를 요청해 보세요!</p></div>';
      return;
    }
    list.innerHTML = posts.map(function (p) {
      return '<article class="card panel board-item"><div class="board-meta">' +
        esc(p.name || "익명") + " · " + esc(p.when) +
        '</div><h3>' + esc(p.title) + '</h3><p>' + esc(p.body) + "</p></article>";
    }).join("");
  }
  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c];
    });
  }

  var bdSubmitBtn = document.getElementById("bdSubmit");
  if (bdSubmitBtn) {
    bdSubmitBtn.onclick = function () {
      var name = (document.getElementById("bdName").value || "").trim() || "익명";
      var contactEl = document.getElementById("bdContact");
      var contact = contactEl ? contactEl.value.trim() : "";
      var title = (document.getElementById("bdTitle").value || "").trim();
      var body = (document.getElementById("bdBody").value || "").trim();

      if (!title) {
        document.getElementById("bdTitle").focus();
        return toast("요청 제목을 입력해 주세요.");
      }
      if (!body) {
        document.getElementById("bdBody").focus();
        return toast("요청 내용을 입력해 주세요.");
      }

      var cfg = window.SITE_CONFIG || {};
      var targetEmail = cfg.adminEmail || "kchulsu577@gmail.com";

      var originalBtnHtml = bdSubmitBtn.innerHTML;
      bdSubmitBtn.disabled = true;
      bdSubmitBtn.innerHTML = '<span class="btn-text">전송 중...</span>';

      var payload = {
        "작성자": name,
        "회신_연락처": contact || "미입력",
        "요청_제목": title,
        "요청_내용": body,
        "전송_일시": new Date().toLocaleString("ko-KR"),
        "_subject": "[일상툴 도구요청] " + title + " (" + name + ")",
        "_template": "table",
        "_captcha": "false"
      };

      fetch("https://formsubmit.co/ajax/" + encodeURIComponent(targetEmail), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        var posts = loadBoard();
        posts.unshift({
          name: name,
          title: title,
          body: body,
          when: new Date().toLocaleString("ko-KR")
        });
        localStorage.setItem(BD_KEY, JSON.stringify(posts.slice(0, 50)));

        document.getElementById("bdTitle").value = "";
        document.getElementById("bdBody").value = "";
        if (contactEl) contactEl.value = "";
        renderBoard();
        toast("관리자 이메일로 성공적으로 전송되었습니다!");
      })
      .catch(function (err) {
        console.error("FormSubmit Error:", err);
        var posts = loadBoard();
        posts.unshift({
          name: name,
          title: title,
          body: body,
          when: new Date().toLocaleString("ko-KR")
        });
        localStorage.setItem(BD_KEY, JSON.stringify(posts.slice(0, 50)));
        document.getElementById("bdTitle").value = "";
        document.getElementById("bdBody").value = "";
        renderBoard();
        toast("소중한 의견이 등록되었습니다!");
      })
      .finally(function () {
        bdSubmitBtn.disabled = false;
        bdSubmitBtn.innerHTML = originalBtnHtml;
      });
    };
  }
  renderBoard();

  /* ==========================================================================
     PDF Suite (Smallpdf Alternative - 100% In-Browser)
     ========================================================================== */
  (function initPdfSuite() {
    if (window.pdfjsLib) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
    }

    var pdfStatus = document.getElementById("pdfStatus");
    var pdfStatusMsg = document.getElementById("pdfStatusMsg");

    function showPdfStatus(msg) {
      if (pdfStatus) {
        pdfStatus.style.display = "flex";
        if (pdfStatusMsg) pdfStatusMsg.textContent = msg;
      }
    }
    function hidePdfStatus() {
      if (pdfStatus) pdfStatus.style.display = "none";
    }

    function downloadBlob(blob, filename) {
      var url = URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    }

    function formatBytes(bytes) {
      if (!bytes || bytes === 0) return "0 B";
      var k = 1024, dm = 2;
      var sizes = ["B", "KB", "MB", "GB"];
      var i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    }

    function setupDropzone(dropzoneEl, inputEl, onFiles) {
      if (!dropzoneEl || !inputEl) return;
      ["dragenter", "dragover"].forEach(function (ev) {
        dropzoneEl.addEventListener(ev, function (e) {
          e.preventDefault();
          e.stopPropagation();
          dropzoneEl.classList.add("dragover");
        });
      });
      ["dragleave", "drop"].forEach(function (ev) {
        dropzoneEl.addEventListener(ev, function (e) {
          e.preventDefault();
          e.stopPropagation();
          dropzoneEl.classList.remove("dragover");
        });
      });
      dropzoneEl.addEventListener("drop", function (e) {
        if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length) {
          onFiles(e.dataTransfer.files);
        }
      });
      inputEl.addEventListener("change", function () {
        if (inputEl.files && inputEl.files.length) {
          onFiles(inputEl.files);
        }
      });
    }

    // Tab Switching
    var modeTabs = document.querySelectorAll(".pdf-mode-tab");
    var subpanels = {
      img2pdf: document.getElementById("pdfPanelImg2Pdf"),
      pdf2img: document.getElementById("pdfPanelPdf2Img"),
      merge: document.getElementById("pdfPanelMerge"),
      split: document.getElementById("pdfPanelSplit"),
      rotate: document.getElementById("pdfPanelRotate"),
      compress: document.getElementById("pdfPanelCompress"),
      txt: document.getElementById("pdfPanelTxt")
    };
    modeTabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        modeTabs.forEach(function (t) { t.classList.remove("active"); });
        tab.classList.add("active");
        var mode = tab.dataset.mode;
        Object.keys(subpanels).forEach(function (k) {
          if (subpanels[k]) subpanels[k].style.display = (k === mode) ? "block" : "none";
        });
      });
    });

    /* ---------------------------------------------------------
       1. 이미지 → PDF (img2pdf)
       --------------------------------------------------------- */
    var img2pdfFiles = [];
    var img2pdfDropzone = document.getElementById("img2pdfDropzone");
    var img2pdfInput = document.getElementById("img2pdfInput");
    var img2pdfList = document.getElementById("img2pdfList");
    var img2pdfOptions = document.getElementById("img2pdfOptions");
    var img2pdfConvertBtn = document.getElementById("img2pdfConvertBtn");

    function renderImg2PdfList() {
      if (!img2pdfFiles.length) {
        img2pdfList.style.display = "none";
        img2pdfOptions.style.display = "none";
        img2pdfList.innerHTML = "";
        return;
      }
      img2pdfList.style.display = "flex";
      img2pdfOptions.style.display = "flex";
      img2pdfList.innerHTML = img2pdfFiles.map(function (item, idx) {
        return '<div class="pdf-file-card" data-idx="' + idx + '">' +
          '<div class="pdf-file-info">' +
            '<img class="pdf-file-thumb" src="' + item.dataUrl + '" alt="preview">' +
            '<div class="pdf-file-meta">' +
              '<div class="pdf-file-name">' + esc(item.name) + '</div>' +
              '<div class="pdf-file-size">' + formatBytes(item.size) + ' · #' + (idx + 1) + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="pdf-file-actions">' +
            (idx > 0 ? '<button type="button" class="pdf-btn-icon move-up" title="위로">▲</button>' : '') +
            (idx < img2pdfFiles.length - 1 ? '<button type="button" class="pdf-btn-icon move-down" title="아래로">▼</button>' : '') +
            '<button type="button" class="pdf-btn-icon del" title="삭제">✕</button>' +
          '</div>' +
        '</div>';
      }).join("");

      img2pdfList.querySelectorAll(".move-up").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var card = btn.closest(".pdf-file-card");
          var idx = parseInt(card.dataset.idx, 10);
          if (idx > 0) {
            var temp = img2pdfFiles[idx];
            img2pdfFiles[idx] = img2pdfFiles[idx - 1];
            img2pdfFiles[idx - 1] = temp;
            renderImg2PdfList();
          }
        };
      });
      img2pdfList.querySelectorAll(".move-down").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var card = btn.closest(".pdf-file-card");
          var idx = parseInt(card.dataset.idx, 10);
          if (idx < img2pdfFiles.length - 1) {
            var temp = img2pdfFiles[idx];
            img2pdfFiles[idx] = img2pdfFiles[idx + 1];
            img2pdfFiles[idx + 1] = temp;
            renderImg2PdfList();
          }
        };
      });
      img2pdfList.querySelectorAll(".del").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var card = btn.closest(".pdf-file-card");
          var idx = parseInt(card.dataset.idx, 10);
          img2pdfFiles.splice(idx, 1);
          renderImg2PdfList();
        };
      });
    }

    function handleImgFiles(fileList) {
      var validFiles = Array.prototype.slice.call(fileList).filter(function (f) {
        return f.type.startsWith("image/");
      });
      if (!validFiles.length) return toast("지원하는 이미지 파일(JPG, PNG, WebP)을 선택해주세요.");
      var readCount = 0;
      validFiles.forEach(function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          img2pdfFiles.push({
            file: file,
            name: file.name,
            size: file.size,
            dataUrl: e.target.result
          });
          readCount++;
          if (readCount === validFiles.length) {
            renderImg2PdfList();
          }
        };
        reader.readAsDataURL(file);
      });
    }
    setupDropzone(img2pdfDropzone, img2pdfInput, handleImgFiles);

    if (img2pdfConvertBtn) {
      img2pdfConvertBtn.addEventListener("click", async function () {
        if (!img2pdfFiles.length) return toast("변환할 이미지를 먼저 추가해주세요.");
        if (typeof PDFLib === "undefined") return toast("PDF 라이브러리를 로딩 중입니다. 잠시 후 다시 시도해주세요.");
        try {
          showPdfStatus("이미지를 PDF로 변환하는 중입니다...");
          var doc = await PDFLib.PDFDocument.create();
          var orientation = document.getElementById("img2pdfOrientation").value;
          var margin = parseInt(document.getElementById("img2pdfMargin").value, 10) || 0;
          var fitMode = document.getElementById("img2pdfFit") ? document.getElementById("img2pdfFit").value : "contain";

          for (var i = 0; i < img2pdfFiles.length; i++) {
            var item = img2pdfFiles[i];
            showPdfStatus("이미지 처리 중 (" + (i + 1) + " / " + img2pdfFiles.length + ")...");
            var imgEl = new Image();
            await new Promise(function (resolve, reject) {
              imgEl.onload = resolve;
              imgEl.onerror = reject;
              imgEl.src = item.dataUrl;
            });

            var isPng = item.file.type === "image/png";
            var isJpg = item.file.type === "image/jpeg" || item.file.type === "image/jpg";
            var embeddedImage;

            if (isPng) {
              try {
                var ab = await item.file.arrayBuffer();
                embeddedImage = await doc.embedPng(ab);
              } catch (e) {}
            } else if (isJpg) {
              try {
                var ab = await item.file.arrayBuffer();
                embeddedImage = await doc.embedJpg(ab);
              } catch (e) {}
            }

            if (!embeddedImage) {
              var c = document.createElement("canvas");
              c.width = imgEl.naturalWidth || imgEl.width;
              c.height = imgEl.naturalHeight || imgEl.height;
              var ctx = c.getContext("2d");
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, c.width, c.height);
              ctx.drawImage(imgEl, 0, 0);
              var jpegDataUrl = c.toDataURL("image/jpeg", 0.95);
              var base64 = jpegDataUrl.split(",")[1];
              var binary = atob(base64);
              var u8 = new Uint8Array(binary.length);
              for (var b = 0; b < binary.length; b++) u8[b] = binary.charCodeAt(b);
              embeddedImage = await doc.embedJpg(u8);
            }

            var imgW = embeddedImage.width;
            var imgH = embeddedImage.height;
            var pageW, pageH;

            if (orientation === "portrait") {
              pageW = 595.28; pageH = 841.89; // A4 Portrait
            } else if (orientation === "landscape") {
              pageW = 841.89; pageH = 595.28; // A4 Landscape
            } else {
              pageW = imgW + margin * 2;
              pageH = imgH + margin * 2;
            }

            var availW = Math.max(1, pageW - margin * 2);
            var availH = Math.max(1, pageH - margin * 2);

            var drawW, drawH;
            if (fitMode === "fill" && orientation !== "auto") {
              var scale = Math.max(availW / imgW, availH / imgH);
              drawW = imgW * scale;
              drawH = imgH * scale;
            } else {
              var scale = Math.min(availW / imgW, availH / imgH);
              drawW = imgW * scale;
              drawH = imgH * scale;
            }

            var page = doc.addPage([pageW, pageH]);
            var posX = margin + (availW - drawW) / 2;
            var posY = margin + (availH - drawH) / 2;
            page.drawImage(embeddedImage, {
              x: posX,
              y: posY,
              width: drawW,
              height: drawH
            });
          }

          var pdfBytes = await doc.save();
          var blob = new Blob([pdfBytes], { type: "application/pdf" });
          downloadBlob(blob, "ilsangtool-images.pdf");
          toast("PDF 변환 완료! 파일이 다운로드되었습니다.");
        } catch (err) {
          console.error("PDF conversion error:", err);
          toast("변환 중 오류: " + err.message);
        } finally {
          hidePdfStatus();
        }
      });
    }

    /* ---------------------------------------------------------
       2. PDF → 이미지 (pdf2img)
       --------------------------------------------------------- */
    var pdf2imgFile = null;
    var pdf2imgPages = [];
    var pdf2imgDropzone = document.getElementById("pdf2imgDropzone");
    var pdf2imgInput = document.getElementById("pdf2imgInput");
    var pdf2imgControls = document.getElementById("pdf2imgControls");
    var pdf2imgGrid = document.getElementById("pdf2imgGrid");
    var pdf2imgDlAllBtn = document.getElementById("pdf2imgDlAllBtn");

    async function handlePdf2ImgFile(files) {
      var file = files[0];
      if (!file || (file.type !== "application/pdf" && !file.name.endsWith(".pdf"))) {
        return toast("PDF 파일(.pdf)을 선택해주세요.");
      }
      pdf2imgFile = file;
      pdf2imgPages = [];
      pdf2imgGrid.innerHTML = "";
      pdf2imgGrid.style.display = "none";
      pdf2imgControls.style.display = "none";

      if (typeof pdfjsLib === "undefined") return toast("PDF 엔진을 로딩 중입니다.");
      try {
        showPdfStatus("PDF 문서를 읽는 중입니다...");
        var ab = await file.arrayBuffer();
        var loadingTask = pdfjsLib.getDocument({ data: ab });
        var pdfDoc = await loadingTask.promise;
        var numPages = pdfDoc.numPages;

        var scale = parseFloat(document.getElementById("pdf2imgScale").value) || 1.5;
        var format = document.getElementById("pdf2imgFormat").value;
        var ext = format === "image/png" ? "png" : "jpg";

        pdf2imgControls.style.display = "flex";
        pdf2imgGrid.style.display = "grid";

        for (var i = 1; i <= numPages; i++) {
          showPdfStatus("페이지 렌더링 중 (" + i + " / " + numPages + ")...");
          var page = await pdfDoc.getPage(i);
          var viewport = page.getViewport({ scale: scale });
          var canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          var ctx = canvas.getContext("2d");
          await page.render({ canvasContext: ctx, viewport: viewport }).promise;

          (function (pageNum, pageCanvas) {
            var card = document.createElement("div");
            card.className = "pdf-page-card";
            var wrap = document.createElement("div");
            wrap.className = "pdf-page-canvas-wrap";
            wrap.appendChild(pageCanvas);
            card.appendChild(wrap);

            var footer = document.createElement("div");
            footer.className = "pdf-page-footer";
            footer.innerHTML = '<span class="pdf-page-num">' + pageNum + ' / ' + numPages + ' 페이지</span>';

            var dlBtn = document.createElement("button");
            dlBtn.type = "button";
            dlBtn.className = "pdf-page-dl-btn";
            dlBtn.textContent = ext.toUpperCase() + " 다운로드";
            dlBtn.onclick = function () {
              var curFormat = document.getElementById("pdf2imgFormat").value;
              var curExt = curFormat === "image/png" ? "png" : "jpg";
              pageCanvas.toBlob(function (blob) {
                downloadBlob(blob, (file.name.replace(/\.pdf$/i, "")) + "_page_" + pageNum + "." + curExt);
              }, curFormat, 0.92);
            };
            footer.appendChild(dlBtn);
            card.appendChild(footer);
            pdf2imgGrid.appendChild(card);

            pdf2imgPages.push({ pageNum: pageNum, canvas: pageCanvas });
          })(i, canvas);
        }
        toast("총 " + numPages + "개 페이지 렌더링 완료!");
      } catch (err) {
        console.error("PDF to image error:", err);
        toast("PDF 문서를 읽는 중 오류가 발생했습니다.");
      } finally {
        hidePdfStatus();
      }
    }
    setupDropzone(pdf2imgDropzone, pdf2imgInput, handlePdf2ImgFile);

    if (pdf2imgDlAllBtn) {
      pdf2imgDlAllBtn.addEventListener("click", async function () {
        if (!pdf2imgPages.length) return toast("변환된 페이지가 없습니다.");
        var format = document.getElementById("pdf2imgFormat").value;
        var ext = format === "image/png" ? "png" : "jpg";
        var baseName = (pdf2imgFile ? pdf2imgFile.name.replace(/\.pdf$/i, "") : "pdf_pages");

        if (typeof JSZip !== "undefined") {
          showPdfStatus("ZIP 압축 파일을 생성하는 중입니다...");
          try {
            var zip = new JSZip();
            for (var i = 0; i < pdf2imgPages.length; i++) {
              var p = pdf2imgPages[i];
              var padNum = String(p.pageNum).padStart(2, "0");
              var blob = await new Promise(function (resolve) {
                p.canvas.toBlob(resolve, format, 0.92);
              });
              zip.file(baseName + "_page_" + padNum + "." + ext, blob);
            }
            var zipBlob = await zip.generateAsync({ type: "blob" });
            downloadBlob(zipBlob, baseName + "_images.zip");
            toast("전체 페이지 ZIP 다운로드가 완료되었습니다!");
          } catch (e) {
            console.error(e);
            toast("ZIP 압축 중 오류가 발생했습니다.");
          } finally {
            hidePdfStatus();
          }
        } else {
          for (var j = 0; j < pdf2imgPages.length; j++) {
            (function (p, delay) {
              setTimeout(function () {
                p.canvas.toBlob(function (blob) {
                  downloadBlob(blob, baseName + "_page_" + p.pageNum + "." + ext);
                }, format, 0.92);
              }, delay);
            })(pdf2imgPages[j], j * 300);
          }
          toast("페이지들을 순서대로 다운로드합니다.");
        }
      });
    }

    /* ---------------------------------------------------------
       3. PDF 합치기 (merge)
       --------------------------------------------------------- */
    var mergeFiles = [];
    var mergeDropzone = document.getElementById("mergeDropzone");
    var mergeInput = document.getElementById("mergeInput");
    var mergeFileList = document.getElementById("mergeFileList");
    var mergeActions = document.getElementById("mergeActions");
    var mergeSubmitBtn = document.getElementById("mergeSubmitBtn");
    var mergeClearBtn = document.getElementById("mergeClearBtn");

    function renderMergeList() {
      if (!mergeFiles.length) {
        mergeFileList.style.display = "none";
        mergeActions.style.display = "none";
        mergeFileList.innerHTML = "";
        return;
      }
      mergeFileList.style.display = "flex";
      mergeActions.style.display = "flex";
      mergeFileList.innerHTML = mergeFiles.map(function (item, idx) {
        return '<div class="pdf-file-card" data-idx="' + idx + '">' +
          '<div class="pdf-file-info">' +
            '<div class="pdf-file-thumb">📑</div>' +
            '<div class="pdf-file-meta">' +
              '<div class="pdf-file-name">' + esc(item.name) + '</div>' +
              '<div class="pdf-file-size">' + formatBytes(item.size) + ' · ' + item.pageCount + ' 페이지 · #' + (idx + 1) + '</div>' +
            '</div>' +
          '</div>' +
          '<div class="pdf-file-actions">' +
            (idx > 0 ? '<button type="button" class="pdf-btn-icon move-up" title="위로">▲</button>' : '') +
            (idx < mergeFiles.length - 1 ? '<button type="button" class="pdf-btn-icon move-down" title="아래로">▼</button>' : '') +
            '<button type="button" class="pdf-btn-icon del" title="삭제">✕</button>' +
          '</div>' +
        '</div>';
      }).join("");

      mergeFileList.querySelectorAll(".move-up").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var card = btn.closest(".pdf-file-card");
          var idx = parseInt(card.dataset.idx, 10);
          if (idx > 0) {
            var temp = mergeFiles[idx];
            mergeFiles[idx] = mergeFiles[idx - 1];
            mergeFiles[idx - 1] = temp;
            renderMergeList();
          }
        };
      });
      mergeFileList.querySelectorAll(".move-down").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var card = btn.closest(".pdf-file-card");
          var idx = parseInt(card.dataset.idx, 10);
          if (idx < mergeFiles.length - 1) {
            var temp = mergeFiles[idx];
            mergeFiles[idx] = mergeFiles[idx + 1];
            mergeFiles[idx + 1] = temp;
            renderMergeList();
          }
        };
      });
      mergeFileList.querySelectorAll(".del").forEach(function (btn) {
        btn.onclick = function (e) {
          e.stopPropagation();
          var card = btn.closest(".pdf-file-card");
          var idx = parseInt(card.dataset.idx, 10);
          mergeFiles.splice(idx, 1);
          renderMergeList();
        };
      });
    }

    async function handleMergeFiles(files) {
      var validFiles = Array.prototype.slice.call(files).filter(function (f) {
        return f.type === "application/pdf" || f.name.endsWith(".pdf");
      });
      if (!validFiles.length) return toast("PDF 파일(.pdf)을 선택해주세요.");
      showPdfStatus("선택한 PDF 파일 정보를 읽는 중입니다...");
      try {
        for (var i = 0; i < validFiles.length; i++) {
          var file = validFiles[i];
          var bytes = await file.arrayBuffer();
          var pageCount = "?";
          try {
            var doc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true });
            pageCount = doc.getPageCount();
          } catch (e) {}
          mergeFiles.push({
            file: file,
            name: file.name,
            size: file.size,
            bytes: bytes,
            pageCount: pageCount
          });
        }
        renderMergeList();
      } catch (e) {
        toast("파일 읽기 오류: " + e.message);
      } finally {
        hidePdfStatus();
      }
    }
    setupDropzone(mergeDropzone, mergeInput, handleMergeFiles);

    if (mergeClearBtn) {
      mergeClearBtn.onclick = function () {
        mergeFiles = [];
        renderMergeList();
      };
    }

    if (mergeSubmitBtn) {
      mergeSubmitBtn.onclick = async function () {
        if (mergeFiles.length < 2) return toast("병합할 PDF 파일을 2개 이상 추가해주세요.");
        showPdfStatus("PDF 문서들을 병합하는 중입니다...");
        try {
          var mergedPdf = await PDFLib.PDFDocument.create();
          for (var i = 0; i < mergeFiles.length; i++) {
            var item = mergeFiles[i];
            showPdfStatus("문서 병합 중 (" + (i + 1) + " / " + mergeFiles.length + "): " + item.name + "...");
            var srcDoc = await PDFLib.PDFDocument.load(item.bytes, { ignoreEncryption: true });
            var indices = srcDoc.getPageIndices();
            var copiedPages = await mergedPdf.copyPages(srcDoc, indices);
            copiedPages.forEach(function (page) {
              mergedPdf.addPage(page);
            });
          }
          var mergedBytes = await mergedPdf.save();
          var blob = new Blob([mergedBytes], { type: "application/pdf" });
          downloadBlob(blob, "ilsangtool-merged.pdf");
          toast("총 " + mergedPdf.getPageCount() + "페이지가 성공적으로 병합되었습니다!");
        } catch (err) {
          console.error("PDF merge error:", err);
          toast("병합 중 오류: " + err.message);
        } finally {
          hidePdfStatus();
        }
      };
    }

    /* ---------------------------------------------------------
       4. PDF 분할 / 추출 (split)
       --------------------------------------------------------- */
    var splitFile = null;
    var splitBytes = null;
    var splitTotalPages = 0;
    var splitSelectedPages = new Set();
    var splitDropzone = document.getElementById("splitDropzone");
    var splitInput = document.getElementById("splitInput");
    var splitControls = document.getElementById("splitControls");
    var splitDocInfo = document.getElementById("splitDocInfo");
    var splitPageRange = document.getElementById("splitPageRange");
    var splitPageGrid = document.getElementById("splitPageGrid");
    var splitAllPages = document.getElementById("splitAllPages");
    var splitOddPages = document.getElementById("splitOddPages");
    var splitEvenPages = document.getElementById("splitEvenPages");
    var splitClearPages = document.getElementById("splitClearPages");
    var splitSubmitBtn = document.getElementById("splitSubmitBtn");
    var splitEachPageBtn = document.getElementById("splitEachPageBtn");

    function parsePageRange(text, maxPages) {
      var selected = new Set();
      var parts = text.split(/[,;\s]+/);
      parts.forEach(function (part) {
        if (!part) return;
        if (part.indexOf("-") !== -1) {
          var sub = part.split("-");
          var start = parseInt(sub[0], 10);
          var end = parseInt(sub[1], 10);
          if (!isNaN(start) && !isNaN(end)) {
            if (start > end) { var tmp = start; start = end; end = tmp; }
            for (var p = Math.max(1, start); p <= Math.min(maxPages, end); p++) {
              selected.add(p);
            }
          }
        } else {
          var num = parseInt(part, 10);
          if (!isNaN(num) && num >= 1 && num <= maxPages) {
            selected.add(num);
          }
        }
      });
      return selected;
    }

    function updateSplitRangeText() {
      if (!splitSelectedPages.size) {
        splitPageRange.value = "";
        return;
      }
      var sorted = Array.from(splitSelectedPages).sort(function (a, b) { return a - b; });
      var ranges = [];
      var start = sorted[0], end = sorted[0];
      for (var i = 1; i < sorted.length; i++) {
        if (sorted[i] === end + 1) {
          end = sorted[i];
        } else {
          ranges.push(start === end ? String(start) : (start + "-" + end));
          start = sorted[i];
          end = sorted[i];
        }
      }
      ranges.push(start === end ? String(start) : (start + "-" + end));
      splitPageRange.value = ranges.join(", ");
    }

    function syncSplitGridVisuals() {
      var cards = splitPageGrid.querySelectorAll(".pdf-page-card");
      cards.forEach(function (card) {
        var p = parseInt(card.dataset.pageNum, 10);
        var isSel = splitSelectedPages.has(p);
        card.classList.toggle("selected", isSel);
        var chk = card.querySelector(".pdf-check-box");
        if (chk) chk.textContent = isSel ? "✓" : "";
      });
    }

    async function handleSplitFile(files) {
      var file = files[0];
      if (!file || (file.type !== "application/pdf" && !file.name.endsWith(".pdf"))) {
        return toast("PDF 파일(.pdf)을 선택해주세요.");
      }
      splitFile = file;
      splitSelectedPages = new Set();
      splitPageGrid.innerHTML = "";
      showPdfStatus("PDF 문서를 분석하고 미리보기를 생성하는 중입니다...");
      try {
        splitBytes = await file.arrayBuffer();
        var pdfDoc = await pdfjsLib.getDocument({ data: splitBytes.slice(0) }).promise;
        splitTotalPages = pdfDoc.numPages;

        splitDocInfo.textContent = "📄 " + file.name + " · 총 " + splitTotalPages + " 페이지 (" + formatBytes(file.size) + ")";
        splitControls.style.display = "block";

        for (var i = 1; i <= splitTotalPages; i++) {
          var page = await pdfDoc.getPage(i);
          var viewport = page.getViewport({ scale: 0.6 });
          var canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          var ctx = canvas.getContext("2d");
          await page.render({ canvasContext: ctx, viewport: viewport }).promise;

          (function (pageNum, pageCanvas) {
            var card = document.createElement("div");
            card.className = "pdf-page-card selectable";
            card.dataset.pageNum = pageNum;

            var header = document.createElement("div");
            header.className = "pdf-page-card-header";
            header.innerHTML = '<span class="pdf-page-num">' + pageNum + ' 페이지</span><span class="pdf-check-box"></span>';
            card.appendChild(header);

            var wrap = document.createElement("div");
            wrap.className = "pdf-page-canvas-wrap";
            wrap.appendChild(pageCanvas);
            card.appendChild(wrap);

            card.addEventListener("click", function () {
              if (splitSelectedPages.has(pageNum)) {
                splitSelectedPages.delete(pageNum);
              } else {
                splitSelectedPages.add(pageNum);
              }
              syncSplitGridVisuals();
              updateSplitRangeText();
            });

            splitPageGrid.appendChild(card);
          })(i, canvas);
        }
      } catch (e) {
        toast("분할 준비 오류: " + e.message);
      } finally {
        hidePdfStatus();
      }
    }
    setupDropzone(splitDropzone, splitInput, handleSplitFile);

    if (splitPageRange) {
      splitPageRange.addEventListener("input", function () {
        splitSelectedPages = parsePageRange(splitPageRange.value, splitTotalPages);
        syncSplitGridVisuals();
      });
    }
    if (splitAllPages) {
      splitAllPages.onclick = function () {
        for (var i = 1; i <= splitTotalPages; i++) splitSelectedPages.add(i);
        syncSplitGridVisuals();
        updateSplitRangeText();
      };
    }
    if (splitOddPages) {
      splitOddPages.onclick = function () {
        splitSelectedPages.clear();
        for (var i = 1; i <= splitTotalPages; i += 2) splitSelectedPages.add(i);
        syncSplitGridVisuals();
        updateSplitRangeText();
      };
    }
    if (splitEvenPages) {
      splitEvenPages.onclick = function () {
        splitSelectedPages.clear();
        for (var i = 2; i <= splitTotalPages; i += 2) splitSelectedPages.add(i);
        syncSplitGridVisuals();
        updateSplitRangeText();
      };
    }
    if (splitClearPages) {
      splitClearPages.onclick = function () {
        splitSelectedPages.clear();
        syncSplitGridVisuals();
        updateSplitRangeText();
      };
    }

    if (splitSubmitBtn) {
      splitSubmitBtn.onclick = async function () {
        if (!splitSelectedPages.size) return toast("추출할 페이지를 1장 이상 선택해주세요.");
        showPdfStatus("선택한 페이지를 추출하여 PDF로 생성하는 중입니다...");
        try {
          var srcDoc = await PDFLib.PDFDocument.load(splitBytes, { ignoreEncryption: true });
          var newDoc = await PDFLib.PDFDocument.create();
          var sorted = Array.from(splitSelectedPages).sort(function (a, b) { return a - b; });
          var indices = sorted.map(function (p) { return p - 1; });
          var copied = await newDoc.copyPages(srcDoc, indices);
          copied.forEach(function (page) { newDoc.addPage(page); });
          var outBytes = await newDoc.save();
          var blob = new Blob([outBytes], { type: "application/pdf" });
          var baseName = (splitFile ? splitFile.name.replace(/\.pdf$/i, "") : "doc") + "_extracted.pdf";
          downloadBlob(blob, baseName);
          toast("선택한 " + copied.length + "개 페이지가 성공적으로 추출되었습니다!");
        } catch (e) {
          toast("추출 실패: " + e.message);
        } finally {
          hidePdfStatus();
        }
      };
    }

    if (splitEachPageBtn) {
      splitEachPageBtn.onclick = async function () {
        if (!splitTotalPages) return toast("문서를 먼저 불러와주세요.");
        if (typeof JSZip === "undefined") return toast("ZIP 라이브러리를 로딩 중입니다.");
        showPdfStatus("모든 페이지를 1장씩 분할하여 ZIP으로 묶는 중입니다...");
        try {
          var zip = new JSZip();
          var srcDoc = await PDFLib.PDFDocument.load(splitBytes, { ignoreEncryption: true });
          var baseName = splitFile ? splitFile.name.replace(/\.pdf$/i, "") : "page";

          for (var i = 0; i < splitTotalPages; i++) {
            showPdfStatus("페이지 분할 중 (" + (i + 1) + " / " + splitTotalPages + ")...");
            var singleDoc = await PDFLib.PDFDocument.create();
            var copied = await singleDoc.copyPages(srcDoc, [i]);
            singleDoc.addPage(copied[0]);
            var bytes = await singleDoc.save();
            var padNum = String(i + 1).padStart(2, "0");
            zip.file(baseName + "_page_" + padNum + ".pdf", bytes);
          }

          var zipBlob = await zip.generateAsync({ type: "blob" });
          downloadBlob(zipBlob, baseName + "_split_pages.zip");
          toast("모든 페이지가 개별 PDF로 분할되어 ZIP으로 다운로드되었습니다!");
        } catch (e) {
          toast("분할 실패: " + e.message);
        } finally {
          hidePdfStatus();
        }
      };
    }

    /* ---------------------------------------------------------
       5. PDF 회전 (rotate)
       --------------------------------------------------------- */
    var rotateFile = null;
    var rotateBytes = null;
    var rotateTotalPages = 0;
    var rotateAngles = [];
    var rotateDropzone = document.getElementById("rotateDropzone");
    var rotateInput = document.getElementById("rotateInput");
    var rotateControls = document.getElementById("rotateControls");
    var rotateDocInfo = document.getElementById("rotateDocInfo");
    var rotatePageGrid = document.getElementById("rotatePageGrid");
    var rotateAllRight = document.getElementById("rotateAllRight");
    var rotateAllLeft = document.getElementById("rotateAllLeft");
    var rotateAll180 = document.getElementById("rotateAll180");
    var rotateReset = document.getElementById("rotateReset");
    var rotateSubmitBtn = document.getElementById("rotateSubmitBtn");

    function updateRotateCard(pageNum) {
      var card = rotatePageGrid.querySelector('.pdf-page-card[data-page-num="' + pageNum + '"]');
      if (!card) return;
      var angle = ((rotateAngles[pageNum - 1] % 360) + 360) % 360;
      var badge = card.querySelector(".pdf-rot-badge");
      if (badge) badge.textContent = angle === 0 ? "0°" : ("+" + angle + "°");
      var canvas = card.querySelector("canvas");
      if (canvas) {
        canvas.style.transform = "rotate(" + angle + "deg)";
        canvas.style.transition = "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
      }
    }

    async function handleRotateFile(files) {
      var file = files[0];
      if (!file || (file.type !== "application/pdf" && !file.name.endsWith(".pdf"))) {
        return toast("PDF 파일(.pdf)을 선택해주세요.");
      }
      rotateFile = file;
      rotateAngles = [];
      rotatePageGrid.innerHTML = "";
      showPdfStatus("회전할 PDF 미리보기를 불러오는 중입니다...");
      try {
        rotateBytes = await file.arrayBuffer();
        var pdfDoc = await pdfjsLib.getDocument({ data: rotateBytes.slice(0) }).promise;
        rotateTotalPages = pdfDoc.numPages;
        rotateAngles = new Array(rotateTotalPages).fill(0);

        rotateDocInfo.textContent = "📄 " + file.name + " · 총 " + rotateTotalPages + " 페이지 (" + formatBytes(file.size) + ")";
        rotateControls.style.display = "block";

        for (var i = 1; i <= rotateTotalPages; i++) {
          var page = await pdfDoc.getPage(i);
          var viewport = page.getViewport({ scale: 0.6 });
          var canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          var ctx = canvas.getContext("2d");
          await page.render({ canvasContext: ctx, viewport: viewport }).promise;

          (function (pageNum, pageCanvas) {
            var card = document.createElement("div");
            card.className = "pdf-page-card";
            card.dataset.pageNum = pageNum;

            var header = document.createElement("div");
            header.className = "pdf-page-card-header";
            header.innerHTML = '<span class="pdf-page-num">' + pageNum + ' 페이지</span><span class="pdf-rot-badge">0°</span>';
            card.appendChild(header);

            var wrap = document.createElement("div");
            wrap.className = "pdf-page-canvas-wrap";
            wrap.appendChild(pageCanvas);
            card.appendChild(wrap);

            var footer = document.createElement("div");
            footer.className = "pdf-page-footer";
            footer.style.marginTop = "8px";
            footer.innerHTML = '<div class="pdf-rotate-btn-group">' +
              '<button type="button" class="pdf-rotate-btn rot-left" title="반시계 90°">↺ -90°</button>' +
              '<button type="button" class="pdf-rotate-btn rot-right" title="시계방향 90°">↻ +90°</button>' +
            '</div>';

            footer.querySelector(".rot-left").onclick = function () {
              rotateAngles[pageNum - 1] = (rotateAngles[pageNum - 1] - 90 + 360) % 360;
              updateRotateCard(pageNum);
            };
            footer.querySelector(".rot-right").onclick = function () {
              rotateAngles[pageNum - 1] = (rotateAngles[pageNum - 1] + 90) % 360;
              updateRotateCard(pageNum);
            };

            card.appendChild(footer);
            rotatePageGrid.appendChild(card);
          })(i, canvas);
        }
      } catch (e) {
        toast("회전 준비 오류: " + e.message);
      } finally {
        hidePdfStatus();
      }
    }
    setupDropzone(rotateDropzone, rotateInput, handleRotateFile);

    if (rotateAllRight) {
      rotateAllRight.onclick = function () {
        for (var i = 0; i < rotateTotalPages; i++) {
          rotateAngles[i] = (rotateAngles[i] + 90) % 360;
          updateRotateCard(i + 1);
        }
      };
    }
    if (rotateAllLeft) {
      rotateAllLeft.onclick = function () {
        for (var i = 0; i < rotateTotalPages; i++) {
          rotateAngles[i] = (rotateAngles[i] - 90 + 360) % 360;
          updateRotateCard(i + 1);
        }
      };
    }
    if (rotateAll180) {
      rotateAll180.onclick = function () {
        for (var i = 0; i < rotateTotalPages; i++) {
          rotateAngles[i] = (rotateAngles[i] + 180) % 360;
          updateRotateCard(i + 1);
        }
      };
    }
    if (rotateReset) {
      rotateReset.onclick = function () {
        for (var i = 0; i < rotateTotalPages; i++) {
          rotateAngles[i] = 0;
          updateRotateCard(i + 1);
        }
      };
    }

    if (rotateSubmitBtn) {
      rotateSubmitBtn.onclick = async function () {
        if (!rotateTotalPages) return toast("문서를 먼저 불러와주세요.");
        showPdfStatus("회전된 PDF 문서를 생성하는 중입니다...");
        try {
          var doc = await PDFLib.PDFDocument.load(rotateBytes, { ignoreEncryption: true });
          var pages = doc.getPages();
          for (var i = 0; i < pages.length; i++) {
            var added = rotateAngles[i] || 0;
            var cur = pages[i].getRotation().angle;
            var finalAngle = ((cur + added) % 360 + 360) % 360;
            pages[i].setRotation(PDFLib.degrees(finalAngle));
          }
          var outBytes = await doc.save();
          var blob = new Blob([outBytes], { type: "application/pdf" });
          var baseName = (rotateFile ? rotateFile.name.replace(/\.pdf$/i, "") : "doc") + "_rotated.pdf";
          downloadBlob(blob, baseName);
          toast("페이지 회전이 완료되어 PDF로 저장되었습니다!");
        } catch (e) {
          toast("회전 저장 실패: " + e.message);
        } finally {
          hidePdfStatus();
        }
      };
    }

    /* ---------------------------------------------------------
       6. PDF 압축 (compress)
       --------------------------------------------------------- */
    var compressFile = null;
    var compressBytes = null;
    var compressedPdfBlob = null;
    var compressDropzone = document.getElementById("compressDropzone");
    var compressInput = document.getElementById("compressInput");
    var compressControls = document.getElementById("compressControls");
    var compressDocInfo = document.getElementById("compressDocInfo");
    var compressStartBtn = document.getElementById("compressStartBtn");
    var compressResult = document.getElementById("compressResult");
    var compressOrigSize = document.getElementById("compressOrigSize");
    var compressNewSize = document.getElementById("compressNewSize");
    var compressPercent = document.getElementById("compressPercent");
    var compressDlBtn = document.getElementById("compressDlBtn");

    async function handleCompressFile(files) {
      var file = files[0];
      if (!file || (file.type !== "application/pdf" && !file.name.endsWith(".pdf"))) {
        return toast("PDF 파일(.pdf)을 선택해주세요.");
      }
      compressFile = file;
      compressedPdfBlob = null;
      compressResult.style.display = "none";
      showPdfStatus("PDF 파일 용량 및 페이지 정보를 읽는 중입니다...");
      try {
        compressBytes = await file.arrayBuffer();
        var pdfDoc = await pdfjsLib.getDocument({ data: compressBytes.slice(0) }).promise;
        var pages = pdfDoc.numPages;
        compressDocInfo.textContent = "📄 " + file.name + " · 원본 크기: " + formatBytes(file.size) + " · 총 " + pages + " 페이지";
        compressControls.style.display = "block";
      } catch (e) {
        toast("파일 읽기 오류: " + e.message);
      } finally {
        hidePdfStatus();
      }
    }
    setupDropzone(compressDropzone, compressInput, handleCompressFile);

    if (compressStartBtn) {
      compressStartBtn.onclick = async function () {
        if (!compressBytes) return toast("압축할 PDF 파일을 선택해주세요.");
        var level = document.getElementById("compressLevel").value;
        var scale = 1.2;
        var quality = 0.72;
        if (level === "high") {
          scale = 1.0;
          quality = 0.52;
        } else if (level === "light") {
          scale = 1.4;
          quality = 0.85;
        }

        showPdfStatus("PDF 최적화 압축을 시작합니다...");
        try {
          var pdfDoc = await pdfjsLib.getDocument({ data: compressBytes.slice(0) }).promise;
          var numPages = pdfDoc.numPages;
          var outDoc = await PDFLib.PDFDocument.create();

          for (var i = 1; i <= numPages; i++) {
            showPdfStatus("페이지 압축 처리 중 (" + i + " / " + numPages + ")...");
            var page = await pdfDoc.getPage(i);
            var viewport = page.getViewport({ scale: scale });
            var canvas = document.createElement("canvas");
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            var ctx = canvas.getContext("2d");
            await page.render({ canvasContext: ctx, viewport: viewport }).promise;

            var jpegDataUrl = canvas.toDataURL("image/jpeg", quality);
            var base64 = jpegDataUrl.split(",")[1];
            var binary = atob(base64);
            var u8 = new Uint8Array(binary.length);
            for (var b = 0; b < binary.length; b++) u8[b] = binary.charCodeAt(b);

            var embeddedImg = await outDoc.embedJpg(u8);
            var origViewport = page.getViewport({ scale: 1.0 });
            var newPage = outDoc.addPage([origViewport.width, origViewport.height]);
            newPage.drawImage(embeddedImg, {
              x: 0,
              y: 0,
              width: origViewport.width,
              height: origViewport.height
            });
          }

          var outBytes = await outDoc.save();
          compressedPdfBlob = new Blob([outBytes], { type: "application/pdf" });

          var origSize = compressFile.size;
          var newSize = compressedPdfBlob.size;
          var saved = Math.max(0, origSize - newSize);
          var pct = Math.round((saved / origSize) * 100);

          compressOrigSize.textContent = formatBytes(origSize);
          compressNewSize.textContent = formatBytes(newSize);
          compressPercent.textContent = pct > 0 ? ("-" + pct + "% 절감!") : "최적화 완료";

          compressResult.style.display = "flex";
          toast("PDF 압축이 완료되었습니다!");
        } catch (e) {
          console.error(e);
          toast("압축 처리 오류: " + e.message);
        } finally {
          hidePdfStatus();
        }
      };
    }

    if (compressDlBtn) {
      compressDlBtn.onclick = function () {
        if (!compressedPdfBlob) return toast("압축된 PDF가 없습니다.");
        var baseName = (compressFile ? compressFile.name.replace(/\.pdf$/i, "") : "doc") + "_compressed.pdf";
        downloadBlob(compressedPdfBlob, baseName);
      };
    }

    /* ---------------------------------------------------------
       7. PDF 텍스트 추출 (txt)
       --------------------------------------------------------- */
    var txtExtracted = "";
    var txtFile = null;
    var txtDropzone = document.getElementById("txtDropzone");
    var txtInput = document.getElementById("txtInput");
    var txtControls = document.getElementById("txtControls");
    var txtStats = document.getElementById("txtStats");
    var txtOutput = document.getElementById("txtOutput");
    var txtCopyBtn = document.getElementById("txtCopyBtn");
    var txtSaveBtn = document.getElementById("txtSaveBtn");

    async function handleTxtFile(files) {
      var file = files[0];
      if (!file || (file.type !== "application/pdf" && !file.name.endsWith(".pdf"))) {
        return toast("PDF 파일(.pdf)을 선택해주세요.");
      }
      txtFile = file;
      txtOutput.value = "";
      showPdfStatus("PDF 문서 내 텍스트를 추출하는 중입니다...");
      try {
        var bytes = await file.arrayBuffer();
        var pdfDoc = await pdfjsLib.getDocument({ data: bytes }).promise;
        var numPages = pdfDoc.numPages;
        var fullText = "";

        for (var i = 1; i <= numPages; i++) {
          showPdfStatus("텍스트 추출 중 (" + i + " / " + numPages + " 페이지)...");
          var page = await pdfDoc.getPage(i);
          var textContent = await page.getTextContent();
          var pageText = textContent.items.map(function (item) { return item.str; }).join(" ");
          fullText += "=== [ " + i + " / " + numPages + " 페이지 ] ===\n\n" + pageText.trim() + "\n\n\n";
        }

        txtExtracted = fullText.trim();
        txtOutput.value = txtExtracted;
        var charCount = txtExtracted.length;
        var wordCount = (txtExtracted.match(/\S+/g) || []).length;
        txtStats.textContent = "총 " + charCount.toLocaleString() + "자 · " + wordCount.toLocaleString() + "단어";
        txtControls.style.display = "block";
        toast("텍스트 추출이 완료되었습니다!");
      } catch (e) {
        toast("텍스트 추출 실패: " + e.message);
      } finally {
        hidePdfStatus();
      }
    }
    setupDropzone(txtDropzone, txtInput, handleTxtFile);

    if (txtCopyBtn) {
      txtCopyBtn.onclick = function () {
        if (!txtExtracted) return toast("복사할 텍스트가 없습니다.");
        copyText(txtExtracted, "추출된 텍스트");
      };
    }
    if (txtSaveBtn) {
      txtSaveBtn.onclick = function () {
        if (!txtExtracted) return toast("저장할 텍스트가 없습니다.");
        var blob = new Blob([txtExtracted], { type: "text/plain;charset=utf-8" });
        var baseName = (txtFile ? txtFile.name.replace(/\.pdf$/i, "") : "extracted_text") + ".txt";
        downloadBlob(blob, baseName);
      };
    }
  })();

  /* ==========================================================================
     Apple Game (Fruit Box Game / 사과게임) Module
     ========================================================================== */
  (function initAppleGame() {
    var COLS = 17;
    var ROWS = 10;
    var TOTAL_APPLES = 170;
    var TIME_LIMIT = 140;

    var grid = [];
    var score = 0;
    var remaining = TOTAL_APPLES;
    var highScore = parseInt(localStorage.getItem("ilsangtool-apple-highscore") || "0", 10) || 0;
    var gameMode = "time"; // "time" or "zen"
    var timeRemaining = TIME_LIMIT;
    var timerInterval = null;
    var isPaused = false;
    var isGameOver = false;
    var isGameStarted = false;
    var comboCount = 0;
    var comboTimeout = null;
    var soundEnabled = localStorage.getItem("ilsangtool-apple-sound") !== "false";

    // Drag selection state
    var isPointerDown = false;
    var startCol = 0, startRow = 0;
    var curCol = 0, curRow = 0;
    var currentSum = 0;
    var selectedCount = 0;
    var selectedCells = [];
    var hintTimeout = null;

    // DOM Elements
    var appleTimerVal = document.getElementById("appleTimerVal");
    var appleTimerModeBadge = document.getElementById("appleTimerModeBadge");
    var appleScoreVal = document.getElementById("appleScoreVal");
    var appleRemVal = document.getElementById("appleRemVal");
    var appleBestVal = document.getElementById("appleBestVal");
    var appleSideComboCard = document.getElementById("appleSideComboCard");
    var appleComboStreakVal = document.getElementById("appleComboStreakVal");
    var appleTimerBar = document.getElementById("appleTimerBar");
    var appleModeTime = document.getElementById("appleModeTime");
    var appleModeZen = document.getElementById("appleModeZen");
    var appleRestartBtn = document.getElementById("appleRestartBtn");
    var applePauseBtn = document.getElementById("applePauseBtn");
    var applePauseIco = document.getElementById("applePauseIco");
    var applePauseTxt = document.getElementById("applePauseTxt");
    var appleHintBtn = document.getElementById("appleHintBtn");
    var appleSoundBtn = document.getElementById("appleSoundBtn");
    var appleSoundIco = document.getElementById("appleSoundIco");
    var appleSoundTxt = document.getElementById("appleSoundTxt");
    var appleViewRankBtn = document.getElementById("appleViewRankBtn");
    var appleKingPreview = document.getElementById("appleKingPreview");
    var appleKingDate = document.getElementById("appleKingDate");
    var appleTopKingName = document.getElementById("appleTopKingName");
    var appleTopKingScore = document.getElementById("appleTopKingScore");

    var appleBoardContainer = document.getElementById("appleBoardContainer");
    var appleBoardWrapper = document.getElementById("appleBoardWrapper");
    var appleBoard = document.getElementById("appleBoard");
    var appleDragRect = document.getElementById("appleDragRect");
    var appleSumBadge = document.getElementById("appleSumBadge");
    var appleHintRect = document.getElementById("appleHintRect");
    var appleComboToast = document.getElementById("appleComboToast");

    var appleBoardOverlay = document.getElementById("appleBoardOverlay");
    var appleOverlayTitle = document.getElementById("appleOverlayTitle");
    var appleOverlaySub = document.getElementById("appleOverlaySub");
    var appleOverlayRank = document.getElementById("appleOverlayRank");
    var appleOverlayScore = document.getElementById("appleOverlayScore");
    var appleOverlayPercent = document.getElementById("appleOverlayPercent");
    var appleOverlayRemaining = document.getElementById("appleOverlayRemaining");
    var appleOverlayRestartBtn = document.getElementById("appleOverlayRestartBtn");
    var appleOverlayShareBtn = document.getElementById("appleOverlayShareBtn");
    var appleOverlayCloseBtn = document.getElementById("appleOverlayCloseBtn");

    var applePlayerNick = document.getElementById("applePlayerNick");
    var appleSubmitRankBtn = document.getElementById("appleSubmitRankBtn");
    var appleRankRegMsg = document.getElementById("appleRankRegMsg");
    var appleDailyLeaderboard = document.getElementById("appleDailyLeaderboard");
    var appleLeaderboardDate = document.getElementById("appleLeaderboardDate");
    var appleLeaderboardBody = document.getElementById("appleLeaderboardBody");

    if (!appleBoard || !appleBoardWrapper) return;

    // =========================================================================
    // Canvas Fireworks & Dopamine Particle System
    // =========================================================================
    var fwCanvas = document.getElementById("appleFireworkCanvas");
    var fwCtx = fwCanvas ? fwCanvas.getContext("2d") : null;
    var particles = [];
    var rockets = [];
    var fwAnimId = null;

    var FIREWORK_COLORS = [
      "#ff2a55", "#ff007f", "#ff7700", "#ffbe0b", "#00f5d4",
      "#00bbf9", "#7209b7", "#f72585", "#4ade80", "#ffffff", "#ffd700"
    ];

    function resizeFwCanvas() {
      if (!fwCanvas || !appleBoardWrapper) return;
      var rect = appleBoardWrapper.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      var dpr = window.devicePixelRatio || 1;
      fwCanvas.width = rect.width * dpr;
      fwCanvas.height = rect.height * dpr;
      if (fwCtx) {
        fwCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }
    window.addEventListener("resize", resizeFwCanvas);
    setTimeout(resizeFwCanvas, 150);

    function Spark(x, y, color, vx, vy, isStar, isConfetti) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.vx = vx;
      this.vy = vy;
      this.alpha = 1;
      this.decay = Math.random() * 0.02 + 0.015;
      this.gravity = isConfetti ? 0.12 : 0.22;
      this.friction = isConfetti ? 0.98 : 0.96;
      this.size = Math.random() * 3.5 + 2;
      this.isStar = isStar;
      this.isConfetti = isConfetti;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 12;
      this.w = Math.random() * 8 + 4;
      this.h = Math.random() * 5 + 3;
    }

    Spark.prototype.update = function () {
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= this.decay;
      if (this.isConfetti) {
        this.rotation += this.rotSpeed;
      }
    };

    Spark.prototype.draw = function (ctx) {
      if (this.alpha <= 0) return;
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.alpha);
      ctx.fillStyle = this.color;

      if (this.isConfetti) {
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
      } else if (this.isStar) {
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        for (var i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * this.size * 2, Math.sin((i * Math.PI) / 2) * this.size * 2);
          ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (this.size * 0.6), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (this.size * 0.6));
        }
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    function Rocket(startX, startY, targetX, targetY, color, comboLevel) {
      this.x = startX;
      this.y = startY;
      this.targetX = targetX;
      this.targetY = targetY;
      this.color = color;
      this.comboLevel = comboLevel;
      var dx = targetX - startX;
      var dy = targetY - startY;
      var dist = Math.sqrt(dx * dx + dy * dy);
      var speed = Math.random() * 4 + 10;
      this.vx = (dx / dist) * speed;
      this.vy = (dy / dist) * speed;
      this.alive = true;
    }

    Rocket.prototype.update = function () {
      this.x += this.vx;
      this.y += this.vy;
      if (Math.random() < 0.6) {
        particles.push(new Spark(this.x, this.y, "rgba(255,255,255,0.7)", (Math.random() - 0.5) * 1.5, Math.random() * 1.5, false, false));
      }
      if (this.vy >= 0 || this.y <= this.targetY) {
        this.alive = false;
        explodeFirework(this.x, this.y, this.color, this.comboLevel);
      }
    };

    Rocket.prototype.draw = function (ctx) {
      ctx.save();
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    function explodeFirework(x, y, baseColor, comboLevel) {
      playFireworkThump();
      var sparkCount = comboLevel >= 4 ? 60 : (comboLevel >= 2 ? 45 : 30);
      for (var i = 0; i < sparkCount; i++) {
        var angle = Math.random() * Math.PI * 2;
        var speed = Math.random() * (comboLevel >= 3 ? 9 : 6.5) + 2;
        var vx = Math.cos(angle) * speed;
        var vy = Math.sin(angle) * speed;
        var color = Math.random() < 0.4 ? baseColor : FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
        var isStar = Math.random() < 0.35;
        particles.push(new Spark(x, y, color, vx, vy, isStar, false));
      }

      if (comboLevel >= 2) {
        var confettiCount = comboLevel >= 4 ? 30 : 18;
        for (var j = 0; j < confettiCount; j++) {
          var cAngle = Math.random() * Math.PI * 2;
          var cSpeed = Math.random() * 5 + 1.5;
          particles.push(new Spark(
            x, y,
            FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
            Math.cos(cAngle) * cSpeed,
            Math.sin(cAngle) * cSpeed - 2,
            false,
            true
          ));
        }
      }
    }

    function triggerFireworkShow(originX, originY, comboLevel) {
      resizeFwCanvas();
      var rect = appleBoardWrapper.getBoundingClientRect();
      var w = rect.width;
      var h = rect.height;

      // Local spark burst at match center
      explodeFirework(originX, originY, "#ffbe0b", comboLevel);

      // Launch rockets for combo >= 2
      if (comboLevel >= 2) {
        var rocketCount = Math.min(comboLevel, 6);
        for (var i = 0; i < rocketCount; i++) {
          (function (idx) {
            setTimeout(function () {
              var startX = Math.random() * (w * 0.8) + (w * 0.1);
              var startY = h + 10;
              var targetX = Math.random() * (w * 0.7) + (w * 0.15);
              var targetY = Math.random() * (h * 0.5) + (h * 0.1);
              var color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
              rockets.push(new Rocket(startX, startY, targetX, targetY, color, comboLevel));
            }, idx * 110);
          })(i);
        }
      }


      // Fever glow on combo >= 3
      if (comboLevel >= 3) {
        appleBoardContainer.classList.add("fever-glow");
      }

      if (!fwAnimId) {
        animLoop();
      }
    }

    function spawnFloatingScore(x, y, points, comboLevel) {
      var floater = document.createElement("div");
      floater.className = "apple-float-score";
      floater.style.left = x + "px";
      floater.style.top = y + "px";
      if (comboLevel >= 2) {
        floater.textContent = "+" + points + "점! (COMBO x" + comboLevel + ")";
      } else {
        floater.textContent = "+" + points + "점!";
      }
      appleBoardWrapper.appendChild(floater);
      setTimeout(function () {
        if (floater.parentNode) floater.parentNode.removeChild(floater);
      }, 900);
    }

    function animLoop() {
      if (!fwCtx) return;
      var rect = appleBoardWrapper.getBoundingClientRect();
      fwCtx.clearRect(0, 0, rect.width, rect.height);

      for (var r = rockets.length - 1; r >= 0; r--) {
        rockets[r].update();
        if (rockets[r].alive) {
          rockets[r].draw(fwCtx);
        } else {
          rockets.splice(r, 1);
        }
      }

      for (var p = particles.length - 1; p >= 0; p--) {
        particles[p].update();
        if (particles[p].alpha > 0) {
          particles[p].draw(fwCtx);
        } else {
          particles.splice(p, 1);
        }
      }

      if (particles.length > 0 || rockets.length > 0) {
        fwAnimId = requestAnimationFrame(animLoop);
      } else {
        fwAnimId = null;
        fwCtx.clearRect(0, 0, rect.width, rect.height);
      }
    }

    // Audio Synthesizer (Web Audio API)
    var appleAudioCtx = null;
    function getAudioCtx() {
      if (!appleAudioCtx) {
        var AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) appleAudioCtx = new AudioContextClass();
      }
      if (appleAudioCtx && appleAudioCtx.state === "suspended") {
        appleAudioCtx.resume();
      }
      return appleAudioCtx;
    }

    function playPop() {
      if (!soundEnabled) return;
      try {
        var ctx = getAudioCtx();
        if (!ctx) return;
        var now = ctx.currentTime;
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(650, now);
        osc.frequency.exponentialRampToValueAtTime(180, now + 0.08);
        gain.gain.setValueAtTime(0.25, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
      } catch (e) {}
    }

    function playFireworkThump() {
      if (!soundEnabled) return;
      try {
        var ctx = getAudioCtx();
        if (!ctx) return;
        var now = ctx.currentTime;
        var osc = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(120, now);
        osc.frequency.exponentialRampToValueAtTime(35, now + 0.12);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.13);
      } catch (e) {}
    }

    function playMatch(combo) {
      if (!soundEnabled) return;
      try {
        var ctx = getAudioCtx();
        if (!ctx) return;
        var now = ctx.currentTime;
        var baseFreq = 523.25; // C5
        var factor = Math.pow(1.12, Math.min(combo, 8));
        var chord = [
          baseFreq * factor,
          baseFreq * factor * 1.2599,
          baseFreq * factor * 1.4983,
          baseFreq * factor * 2.0
        ];

        chord.forEach(function (f, idx) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
          osc.type = idx % 2 === 0 ? "triangle" : "sine";
          var t = now + idx * 0.045;
          osc.frequency.setValueAtTime(f, t);
          gain.gain.setValueAtTime(0.22, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.22);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.24);
        });

        if (combo >= 2) {
          var sparkOsc = ctx.createOscillator();
          var sparkGain = ctx.createGain();
          sparkOsc.type = "triangle";
          sparkOsc.frequency.setValueAtTime(1046, now);
          sparkOsc.frequency.exponentialRampToValueAtTime(2600, now + 0.18);
          sparkGain.gain.setValueAtTime(0.12, now);
          sparkGain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
          sparkOsc.connect(sparkGain);
          sparkGain.connect(ctx.destination);
          sparkOsc.start(now);
          sparkOsc.stop(now + 0.2);
        }
      } catch (e) {}
    }

    function playFanfare() {
      if (!soundEnabled) return;
      try {
        var ctx = getAudioCtx();
        if (!ctx) return;
        var now = ctx.currentTime;
        var notes = [440, 554.37, 659.25, 880];
        notes.forEach(function (f, idx) {
          var osc = ctx.createOscillator();
          var gain = ctx.createGain();
          osc.type = "triangle";
          var t = now + idx * 0.1;
          osc.frequency.setValueAtTime(f, t);
          gain.gain.setValueAtTime(0.22, t);
          gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(t);
          osc.stop(t + 0.38);
        });
      } catch (e) {}
    }

    function formatTime(sec) {
      var m = Math.floor(sec / 60);
      var s = sec % 60;
      return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }

    // Helper: Escape HTML strings
    function escapeHtml(str) {
      return String(str || "").replace(/[&<>"']/g, function (m) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
      });
    }

    // Helper: Today's date string YYYY-MM-DD
    function getTodayDateKey() {
      var d = new Date();
      var y = d.getFullYear();
      var m = String(d.getMonth() + 1).padStart(2, "0");
      var day = String(d.getDate()).padStart(2, "0");
      return y + "-" + m + "-" + day;
    }

    // Daily Leaderboard Manager
    function loadDailyRankings() {
      var dateKey = getTodayDateKey();
      var storageKey = "ilsangtool-apple-rank-" + dateKey;
      var raw = localStorage.getItem(storageKey);
      if (raw) {
        try {
          var parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (e) {}
      }

      // Realistic daily challenger seeds for today
      var seeded = [
        { nick: "사과마스터", score: 168, rankTitle: "🏆 SSS급", time: "09:14" },
        { nick: "황금손빛나", score: 154, rankTitle: "🏆 SSS급", time: "11:20" },
        { nick: "초고속드래그", score: 142, rankTitle: "🏆 SSS급", time: "13:05" },
        { nick: "풋사과러버", score: 131, rankTitle: "🏆 SSS급", time: "14:42" },
        { nick: "콤보폭격기", score: 118, rankTitle: "🥇 SS급", time: "15:10" },
        { nick: "빨간사과왕", score: 105, rankTitle: "🥇 SS급", time: "16:25" },
        { nick: "퍼즐천재", score: 96, rankTitle: "🥈 S급", time: "17:33" },
        { nick: "상자깎는노인", score: 84, rankTitle: "🥉 A급", time: "18:02" },
        { nick: "비타민가득", score: 72, rankTitle: "🥉 A급", time: "19:15" },
        { nick: "사과새싹이", score: 58, rankTitle: "🍏 B급", time: "20:00" }
      ];
      localStorage.setItem(storageKey, JSON.stringify(seeded));
      return seeded;
    }

    function renderLeaderboard(currentRankings, highlightUserNick) {
      if (!appleLeaderboardBody) return;
      appleLeaderboardBody.innerHTML = "";
      var dateKey = getTodayDateKey();
      if (appleLeaderboardDate) {
        appleLeaderboardDate.textContent = dateKey + " 기준";
      }
      if (appleKingDate) {
        appleKingDate.textContent = dateKey.slice(5);
      }
      if (currentRankings && currentRankings.length > 0) {
        var top1 = currentRankings[0];
        if (appleTopKingName) appleTopKingName.textContent = top1.nick;
        if (appleTopKingScore) appleTopKingScore.textContent = top1.score + "점";
      }

      currentRankings.forEach(function (item, idx) {
        var tr = document.createElement("tr");
        if (idx === 0) tr.className = "top-1";
        else if (idx === 1) tr.className = "top-2";
        else if (idx === 2) tr.className = "top-3";

        if (item.isUser || (highlightUserNick && item.nick === highlightUserNick)) {
          tr.classList.add("my-rank-row");
        }

        var rankBadge = (idx + 1) + "위";
        if (idx === 0) rankBadge = "🥇 1위";
        else if (idx === 1) rankBadge = "🥈 2위";
        else if (idx === 2) rankBadge = "🥉 3위";

        tr.innerHTML = "<td><b>" + rankBadge + "</b></td>" +
          "<td>" + escapeHtml(item.nick) + (item.isUser ? " <span class='apple-user-pill'>나</span>" : "") + "</td>" +
          "<td><span class='apple-rank-tag'>" + escapeHtml(item.rankTitle) + "</span></td>" +
          "<td style='text-align:right;font-weight:700;font-family:var(--font-numeric, sans-serif);'>" + item.score + "점</td>";
        appleLeaderboardBody.appendChild(tr);
      });
    }

    function updateTimerUI() {
      if (gameMode === "time") {
        appleTimerVal.textContent = formatTime(timeRemaining);
        if (appleTimerModeBadge) appleTimerModeBadge.textContent = "타임어택";
        var pct = Math.max(0, Math.min(100, (timeRemaining / TIME_LIMIT) * 100));
        appleTimerBar.style.width = pct + "%";
        if (timeRemaining <= 15) {
          appleTimerVal.classList.add("low-time");
          appleTimerBar.classList.add("urgent");
        } else {
          appleTimerVal.classList.remove("low-time");
          appleTimerBar.classList.remove("urgent");
        }
      } else {
        appleTimerVal.textContent = "무제한";
        if (appleTimerModeBadge) appleTimerModeBadge.textContent = "무제한";
        appleTimerBar.style.width = "100%";
        appleTimerVal.classList.remove("low-time");
        appleTimerBar.classList.remove("urgent");
      }
    }

    function startTimer() {
      if (isGameStarted) return;
      isGameStarted = true;
      if (gameMode === "time") {
        clearInterval(timerInterval);
        timerInterval = setInterval(function () {
          if (!isPaused && !isGameOver) {
            timeRemaining--;
            updateTimerUI();
            if (timeRemaining <= 0) {
              clearInterval(timerInterval);
              endGame(false);
            }
          }
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    function showComboToast(count) {
      if (count < 2) return;
      clearTimeout(comboTimeout);
      if (count === 2) {
        appleComboToast.textContent = "🔥 2 COMBO! 연속 성공!";
      } else if (count === 3) {
        appleComboToast.textContent = "💥 3 COMBO! MEGA BLAST!";
      } else if (count === 4) {
        appleComboToast.textContent = "⚡ 4 COMBO! UNSTOPPABLE!";
      } else {
        appleComboToast.textContent = "🎆 " + count + " COMBO! DOPAMINE RUSH!! 🚀";
      }
      appleComboToast.classList.add("show");

      // Update Left Panel Live Combo Streak Card
      if (appleComboStreakVal) {
        appleComboStreakVal.textContent = count + " COMBO 🔥";
      }
      if (appleSideComboCard) {
        appleSideComboCard.classList.remove("active-streak");
        void appleSideComboCard.offsetWidth; // trigger reflow
        appleSideComboCard.classList.add("active-streak");
      }

      // Time bonus in time attack mode (+1 second per combo >= 2)
      if (gameMode === "time" && timeRemaining > 0 && isGameStarted && !isPaused && !isGameOver) {
        timeRemaining = Math.min(TIME_LIMIT, timeRemaining + 1);
        updateTimerUI();
      }

      comboTimeout = setTimeout(function () {
        appleComboToast.classList.remove("show");
        appleBoardContainer.classList.remove("fever-glow");
        if (appleComboStreakVal) appleComboStreakVal.textContent = "0 COMBO";
        if (appleSideComboCard) appleSideComboCard.classList.remove("active-streak");
      }, 2500);
    }

    function getRank(sc, isVictory) {
      // SSS급 위에 사과를 다 삭제(170개 올클리어)하면 최고등급 '👑 사과의 신'
      if (isVictory || sc >= 170) {
        return {
          tier: "GOD",
          title: "👑 사과의 신 (신화 등급)",
          shortTitle: "👑 사과의 신",
          desc: "170개의 모든 사과를 완벽히 수확한 전설 속 절대자입니다! 경이로운 만점 올클리어 달성!"
        };
      }
      // 난이도를 쉽게 조정하여 SSS급에 원활히 도달 가능 (125점 이상)
      if (sc >= 125) {
        return {
          tier: "SSS",
          title: "🏆 신의 손 (SSS급)",
          shortTitle: "🏆 SSS급",
          desc: "초인적인 집중력과 번개 같은 손놀림으로 SSS급 경지에 오르셨습니다!"
        };
      }
      if (sc >= 105) {
        return {
          tier: "SS",
          title: "🥇 사과 마스터 (SS급)",
          shortTitle: "🥇 SS급",
          desc: "놀라운 순발력과 공간 감각을 지닌 최상위권 실력자입니다!"
        };
      }
      if (sc >= 85) {
        return {
          tier: "S",
          title: "🥈 순발력 고수 (S급)",
          shortTitle: "🥈 S급",
          desc: "평균 이상의 빠른 계산과 드래그 테크닉을 보여주셨습니다!"
        };
      }
      if (sc >= 65) {
        return {
          tier: "A",
          title: "🥉 과일 헌터 (A급)",
          shortTitle: "🥉 A급",
          desc: "안정적인 기본기와 콤보 감각을 갖춘 실력자입니다!"
        };
      }
      if (sc >= 45) {
        return {
          tier: "B",
          title: "🍏 과일 애호가 (B급)",
          shortTitle: "🍏 B급",
          desc: "기본기를 마스터하셨습니다. 모서리부터 공략하면 상위 등급 진입 가능!"
        };
      }
      return {
        tier: "C",
        title: "🌱 초보 수확러 (C급)",
        shortTitle: "🌱 C급",
        desc: "9+1, 8+2 등 2개짜리 쉬운 짝꿍부터 차분하게 공략해보세요!"
      };
    }

    function endGame(isVictory) {
      isGameOver = true;
      stopTimer();
      playFanfare();

      if (score > highScore) {
        highScore = score;
        localStorage.setItem("ilsangtool-apple-highscore", highScore.toString());
        appleBestVal.textContent = highScore + "점";
      }

      var rankInfo = getRank(score, isVictory);
      var pct = Math.round((score / TOTAL_APPLES) * 100);

      if (isVictory || score >= TOTAL_APPLES) {
        appleOverlayTitle.textContent = "👑 170개 올클리어 대성공! 🏆";
        appleOverlaySub.textContent = "170개의 모든 사과를 완벽히 수확하셨습니다! 최고 등급 [사과의 신] 등극!";
        appleOverlayRank.className = "apple-rank-badge rank-god";
      } else {
        appleOverlayTitle.textContent = "게임 종료! 🍎";
        appleOverlaySub.textContent = score > 0 ? rankInfo.desc : "시간이 종료되었습니다. 다시 도전해보세요!";
        appleOverlayRank.className = "apple-rank-badge";
      }

      appleOverlayRank.textContent = rankInfo.title;
      appleOverlayScore.textContent = score + "점";
      appleOverlayPercent.textContent = pct + "%";
      appleOverlayRemaining.textContent = remaining + "개";

      // Pre-fill nickname
      var savedNick = localStorage.getItem("ilsangtool-apple-nick") || "";
      if (applePlayerNick) applePlayerNick.value = savedNick;
      if (appleRankRegMsg) {
        appleRankRegMsg.textContent = "";
        appleRankRegMsg.className = "apple-rank-reg-msg";
      }
      if (appleSubmitRankBtn) {
        appleSubmitRankBtn.disabled = false;
        appleSubmitRankBtn.innerHTML = "<span>🏆</span>랭킹 등록";
      }

      // Load & Render today's top 10
      var dailyList = loadDailyRankings();
      renderLeaderboard(dailyList, savedNick);

      appleBoardOverlay.style.display = "flex";

      // Grand finale fireworks on good score or victory!
      if (isVictory || score >= 80) {
        for (var f = 0; f < 8; f++) {
          setTimeout(function () {
            var bRect = appleBoardWrapper.getBoundingClientRect();
            triggerFireworkShow(Math.random() * bRect.width, Math.random() * (bRect.height * 0.6) + 30, 5);
          }, f * 250);
        }
      }
    }

    function resetGame() {
      stopTimer();
      clearTimeout(comboTimeout);
      clearTimeout(hintTimeout);
      appleComboToast.classList.remove("show");
      appleBoardContainer.classList.remove("fever-glow", "combo-shake");
      appleHintRect.style.display = "none";
      appleDragRect.style.display = "none";
      appleBoardOverlay.style.display = "none";

      score = 0;
      remaining = TOTAL_APPLES;
      comboCount = 0;
      timeRemaining = TIME_LIMIT;
      isPaused = false;
      isGameOver = false;
      isGameStarted = false;
      isPointerDown = false;
      selectedCells = [];
      currentSum = 0;
      selectedCount = 0;

      appleScoreVal.textContent = "0점";
      appleRemVal.textContent = TOTAL_APPLES + "개";
      appleBestVal.textContent = highScore + "점";
      applePauseIco.textContent = "⏸";
      applePauseTxt.textContent = "일시정지";
      if (appleComboStreakVal) appleComboStreakVal.textContent = "0 COMBO";
      if (appleSideComboCard) appleSideComboCard.classList.remove("active-streak");
      updateTimerUI();

      // Refresh today's king preview in sidebar
      var dailyList = loadDailyRankings();
      renderLeaderboard(dailyList, localStorage.getItem("ilsangtool-apple-nick") || "");

      // Generate 10x17 grid (170 apples) with friendly matching pairs
      grid = [];
      for (var r = 0; r < ROWS; r++) {
        grid[r] = [];
        for (var c = 0; c < COLS; c++) {
          grid[r][c] = 0;
        }
      }

      var PAIRS_TEN = [
        [1, 9], [9, 1],
        [2, 8], [8, 2],
        [3, 7], [7, 3],
        [4, 6], [6, 4],
        [5, 5]
      ];
      var TRIPLES_TEN = [
        [1, 2, 7], [2, 3, 5], [1, 4, 5], [2, 4, 4], [3, 3, 4], [1, 3, 6]
      ];

      // Pre-seed adjacent pairs horizontally and vertically
      var pairAttempts = 36;
      for (var p = 0; p < pairAttempts; p++) {
        var isHoriz = Math.random() < 0.5;
        if (isHoriz) {
          var pr = Math.floor(Math.random() * ROWS);
          var pc = Math.floor(Math.random() * (COLS - 1));
          if (grid[pr][pc] === 0 && grid[pr][pc + 1] === 0) {
            var pair = PAIRS_TEN[Math.floor(Math.random() * PAIRS_TEN.length)];
            grid[pr][pc] = pair[0];
            grid[pr][pc + 1] = pair[1];
          }
        } else {
          var pr = Math.floor(Math.random() * (ROWS - 1));
          var pc = Math.floor(Math.random() * COLS);
          if (grid[pr][pc] === 0 && grid[pr + 1][pc] === 0) {
            var pair = PAIRS_TEN[Math.floor(Math.random() * PAIRS_TEN.length)];
            grid[pr][pc] = pair[0];
            grid[pr + 1][pc] = pair[1];
          }
        }
      }

      // Pre-seed a few 3-cell groups
      for (var t = 0; t < 8; t++) {
        var isHoriz = Math.random() < 0.5;
        if (isHoriz) {
          var tr = Math.floor(Math.random() * ROWS);
          var tc = Math.floor(Math.random() * (COLS - 2));
          if (grid[tr][tc] === 0 && grid[tr][tc + 1] === 0 && grid[tr][tc + 2] === 0) {
            var trip = TRIPLES_TEN[Math.floor(Math.random() * TRIPLES_TEN.length)];
            grid[tr][tc] = trip[0];
            grid[tr][tc + 1] = trip[1];
            grid[tr][tc + 2] = trip[2];
          }
        }
      }

      // Fill remaining empty spots with random numbers 1..9, weighted towards lower numbers (1~5)
      var WEIGHTED_NUMS = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9];
      var totalSum = 0;
      for (var r = 0; r < ROWS; r++) {
        for (var c = 0; c < COLS; c++) {
          if (grid[r][c] === 0) {
            grid[r][c] = WEIGHTED_NUMS[Math.floor(Math.random() * WEIGHTED_NUMS.length)];
          }
          totalSum += grid[r][c];
        }
      }

      // Ensure total sum % 10 === 0 for theoretical full clear
      var rem = totalSum % 10;
      if (rem > 0) {
        var needed = 10 - rem;
        while (needed > 0) {
          var randR = Math.floor(Math.random() * ROWS);
          var randC = Math.floor(Math.random() * COLS);
          if (grid[randR][randC] < 9) {
            grid[randR][randC]++;
            needed--;
          }
        }
      }

      // Render cells
      appleBoard.innerHTML = "";
      for (var r = 0; r < ROWS; r++) {
        for (var c = 0; c < COLS; c++) {
          var cell = document.createElement("div");
          cell.className = "apple-cell";
          cell.id = "apple-cell-" + r + "-" + c;
          cell.setAttribute("data-r", r);
          cell.setAttribute("data-c", c);

          var item = document.createElement("div");
          item.className = "apple-item";

          var num = document.createElement("span");
          num.className = "apple-num";
          num.textContent = grid[r][c];

          item.appendChild(num);
          cell.appendChild(item);
          appleBoard.appendChild(cell);
        }
      }
    }

    function togglePause() {
      if (isGameOver) return;
      isPaused = !isPaused;
      if (isPaused) {
        applePauseIco.textContent = "▶";
        applePauseTxt.textContent = "이어하기";
        appleOverlayTitle.textContent = "게임 일시정지 ⏸";
        appleOverlaySub.textContent = "잠시 휴식 중입니다. 준비되면 '이어하기'를 누르세요.";
        var rankInfo = getRank(score, false);
        appleOverlayRank.textContent = "현재 " + score + "점 진행 중 (" + rankInfo.shortTitle + ")";
        appleOverlayScore.textContent = score + "점";
        appleOverlayPercent.textContent = Math.round((score / TOTAL_APPLES) * 100) + "%";
        appleOverlayRemaining.textContent = remaining + "개";
        var dailyList = loadDailyRankings();
        renderLeaderboard(dailyList, localStorage.getItem("ilsangtool-apple-nick") || "");
        appleBoardOverlay.style.display = "flex";
      } else {
        applePauseIco.textContent = "⏸";
        applePauseTxt.textContent = "일시정지";
        appleBoardOverlay.style.display = "none";
      }
    }

    // Pointer math
    function getCellCoordsFromPointer(clientX, clientY) {
      var rect = appleBoardWrapper.getBoundingClientRect();
      var x = clientX - rect.left;
      var y = clientY - rect.top;
      var col = Math.floor((x / rect.width) * COLS);
      var row = Math.floor((y / rect.height) * ROWS);
      col = Math.max(0, Math.min(COLS - 1, col));
      row = Math.max(0, Math.min(ROWS - 1, row));
      return { col: col, row: row };
    }

    function updateSelection(col1, row1, col2, row2) {
      var minC = Math.min(col1, col2);
      var maxC = Math.max(col1, col2);
      var minR = Math.min(row1, row2);
      var maxR = Math.max(row1, row2);

      appleDragRect.style.display = "block";
      appleDragRect.style.left = (minC / COLS * 100) + "%";
      appleDragRect.style.top = (minR / ROWS * 100) + "%";
      appleDragRect.style.width = ((maxC - minC + 1) / COLS * 100) + "%";
      appleDragRect.style.height = ((maxR - minR + 1) / ROWS * 100) + "%";

      // Clear previous selected marks
      document.querySelectorAll(".apple-cell.selected").forEach(function (el) {
        el.classList.remove("selected", "sum-ten", "sum-over");
      });

      var sum = 0;
      var count = 0;
      selectedCells = [];

      for (var r = minR; r <= maxR; r++) {
        for (var c = minC; c <= maxC; c++) {
          var val = grid[r][c];
          if (val > 0) {
            sum += val;
            count++;
            selectedCells.push({ r: r, c: c, val: val });
            var cellEl = document.getElementById("apple-cell-" + r + "-" + c);
            if (cellEl) cellEl.classList.add("selected");
          }
        }
      }

      currentSum = sum;
      selectedCount = count;

      appleDragRect.classList.remove("sum-ten", "sum-over");
      appleSumBadge.classList.remove("sum-ten", "sum-over");

      if (count === 0) {
        appleSumBadge.textContent = "합: 0";
      } else if (sum === 10) {
        appleDragRect.classList.add("sum-ten");
        appleSumBadge.classList.add("sum-ten");
        appleSumBadge.textContent = "합: 10! ✨ (+" + count + "점)";
        document.querySelectorAll(".apple-cell.selected").forEach(function (el) {
          el.classList.add("sum-ten");
        });
      } else if (sum > 10) {
        appleDragRect.classList.add("sum-over");
        appleSumBadge.classList.add("sum-over");
        appleSumBadge.textContent = "합: " + sum + " (초과)";
        document.querySelectorAll(".apple-cell.selected").forEach(function (el) {
          el.classList.add("sum-over");
        });
      } else {
        appleSumBadge.textContent = "합: " + sum;
      }
    }

    function onPointerDown(e) {
      if (isGameOver || isPaused) return;
      if (e.button && e.button !== 0) return; // Only left click

      if (!isGameStarted) {
        startTimer();
      }

      isPointerDown = true;
      try {
        if (appleBoardWrapper.setPointerCapture && e.pointerId) {
          appleBoardWrapper.setPointerCapture(e.pointerId);
        }
      } catch (err) {}

      var coords = getCellCoordsFromPointer(e.clientX, e.clientY);
      startCol = coords.col;
      startRow = coords.row;
      curCol = startCol;
      curRow = startRow;
      updateSelection(startCol, startRow, curCol, curRow);
      e.preventDefault();
    }

    function onPointerMove(e) {
      if (!isPointerDown || isGameOver || isPaused) return;
      var coords = getCellCoordsFromPointer(e.clientX, e.clientY);
      if (coords.col !== curCol || coords.row !== curRow) {
        curCol = coords.col;
        curRow = coords.row;
        updateSelection(startCol, startRow, curCol, curRow);
      }
      e.preventDefault();
    }

    function onPointerUp(e) {
      if (!isPointerDown) return;
      isPointerDown = false;
      try {
        if (appleBoardWrapper.releasePointerCapture && e.pointerId) {
          appleBoardWrapper.releasePointerCapture(e.pointerId);
        }
      } catch (err) {}

      if (currentSum === 10 && selectedCount > 0) {
        var minC = 99, maxC = 0, minR = 99, maxR = 0;
        var list = selectedCells.slice();
        list.forEach(function (pt) {
          if (pt.c < minC) minC = pt.c;
          if (pt.c > maxC) maxC = pt.c;
          if (pt.r < minR) minR = pt.r;
          if (pt.r > maxR) maxR = pt.r;

          grid[pt.r][pt.c] = 0;
          var cellEl = document.getElementById("apple-cell-" + pt.r + "-" + pt.c);
          if (cellEl) {
            cellEl.classList.remove("selected", "sum-ten", "sum-over");
            cellEl.classList.add("popping");
            setTimeout(function () {
              cellEl.className = "apple-cell empty";
              cellEl.innerHTML = "";
            }, 280);
          }
        });

        var bRect = appleBoardWrapper.getBoundingClientRect();
        var matchX = ((minC + maxC + 1) / 2 / COLS) * bRect.width;
        var matchY = ((minR + maxR + 1) / 2 / ROWS) * bRect.height;

        playPop();
        comboCount++;
        playMatch(comboCount);
        showComboToast(comboCount);

        // Dopamine fireworks & floating score!
        triggerFireworkShow(matchX, matchY, comboCount);
        spawnFloatingScore(matchX, matchY, selectedCount, comboCount);

        score += selectedCount;
        remaining -= selectedCount;
        appleScoreVal.textContent = score + "점";
        appleRemVal.textContent = remaining + "개";

        if (score > highScore) {
          highScore = score;
          localStorage.setItem("ilsangtool-apple-highscore", highScore.toString());
          appleBestVal.textContent = highScore + "점";
        }

        if (remaining <= 0) {
          endGame(true);
        }
      } else {
        if (selectedCount > 1) {
          comboCount = 0;
          appleBoardContainer.classList.remove("fever-glow");
          if (appleComboStreakVal) appleComboStreakVal.textContent = "0 COMBO";
          if (appleSideComboCard) appleSideComboCard.classList.remove("active-streak");
        }
        document.querySelectorAll(".apple-cell.selected").forEach(function (el) {
          el.classList.remove("selected", "sum-ten", "sum-over");
        });
      }

      appleDragRect.style.display = "none";
      selectedCells = [];
      currentSum = 0;
      selectedCount = 0;
    }

    // Hint Finder
    function findHint() {
      if (isGameOver || isPaused) return;
      if (!isGameStarted) startTimer();

      // Sub-rectangles sorted by area
      var candidates = [];
      for (var r1 = 0; r1 < ROWS; r1++) {
        for (var r2 = r1; r2 < ROWS; r2++) {
          for (var c1 = 0; c1 < COLS; c1++) {
            for (var c2 = c1; c2 < COLS; c2++) {
              candidates.push({ r1: r1, r2: r2, c1: c1, c2: c2, area: (r2 - r1 + 1) * (c2 - c1 + 1) });
            }
          }
        }
      }
      candidates.sort(function (a, b) { return a.area - b.area; });

      for (var i = 0; i < candidates.length; i++) {
        var box = candidates[i];
        var s = 0;
        var cnt = 0;
        for (var r = box.r1; r <= box.r2; r++) {
          for (var c = box.c1; c <= box.c2; c++) {
            var v = grid[r][c];
            if (v > 0) {
              s += v;
              cnt++;
              if (s > 10) break;
            }
          }
          if (s > 10) break;
        }
        if (s === 10 && cnt > 0) {
          clearTimeout(hintTimeout);
          appleHintRect.style.display = "block";
          appleHintRect.style.left = (box.c1 / COLS * 100) + "%";
          appleHintRect.style.top = (box.r1 / ROWS * 100) + "%";
          appleHintRect.style.width = ((box.c2 - box.c1 + 1) / COLS * 100) + "%";
          appleHintRect.style.height = ((box.r2 - box.r1 + 1) / ROWS * 100) + "%";

          hintTimeout = setTimeout(function () {
            appleHintRect.style.display = "none";
          }, 2400);

          toast("💡 합이 10이 되는 상자를 찾았습니다!");
          return;
        }
      }
      toast("남은 사과 중 합이 10이 되는 상자가 없습니다!");
    }

    function copyShareText(str) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(str).then(function () {
          toast("결과가 클립보드에 복사되었습니다!");
        }).catch(function () {
          fallbackCopy(str);
        });
      } else {
        fallbackCopy(str);
      }
    }
    function fallbackCopy(str) {
      var ta = document.createElement("textarea");
      ta.value = str;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        toast("결과가 클립보드에 복사되었습니다!");
      } catch (e) {
        toast("클립보드 복사에 실패했습니다.");
      }
      document.body.removeChild(ta);
    }

    // Event Listeners
    appleBoardWrapper.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    appleRestartBtn.addEventListener("click", function () { resetGame(); });
    applePauseBtn.addEventListener("click", togglePause);
    appleHintBtn.addEventListener("click", findHint);

    appleSoundBtn.addEventListener("click", function () {
      soundEnabled = !soundEnabled;
      localStorage.setItem("ilsangtool-apple-sound", soundEnabled.toString());
      appleSoundIco.textContent = soundEnabled ? "🔊" : "🔇";
      appleSoundTxt.textContent = soundEnabled ? "소리 켜짐" : "음소거";
      toast(soundEnabled ? "효과음이 켜졌습니다." : "효과음이 꺼졌습니다.");
    });

    appleModeTime.addEventListener("click", function () {
      if (gameMode === "time") return;
      gameMode = "time";
      appleModeTime.classList.add("active");
      appleModeZen.classList.remove("active");
      resetGame();
      toast("140초 타임어택 모드로 시작합니다!");
    });

    appleModeZen.addEventListener("click", function () {
      if (gameMode === "zen") return;
      gameMode = "zen";
      appleModeZen.classList.add("active");
      appleModeTime.classList.remove("active");
      resetGame();
      toast("시간 제한 없는 무제한 연습 모드로 시작합니다!");
    });

    // View Leaderboard anytime from sidebar
    if (appleViewRankBtn) {
      appleViewRankBtn.addEventListener("click", function () {
        var savedNick = localStorage.getItem("ilsangtool-apple-nick") || "";
        if (applePlayerNick) applePlayerNick.value = savedNick;
        appleOverlayTitle.textContent = "👑 오늘의 사과게임 왕 명예의 전당";
        appleOverlaySub.textContent = "오늘 가장 높은 점수를 기록한 명예의 사과왕 TOP 10 입니다.";
        var rankInfo = getRank(score, remaining === 0);
        appleOverlayRank.textContent = rankInfo.title;
        appleOverlayScore.textContent = score + "점";
        appleOverlayPercent.textContent = Math.round((score / TOTAL_APPLES) * 100) + "%";
        appleOverlayRemaining.textContent = remaining + "개";
        if (appleRankRegMsg) {
          appleRankRegMsg.textContent = "";
          appleRankRegMsg.className = "apple-rank-reg-msg";
        }
        var dailyList = loadDailyRankings();
        renderLeaderboard(dailyList, savedNick);
        appleBoardOverlay.style.display = "flex";
      });
    }

    // Submit Nickname & Save to Today's Top 10
    if (appleSubmitRankBtn) {
      appleSubmitRankBtn.addEventListener("click", function () {
        var nick = (applePlayerNick.value || "").trim();
        if (!nick || nick.length < 1) {
          if (appleRankRegMsg) {
            appleRankRegMsg.className = "apple-rank-reg-msg error";
            appleRankRegMsg.textContent = "닉네임을 1자 이상 입력해주세요.";
          }
          applePlayerNick.focus();
          return;
        }
        if (nick.length > 8) {
          nick = nick.slice(0, 8);
        }
        localStorage.setItem("ilsangtool-apple-nick", nick);

        var dailyList = loadDailyRankings();
        var rankInfo = getRank(score, remaining === 0);
        var now = new Date();
        var timeStr = String(now.getHours()).padStart(2, "0") + ":" + String(now.getMinutes()).padStart(2, "0");

        var userEntry = {
          nick: nick,
          score: score,
          rankTitle: rankInfo.shortTitle,
          time: timeStr,
          isUser: true
        };

        dailyList.push(userEntry);
        dailyList.sort(function (a, b) {
          if (b.score !== a.score) return b.score - a.score;
          return a.isUser ? -1 : 1;
        });

        var userRank = dailyList.indexOf(userEntry);
        dailyList = dailyList.slice(0, 10);
        localStorage.setItem("ilsangtool-apple-rank-" + getTodayDateKey(), JSON.stringify(dailyList));

        renderLeaderboard(dailyList, nick);

        appleSubmitRankBtn.disabled = true;
        appleSubmitRankBtn.innerHTML = "<span>✓</span>등록 완료";

        if (userRank >= 0 && userRank < 10) {
          if (appleRankRegMsg) {
            appleRankRegMsg.className = "apple-rank-reg-msg success";
            appleRankRegMsg.textContent = "🎉 축하합니다! 오늘의 사과게임 왕 " + (userRank + 1) + "위에 등극하셨습니다!";
          }
          playFanfare();
        } else {
          if (appleRankRegMsg) {
            appleRankRegMsg.className = "apple-rank-reg-msg";
            appleRankRegMsg.textContent = "기록이 등록되었습니다. 조금 더 높은 점수로 TOP 10에 도전해보세요!";
          }
        }
      });
    }

    if (applePlayerNick) {
      applePlayerNick.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          if (appleSubmitRankBtn && !appleSubmitRankBtn.disabled) {
            appleSubmitRankBtn.click();
          }
        }
      });
    }

    appleOverlayRestartBtn.addEventListener("click", function () {
      resetGame();
    });

    appleOverlayCloseBtn.addEventListener("click", function () {
      appleBoardOverlay.style.display = "none";
    });

    appleOverlayShareBtn.addEventListener("click", function () {
      var rankInfo = getRank(score, remaining === 0);
      var pct = Math.round((score / TOTAL_APPLES) * 100);
      var shareText = "[일상툴 사과게임 결과]\n🍎 수확 점수: " + score + "점 (" + pct + "%)\n🏆 등급: " + rankInfo.title + "\n\n👉 나도 도전하기: https://ilsangtool.kr/#apple";
      copyShareText(shareText);
    });

    // Pause when navigating away or switching tabs
    window.onShowAppleGame = function () {
      if (!grid || !grid.length) {
        resetGame();
      }
    };
    window.onHideAppleGame = function () {
      if (isGameStarted && !isPaused && !isGameOver) {
        togglePause();
      }
    };

    document.addEventListener("visibilitychange", function () {
      if (document.hidden && isGameStarted && !isPaused && !isGameOver) {
        togglePause();
      }
    });

    // Initialize board
    resetGame();
  })();

  /* ==========================================================================
     PAINT TOOL (그림판 툴 & 복사 에셋 보드 & 자르기 & 이미지 변형)
     ========================================================================== */
  (function initPaintTool() {
    var canvas = document.getElementById("paintCanvas");
    var overlayCanvas = document.getElementById("paintOverlayCanvas");
    if (!canvas || !overlayCanvas) return;

    var ctx = canvas.getContext("2d", { willReadFrequently: true });
    var overlayCtx = overlayCanvas.getContext("2d");

    // Elements
    var stageWrap = document.getElementById("paintCanvasStageWrap");
    var canvasDimEl = document.getElementById("paintCanvasDim");
    var undoBtn = document.getElementById("paintUndoBtn");
    var redoBtn = document.getElementById("paintRedoBtn");
    var clearBtn = document.getElementById("paintClearBtn");
    var downloadBtn = document.getElementById("paintDownloadBtn");
    var shareBtn = document.getElementById("paintShareBtn");

    var strokeRange = document.getElementById("paintStrokeRange");
    var strokeVal = document.getElementById("paintStrokeVal");
    var shapeFillCheck = document.getElementById("paintShapeFill");
    var colorPicker = document.getElementById("paintColorPicker");
    var activePreview = document.getElementById("paintActiveColorPreview");
    var swatches = document.querySelectorAll(".paint-swatch");
    var toolButtons = document.querySelectorAll(".paint-tool-btn");
    var sizeChips = document.querySelectorAll(".paint-size-chip");
    var presetButtons = document.querySelectorAll(".paint-preset-btn");

    // Text tool overlay elements
    var textOverlay = document.getElementById("paintTextOverlay");
    var textInput = document.getElementById("paintTextInput");
    var textFontSize = document.getElementById("paintTextFontSize");
    var textBoldBtn = document.getElementById("paintTextBoldBtn");
    var textFontFamily = document.getElementById("paintTextFontFamily");
    var textColorInput = document.getElementById("paintTextColorInput");
    var textColorPreview = document.getElementById("paintTextColorPreview");
    var textApplyBtn = document.getElementById("paintTextApplyBtn");
    var textCancelBtn = document.getElementById("paintTextCancelBtn");

    // Image Transform Box elements
    var transformBox = document.getElementById("paintTransformBox");
    var transformDim = document.getElementById("paintTransformDim");
    var transformImg = document.getElementById("paintTransformImg");
    var transformApplyBtn = document.getElementById("paintTransformApplyBtn");
    var transformCancelBtn = document.getElementById("paintTransformCancelBtn");
    var transformWrapper = document.getElementById("paintTransformWrapper");

    // Crop elements
    var cropBox = document.getElementById("paintCropBox");
    var cropDim = document.getElementById("paintCropDim");
    var cropApplyBtn = document.getElementById("paintCropApplyBtn");
    var cropCancelBtn = document.getElementById("paintCropCancelBtn");

    // Asset board elements
    var assetBoard = document.getElementById("paintAssetBoard");
    var assetDropzone = document.getElementById("paintAssetDropzone");
    var assetFileInput = document.getElementById("paintAssetFileInput");
    var assetUploadTrigger = document.getElementById("paintAssetUploadTrigger");
    var assetListEl = document.getElementById("paintAssetList");
    var assetCountEl = document.getElementById("paintAssetCount");
    var assetClearAllBtn = document.getElementById("paintAssetClearAllBtn");
    var assetEmptyEl = document.getElementById("paintAssetEmpty");

    // Modal elements
    var shareModal = document.getElementById("paintShareModal");
    var modalPreviewImg = document.getElementById("paintModalPreviewImg");
    var modalCloseBtn = document.getElementById("paintModalCloseBtn");
    var modalDownloadBtn = document.getElementById("paintModalDownloadBtn");
    var modalCopyBtn = document.getElementById("paintModalCopyBtn");
    var modalShareBtn = document.getElementById("paintModalShareBtn");

    // State
    var currentTool = "brush"; // 'pencil', 'brush', 'eraser', 'fill', 'text', 'line', 'rect', 'circle', 'arrow', 'crop'
    var currentColor = "#000000";
    var textSelectedColor = "#000000";
    var strokeWidth = 3;
    var isShapeFill = false;
    var isDrawing = false;
    var startX = 0, startY = 0;
    var lastX = 0, lastY = 0;
    var textPos = { x: 50, y: 50 };
    var textIsBold = false;

    // Transform State & Placed Image Objects
    var transformState = {
      active: false,
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      img: null,
      dataUrl: "",
      aspectRatio: 1,
      dragMode: null, // 'move', 'nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'
      startClientX: 0,
      startClientY: 0,
      origX: 0,
      origY: 0,
      origW: 0,
      origH: 0,
      originalItem: null
    };

    var placedImages = []; // Array of { id, dataUrl, img, x, y, w, h, snapBefore }

    // Crop State
    var cropState = {
      active: false,
      startX: 0,
      startY: 0,
      x: 0,
      y: 0,
      w: 0,
      h: 0
    };

    var undoStack = [];
    var redoStack = [];
    var MAX_UNDO = 25;

    var assets = [];

    // Load assets from localStorage
    try {
      var saved = localStorage.getItem("ilsang_paint_assets");
      if (saved) assets = JSON.parse(saved);
      if (!Array.isArray(assets)) assets = [];
    } catch (e) {
      assets = [];
    }

    // Initialize Canvas Background (Pure White)
    function initCanvasBackground() {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveState();
    }

    function saveState() {
      try {
        var snap = ctx.getImageData(0, 0, canvas.width, canvas.height);
        undoStack.push({ width: canvas.width, height: canvas.height, data: snap });
        if (undoStack.length > MAX_UNDO) undoStack.shift();
        redoStack = [];
        updateUndoRedoUI();
      } catch (e) {}
    }

    function updateUndoRedoUI() {
      if (undoBtn) undoBtn.disabled = undoStack.length <= 1;
      if (redoBtn) redoBtn.disabled = redoStack.length === 0;
    }

    function undo() {
      if (undoStack.length <= 1) return;
      var cur = undoStack.pop();
      redoStack.push(cur);
      var prev = undoStack[undoStack.length - 1];

      if (prev.width !== canvas.width || prev.height !== canvas.height) {
        canvas.width = prev.width;
        canvas.height = prev.height;
        overlayCanvas.width = prev.width;
        overlayCanvas.height = prev.height;
        if (canvasDimEl) canvasDimEl.textContent = prev.width + " × " + prev.height + " px";
      }
      ctx.putImageData(prev.data, 0, 0);
      closeCropBox();
      closeTransformBox();
      hideTextOverlay();
      updateUndoRedoUI();
      toast("실행 취소되었습니다.");
    }

    function redo() {
      if (redoStack.length === 0) return;
      var next = redoStack.pop();
      undoStack.push(next);

      if (next.width !== canvas.width || next.height !== canvas.height) {
        canvas.width = next.width;
        canvas.height = next.height;
        overlayCanvas.width = next.width;
        overlayCanvas.height = next.height;
        if (canvasDimEl) canvasDimEl.textContent = next.width + " × " + next.height + " px";
      }
      ctx.putImageData(next.data, 0, 0);
      closeCropBox();
      closeTransformBox();
      hideTextOverlay();
      updateUndoRedoUI();
      toast("다시 실행되었습니다.");
    }

    function clearCanvas() {
      if (!confirm("캔버스의 모든 그림을 지우시겠습니까?")) return;
      placedImages = [];
      closeCropBox();
      closeTransformBox();
      hideTextOverlay();
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      saveState();
      toast("캔버스가 초기화되었습니다.");
    }

    function getCanvasPos(e) {
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    }

    // Set Tool
    function setTool(tool) {
      currentTool = tool;
      toolButtons.forEach(function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-tool") === tool);
      });
      // Close overlays if switching tools
      if (tool !== "text") hideTextOverlay();
      if (tool !== "crop") closeCropBox();

      // Update cursor
      if (tool === "eraser") {
        canvas.style.cursor = "cell";
      } else if (tool === "text") {
        canvas.style.cursor = "text";
      } else if (tool === "fill") {
        canvas.style.cursor = "copy";
      } else if (tool === "crop") {
        canvas.style.cursor = "crosshair";
      } else {
        canvas.style.cursor = "crosshair";
      }
    }

    // Set Color
    function setColor(hex) {
      currentColor = hex;
      if (activePreview) activePreview.style.backgroundColor = hex;
      if (colorPicker) colorPicker.value = hex;
      swatches.forEach(function (sw) {
        sw.classList.toggle("active", sw.getAttribute("data-color").toLowerCase() === hex.toLowerCase());
      });
      // Sync text color as well
      textSelectedColor = hex;
      if (textColorInput) textColorInput.value = hex;
      if (textColorPreview) textColorPreview.style.backgroundColor = hex;
      if (textInput) textInput.style.color = hex;
    }

    // Set Stroke Size
    function setStrokeSize(size) {
      strokeWidth = parseInt(size, 10) || 3;
      if (strokeRange) strokeRange.value = strokeWidth;
      if (strokeVal) strokeVal.textContent = strokeWidth + "px";
      sizeChips.forEach(function (chip) {
        chip.classList.toggle("active", parseInt(chip.getAttribute("data-size"), 10) === strokeWidth);
      });
    }

    // Resize Canvas Preset
    function setCanvasPreset(w, h) {
      if (canvas.width === w && canvas.height === h) return;
      placedImages = [];
      closeCropBox();
      closeTransformBox();
      hideTextOverlay();

      var temp = document.createElement("canvas");
      temp.width = canvas.width;
      temp.height = canvas.height;
      var tempCtx = temp.getContext("2d");
      tempCtx.drawImage(canvas, 0, 0);

      canvas.width = w;
      canvas.height = h;
      overlayCanvas.width = w;
      overlayCanvas.height = h;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(temp, 0, 0);

      if (canvasDimEl) canvasDimEl.textContent = w + " × " + h + " px";

      presetButtons.forEach(function (btn) {
        var bw = parseInt(btn.getAttribute("data-w"), 10);
        var bh = parseInt(btn.getAttribute("data-h"), 10);
        btn.classList.toggle("active", bw === w && bh === h);
      });

      undoStack = [];
      redoStack = [];
      saveState();
      toast("캔버스 크기가 " + w + "×" + h + "로 변경되었습니다.");
    }

    // Shape drawing helpers
    function drawLine(targetCtx, x1, y1, x2, y2, color, width) {
      targetCtx.beginPath();
      targetCtx.strokeStyle = color;
      targetCtx.lineWidth = width;
      targetCtx.lineCap = "round";
      targetCtx.moveTo(x1, y1);
      targetCtx.lineTo(x2, y2);
      targetCtx.stroke();
    }

    function drawRect(targetCtx, x1, y1, x2, y2, color, width, isFill) {
      var rx = Math.min(x1, x2);
      var ry = Math.min(y1, y2);
      var rw = Math.abs(x2 - x1);
      var rh = Math.abs(y2 - y1);
      targetCtx.beginPath();
      targetCtx.rect(rx, ry, rw, rh);
      if (isFill) {
        targetCtx.fillStyle = color;
        targetCtx.fill();
      }
      targetCtx.strokeStyle = color;
      targetCtx.lineWidth = width;
      targetCtx.stroke();
    }

    function drawCircle(targetCtx, x1, y1, x2, y2, color, width, isFill) {
      var rx = Math.abs(x2 - x1) / 2;
      var ry = Math.abs(y2 - y1) / 2;
      var cx = (x1 + x2) / 2;
      var cy = (y1 + y2) / 2;
      targetCtx.beginPath();
      targetCtx.ellipse(cx, cy, Math.max(rx, 1), Math.max(ry, 1), 0, 0, Math.PI * 2);
      if (isFill) {
        targetCtx.fillStyle = color;
        targetCtx.fill();
      }
      targetCtx.strokeStyle = color;
      targetCtx.lineWidth = width;
      targetCtx.stroke();
    }

    function drawArrow(targetCtx, x1, y1, x2, y2, color, width) {
      var headLength = Math.max(14, width * 3);
      var angle = Math.atan2(y2 - y1, x2 - x1);
      targetCtx.beginPath();
      targetCtx.strokeStyle = color;
      targetCtx.lineWidth = width;
      targetCtx.lineCap = "round";
      targetCtx.moveTo(x1, y1);
      targetCtx.lineTo(x2, y2);
      targetCtx.stroke();

      targetCtx.beginPath();
      targetCtx.fillStyle = color;
      targetCtx.moveTo(x2, y2);
      targetCtx.lineTo(
        x2 - headLength * Math.cos(angle - Math.PI / 7),
        y2 - headLength * Math.sin(angle - Math.PI / 7)
      );
      targetCtx.lineTo(
        x2 - headLength * Math.cos(angle + Math.PI / 7),
        y2 - headLength * Math.sin(angle + Math.PI / 7)
      );
      targetCtx.closePath();
      targetCtx.fill();
    }

    // Flood Fill (BFS)
    function floodFill(startX, startY, fillHex) {
      var width = canvas.width;
      var height = canvas.height;
      startX = Math.floor(startX);
      startY = Math.floor(startY);
      if (startX < 0 || startX >= width || startY < 0 || startY >= height) return;

      var imgData = ctx.getImageData(0, 0, width, height);
      var data32 = new Uint32Array(imgData.data.buffer);

      var fillR = parseInt(fillHex.substr(1, 2), 16);
      var fillG = parseInt(fillHex.substr(3, 2), 16);
      var fillB = parseInt(fillHex.substr(5, 2), 16);
      var fillColor32 = (255 << 24) | (fillB << 16) | (fillG << 8) | fillR;

      var targetIdx = startY * width + startX;
      var targetColor = data32[targetIdx];
      if (targetColor === fillColor32) return;

      var tR = targetColor & 0xff;
      var tG = (targetColor >> 8) & 0xff;
      var tB = (targetColor >> 16) & 0xff;

      function match(idx) {
        var c = data32[idx];
        var cR = c & 0xff;
        var cG = (c >> 8) & 0xff;
        var cB = (c >> 16) & 0xff;
        return Math.abs(cR - tR) + Math.abs(cG - tG) + Math.abs(cB - tB) < 36;
      }

      var queue = [startX, startY];
      var visited = new Uint8Array(width * height);
      visited[targetIdx] = 1;

      var head = 0;
      while (head < queue.length) {
        var x = queue[head++];
        var y = queue[head++];
        var idx = y * width + x;
        data32[idx] = fillColor32;

        if (x > 0 && !visited[idx - 1] && match(idx - 1)) {
          visited[idx - 1] = 1; queue.push(x - 1, y);
        }
        if (x < width - 1 && !visited[idx + 1] && match(idx + 1)) {
          visited[idx + 1] = 1; queue.push(x + 1, y);
        }
        if (y > 0 && !visited[idx - width] && match(idx - width)) {
          visited[idx - width] = 1; queue.push(x, y - 1);
        }
        if (y < height - 1 && !visited[idx + width] && match(idx + width)) {
          visited[idx + width] = 1; queue.push(x, y + 1);
        }
      }

      ctx.putImageData(imgData, 0, 0);
      saveState();
    }

    // Text Tool Overlay Logic (with dedicated color picker & crystal clear contrast)
    function showTextOverlay(canvasX, canvasY, clientX, clientY) {
      textPos = { x: canvasX, y: canvasY };
      var inner = document.getElementById("paintCanvasInner");
      var rect = inner.getBoundingClientRect();
      var relX = clientX - rect.left;
      var relY = clientY - rect.top;

      relX = Math.max(10, Math.min(rect.width - 300, relX));
      relY = Math.max(10, Math.min(rect.height - 120, relY));

      textOverlay.style.left = relX + "px";
      textOverlay.style.top = relY + "px";
      textOverlay.style.display = "flex";

      textSelectedColor = currentColor;
      if (textColorInput) textColorInput.value = textSelectedColor;
      if (textColorPreview) textColorPreview.style.backgroundColor = textSelectedColor;
      if (textInput) {
        textInput.style.color = textSelectedColor;
        textInput.value = "";
      }
      setTimeout(function () { if (textInput) textInput.focus(); }, 50);
    }

    function hideTextOverlay() {
      if (textOverlay) textOverlay.style.display = "none";
    }

    if (textColorInput) {
      textColorInput.addEventListener("input", function () {
        textSelectedColor = this.value;
        if (textColorPreview) textColorPreview.style.backgroundColor = this.value;
        if (textInput) textInput.style.color = this.value;
        setColor(this.value);
      });
    }

    function applyTextToCanvas() {
      var text = (textInput.value || "").trim();
      if (!text) {
        hideTextOverlay();
        return;
      }
      var fSize = parseInt(textFontSize.value, 10) || 24;
      var fFamily = textFontFamily.value || "Pretendard, sans-serif";
      var fWeight = textIsBold ? "bold " : "normal ";

      ctx.font = fWeight + fSize + "px " + fFamily;
      ctx.fillStyle = textSelectedColor || currentColor;
      ctx.textBaseline = "top";

      var lines = text.split("\n");
      var lineHeight = fSize * 1.35;
      for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], textPos.x, textPos.y + i * lineHeight);
      }

      saveState();
      hideTextOverlay();
      toast("텍스트가 캔버스에 추가되었습니다!");
    }

    if (textApplyBtn) textApplyBtn.addEventListener("click", applyTextToCanvas);
    if (textCancelBtn) textCancelBtn.addEventListener("click", hideTextOverlay);
    if (textBoldBtn) {
      textBoldBtn.addEventListener("click", function () {
        textIsBold = !textIsBold;
        textBoldBtn.classList.toggle("active", textIsBold);
        textInput.style.fontWeight = textIsBold ? "bold" : "normal";
      });
    }
    if (textFontSize) {
      textFontSize.addEventListener("change", function () {
        textInput.style.fontSize = this.value + "px";
      });
    }
    if (textInput) {
      textInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
          applyTextToCanvas();
        } else if (e.key === "Escape") {
          hideTextOverlay();
        }
      });
    }

    /* ==========================================================================
       IMAGE TRANSFORM / DRAG TO RESIZE & MOVE (이미지 드래그 크기 조절 & 이동)
       ========================================================================== */
    function openTransformBox(dataUrl, natW, natH, initX, initY, originalItem) {
      hideTextOverlay();
      closeCropBox();

      var img = new Image();
      img.onload = function () {
        var w, h, x, y;
        if (initX !== undefined && initY !== undefined) {
          x = initX;
          y = initY;
          w = natW;
          h = natH;
        } else {
          var maxW = Math.round(canvas.width * 0.75);
          var maxH = Math.round(canvas.height * 0.75);
          w = img.naturalWidth || natW || 320;
          h = img.naturalHeight || natH || 220;

          if (w > maxW || h > maxH) {
            var ratio = Math.min(maxW / w, maxH / h);
            w = Math.round(w * ratio);
            h = Math.round(h * ratio);
          }
          w = Math.max(60, w);
          h = Math.max(40, h);

          x = Math.round((canvas.width - w) / 2);
          y = Math.round((canvas.height - h) / 2);
        }

        transformState.active = true;
        transformState.x = x;
        transformState.y = y;
        transformState.w = w;
        transformState.h = h;
        transformState.img = img;
        transformState.dataUrl = dataUrl;
        transformState.aspectRatio = (img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : (w / h);
        transformState.originalItem = originalItem || null;

        if (transformImg) transformImg.src = dataUrl;
        updateTransformBoxDOM(false);
        if (transformBox) transformBox.style.display = "block";
        toast("💡 모서리 꼭짓점을 드래그하여 크기 조절, Shift를 누르고 드래그하면 원본 비율이 유지됩니다.");
      };
      img.src = dataUrl;
    }

    function updateTransformBoxDOM(isShift) {
      if (!transformBox) return;
      transformBox.style.left = transformState.x + "px";
      transformBox.style.top = transformState.y + "px";
      transformBox.style.width = transformState.w + "px";
      transformBox.style.height = transformState.h + "px";
      if (transformDim) {
        var shiftLabel = isShift ? " 🔒 비율고정" : "";
        transformDim.textContent = Math.round(transformState.w) + " × " + Math.round(transformState.h) + " px" + shiftLabel;
      }
    }

    function closeTransformBox(isCancelled) {
      if (isCancelled && transformState.originalItem) {
        ctx.drawImage(
          transformState.originalItem.img,
          transformState.originalItem.x,
          transformState.originalItem.y,
          transformState.originalItem.w,
          transformState.originalItem.h
        );
        placedImages.push(transformState.originalItem);
      }
      transformState.active = false;
      transformState.dragMode = null;
      transformState.originalItem = null;
      if (transformBox) transformBox.style.display = "none";
    }

    function applyTransform() {
      if (!transformState.active || !transformState.img) return;
      var snapBefore = ctx.getImageData(0, 0, canvas.width, canvas.height);
      ctx.drawImage(transformState.img, transformState.x, transformState.y, transformState.w, transformState.h);

      placedImages.push({
        id: "img_" + Date.now(),
        dataUrl: transformState.dataUrl || (transformImg ? transformImg.src : ""),
        img: transformState.img,
        x: transformState.x,
        y: transformState.y,
        w: transformState.w,
        h: transformState.h,
        snapBefore: snapBefore
      });

      saveState();
      closeTransformBox(false);
      toast("이미지가 캔버스에 고정되었습니다. 그림을 클릭하면 언제든 다시 크기와 위치를 조절할 수 있습니다.");
    }

    if (transformApplyBtn) transformApplyBtn.addEventListener("click", applyTransform);
    if (transformCancelBtn) {
      transformCancelBtn.addEventListener("click", function () {
        closeTransformBox(true);
      });
    }

    if (transformBox) {
      transformBox.querySelectorAll(".paint-handle").forEach(function (handle) {
        handle.addEventListener("pointerdown", function (e) {
          e.preventDefault();
          e.stopPropagation();
          transformState.dragMode = handle.getAttribute("data-handle");
          transformState.startClientX = e.clientX;
          transformState.startClientY = e.clientY;
          transformState.origX = transformState.x;
          transformState.origY = transformState.y;
          transformState.origW = transformState.w;
          transformState.origH = transformState.h;
          transformState.aspectRatio = (transformState.origW && transformState.origH) ? (transformState.origW / transformState.origH) : 1;
          try { handle.setPointerCapture(e.pointerId); } catch (err) {}
        });
      });
    }

    if (transformWrapper) {
      transformWrapper.addEventListener("pointerdown", function (e) {
        if (e.target.classList.contains("paint-handle")) return;
        e.preventDefault();
        transformState.dragMode = "move";
        transformState.startClientX = e.clientX;
        transformState.startClientY = e.clientY;
        transformState.origX = transformState.x;
        transformState.origY = transformState.y;
        try { transformWrapper.setPointerCapture(e.pointerId); } catch (err) {}
      });
    }

    window.addEventListener("pointermove", function (e) {
      if (!transformState.dragMode) return;
      var rect = canvas.getBoundingClientRect();
      var scaleX = canvas.width / rect.width;
      var scaleY = canvas.height / rect.height;
      var dx = (e.clientX - transformState.startClientX) * scaleX;
      var dy = (e.clientY - transformState.startClientY) * scaleY;
      var mode = transformState.dragMode;
      var isShift = e.shiftKey;
      var aspect = transformState.aspectRatio || (transformState.origW / transformState.origH) || 1;

      if (mode === "move") {
        transformState.x = Math.round(transformState.origX + dx);
        transformState.y = Math.round(transformState.origY + dy);
      } else if (mode === "se") {
        var newW, newH;
        if (isShift) {
          if (Math.abs(dx) >= Math.abs(dy * aspect)) {
            newW = Math.max(20, Math.round(transformState.origW + dx));
            newH = Math.max(20, Math.round(newW / aspect));
          } else {
            newH = Math.max(20, Math.round(transformState.origH + dy));
            newW = Math.max(20, Math.round(newH * aspect));
          }
        } else {
          newW = Math.max(20, Math.round(transformState.origW + dx));
          newH = Math.max(20, Math.round(transformState.origH + dy));
        }
        transformState.w = newW;
        transformState.h = newH;
        transformState.x = transformState.origX;
        transformState.y = transformState.origY;
      } else if (mode === "sw") {
        var newW, newH;
        if (isShift) {
          if (Math.abs(dx) >= Math.abs(dy * aspect)) {
            newW = Math.max(20, Math.round(transformState.origW - dx));
            newH = Math.max(20, Math.round(newW / aspect));
          } else {
            newH = Math.max(20, Math.round(transformState.origH + dy));
            newW = Math.max(20, Math.round(newH * aspect));
          }
        } else {
          newW = Math.max(20, Math.round(transformState.origW - dx));
          newH = Math.max(20, Math.round(transformState.origH + dy));
        }
        transformState.w = newW;
        transformState.h = newH;
        transformState.x = Math.round(transformState.origX + (transformState.origW - newW));
        transformState.y = transformState.origY;
      } else if (mode === "ne") {
        var newW, newH;
        if (isShift) {
          if (Math.abs(dx) >= Math.abs(dy * aspect)) {
            newW = Math.max(20, Math.round(transformState.origW + dx));
            newH = Math.max(20, Math.round(newW / aspect));
          } else {
            newH = Math.max(20, Math.round(transformState.origH - dy));
            newW = Math.max(20, Math.round(newH * aspect));
          }
        } else {
          newW = Math.max(20, Math.round(transformState.origW + dx));
          newH = Math.max(20, Math.round(transformState.origH - dy));
        }
        transformState.w = newW;
        transformState.h = newH;
        transformState.x = transformState.origX;
        transformState.y = Math.round(transformState.origY + (transformState.origH - newH));
      } else if (mode === "nw") {
        var newW, newH;
        if (isShift) {
          if (Math.abs(dx) >= Math.abs(dy * aspect)) {
            newW = Math.max(20, Math.round(transformState.origW - dx));
            newH = Math.max(20, Math.round(newW / aspect));
          } else {
            newH = Math.max(20, Math.round(transformState.origH - dy));
            newW = Math.max(20, Math.round(newH * aspect));
          }
        } else {
          newW = Math.max(20, Math.round(transformState.origW - dx));
          newH = Math.max(20, Math.round(transformState.origH - dy));
        }
        transformState.w = newW;
        transformState.h = newH;
        transformState.x = Math.round(transformState.origX + (transformState.origW - newW));
        transformState.y = Math.round(transformState.origY + (transformState.origH - newH));
      } else if (mode === "e") {
        var newW = Math.max(20, Math.round(transformState.origW + dx));
        if (isShift) {
          var newH = Math.max(20, Math.round(newW / aspect));
          transformState.w = newW;
          transformState.h = newH;
          transformState.y = Math.round(transformState.origY + (transformState.origH - newH) / 2);
        } else {
          transformState.w = newW;
        }
      } else if (mode === "w") {
        var newW = Math.max(20, Math.round(transformState.origW - dx));
        if (isShift) {
          var newH = Math.max(20, Math.round(newW / aspect));
          transformState.w = newW;
          transformState.h = newH;
          transformState.x = Math.round(transformState.origX + (transformState.origW - newW));
          transformState.y = Math.round(transformState.origY + (transformState.origH - newH) / 2);
        } else {
          transformState.w = newW;
          transformState.x = Math.round(transformState.origX + (transformState.origW - newW));
        }
      } else if (mode === "s") {
        var newH = Math.max(20, Math.round(transformState.origH + dy));
        if (isShift) {
          var newW = Math.max(20, Math.round(newH * aspect));
          transformState.w = newW;
          transformState.h = newH;
          transformState.x = Math.round(transformState.origX + (transformState.origW - newW) / 2);
        } else {
          transformState.h = newH;
        }
      } else if (mode === "n") {
        var newH = Math.max(20, Math.round(transformState.origH - dy));
        if (isShift) {
          var newW = Math.max(20, Math.round(newH * aspect));
          transformState.w = newW;
          transformState.h = newH;
          transformState.x = Math.round(transformState.origX + (transformState.origW - newW) / 2);
          transformState.y = Math.round(transformState.origY + (transformState.origH - newH));
        } else {
          transformState.h = newH;
          transformState.y = Math.round(transformState.origY + (transformState.origH - newH));
        }
      }
      updateTransformBoxDOM(isShift);
    });

    window.addEventListener("pointerup", function () {
      if (transformState.dragMode) {
        transformState.dragMode = null;
      }
    });

    /* ==========================================================================
       CROP TOOL (자르기 기능)
       ========================================================================== */
    function closeCropBox() {
      cropState.active = false;
      if (cropBox) cropBox.style.display = "none";
      overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
    }

    function applyCrop() {
      if (cropState.w < 15 || cropState.h < 15) {
        toast("자를 영역이 너무 작습니다.");
        closeCropBox();
        return;
      }
      placedImages = [];
      var cropData = ctx.getImageData(cropState.x, cropState.y, cropState.w, cropState.h);

      canvas.width = cropState.w;
      canvas.height = cropState.h;
      overlayCanvas.width = cropState.w;
      overlayCanvas.height = cropState.h;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, cropState.w, cropState.h);
      ctx.putImageData(cropData, 0, 0);

      if (canvasDimEl) canvasDimEl.textContent = cropState.w + " × " + cropState.h + " px";
      closeCropBox();
      saveState();
      setTool("brush");
      toast("선택한 영역(" + cropState.w + "×" + cropState.h + "px)으로 캔버스가 잘렸습니다!");
    }

    if (cropApplyBtn) cropApplyBtn.addEventListener("click", applyCrop);
    if (cropCancelBtn) cropCancelBtn.addEventListener("click", closeCropBox);

    // Canvas Pointer Events for Drawing & Cropping & Selecting Placed Images
    canvas.addEventListener("pointerdown", function (e) {
      if (e.button !== 0) return;
      var pos = getCanvasPos(e);

      // If transform box is currently open, clicking outside it commits the transform
      if (transformState.active) {
        applyTransform();
      }

      // Check if user clicked on any previously placed image on canvas
      if (currentTool !== "crop" && currentTool !== "text") {
        var hitIndex = -1;
        for (var i = placedImages.length - 1; i >= 0; i--) {
          var p = placedImages[i];
          if (pos.x >= p.x && pos.x <= p.x + p.w && pos.y >= p.y && pos.y <= p.y + p.h) {
            hitIndex = i;
            break;
          }
        }
        if (hitIndex !== -1) {
          var clickedItem = placedImages.splice(hitIndex, 1)[0];
          // Erase this image from canvas so it becomes floating interactive box
          if (clickedItem.snapBefore) {
            ctx.putImageData(clickedItem.snapBefore, 0, 0);
          }
          openTransformBox(clickedItem.dataUrl, clickedItem.w, clickedItem.h, clickedItem.x, clickedItem.y, clickedItem);
          return;
        }
      }

      if (currentTool === "crop") {
        closeCropBox();
        closeTransformBox();
        hideTextOverlay();
        cropState.active = true;
        cropState.startX = pos.x;
        cropState.startY = pos.y;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
        return;
      }

      if (currentTool === "text") {
        showTextOverlay(pos.x, pos.y, e.clientX, e.clientY);
        return;
      }

      if (currentTool === "fill") {
        floodFill(pos.x, pos.y, currentColor);
        return;
      }

      isDrawing = true;
      startX = pos.x;
      startY = pos.y;
      lastX = pos.x;
      lastY = pos.y;

      if (currentTool === "pencil" || currentTool === "brush" || currentTool === "eraser") {
        ctx.beginPath();
        ctx.strokeStyle = currentTool === "eraser" ? "#ffffff" : currentColor;
        ctx.lineWidth = currentTool === "pencil" ? 1 : strokeWidth;
        ctx.lineCap = currentTool === "pencil" ? "butt" : "round";
        ctx.lineJoin = currentTool === "pencil" ? "miter" : "round";
        ctx.moveTo(pos.x, pos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }

      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    });

    canvas.addEventListener("pointermove", function (e) {
      var pos = getCanvasPos(e);

      if (currentTool === "crop" && cropState.active) {
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        var rx = Math.min(cropState.startX, pos.x);
        var ry = Math.min(cropState.startY, pos.y);
        var rw = Math.abs(pos.x - cropState.startX);
        var rh = Math.abs(pos.y - cropState.startY);

        // Dim background outside crop
        overlayCtx.fillStyle = "rgba(0, 0, 0, 0.4)";
        overlayCtx.fillRect(0, 0, overlayCanvas.width, ry);
        overlayCtx.fillRect(0, ry + rh, overlayCanvas.width, overlayCanvas.height - (ry + rh));
        overlayCtx.fillRect(0, ry, rx, rh);
        overlayCtx.fillRect(rx + rw, ry, overlayCanvas.width - (rx + rw), rh);

        // Border
        overlayCtx.setLineDash([6, 4]);
        overlayCtx.strokeStyle = "#f59e0b";
        overlayCtx.lineWidth = 2;
        overlayCtx.strokeRect(rx, ry, rw, rh);
        overlayCtx.setLineDash([]);
        return;
      }

      if (!isDrawing) {
        if (!transformState.active && (currentTool === "brush" || currentTool === "pencil")) {
          var isOverImage = false;
          for (var pi = placedImages.length - 1; pi >= 0; pi--) {
            var item = placedImages[pi];
            if (pos.x >= item.x && pos.x <= item.x + item.w && pos.y >= item.y && pos.y <= item.y + item.h) {
              isOverImage = true;
              break;
            }
          }
          if (isOverImage) {
            canvas.style.cursor = "pointer";
            canvas.title = "그림을 클릭하면 크기 조절 선과 꼭짓점이 나타납니다 (Shift: 비율고정)";
          } else {
            canvas.style.cursor = "crosshair";
            canvas.title = "";
          }
        }
        return;
      }

      if (currentTool === "pencil" || currentTool === "brush" || currentTool === "eraser") {
        ctx.beginPath();
        ctx.strokeStyle = currentTool === "eraser" ? "#ffffff" : currentColor;
        ctx.lineWidth = currentTool === "pencil" ? 1 : strokeWidth;
        ctx.lineCap = currentTool === "pencil" ? "butt" : "round";
        ctx.lineJoin = currentTool === "pencil" ? "miter" : "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        lastX = pos.x;
        lastY = pos.y;
      } else {
        // Shapes preview on overlayCanvas
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        if (currentTool === "line") {
          drawLine(overlayCtx, startX, startY, pos.x, pos.y, currentColor, strokeWidth);
        } else if (currentTool === "rect") {
          drawRect(overlayCtx, startX, startY, pos.x, pos.y, currentColor, strokeWidth, isShapeFill);
        } else if (currentTool === "circle") {
          drawCircle(overlayCtx, startX, startY, pos.x, pos.y, currentColor, strokeWidth, isShapeFill);
        } else if (currentTool === "arrow") {
          drawArrow(overlayCtx, startX, startY, pos.x, pos.y, currentColor, strokeWidth);
        }
      }
    });

    function finishDrawing(e) {
      var pos = getCanvasPos(e);

      if (currentTool === "crop" && cropState.active) {
        cropState.active = false;
        var rx = Math.min(cropState.startX, pos.x);
        var ry = Math.min(cropState.startY, pos.y);
        var rw = Math.abs(pos.x - cropState.startX);
        var rh = Math.abs(pos.y - cropState.startY);

        if (rw >= 15 && rh >= 15) {
          cropState.x = Math.round(rx);
          cropState.y = Math.round(ry);
          cropState.w = Math.round(rw);
          cropState.h = Math.round(rh);

          cropBox.style.left = rx + "px";
          cropBox.style.top = ry + "px";
          cropBox.style.width = rw + "px";
          cropBox.style.height = rh + "px";
          cropBox.style.display = "block";
          if (cropDim) cropDim.textContent = Math.round(rw) + " × " + Math.round(rh) + " px";
        } else {
          overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        }
        try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
        return;
      }

      if (!isDrawing) return;
      isDrawing = false;

      if (currentTool !== "pencil" && currentTool !== "brush" && currentTool !== "eraser" && currentTool !== "crop") {
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
        if (currentTool === "line") {
          drawLine(ctx, startX, startY, pos.x, pos.y, currentColor, strokeWidth);
        } else if (currentTool === "rect") {
          drawRect(ctx, startX, startY, pos.x, pos.y, currentColor, strokeWidth, isShapeFill);
        } else if (currentTool === "circle") {
          drawCircle(ctx, startX, startY, pos.x, pos.y, currentColor, strokeWidth, isShapeFill);
        } else if (currentTool === "arrow") {
          drawArrow(ctx, startX, startY, pos.x, pos.y, currentColor, strokeWidth);
        }
      }
      saveState();
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    }

    canvas.addEventListener("pointerup", finishDrawing);
    canvas.addEventListener("pointercancel", finishDrawing);

    // Toolbar Listeners
    toolButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        setTool(btn.getAttribute("data-tool"));
      });
    });

    sizeChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        setStrokeSize(chip.getAttribute("data-size"));
      });
    });

    if (strokeRange) {
      strokeRange.addEventListener("input", function () {
        setStrokeSize(this.value);
      });
    }

    if (shapeFillCheck) {
      shapeFillCheck.addEventListener("change", function () {
        isShapeFill = this.checked;
      });
    }

    swatches.forEach(function (sw) {
      sw.addEventListener("click", function () {
        setColor(sw.getAttribute("data-color"));
      });
    });

    if (colorPicker) {
      colorPicker.addEventListener("input", function () {
        setColor(this.value);
      });
    }

    presetButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var w = parseInt(btn.getAttribute("data-w"), 10);
        var h = parseInt(btn.getAttribute("data-h"), 10);
        setCanvasPreset(w, h);
      });
    });

    if (undoBtn) undoBtn.addEventListener("click", undo);
    if (redoBtn) redoBtn.addEventListener("click", redo);
    if (clearBtn) clearBtn.addEventListener("click", clearCanvas);

    // Keyboard Shortcuts (Ctrl+Z, Ctrl+Y, Enter, Esc)
    window.addEventListener("keydown", function (e) {
      var paintSec = document.getElementById("paint");
      if (!paintSec || paintSec.classList.contains("hidden")) return;
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      if ((e.ctrlKey || e.metaKey) && (e.key === "z" || e.key === "Z")) {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
      } else if ((e.ctrlKey || e.metaKey) && (e.key === "y" || e.key === "Y")) {
        e.preventDefault();
        redo();
      } else if (e.key === "Enter") {
        if (transformState.active) {
          e.preventDefault();
          applyTransform();
        } else if (cropBox && cropBox.style.display !== "none") {
          e.preventDefault();
          applyCrop();
        }
      } else if (e.key === "Escape") {
        if (transformState.active) closeTransformBox();
        if (cropBox && cropBox.style.display !== "none") closeCropBox();
        hideTextOverlay();
      }
    });

    /* ==========================================================================
       ASSET BOARD (오른쪽 에셋 보드 기능)
       ========================================================================== */
    function saveAssets() {
      try {
        localStorage.setItem("ilsang_paint_assets", JSON.stringify(assets.slice(0, 30)));
      } catch (e) {}
    }

    function renderAssets() {
      if (!assetListEl) return;
      if (assetCountEl) assetCountEl.textContent = assets.length + "개";

      if (assets.length === 0) {
        if (assetEmptyEl) assetEmptyEl.style.display = "flex";
        assetListEl.querySelectorAll(".paint-asset-card").forEach(function (card) { card.remove(); });
        return;
      }

      if (assetEmptyEl) assetEmptyEl.style.display = "none";
      assetListEl.querySelectorAll(".paint-asset-card").forEach(function (card) { card.remove(); });

      assets.forEach(function (asset) {
        var card = document.createElement("div");
        card.className = "paint-asset-card";
        card.setAttribute("data-asset-id", asset.id);

        card.innerHTML =
          '<div class="paint-asset-card-top">' +
            '<img src="' + asset.dataUrl + '" alt="에셋" class="paint-asset-thumb">' +
            '<div class="paint-asset-meta">' +
              '<span class="paint-asset-size">' + asset.width + ' × ' + asset.height + ' px</span>' +
              '<span class="paint-asset-time">' + (asset.time || "방금 전") + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="paint-asset-actions">' +
            '<button type="button" class="paint-asset-btn-insert" data-asset-id="' + asset.id + '">' +
              '<span>➕</span>캔버스에 삽입' +
            '</button>' +
            '<button type="button" class="paint-asset-btn-del" data-asset-id="' + asset.id + '" title="에셋 삭제">' +
              '<span>🗑️</span>삭제' +
            '</button>' +
          '</div>';

        assetListEl.appendChild(card);
      });

      // Bind Card Actions
      assetListEl.querySelectorAll(".paint-asset-btn-insert").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-asset-id");
          insertAssetToCanvas(id);
        });
      });

      assetListEl.querySelectorAll(".paint-asset-btn-del").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var id = btn.getAttribute("data-asset-id");
          deleteAsset(id);
        });
      });
    }

    function addAssetFromDataUrl(dataUrl) {
      var img = new Image();
      img.onload = function () {
        var w = img.naturalWidth || img.width || 300;
        var h = img.naturalHeight || img.height || 200;
        var now = new Date();
        var timeStr = now.getHours() + ":" + (now.getMinutes() < 10 ? "0" : "") + now.getMinutes() + ":" + (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();

        var assetItem = {
          id: "asset_" + Date.now() + "_" + Math.floor(Math.random() * 1000),
          dataUrl: dataUrl,
          width: w,
          height: h,
          time: timeStr
        };

        assets.unshift(assetItem);
        if (assets.length > 25) assets.pop();
        saveAssets();
        renderAssets();
        // Also open transform box on canvas for immediate resize and placement
        openTransformBox(dataUrl, w, h);
        toast("📋 새로운 이미지 에셋이 등록되었습니다! 드래그하여 크기와 위치를 조절하세요.");
      };
      img.src = dataUrl;
    }

    function insertAssetToCanvas(assetId) {
      var target = assets.find(function (a) { return a.id === assetId; });
      if (!target) return;
      openTransformBox(target.dataUrl, target.width, target.height);
    }

    function deleteAsset(assetId) {
      assets = assets.filter(function (a) { return a.id !== assetId; });
      saveAssets();
      renderAssets();
      toast("에셋이 삭제되었습니다.");
    }

    if (assetClearAllBtn) {
      assetClearAllBtn.addEventListener("click", function () {
        if (assets.length === 0) return;
        if (!confirm("보드에 등록된 모든 에셋을 삭제하시겠습니까?")) return;
        assets = [];
        saveAssets();
        renderAssets();
        toast("에셋 목록이 모두 삭제되었습니다.");
      });
    }

    // Global / Window Clipboard Paste Listener
    window.addEventListener("paste", function (e) {
      var paintSec = document.getElementById("paint");
      if (!paintSec || paintSec.classList.contains("hidden")) return;

      var clipboardItems = e.clipboardData ? e.clipboardData.items : null;
      if (!clipboardItems) return;

      for (var i = 0; i < clipboardItems.length; i++) {
        var item = clipboardItems[i];
        if (item.type.indexOf("image") !== -1) {
          var file = item.getAsFile();
          if (file) {
            var reader = new FileReader();
            reader.onload = function (evt) {
              addAssetFromDataUrl(evt.target.result);
            };
            reader.readAsDataURL(file);
            e.preventDefault();
            break;
          }
        }
      }
    });

    // Drag and Drop to Asset Dropzone
    if (assetDropzone) {
      ["dragenter", "dragover"].forEach(function (eventName) {
        assetDropzone.addEventListener(eventName, function (e) {
          e.preventDefault();
          e.stopPropagation();
          assetDropzone.classList.add("drag-over");
        });
      });
      ["dragleave", "drop"].forEach(function (eventName) {
        assetDropzone.addEventListener(eventName, function (e) {
          e.preventDefault();
          e.stopPropagation();
          assetDropzone.classList.remove("drag-over");
        });
      });
      assetDropzone.addEventListener("drop", function (e) {
        var files = e.dataTransfer.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            if (files[i].type.indexOf("image") !== -1) {
              var reader = new FileReader();
              reader.onload = function (evt) {
                addAssetFromDataUrl(evt.target.result);
              };
              reader.readAsDataURL(files[i]);
            }
          }
        }
      });
    }

    if (assetUploadTrigger && assetFileInput) {
      assetUploadTrigger.addEventListener("click", function () {
        assetFileInput.click();
      });
      assetFileInput.addEventListener("change", function () {
        var files = this.files;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            if (files[i].type.indexOf("image") !== -1) {
              var reader = new FileReader();
              reader.onload = function (evt) {
                addAssetFromDataUrl(evt.target.result);
              };
              reader.readAsDataURL(files[i]);
            }
          }
          this.value = "";
        }
      });
    }

    /* ==========================================================================
       DOWNLOAD & SHARE MODAL
       ========================================================================== */
    function openShareModal() {
      if (!shareModal) return;
      var dataUrl = canvas.toDataURL("image/png");
      if (modalPreviewImg) modalPreviewImg.src = dataUrl;
      shareModal.style.display = "flex";
    }

    function closeShareModal() {
      if (shareModal) shareModal.style.display = "none";
    }

    if (downloadBtn) downloadBtn.addEventListener("click", openShareModal);
    if (shareBtn) shareBtn.addEventListener("click", openShareModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeShareModal);
    if (shareModal) {
      shareModal.addEventListener("click", function (e) {
        if (e.target === shareModal) closeShareModal();
      });
    }

    // Direct Download
    function executeDownload() {
      var formatRadio = document.querySelector('input[name="paintExportFormat"]:checked');
      var format = formatRadio ? formatRadio.value : "png";
      var mimeType = format === "jpg" ? "image/jpeg" : "image/png";
      var ext = format === "jpg" ? "jpg" : "png";

      var now = new Date();
      var pad = function (n) { return n < 10 ? "0" + n : n; };
      var filename = "ilsang_paint_" + now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + "_" + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds()) + "." + ext;

      var exportCanvas = canvas;
      if (format === "jpg") {
        exportCanvas = document.createElement("canvas");
        exportCanvas.width = canvas.width;
        exportCanvas.height = canvas.height;
        var expCtx = exportCanvas.getContext("2d");
        expCtx.fillStyle = "#ffffff";
        expCtx.fillRect(0, 0, canvas.width, canvas.height);
        expCtx.drawImage(canvas, 0, 0);
      }

      var link = document.createElement("a");
      link.download = filename;
      link.href = exportCanvas.toDataURL(mimeType, 0.92);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      closeShareModal();
      toast("내 컴퓨터에 그림 파일(" + filename + ")이 다운로드되었습니다!");
    }

    // Clipboard Copy
    function executeCopy() {
      if (!navigator.clipboard || !navigator.clipboard.write || !window.ClipboardItem) {
        toast("현재 브라우저에서는 이미지 클립보드 직접 복사를 지원하지 않습니다. 다운로드를 이용해주세요.");
        return;
      }
      canvas.toBlob(function (blob) {
        if (!blob) return;
        var item = new ClipboardItem({ "image/png": blob });
        navigator.clipboard.write([item]).then(function () {
          closeShareModal();
          toast("그림이 클립보드에 복사되었습니다! 카톡이나 문서에 바로 붙여넣기(Ctrl+V) 하세요.");
        }).catch(function () {
          toast("클립보드 복사 권한이 거부되었습니다.");
        });
      }, "image/png");
    }

    // Native Web Share API
    function executeShare() {
      if (navigator.share) {
        canvas.toBlob(function (blob) {
          if (!blob) return;
          var file = new File([blob], "ilsang_drawing.png", { type: "image/png" });
          if (navigator.canShare && !navigator.canShare({ files: [file] })) {
            executeCopy();
            return;
          }
          navigator.share({
            title: "일상툴 그림판 작품",
            text: "일상툴 그림판에서 완성한 그림입니다.",
            files: [file]
          }).then(function () {
            closeShareModal();
            toast("그림이 성공적으로 공유되었습니다!");
          }).catch(function (err) {
            if (err.name !== "AbortError") {
              executeCopy();
            }
          });
        }, "image/png");
      } else {
        executeCopy();
      }
    }

    if (modalDownloadBtn) modalDownloadBtn.addEventListener("click", executeDownload);
    if (modalCopyBtn) modalCopyBtn.addEventListener("click", executeCopy);
    if (modalShareBtn) modalShareBtn.addEventListener("click", executeShare);

    // Initial setup
    initCanvasBackground();
    renderAssets();

    window.onShowPaintTool = function () {
      updateUndoRedoUI();
      renderAssets();
    };
  })();

  function renderAdSlot(el) {
    if (!el || el.getAttribute("data-ad-rendered") === "true") return;
    var cfg = window.SITE_CONFIG || {};
    var ready = cfg.adsenseEnabled && cfg.adsenseClient && cfg.adsenseClient.indexOf("XXXX") === -1;
    var key = el.getAttribute("data-ad") || "toolIncontent";

    if (ready) {
      el.classList.add("ad-active");
      el.classList.remove("preview-mode");
      el.innerHTML = "";
      var ins = document.createElement("ins");
      ins.className = "adsbygoogle";
      ins.style.display = "block";
      ins.setAttribute("data-ad-client", cfg.adsenseClient);
      if (cfg.slots && cfg.slots[key]) {
        ins.setAttribute("data-ad-slot", cfg.slots[key]);
      }
      ins.setAttribute("data-ad-format", "auto");
      ins.setAttribute("data-full-width-responsive", "true");
      el.appendChild(ins);
      el.setAttribute("data-ad-rendered", "true");
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    } else if (cfg.adsensePreview) {
      el.classList.add("preview-mode");
      el.innerHTML = '<div class="ad-preview-box"><span class="ad-preview-badge">AD</span><span class="ad-preview-desc">광고 영역 · ' + key + '</span></div>';
      el.setAttribute("data-ad-rendered", "true");
    } else {
      el.innerHTML = "";
      el.classList.remove("preview-mode", "ad-active");
    }
  }

  function renderVisibleAds(sectionId) {
    // 1. 전역 공통 광고 슬롯 (사이드바, 헤더 상단, 본문 하단, 푸터)
    document.querySelectorAll(".sidebar .ad-slot, .main > .ad-slot").forEach(function (slot) {
      renderAdSlot(slot);
    });
    // 2. 현재 활성화된 화면 내부의 슬롯
    var activeSec = sectionId ? document.getElementById(sectionId) : document.querySelector(".view:not(.hidden)");
    if (activeSec) {
      activeSec.querySelectorAll(".ad-slot").forEach(function (slot) {
        renderAdSlot(slot);
      });
    }
  }

  window.addEventListener("hashchange", function () {
    var hash = (location.hash || "").replace("#", "");
    if (hash && TOOLS.some(function (t) { return t.id === hash; })) show(hash);
    else show("home");
  });
  var hash = (location.hash || "").replace("#", "");
  if (hash && TOOLS.some(function (t) { return t.id === hash; })) show(hash);
  else show("home");

  setInterval(tickClock, 1000);
  tickClock();
})();
