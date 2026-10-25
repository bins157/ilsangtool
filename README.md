# 일상툴 (IlsangTool - https://www.ilsangtool.kr)

33가지 일상·업무 필수 계산기, PDF 변환기, 감성 메모장, 그림판, 두뇌 게임을 설치나 회원가입 없이 웹 브라우저에서 즉시 사용하는 포털입니다.

## 이번 SEO · GEO · 구글 애드센스(AdSense) 승인 최적화 내역
1. **라우팅 & Canonical URL 충돌 해결 (`js/daily.js`, `js/app.js`, `index.html`)**
   - `?tool=salary`, `?tool=pdf` 등 쿼리 파라미터로 접속 시 `daily.js`가 초기 화면을 `home`으로 덮어쓰지 않고 즉시 해당 도구를 열도록 통합했습니다.
   - `setSeo()`가 Canonical URL과 `og:url`을 `#해시`가 아닌 `https://www.ilsangtool.kr/?tool=<id>`로 설정하도록 수정했습니다.
2. **구글 애드센스(AdSense) 승인 필수 정책 페이지 4종 신규 생성**
   - `about.html` (서비스 소개 및 33개 도구 산출 기준·편집 원칙)
   - `privacy.html` (개인정보처리방침: Google AdSense 제3자 쿠키·DART 쿠키 고지 및 맞춤형 광고 수신거부 링크, 100% 브라우저 로컬 연산 명시)
   - `terms.html` (이용약관 및 금융·세무·건강 계산 면책 고지)
   - `contact.html` (공식 이메일 `kchulsu577@gmail.com` 및 도구 요청 게시판 안내)
3. **가치가 낮은 콘텐츠(Thin Content) 방지용 심층 백서 & FAQ 허브 추가 (`index.html`)**
   - 메인 화면 및 33개 도구 섹션에 계산 공식, 활용 팁, 자주 묻는 질문(FAQ) 아코디언, 내부 링크 순환 그리드를 탑재했습니다.
4. **검색엔진 & AI 검색(GEO) 색인 파일 고도화 (`sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`)**
   - `llms-full.txt`를 구버전 26개 `#해시`에서 **33개 전체 도구 `?tool=` 상세 명세서**로 전면 교체했습니다.
   - `sitemap.xml`과 `robots.txt`에 33개 도구 URL 및 4개 정책 페이지(`about`, `privacy`, `terms`, `contact`), `Mediapartners-Google`(애드센스 봇) 허용 규칙을 반영했습니다.
