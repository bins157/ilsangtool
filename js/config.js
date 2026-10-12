/**
 * 일상툴 (IlsangTool) 글로벌 환경 설정 & 애드센스 아키텍처
 * - ads.txt 등록 퍼블리셔: pub-2867455027568827
 * - 애드센스 최종 승인 시 adsenseEnabled: true 로 변경하면 모든 페이지와 툴에 광고가 즉시 자동 송출됩니다.
 */
window.SITE_CONFIG = {
  // 관리자 도구 요청 및 피드백 수신 이메일 (FormSubmit 연동)
  adminEmail: "kchulsu577@gmail.com",

  // 구글 애드센스 공식 클라이언트 ID (ads.txt 일치)
  adsenseClient: "ca-pub-2867455027568827",

  // 애드센스 광고 송출 스위치: 승인 완료 시 true로 변경
  adsenseEnabled: false,

  // 승인 심사 전 레이아웃 미리보기 모드 (true 설정 시 광고 배치 영역을 시각적으로 확인 가능)
  adsensePreview: false,

  // 슬롯별 단위 ID (애드센스 콘솔에서 수동 단위 광고 생성 시 기입, 비워둘 경우 스마트 반응형 자동 송출)
  slots: {
    header: "",
    sidebar: "",
    homeMid: "",
    homeBottom: "",
    toolIncontent: "",
    incontent: "",
    footer: ""
  }
};
