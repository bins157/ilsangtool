(function () {
  var TOOLS = [
    { id: "home", name: "홈", ico: "⌂", blurb: "검색량 높은 일상 도구 20", title: "일상툴 - 계산기, 단위변환, BMI, 환율, 연봉 실수령 20가지", desc: "계산기, 단위변환, BMI, 환율, 연봉 실수령, 부가세, 더치페이, QR코드 등 한국에서 가장 많이 찾는 일상 웹 도구 20가지." },
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
  }

  function show(id) {
    document.querySelectorAll(".view").forEach(function (el) {
      el.classList.toggle("hidden", el.id !== id);
    });
    document.querySelectorAll(".nav button, .mobile-nav button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.id === id);
    });
    var tool = TOOLS.find(function (t) { return t.id === id; }) || TOOLS[0];
    pageTitle.textContent = tool.name;
    crumb.textContent = id === "home" ? "홈" : "홈 / " + tool.name;
    setSeo(tool);
    if (history.replaceState) history.replaceState(null, "", id === "home" ? location.pathname : "#" + id);
    else location.hash = id === "home" ? "" : id;
    if (id === "postcode") initPostcode();
  }

  document.querySelectorAll(".nav button, .mobile-nav button, .brand[data-id]").forEach(function (btn) {
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

  var calcExpr = "0";
  var calcNew = true;
  var calcDeg = true;
  var calcDisp = document.getElementById("calcDisp");
  document.getElementById("calcDeg").onclick = function () {
    calcDeg = true;
    this.classList.add("on");
    document.getElementById("calcRad").classList.remove("on");
  };
  document.getElementById("calcRad").onclick = function () {
    calcDeg = false;
    this.classList.add("on");
    document.getElementById("calcDeg").classList.remove("on");
  };
  document.querySelectorAll("#calcPad [data-k]").forEach(function (b) {
    b.onclick = function () { calcKey(b.getAttribute("data-k")); };
  });
  function fact(n) {
    n = Math.floor(n);
    if (n < 0 || n > 170) throw new Error("fact");
    var r = 1;
    for (var i = 2; i <= n; i++) r *= i;
    return r;
  }
  function toRad(x) { return calcDeg ? x * Math.PI / 180 : x; }
  function evalSci(expr) {
    var s = String(expr)
      .replace(/π/g, "(" + Math.PI + ")")
      .replace(/\be\b/g, "(" + Math.E + ")")
      .replace(/√\(/g, "sqrt(")
      .replace(/\^/g, "**");
    s = s.replace(/sin\(/g, "sin_(").replace(/cos\(/g, "cos_(").replace(/tan\(/g, "tan_(");
    var ang = calcDeg ? "x*Math.PI/180" : "x";
    var fn = Function(
      '"use strict";' +
      "var sin_=function(x){return Math.sin(" + ang + ");};" +
      "var cos_=function(x){return Math.cos(" + ang + ");};" +
      "var tan_=function(x){return Math.tan(" + ang + ");};" +
      "var log=function(x){return Math.log(x)/Math.LN10;};" +
      "var ln=function(x){return Math.log(x);};" +
      "var sqrt=Math.sqrt; return (" + s + ");"
    );
    return fn();
  }
  function wrapFn(name) {
    if (calcExpr === "0" || calcNew) calcExpr = name;
    else calcExpr = name + calcExpr + ")";
    calcNew = false;
  }
  function calcKey(k) {
    try {
      if (k === "AC" || k === "C") { calcExpr = "0"; calcNew = true; }
      else if (k === "←") { calcExpr = calcExpr.length > 1 ? calcExpr.slice(0, -1) : "0"; }
      else if (k === "=") {
        var val = evalSci(calcExpr);
        calcExpr = String(Number(val.toPrecision(12)));
        calcNew = true;
      } else if (k === "sq") {
        var v = evalSci(calcExpr);
        calcExpr = String(Number((v * v).toPrecision(12)));
        calcNew = true;
      } else if (k === "inv") {
        var iv = evalSci(calcExpr);
        calcExpr = String(Number((1 / iv).toPrecision(12)));
        calcNew = true;
      } else if (k === "fact") {
        calcExpr = String(fact(evalSci(calcExpr)));
        calcNew = true;
      } else if (k === "pi") {
        calcExpr = calcNew || calcExpr === "0" ? "π" : calcExpr + "π";
        calcNew = false;
      } else if (k === "e") {
        calcExpr = calcNew || calcExpr === "0" ? "e" : calcExpr + "e";
        calcNew = false;
      } else if (k === "sin(" || k === "cos(" || k === "tan(" || k === "log(" || k === "ln(" || k === "sqrt(") {
        wrapFn(k);
      } else {
        if (calcNew && /[0-9.]/.test(k)) calcExpr = k === "." ? "0." : k;
        else calcExpr = calcExpr === "0" && /[0-9]/.test(k) ? k : calcExpr + k;
        calcNew = false;
      }
    } catch (err) {
      calcExpr = "오류";
      calcNew = true;
    }
    calcDisp.textContent = calcExpr;
  }

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
    var posts = loadBoard();
    if (!posts.length) {
      list.innerHTML = '<div class="card panel"><p class="desc">아직 글이 없습니다. 첫 요청을 남겨 보세요.</p></div>';
      return;
    }
    list.innerHTML = posts.map(function (p) {
      return '<article class="card panel board-item"><div class="board-meta">' +
        (p.name || "익명") + " · " + p.when +
        '</div><h3>' + p.title + '</h3><p>' + p.body + "</p></article>";
    }).join("");
  }
  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c];
    });
  }
  document.getElementById("bdSubmit").onclick = function () {
    var title = document.getElementById("bdTitle").value.trim();
    var body = document.getElementById("bdBody").value.trim();
    if (!title || !body) return toast("제목과 내용을 입력하세요");
    var posts = loadBoard();
    posts.unshift({
      name: esc(document.getElementById("bdName").value.trim() || "익명"),
      title: esc(title),
      body: esc(body),
      when: new Date().toLocaleString("ko-KR")
    });
    localStorage.setItem(BD_KEY, JSON.stringify(posts.slice(0, 50)));
    document.getElementById("bdTitle").value = "";
    document.getElementById("bdBody").value = "";
    renderBoard();
    toast("글을 남겼습니다");
  };
  renderBoard();

  function renderAds() {
    var cfg = window.SITE_CONFIG || {};
    var ready = cfg.adsenseEnabled && cfg.adsenseClient && cfg.adsenseClient.indexOf("XXXX") === -1;
    document.querySelectorAll(".ad-slot").forEach(function (el) {
      var key = el.getAttribute("data-ad");
      if (ready) {
        el.innerHTML = "";
        var ins = document.createElement("ins");
        ins.className = "adsbygoogle";
        ins.style.display = "block";
        ins.setAttribute("data-ad-client", cfg.adsenseClient);
        ins.setAttribute("data-ad-slot", (cfg.slots && cfg.slots[key]) || "");
        ins.setAttribute("data-ad-format", "auto");
        ins.setAttribute("data-full-width-responsive", "true");
        el.appendChild(ins);
        try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
      }
    });
  }
  renderAds();

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
