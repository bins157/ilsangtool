(function () {
  var TOOLS = [
    { id: "home", name: "홈", ico: "⌂", blurb: "29가지 필수 일상 도구", title: "일상툴 - 계산기, 단위변환, BMI, 환율, 연봉실수령, 환갑칠순, 온라인 메모장 등 29가지 생활 도구", desc: "계산기, 단위변환, BMI, 환율, 연봉 실수령, 환갑·칠순·팔순, 온라인 메모장, 주휴·실업급여, 부가세, 더치페이, QR코드 등 29가지 필수 일상 웹 도구. 회원가입 없이 브라우저에서 즉시 무료 사용." },
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
