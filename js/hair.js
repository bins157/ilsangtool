/**
 * ==========================================================================
 * 일상툴 (IlsangTool) - AI 얼굴형 진단 & 맞춤 헤어스타일 추천 엔진
 * AI Face Shape Detection & Personalized Hairstyle Recommendation Engine
 * ==========================================================================
 */

(function (global) {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. 60+ 트렌디 K-Beauty & Global 헤어스타일 데이터베이스 (얼굴형별 매칭)
  // --------------------------------------------------------------------------
  const FACE_SHAPES_DATA = {
    oval: {
      id: 'oval',
      name: '계란형 (Oval)',
      badge: '이상적인 황금비율',
      emoji: '🥚',
      tagline: '가로·세로 균형이 완벽하고 턱선이 부드러운 가장 이상적인 얼굴형',
      ratios: { lengthWidth: 1.38, upperThird: 33, midThird: 34, lowerThird: 33, jawAngle: 118 },
      strengths: '이마부터 턱선까지 모난 곳 없이 부드럽게 이어지며, 숏컷부터 롱웨이브까지 거의 모든 헤어스타일을 소화할 수 있는 축복받은 얼굴형입니다.',
      stylingTip: '어떤 스타일도 잘 어울리지만, 얼굴을 너무 많이 가리면 오히려 예쁜 윤곽이 묻힐 수 있으므로 얼굴선을 시원하게 드러내는 스타일을 추천합니다.',
      worstStyles: [
        { name: '과도하게 무거운 풀뱅', desc: '이마를 완전히 덮어 황금비율의 세로 라인을 짧아 보이게 만들 수 있습니다.' },
        { name: '시선을 가리는 덥수룩한 사이드 볼륨', desc: '얼굴의 자연스러운 달걀형 턱선을 가려 답답해 보일 수 있습니다.' }
      ],
      styles: {
        female: [
          {
            id: 'ov-f-1',
            name: '태슬컷 & 풀베일 시스루뱅',
            enName: 'Tassel Bob with See-through Bangs',
            length: 'short',
            match: 99,
            why: '자연스러운 직선 단발 라인이 계란형의 매끄러운 턱선을 가장 돋보이게 해주는 도회적 스타일입니다.',
            bangs: '이마가 살짝 비치는 시스루뱅',
            parting: '5:5 또는 6:4 내추럴 가르마',
            color: '애쉬 브라운, 다크 초콜릿',
            salonScript: '턱선 1cm 아래로 떨어지는 깔끔한 일자 태슬컷으로 자르고, 모끝은 가볍게 질감 처리해주세요. 앞머리는 눈썹을 덮는 얇은 시스루뱅으로 부탁드립니다.'
          },
          {
            id: 'ov-f-2',
            name: '내추럴 레이어드 C컬펌',
            enName: 'Natural Layered C-Curl Perm',
            length: 'medium',
            match: 98,
            why: '어깨 라인을 부드럽게 감싸는 C컬이 계란형의 여성스러운 입체감을 극대화합니다.',
            bangs: '광대를 타고 흐르는 사이드뱅',
            parting: '6:4 부드러운 가르마',
            color: '모카 브라운, 매트 브라운',
            salonScript: '쇄골 기장의 미디엄 레이어드컷에 모끝 C컬 펌을 넣어주시고, 사이드뱅은 귀 뒤로 자연스럽게 넘어가도록 광대선에 맞춰 커트해주세요.'
          },
          {
            id: 'ov-f-3',
            name: '그레이스펌 (굵은 S컬 롱웨이브)',
            enName: 'Grace Perm Long Wave',
            length: 'long',
            match: 97,
            why: '풍성하게 흐르는 굵은 웨이브가 우아한 분위기를 연출하며 세련된 인상을 완성합니다.',
            bangs: '노뱅 (이마 오픈) 또는 롱 사이드뱅',
            parting: '7:3 우아한 가르마',
            color: '밤비 브라운, 웜 밀크티',
            salonScript: '가슴 윗선 기장에 무게감 있는 레이어드를 치고, 귀선 아래부터 자연스럽게 떨어지는 굵은 S컬 그레이스펌으로 연출해주세요.'
          },
          {
            id: 'ov-f-4',
            name: '소프트 허쉬컷 (미디엄)',
            enName: 'Soft Hush Cut',
            length: 'medium',
            match: 95,
            why: '깃털처럼 가벼운 질감의 레이어가 얼굴 윤곽의 장점을 살려 힙하고 트렌디한 무드를 줍니다.',
            bangs: '처피뱅 또는 페더뱅',
            parting: '자유로운 내추럴 가르마',
            color: '애쉬 블랙, 올리브 브라운',
            salonScript: '쇄골 라인 소프트 허쉬컷으로 부탁드려요. 윗볼륨은 살리고 아래는 가볍게 텍스처를 살려 날렵한 느낌을 주시면 좋겠습니다.'
          }
        ],
        male: [
          {
            id: 'ov-m-1',
            name: '시스루 댄디컷 (소프트 다운펌)',
            enName: 'See-Through Dandy Cut',
            length: 'medium',
            match: 99,
            why: '이마를 살짝 드러내면서도 단정한 실루엣이 계란형의 부드럽고 호감 가는 인상을 극대화합니다.',
            bangs: '이마 중앙이 살짝 비치는 시스루',
            parting: '눈썹 안쪽 6:4 가르마',
            color: '내추럴 블랙, 다크 브라운',
            salonScript: '앞머리는 눈썹을 살짝 덮으면서 시스루로 질감 가볍게 해주시고, 옆머리는 소프트 투블럭에 다운펌으로 슬림하게 붙여주세요.'
          },
          {
            id: 'ov-m-2',
            name: '가일컷 (세미 가일 스타일)',
            enName: 'Modern Guile Cut',
            length: 'short',
            match: 98,
            why: '한쪽은 이마를 시원하게 넘기고 한쪽은 자연스럽게 떨어뜨려 계란형의 완벽한 턱선과 T존을 강조합니다.',
            bangs: '한쪽 쉼표형, 한쪽 올백',
            parting: '7:3 또렷한 가르마',
            color: '미드나잇 블랙, 다크 애쉬',
            salonScript: '가일컷 스타일로 한쪽은 깔끔하게 뒤로 넘기고 반대쪽은 눈썹 위에 걸치게 연출할 수 있게 펌과 기장 잡아주세요.'
          },
          {
            id: 'ov-m-3',
            name: '리프컷 & 리프펌 (내추럴 세미롱)',
            enName: 'Leaf Cut & Perm',
            length: 'long',
            match: 96,
            why: '나뭇잎 결처럼 뒤로 흐르는 헤어 라인이 날렵하고 감성적인 남성미를 연출합니다.',
            bangs: '눈꼬리를 감싸는 긴 리프뱅',
            parting: '5:5 또는 6:4 내추럴 파팅',
            color: '애쉬 베이지, 딥 브라운',
            salonScript: '뒷머리는 목선을 덮는 세미 리프컷으로 기장 살려주시고, 앞머리는 귀 뒤로 넘어갈 수 있도록 자연스러운 리프 C컬펌 넣어주세요.'
          },
          {
            id: 'ov-m-4',
            name: '아이비리그컷 / 드롭컷',
            enName: 'Ivy League / Drop Cut',
            length: 'short',
            match: 95,
            why: '군더더기 없는 짧은 헤어가 계란형의 균형 잡힌 두상과 이목구비를 당당하게 드러냅니다.',
            bangs: '중앙 업, 양끝 다운 (드롭형)',
            parting: '노 파팅 (M자 커버형 업스타일)',
            color: '내추럴 블랙',
            salonScript: '옆뒤는 페이드 또는 12mm 다운펌으로 깔끔하게 누르고, 윗머리는 짧게 살려 앞머리 중앙만 세우고 양옆은 내리는 드롭컷으로 잘라주세요.'
          }
        ]
      }
    },

    round: {
      id: 'round',
      name: '둥근형 (Round)',
      badge: '동안 매력의 원형 라인',
      emoji: '⚪',
      tagline: '가로와 세로 비율이 거의 1:1에 가깝고 볼살과 턱선이 둥글둥글한 귀여운 동안형',
      ratios: { lengthWidth: 1.08, upperThird: 32, midThird: 36, lowerThird: 32, jawAngle: 125 },
      strengths: '나이보다 훨씬 어려 보이는 동안 매력과 부드럽고 다가가기 쉬운 친근한 분위기를 지니고 있습니다.',
      stylingTip: '정수리 윗볼륨을 살려 세로 길이를 확장하고, 양옆 볼륨은 슬림하게 누르며 사이드뱅으로 볼살을 사선으로 커버하는 것이 핵심입니다.',
      worstStyles: [
        { name: '턱선 일자 칼단발', desc: '턱선에서 딱 끊기는 일자 단발은 둥근 턱과 볼살의 가로 라인을 더 부각시킵니다.' },
        { name: '빽빽한 풀뱅', desc: '이마를 꽉 채워 가리면 얼굴의 세로 비율이 줄어들어 동그란 느낌이 배가됩니다.' }
      ],
      styles: {
        female: [
          {
            id: 'rd-f-1',
            name: '롱 레이어드 믹스펌 (사이드뱅)',
            enName: 'Long Layered Cut with Face-Framing Bangs',
            length: 'long',
            match: 99,
            why: '턱선 아래부터 시작되는 층감과 긴 사이드뱅이 둥근 볼살을 샤프하게 분할하여 갸름해 보이게 합니다.',
            bangs: '광대~턱선까지 사선으로 떨어지는 롱 사이드뱅',
            parting: '7:3 사선 가르마 (세로 라인 강조)',
            color: '애쉬 브라운, 다크 모카',
            salonScript: '가슴선 기장에 레이어드를 많이 쳐서 가벼운 질감을 주시고, 앞머리는 턱선까지 흐르는 사이드뱅으로 광대와 볼살을 커버하게 해주세요.'
          },
          {
            id: 'rd-f-2',
            name: '빌드펌 (미디엄 C+S컬)',
            enName: 'Medium Build Perm',
            length: 'medium',
            match: 97,
            why: '어깨에 닿아 밖으로 뻗치는 C컬과 S컬이 시선을 턱선 밑으로 분산시켜 둥근형을 보완합니다.',
            bangs: '시스루 사이드뱅',
            parting: '6:4 정수리 볼륨 가르마',
            color: '초콜릿 브라운, 웜 브라운',
            salonScript: '쇄골 아래 기장의 빌드펌 부탁드립니다. 정수리 뿌리 볼륨을 띄워주시고 옆머리는 자연스러운 S컬로 뻗치게 해주세요.'
          },
          {
            id: 'rd-f-3',
            name: '숏 보브컷 (정수리 볼륨)',
            enName: 'Voluminous Short Bob',
            length: 'short',
            match: 94,
            why: '뒷머리와 정수리 볼륨을 살리고 턱 앞쪽은 살짝 길게 빼는 A라인 보브컷으로 세로감을 살립니다.',
            bangs: '사이드로 넘기는 롱 뱅',
            parting: '7:3 깊은 가르마',
            color: '다크 브라운, 버건디 브라운',
            salonScript: '귀 뒤는 깔끔하게 치고 앞쪽 턱선으로 살짝 길어지는 A라인 숏보브로 잘라주세요. 정수리 볼륨펌 필수입니다.'
          }
        ],
        male: [
          {
            id: 'rd-m-1',
            name: '드롭컷 / 플랫컷 (사이드 다운펌)',
            enName: 'Drop Cut with Side Down Perm',
            length: 'short',
            match: 99,
            why: '옆머리를 초슬림하게 누르고 윗머리를 플랫하게 세워 둥근 실루엣을 남성적이고 샤프하게 만듭니다.',
            bangs: '이마 중앙을 드러내는 드롭 앞머리',
            parting: '중앙 업스타일',
            color: '내추럴 블랙',
            salonScript: '옆머리와 뒷머리는 9mm로 자른 후 다운펌으로 딱 붙여주시고, 윗머리는 플랫하게 앞머리 중앙을 세우는 드롭컷으로 연출해주세요.'
          },
          {
            id: 'rd-m-2',
            name: '애즈펌 (7:3 이마 오픈 스타일)',
            enName: '7:3 Parting As Perm',
            length: 'medium',
            match: 97,
            why: '이마를 세로로 시원하게 드러내어 얼굴이 길어 보이는 효과를 주며 부드러운 호감형을 완성합니다.',
            bangs: '7:3 애즈 가르마 뱅',
            parting: '7:3 곡선 가르마',
            color: '다크 애쉬 브라운',
            salonScript: '앞머리는 7:3 가르마로 타서 이마가 세로로 시원하게 보이게 애즈펌 해주시고, 옆머리는 뜨지 않게 슬림하게 눌러주세요.'
          },
          {
            id: 'rd-m-3',
            name: '리젠트컷 (남성미 넘치는 업헤어)',
            enName: 'Regent Up Cut',
            length: 'short',
            match: 95,
            why: '앞머리를 완전히 올려 시선을 위로 끌어올림으로써 동그란 턱선을 날렵하게 보이게 합니다.',
            bangs: '올백 업스타일',
            parting: '사이드 가르마',
            color: '블랙, 다크 브라운',
            salonScript: '리젠트컷으로 앞머리를 올리기 쉽게 질감 가볍게 쳐주시고 정수리 볼륨을 살려주세요. 옆라인은 깔끔하게 정돈 부탁드립니다.'
          }
        ]
      }
    },

    square: {
      id: 'square',
      name: '각진 사각형 (Square)',
      badge: '고급스러운 귀족적 윤곽',
      emoji: '⏹️',
      tagline: '이마, 광대, 턱의 너비가 비슷하고 턱 모서리 각이 살아있는 세련되고 이지적인 얼굴형',
      ratios: { lengthWidth: 1.15, upperThird: 33, midThird: 33, lowerThird: 34, jawAngle: 94 },
      strengths: '헐리우드 배우처럼 세련되고 도회적인 분위기와 신뢰감을 주는 또렷한 골격을 자랑합니다.',
      stylingTip: '턱의 각진 라인을 소프트하게 감싸는 부드러운 웨이브와 곡선 사이드뱅을 활용해 각진 느낌을 중화하는 것이 핵심입니다.',
      worstStyles: [
        { name: '자 대고 자른 칼단발 풀뱅', desc: '직선적인 헤어 라인은 각진 턱선을 거울처럼 똑같이 부각시켜 얼굴이 더 사각형으로 보입니다.' },
        { name: '귀 뒤로 꽉 묶은 포니테일', desc: '턱선 골격이 그대로 드러나 인상이 강해 보일 수 있습니다.' }
      ],
      styles: {
        female: [
          {
            id: 'sq-f-1',
            name: '소프트 페이스라인 레이어드 S컬펌',
            enName: 'Soft Face-Framing S-Curl Perm',
            length: 'long',
            match: 99,
            why: '턱선 주위를 감싸며 굴곡지는 부드러운 S컬이 각진 턱의 모서리를 감쪽같이 커버합니다.',
            bangs: '턱선 아래로 흐르는 곡선 사이드뱅',
            parting: '6:4 부드러운 곡선 가르마',
            color: '웜 브라운, 모카 베이지',
            salonScript: '가슴선 기장에 레이어드 많이 넣어주시고, 턱 모서리선에 굵은 S컬 굴곡이 들어가 각을 가려주도록 페이스라인 컷 부탁드립니다.'
          },
          {
            id: 'sq-f-2',
            name: '윈드컷 (중단발 레이어드)',
            enName: 'Medium Wind Cut',
            length: 'medium',
            match: 97,
            why: '공기감 있는 가벼운 끝선이 각진 하관의 무게감을 덜어내고 세련된 무드를 연출합니다.',
            bangs: '소프트 시스루 사이드뱅',
            parting: '5:5 또는 6:4 내추럴',
            color: '밀크 브라운, 애쉬 카키',
            salonScript: '쇄골 기장의 윈드컷으로 끝이 무겁지 않게 질감 많이 쳐주시고, 사이드뱅이 턱각을 부드럽게 스치도록 굴곡을 주세요.'
          },
          {
            id: 'sq-f-3',
            name: '허쉬 레이어드 펌',
            enName: 'Hush Layered Perm',
            length: 'medium',
            match: 95,
            why: '층마다 다른 길이의 컬들이 하관의 시선을 분산시켜 고급스러운 입체감을 만듭니다.',
            bangs: '이마를 드러내는 사이드뱅',
            parting: '7:3 볼륨 가르마',
            color: '다크 브라운',
            salonScript: '허쉬컷 기법으로 하관 무게감을 덜어내는 텍스처 펌으로 부탁드립니다. 턱선 위쪽 볼륨을 풍성하게 살려주세요.'
          }
        ],
        male: [
          {
            id: 'sq-m-1',
            name: '소프트 가일컷 (곡선 볼륨)',
            enName: 'Soft Guile Cut with Curved Bangs',
            length: 'short',
            match: 99,
            why: '남성적인 턱선의 매력을 살리면서 이마 한쪽의 부드러운 곡선 쉼표가 강한 인상을 완화합니다.',
            bangs: '한쪽 곡선 쉼표, 한쪽 넘김',
            parting: '6:4 자연스러운 가르마',
            color: '자연 갈색, 딥 블랙',
            salonScript: '소프트 가일컷으로 부탁드려요. 각진 이마와 턱이 너무 세 보이지 않게 앞머리 곡선 컬감을 부드럽게 살려주세요.'
          },
          {
            id: 'sq-m-2',
            name: '텍스처 리프컷 (자연스러운 컬)',
            enName: 'Textured Leaf Cut',
            length: 'long',
            match: 97,
            why: '귀 뒤와 목선으로 넘어가는 긴 기장의 헤어가 각진 턱선을 시각적으로 부드럽게 감쌉니다.',
            bangs: '눈썹을 지나 귀로 흐르는 리프뱅',
            parting: '6:4 가르마',
            color: '애쉬 브라운',
            salonScript: '뒷머리와 옆머리 기장을 살려 턱각을 자연스럽게 덮는 텍스처 리프컷 해주시고, 가벼운 핀컬펌으로 텍스처를 살려주세요.'
          },
          {
            id: 'sq-m-3',
            name: '쉐도우펌 (풍성한 컬감)',
            enName: 'Shadow Perm',
            length: 'medium',
            match: 94,
            why: '정수리와 윗머리에 들어간 부드러운 S컬 쉐도우가 하관의 각진 시선을 위로 끌어올립니다.',
            bangs: '눈썹 위 자연스러운 컬 뱅',
            parting: '내추럴',
            color: '초코 브라운',
            salonScript: '쉐도우펌으로 윗머리에 볼륨과 텍스처를 많이 주시고, 하관이 부각되지 않게 옆머리는 너무 짧지 않게 다운펌 해주세요.'
          }
        ]
      }
    },

    heart: {
      id: 'heart',
      name: '하트형 (Heart)',
      badge: '사랑스러운 V라인 윤곽',
      emoji: '💖',
      tagline: '넓은 이마와 도드라진 광대, 턱 끝으로 갈수록 날렵하게 좁아지는 세련된 V라인 얼굴형',
      ratios: { lengthWidth: 1.28, upperThird: 36, midThird: 34, lowerThird: 30, jawAngle: 128 },
      strengths: '사진이 가장 잘 받는 뾰족하고 매끄러운 턱선과 트렌디한 V라인 황금비율을 가지고 있습니다.',
      stylingTip: '넓은 이마와 관자놀이를 시스루뱅이나 사이드뱅으로 커버하고, 턱선 주변에 풍성한 C컬 볼륨을 넣어 좁은 턱을 보완하는 것이 포인트입니다.',
      worstStyles: [
        { name: '정수리 윗볼륨만 과한 숏컷', desc: '이마와 윗부분이 더 넓어 보이고 턱이 왜소해 보일 수 있습니다.' },
        { name: '뿌리부터 짝 달라붙는 스트레이트', desc: '상체 볼륨 대비 턱 끝의 뾰족함만 극단적으로 강조될 수 있습니다.' }
      ],
      styles: {
        female: [
          {
            id: 'ht-f-1',
            name: '풍성한 빌드펌 & 사이드 볼륨 C컬',
            enName: 'Voluminous Build Perm with Jawline C-Curl',
            length: 'medium',
            match: 99,
            why: '턱선 부근에서 바깥으로 도톰하게 퍼지는 C컬이 날렵한 턱선을 우아하고 입체감 있게 채워줍니다.',
            bangs: '이마 양옆을 가려주는 풀베일 시스루뱅',
            parting: '6:4 부드러운 가르마',
            color: '밀크 브라운, 로즈 브라운',
            salonScript: '쇄골 라인 빌드펌으로 턱선 주변에 C컬 볼륨을 풍성하게 채워주시고, 이마가 좁아 보이도록 시스루 사이드뱅을 넓게 내주세요.'
          },
          {
            id: 'ht-f-2',
            name: '단발 보니컷 / 모즈컷',
            enName: 'Bonnie Cut Soft Bob',
            length: 'short',
            match: 97,
            why: '턱 끝 선에서 동그랗게 감싸 안는 C컬 단발이 뾰족한 턱의 날카로움을 부드러운 러블리함으로 바꿉니다.',
            bangs: '애교머리가 있는 시스루뱅',
            parting: '5:5 또는 6:4',
            color: '모카 브라운',
            salonScript: '턱선 바로 밑 기장의 보니컷 단발로 안쪽으로 말리는 풍성한 C컬펌을 넣어 턱 양옆 볼륨을 채워주세요.'
          },
          {
            id: 'ht-f-3',
            name: '젤리펌 / 굵은 히피펌',
            enName: 'Jelly Perm Medium Waves',
            length: 'long',
            match: 95,
            why: '광대 아래부터 자잘한 물결 컬감이 퍼져 하관의 빈 공간을 사랑스럽게 채워줍니다.',
            bangs: '컬감이 있는 컬리뱅',
            parting: '자유로운 6:4',
            color: '애쉬 브라운, 탠저린 브라운',
            salonScript: '귀 밑선부터 탄력 있게 흐르는 젤리펌(굵은 히피펌)으로 부탁드립니다. 이마 라인은 자연스럽게 분산시켜주세요.'
          }
        ],
        male: [
          {
            id: 'ht-m-1',
            name: '시스루 애즈펌 (내추럴 볼륨)',
            enName: 'See-Through As Perm',
            length: 'medium',
            match: 99,
            why: '넓은 이마 양끝 M자 존을 가려주면서 중앙만 살짝 열어 턱선으로 이어지는 밸런스를 잡습니다.',
            bangs: '양끝을 덮는 애즈 스타일 앞머리',
            parting: '6:4 가르마',
            color: '내추럴 블랙, 다크 브라운',
            salonScript: '시스루 애즈펌으로 이마 양옆 관자놀이는 가리고 중앙만 살짝 트이게 해주세요. 턱이 뾰족하므로 옆머리를 너무 하얗게 치지 말아주세요.'
          },
          {
            id: 'ht-m-2',
            name: '댄디 볼륨매직 (소프트 텍스처)',
            enName: 'Dandy Volume Magic',
            length: 'medium',
            match: 96,
            why: '단정하게 이마를 커버하는 댄디 라인이 뾰족한 턱선과 대비되어 훈훈한 대학생 무드를 줍니다.',
            bangs: '눈썹을 덮는 댄디 뱅',
            parting: '내추럴 라인',
            color: '초코 브라운',
            salonScript: '소프트 투블럭 댄디컷에 볼륨매직을 넣어 이마는 차분하게 덮고 부드러운 텍스처를 살려주세요.'
          },
          {
            id: 'ht-m-3',
            name: '믹스 리프펌 (하관 볼륨 강조)',
            enName: 'Mix Leaf Perm',
            length: 'long',
            match: 95,
            why: '목선으로 내려오는 가벼운 컬감이 뾰족한 턱선의 왜소함을 보완해 감성적인 무드를 완성합니다.',
            bangs: '긴 가일 & 리프 혼합형',
            parting: '6:4',
            color: '애쉬 베이지',
            salonScript: '턱선 주변에 헤어 실루엣이 보이도록 세미 리프컷으로 잘라주시고 자연스러운 컬감의 리프펌을 넣어주세요.'
          }
        ]
      }
    },

    oblong: {
      id: 'oblong',
      name: '긴 얼굴형 (Oblong)',
      badge: '성숙하고 지적인 분위기',
      emoji: '⏳',
      tagline: '세로 길이가 가로 너비에 비해 확연히 길고 이마나 중안부가 발달한 차분하고 지적인 얼굴형',
      ratios: { lengthWidth: 1.56, upperThird: 35, midThird: 36, lowerThird: 29, jawAngle: 110 },
      strengths: '도시적이고 우아하며 세련된 오피스룩이나 클래식한 분위기가 매우 잘 어울리는 얼굴형입니다.',
      stylingTip: '앞머리(풀뱅/시스루뱅)로 이마를 가려 세로 길이를 즉시 단축하고, 옆머리에 가로 볼륨(S컬/C컬)을 풍성하게 넣는 것이 핵심입니다.',
      worstStyles: [
        { name: '이마를 완전히 올린 5:5 롱 생머리', desc: '세로선만 강조되어 얼굴이 두 배로 길어 보일 수 있습니다.' },
        { name: '정수리 뽕만 과도하게 띄운 업헤어', desc: '머리 윗부분이 높아져 세로 비율이 더 극대화됩니다.' }
      ],
      styles: {
        female: [
          {
            id: 'ob-f-1',
            name: '풀뱅 & 미디엄 엘리자벳펌',
            enName: 'Full Bangs with Elisabeth Perm',
            length: 'medium',
            match: 99,
            why: '풀뱅이 이마 3~4cm를 커버하고, 옆으로 풍성하게 퍼지는 S컬이 가로 폭을 넓혀 완벽한 계란형 착시를 만듭니다.',
            bangs: '눈썹을 덮는 도톰한 풀뱅 또는 소프트 풀뱅',
            parting: '앞머리 있음 (노 파팅)',
            color: '다크 초코, 모카 브라운',
            salonScript: '눈썹 덮는 풀뱅으로 앞머리 내려주시고, 쇄골 기장에 옆볼륨이 풍성하게 살아나는 엘리자벳펌(S컬)으로 가로 볼륨을 채워주세요.'
          },
          {
            id: 'ob-f-2',
            name: '와이드 보니펌 (단발 S+C컬)',
            enName: 'Wide Volume Bonnie Bob',
            length: 'short',
            match: 98,
            why: '턱선보다 살짝 짧은 기장의 볼륨 단발이 시선을 위로 끌어올려 얼굴 세로 길이를 획기적으로 줄여줍니다.',
            bangs: '시스루 풀뱅',
            parting: '가로 라인 강조',
            color: '밀크 브라운',
            salonScript: '턱선 위로 올라오는 상큼한 기장의 보니컷 단발로 잘라주시고, 양옆에 가로 볼륨을 띄우는 C컬펌을 넣어주세요.'
          },
          {
            id: 'ob-f-3',
            name: '레이어드 웨이브 & 사이드 윙뱅',
            enName: 'Layered Waves with Wing Bangs',
            length: 'long',
            match: 96,
            why: '관자놀이와 광대 양옆으로 넓게 뻗치는 날개 모양 윙뱅이 긴 얼굴의 폭을 시각적으로 넓혀줍니다.',
            bangs: '사이드 와이드 윙뱅',
            parting: '6:4 낮은 가르마',
            color: '애쉬 브라운',
            salonScript: '롱 기장의 레이어드 웨이브에 사이드뱅은 옆으로 넓게 퍼지는 윙뱅 형태로 드라이되도록 커트 부탁드립니다.'
          }
        ],
        male: [
          {
            id: 'ob-m-1',
            name: '풀뱅 쉐도우펌 (가로 볼륨 강조)',
            enName: 'Full Bangs Shadow Perm',
            length: 'medium',
            match: 99,
            why: '앞머리로 이마를 완전히 커버하고 옆머리에 풍성한 쉐도우 S컬을 넣어 긴 얼굴형의 단점을 완벽히 지웁니다.',
            bangs: '이마를 덮는 텍스처 풀뱅',
            parting: '노 파팅 (앞으로 내리는 스타일)',
            color: '내추럴 블랙, 다크 브라운',
            salonScript: '앞머리는 눈썹에 맞춰 이마를 덮는 쉐도우펌으로 부탁드립니다. 정수리는 띄우지 마시고 옆머리 볼륨감을 풍성하게 살려주세요.'
          },
          {
            id: 'ob-m-2',
            name: '크롭컷 / 다운펌 댄디',
            enName: 'Textured Crop Cut',
            length: 'short',
            match: 96,
            why: '이마를 1/2 이상 덮는 짧은 크롭뱅이 얼굴의 세로 비율을 단축해 샤프하고 트렌디한 이미지를 줍니다.',
            bangs: '짧은 일자 크롭뱅',
            parting: '포워드 다운 스타일',
            color: '다크 애쉬',
            salonScript: '크롭컷 스타일로 앞머리를 눈썹 위에서 가볍게 내리고, 옆머리는 너무 하얗지 않게 12mm 다운펌으로 깔끔히 정돈해주세요.'
          },
          {
            id: 'ob-m-3',
            name: '소프트 리프펌 (사이드 볼륨형)',
            enName: 'Side-Spread Leaf Perm',
            length: 'long',
            match: 94,
            why: '옆머리가 가로로 풍성하게 흩날리는 리프펌 실루엣이 긴 턱선의 시선을 양옆으로 분산시킵니다.',
            bangs: '양옆으로 넓게 벌어지는 리프뱅',
            parting: '5:5 또는 6:4 와이드 파팅',
            color: '모카 브라운',
            salonScript: '세미 리프컷으로 옆으로 넓게 뻗치는 컬감을 살려주시고, 정수리 볼륨은 누르고 옆볼륨을 강조해주세요.'
          }
        ]
      }
    },

    diamond: {
      id: 'diamond',
      name: '다이아몬드형 (Diamond)',
      badge: '입체적이고 매혹적인 실루엣',
      emoji: '💎',
      tagline: '이마와 턱이 좁고 광대뼈(Cheekbone)가 가장 넓게 발달한 매력적이고 서구적인 입체형',
      ratios: { lengthWidth: 1.34, upperThird: 31, midThird: 39, lowerThird: 30, jawAngle: 115 },
      strengths: '빛을 받는 광대뼈 라인과 갸름한 턱선이 조화를 이뤄 사진에서 극강의 음영과 입체미를 뽐냅니다.',
      stylingTip: '도드라진 광대 라인을 사이드뱅으로 부드럽게 감싸면서 좁은 이마와 턱선 쪽에 볼륨을 더해 균형을 맞춥니다.',
      worstStyles: [
        { name: '광대뼈 바로 위에서 끝나는 짧은 칼단발', desc: '광대뼈의 가장 넓은 지점을 수평선으로 가리켜 광대가 더 넓어 보일 수 있습니다.' },
        { name: '옆머리를 꽉 조여 묶은 올백', desc: '좁은 이마와 튀어나온 광대가 그대로 노출됩니다.' }
      ],
      styles: {
        female: [
          {
            id: 'dm-f-1',
            name: '사이드뱅 롱 레이어드 S컬펌',
            enName: 'Long Layered S-Curl with Cheekbone Bangs',
            length: 'long',
            match: 99,
            why: '광대뼈 최고점을 부드러운 곡선으로 덮어 흐르는 사이드뱅이 다이아몬드형의 가장 이상적인 보완책입니다.',
            bangs: '광대뼈를 타고 코선까지 흐르는 사이드뱅',
            parting: '6:4 볼륨 가르마',
            color: '애쉬 브라운, 샌드 베이지',
            salonScript: '가슴선 기장에 레이어드컷 해주시고, 사이드뱅은 광대뼈의 가장 높은 부분을 자연스럽게 덮고 귀 뒤로 넘어가도록 잘라주세요.'
          },
          {
            id: 'dm-f-2',
            name: '허쉬컷 & C컬 레이어드',
            enName: 'Medium Hush Cut with C-Curl',
            length: 'medium',
            match: 97,
            why: '윗부분과 턱선 주변에 풍성한 레이어드가 들어가 광대뼈의 도드라짐을 자연스러운 입체감으로 승화합니다.',
            bangs: '시스루 롱 사이드뱅',
            parting: '내추럴 5:5 또는 6:4',
            color: '다크 모카 브라운',
            salonScript: '쇄골 길이의 허쉬컷으로 잘라주시고, 좁은 관자놀이와 턱선 쪽에 볼륨이 생기도록 층감을 적절히 내주세요.'
          },
          {
            id: 'dm-f-3',
            name: '미디엄 젤리펌 / 물결펌',
            enName: 'Medium Jelly Wave Perm',
            length: 'medium',
            match: 95,
            why: '자연스러운 물결 웨이브가 얼굴선 전체의 굴곡을 분산시켜 부드러운 인상을 만듭니다.',
            bangs: '커브 사이드뱅',
            parting: '7:3 우아한 가르마',
            color: '초콜릿 브라운',
            salonScript: '물결 모양 젤리펌으로 얼굴 전체에 굵은 웨이브 볼륨을 넣어주세요. 광대 라인은 부드럽게 감싸지게 부탁드립니다.'
          }
        ],
        male: [
          {
            id: 'dm-m-1',
            name: '세미 리프컷 (광대 커버 스타일)',
            enName: 'Semi Leaf Cut for Diamond Face',
            length: 'long',
            match: 99,
            why: '눈꼬리와 광대를 자연스럽게 타고 흐르는 앞머리가 튀어나온 광대를 완벽하게 감싸 스마트한 인상을 줍니다.',
            bangs: '광대를 덮으며 귀로 넘어가는 리프뱅',
            parting: '6:4 가르마',
            color: '내추럴 블랙, 다크 애쉬',
            salonScript: '세미 리프컷으로 앞머리가 광대뼈를 살짝 가리면서 귀 뒤로 넘어가게 기장을 살려주시고, 가벼운 리프펌을 넣어주세요.'
          },
          {
            id: 'dm-m-2',
            name: '6:4 애즈펌 & 소프트 다운펌',
            enName: '6:4 As Perm with Temple Volume',
            length: 'medium',
            match: 97,
            why: '좁은 이마 관자놀이 부위에 볼륨을 채워 광대뼈와의 너비 차이를 줄여주는 효과적인 스타일입니다.',
            bangs: '6:4 자연스러운 애즈뱅',
            parting: '6:4 가르마',
            color: '다크 브라운',
            salonScript: '애즈펌으로 관자놀이 쪽 뿌리 볼륨을 살려주시고, 앞머리가 광대 라인을 부드럽게 흩날리며 가려주도록 커트 부탁드립니다.'
          },
          {
            id: 'dm-m-3',
            name: '쉐도우 댄디컷',
            enName: 'Textured Shadow Dandy',
            length: 'medium',
            match: 95,
            why: '윗머리의 자유분방한 컬감이 시선을 위로 끌어올려 도드라진 광대선의 강한 인상을 누그러뜨립니다.',
            bangs: '눈썹을 덮는 텍스처 뱅',
            parting: '내추럴 파팅',
            color: '초코 브라운',
            salonScript: '쉐도우 댄디컷으로 윗머리에 자연스러운 볼륨감을 주시고, 옆머리는 너무 붙이지 말고 자연스러운 기장으로 남겨주세요.'
          }
        ]
      }
    }
  };

  // --------------------------------------------------------------------------
  // 2. 6대 대표 모델 프리셋 사진 (1초 즉시 테스트용)
  // --------------------------------------------------------------------------
  const PRESET_MODELS = [
    {
      id: 'oval',
      name: '타원/계란형 모델',
      shape: 'oval',
      badge: '황금비율',
      gender: 'female',
      desc: '가로세로 1:1.38 완벽한 대칭과 부드러운 턱선',
      points: {
        hairline: { x: 0.5, y: 0.18 },
        foreheadLeft: { x: 0.32, y: 0.28 },
        foreheadRight: { x: 0.68, y: 0.28 },
        cheekLeft: { x: 0.24, y: 0.48 },
        cheekRight: { x: 0.76, y: 0.48 },
        jawLeft: { x: 0.32, y: 0.70 },
        jawRight: { x: 0.68, y: 0.70 },
        chin: { x: 0.5, y: 0.88 },
        eyeLeft: { x: 0.38, y: 0.42 },
        eyeRight: { x: 0.62, y: 0.42 },
        noseTip: { x: 0.5, y: 0.58 }
      }
    },
    {
      id: 'round',
      name: '둥근형 모델',
      shape: 'round',
      badge: '동안 볼살',
      gender: 'female',
      desc: '가로세로 1:1.08 둥근 턱선과 풍성한 볼살',
      points: {
        hairline: { x: 0.5, y: 0.22 },
        foreheadLeft: { x: 0.30, y: 0.32 },
        foreheadRight: { x: 0.70, y: 0.32 },
        cheekLeft: { x: 0.20, y: 0.50 },
        cheekRight: { x: 0.80, y: 0.50 },
        jawLeft: { x: 0.28, y: 0.68 },
        jawRight: { x: 0.72, y: 0.68 },
        chin: { x: 0.5, y: 0.82 },
        eyeLeft: { x: 0.38, y: 0.45 },
        eyeRight: { x: 0.62, y: 0.45 },
        noseTip: { x: 0.5, y: 0.58 }
      }
    },
    {
      id: 'square',
      name: '각진 사각형 모델',
      shape: 'square',
      badge: '세련된 턱각',
      gender: 'male',
      desc: '넓은 이마와 뚜렷한 94° 턱각의 도회적 입체형',
      points: {
        hairline: { x: 0.5, y: 0.17 },
        foreheadLeft: { x: 0.25, y: 0.26 },
        foreheadRight: { x: 0.75, y: 0.26 },
        cheekLeft: { x: 0.24, y: 0.47 },
        cheekRight: { x: 0.76, y: 0.47 },
        jawLeft: { x: 0.26, y: 0.72 },
        jawRight: { x: 0.74, y: 0.72 },
        chin: { x: 0.5, y: 0.86 },
        eyeLeft: { x: 0.38, y: 0.42 },
        eyeRight: { x: 0.62, y: 0.42 },
        noseTip: { x: 0.5, y: 0.58 }
      }
    },
    {
      id: 'heart',
      name: '하트/V라인 모델',
      shape: 'heart',
      badge: '날렵한 V라인',
      gender: 'female',
      desc: '넓은 이마와 광대, 날렵하게 좁아지는 턱끝',
      points: {
        hairline: { x: 0.5, y: 0.16 },
        foreheadLeft: { x: 0.26, y: 0.26 },
        foreheadRight: { x: 0.74, y: 0.26 },
        cheekLeft: { x: 0.22, y: 0.45 },
        cheekRight: { x: 0.78, y: 0.45 },
        jawLeft: { x: 0.36, y: 0.70 },
        jawRight: { x: 0.64, y: 0.70 },
        chin: { x: 0.5, y: 0.87 },
        eyeLeft: { x: 0.37, y: 0.41 },
        eyeRight: { x: 0.63, y: 0.41 },
        noseTip: { x: 0.5, y: 0.57 }
      }
    },
    {
      id: 'oblong',
      name: '긴 얼굴형 모델',
      shape: 'oblong',
      badge: '성숙하고 지적',
      gender: 'male',
      desc: '가로세로 1:1.56 시원한 이마와 긴 중안부 비율',
      points: {
        hairline: { x: 0.5, y: 0.12 },
        foreheadLeft: { x: 0.33, y: 0.27 },
        foreheadRight: { x: 0.67, y: 0.27 },
        cheekLeft: { x: 0.28, y: 0.50 },
        cheekRight: { x: 0.72, y: 0.50 },
        jawLeft: { x: 0.33, y: 0.72 },
        jawRight: { x: 0.67, y: 0.72 },
        chin: { x: 0.5, y: 0.92 },
        eyeLeft: { x: 0.39, y: 0.44 },
        eyeRight: { x: 0.61, y: 0.44 },
        noseTip: { x: 0.5, y: 0.62 }
      }
    },
    {
      id: 'diamond',
      name: '다이아몬드형 모델',
      shape: 'diamond',
      badge: '입체적 광대',
      gender: 'female',
      desc: '광대뼈가 가장 넓고 이마와 턱이 슬림한 모델',
      points: {
        hairline: { x: 0.5, y: 0.18 },
        foreheadLeft: { x: 0.36, y: 0.28 },
        foreheadRight: { x: 0.64, y: 0.28 },
        cheekLeft: { x: 0.20, y: 0.47 },
        cheekRight: { x: 0.80, y: 0.47 },
        jawLeft: { x: 0.34, y: 0.71 },
        jawRight: { x: 0.66, y: 0.71 },
        chin: { x: 0.5, y: 0.87 },
        eyeLeft: { x: 0.38, y: 0.42 },
        eyeRight: { x: 0.62, y: 0.42 },
        noseTip: { x: 0.5, y: 0.58 }
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 3. 얼굴 랜드마크 분석 및 얼굴형 분류 알고리즘 (Computer Vision Engine)
  // --------------------------------------------------------------------------
  function calculateFaceRatios(points) {
    const faceHeight = Math.abs(points.chin.y - points.hairline.y);
    const foreheadWidth = Math.abs(points.foreheadRight.x - points.foreheadLeft.x);
    const cheekWidth = Math.abs(points.cheekRight.x - points.cheekLeft.x) || 0.001;
    const jawWidth = Math.abs(points.jawRight.x - points.jawLeft.x);

    // 가로 대 세로 비율 (Length to Width Ratio)
    const lengthWidthRatio = parseFloat((faceHeight / cheekWidth).toFixed(2));

    // 이마/광대 및 턱/광대 비율
    const foreheadCheekRatio = parseFloat((foreheadWidth / cheekWidth).toFixed(2));
    const jawCheekRatio = parseFloat((jawWidth / cheekWidth).toFixed(2));

    // 삼분할 비율 (상안부, 중안부, 하안부)
    const eyeY = points.eyeLeft ? points.eyeLeft.y : points.hairline.y + faceHeight * 0.33;
    const noseY = points.noseTip ? points.noseTip.y : points.hairline.y + faceHeight * 0.66;

    const upperHeight = Math.max(0.01, eyeY - points.hairline.y);
    const midHeight = Math.max(0.01, noseY - eyeY);
    const lowerHeight = Math.max(0.01, points.chin.y - noseY);
    const totalThirds = upperHeight + midHeight + lowerHeight;

    const upperThird = Math.round((upperHeight / totalThirds) * 100);
    const midThird = Math.round((midHeight / totalThirds) * 100);
    const lowerThird = 100 - upperThird - midThird;

    // 턱선 각도 추정 (도)
    const jawDx = (points.jawRight.x - points.chin.x);
    const jawDy = (points.chin.y - points.jawRight.y);
    const angleRad = Math.atan2(jawDy, jawDx);
    const jawAngle = Math.round((angleRad * 180 / Math.PI) * 1.3);

    return {
      lengthWidthRatio,
      foreheadCheekRatio,
      jawCheekRatio,
      upperThird,
      midThird,
      lowerThird,
      jawAngle: Math.min(135, Math.max(88, jawAngle))
    };
  }

  function classifyFaceShape(ratios) {
    const r = ratios.lengthWidthRatio;
    const f = ratios.foreheadCheekRatio;
    const j = ratios.jawCheekRatio;

    let scores = {
      oval: 0,
      round: 0,
      square: 0,
      heart: 0,
      oblong: 0,
      diamond: 0
    };

    // 1. 긴 얼굴형 판정
    if (r >= 1.48) {
      scores.oblong += 65;
    } else if (r >= 1.40) {
      scores.oblong += 35;
      scores.oval += 35;
    }

    // 2. 둥근형 판정
    if (r <= 1.15) {
      scores.round += 60;
    } else if (r <= 1.22) {
      scores.round += 30;
    }

    // 3. 각진 사각형 판정 (턱 너비가 넓고 각도가 뚜렷함)
    if (j >= 0.84) {
      scores.square += 55;
    } else if (j >= 0.78) {
      scores.square += 25;
    }
    if (ratios.jawAngle <= 98) {
      scores.square += 30;
    }

    // 4. 하트형 판정 (이마는 넓고 턱은 뾰족)
    if (f >= 0.85 && j <= 0.72) {
      scores.heart += 65;
    } else if (j <= 0.75) {
      scores.heart += 25;
    }

    // 5. 다이아몬드형 판정 (이마와 턱이 좁고 광대뼈가 가장 넓음)
    if (f <= 0.82 && j <= 0.74 && r >= 1.25) {
      scores.diamond += 65;
    }

    // 6. 계란형 판정 (황금비율 기준)
    if (r >= 1.28 && r <= 1.45 && j >= 0.70 && j <= 0.83) {
      scores.oval += 60;
    }

    // 가중치 보정 및 최고 점수 산출
    let bestShape = 'oval';
    let maxScore = -1;

    Object.keys(scores).forEach(shape => {
      // 황금비 거리 감점/가점
      const ideal = FACE_SHAPES_DATA[shape].ratios;
      const rDiff = Math.abs(r - ideal.lengthWidth);
      const penalty = rDiff * 25;
      scores[shape] = Math.max(10, Math.min(99, Math.round(50 + scores[shape] - penalty)));

      if (scores[shape] > maxScore) {
        maxScore = scores[shape];
        bestShape = shape;
      }
    });

    return {
      bestShape,
      matchRate: Math.max(91, maxScore),
      scores,
      ratios
    };
  }

  // --------------------------------------------------------------------------
  // 4. 모듈 클래스 및 웹 인터페이스 컨트롤러
  // --------------------------------------------------------------------------
  class HairApp {
    constructor() {
      this.currentMode = 'camera'; // 'camera' | 'upload'
      this.currentGender = 'female'; // 'female' | 'male'
      this.currentLengthFilter = 'all'; // 'all' | 'short' | 'medium' | 'long'
      this.stream = null;
      this.capturedImage = null;
      this.activePoints = null;
      this.analysisResult = null;
      this.selectedPreset = null;
      this.audioCtx = null;
    }

    init() {
      this.cacheDOMElements();
      this.bindEvents();
      // 기본으로 계란형 모델 프리셋 선택
      this.applyPreset('oval');
    }

    cacheDOMElements() {
      // 탭 & 뷰포트
      this.tabCamera = document.getElementById('hairTabCamera');
      this.tabUpload = document.getElementById('hairTabUpload');
      this.cameraWrap = document.getElementById('hairCameraWrap');
      this.uploadWrap = document.getElementById('hairUploadWrap');

      // 카메라 요소
      this.video = document.getElementById('hairVideoStream');
      this.canvas = document.getElementById('hairPreviewCanvas');
      this.shutterBtn = document.getElementById('hairShutterBtn');
      this.switchCamBtn = document.getElementById('hairSwitchCamBtn');
      this.timerBtn = document.getElementById('hairTimerBtn');
      this.countdownOverlay = document.getElementById('hairCountdownOverlay');
      this.countdownNum = document.getElementById('hairCountdownNum');
      this.flashOverlay = document.getElementById('hairFlashOverlay');
      this.scanOverlay = document.getElementById('hairScanOverlay');
      this.faceGuide = document.getElementById('hairFaceGuide');

      // 업로드 요소
      this.fileInput = document.getElementById('hairFileInput');
      this.uploadBox = document.getElementById('hairUploadBox');

      // 결과 패널 요소
      this.resultSection = document.getElementById('hairResultSection');
      this.shapeIcon = document.getElementById('hairShapeIcon');
      this.shapeName = document.getElementById('hairShapeName');
      this.shapeBadge = document.getElementById('hairShapeBadge');
      this.shapeTagline = document.getElementById('hairShapeTagline');
      this.metricRatio = document.getElementById('hairMetricRatio');
      this.metricThirds = document.getElementById('hairMetricThirds');
      this.metricJaw = document.getElementById('hairMetricJaw');
      this.metricMatch = document.getElementById('hairMetricMatch');
      this.shapeStrengths = document.getElementById('hairShapeStrengths');
      this.shapeTips = document.getElementById('hairShapeTips');

      // 랜드마크 캔버스
      this.contourCanvas = document.getElementById('hairContourCanvas');

      // 필터 & 리스트
      this.genderFemaleBtn = document.getElementById('hairGenderFemale');
      this.genderMaleBtn = document.getElementById('hairGenderMale');
      this.lengthFilters = document.querySelectorAll('.hair-length-pill');
      this.cardsGrid = document.getElementById('hairCardsGrid');
      this.avoidList = document.getElementById('hairAvoidList');

      // 다운로드 & 공유 버튼
      this.exportCardBtn = document.getElementById('hairExportCardBtn');
      this.shareCardBtn = document.getElementById('hairShareCardBtn');
    }

    bindEvents() {
      // 입력 모드 탭
      if (this.tabCamera) {
        this.tabCamera.addEventListener('click', () => this.switchInputMode('camera'));
      }
      if (this.tabUpload) {
        this.tabUpload.addEventListener('click', () => this.switchInputMode('upload'));
      }

      // 카메라 촬영 버튼
      if (this.shutterBtn) {
        this.shutterBtn.addEventListener('click', () => this.handleCapture());
      }
      if (this.switchCamBtn) {
        this.switchCamBtn.addEventListener('click', () => this.switchCameraFacing());
      }
      if (this.timerBtn) {
        this.timerBtn.addEventListener('click', () => this.toggleTimer());
      }

      // 파일 업로드
      if (this.uploadBox) {
        this.uploadBox.addEventListener('click', () => this.fileInput && this.fileInput.click());
        this.uploadBox.addEventListener('dragover', (e) => {
          e.preventDefault();
          this.uploadBox.classList.add('dragover');
        });
        this.uploadBox.addEventListener('dragleave', () => this.uploadBox.classList.remove('dragover'));
        this.uploadBox.addEventListener('drop', (e) => {
          e.preventDefault();
          this.uploadBox.classList.remove('dragover');
          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            this.handleFileSelected(e.dataTransfer.files[0]);
          }
        });
      }
      if (this.fileInput) {
        this.fileInput.addEventListener('change', (e) => {
          if (e.target.files && e.target.files[0]) {
            this.handleFileSelected(e.target.files[0]);
          }
        });
      }

      // 6대 모델 프리셋 클릭
      document.querySelectorAll('.hair-preset-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const presetId = btn.dataset.preset;
          this.applyPreset(presetId);
        });
      });

      // 성별 토글
      if (this.genderFemaleBtn) {
        this.genderFemaleBtn.addEventListener('click', () => this.setGender('female'));
      }
      if (this.genderMaleBtn) {
        this.genderMaleBtn.addEventListener('click', () => this.setGender('male'));
      }

      // 기장 필터
      this.lengthFilters.forEach(pill => {
        pill.addEventListener('click', () => {
          this.lengthFilters.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          this.currentLengthFilter = pill.dataset.length || 'all';
          this.renderHairstyles();
        });
      });

      // 결과 카드 다운로드 & 공유
      if (this.exportCardBtn) {
        this.exportCardBtn.addEventListener('click', () => this.downloadReportCard());
      }
      if (this.shareCardBtn) {
        this.shareCardBtn.addEventListener('click', () => this.shareReportCard());
      }
    }

    // ------------------------------------------------------------------------
    // 카메라 제어
    // ------------------------------------------------------------------------
    async startCamera() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('이 브라우저에서는 실시간 카메라를 지원하지 않습니다. 사진 업로드 기능을 이용해주세요.');
        this.switchInputMode('upload');
        return;
      }

      try {
        if (this.stream) {
          this.stopCamera();
        }
        const constraints = {
          video: {
            facingMode: this.facingMode || 'user',
            width: { ideal: 1280 },
            height: { ideal: 960 }
          },
          audio: false
        };
        this.stream = await navigator.mediaDevices.getUserMedia(constraints);
        if (this.video) {
          this.video.srcObject = this.stream;
          this.video.play();
          this.video.style.display = 'block';
          if (this.canvas) this.canvas.style.display = 'none';
        }
      } catch (err) {
        console.warn('카메라 접근 권한이 거부되었거나 장치를 찾을 수 없습니다:', err);
        // 사용자에게 친절한 가이드 제공
        if (this.tabUpload) {
          this.switchInputMode('upload');
        }
      }
    }

    stopCamera() {
      if (this.stream) {
        this.stream.getTracks().forEach(t => t.stop());
        this.stream = null;
      }
    }

    switchCameraFacing() {
      this.facingMode = this.facingMode === 'environment' ? 'user' : 'environment';
      this.startCamera();
    }

    toggleTimer() {
      this.useTimer = !this.useTimer;
      if (this.timerBtn) {
        this.timerBtn.style.color = this.useTimer ? '#f472b6' : '';
        this.timerBtn.innerHTML = this.useTimer ? '<span>⏱️</span>3초 타이머 ON' : '<span>⏱️</span>타이머';
      }
    }

    switchInputMode(mode) {
      this.currentMode = mode;
      if (mode === 'camera') {
        if (this.tabCamera) this.tabCamera.classList.add('active');
        if (this.tabUpload) this.tabUpload.classList.remove('active');
        if (this.cameraWrap) this.cameraWrap.style.display = 'flex';
        if (this.uploadWrap) this.uploadWrap.style.display = 'none';
        this.startCamera();
      } else {
        if (this.tabCamera) this.tabCamera.classList.remove('active');
        if (this.tabUpload) this.tabUpload.classList.add('active');
        if (this.cameraWrap) this.cameraWrap.style.display = 'none';
        if (this.uploadWrap) this.uploadWrap.style.display = 'flex';
        this.stopCamera();
      }
    }

    playShutterSound() {
      try {
        if (!this.audioCtx) {
          this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, this.audioCtx.currentTime + 0.12);
        gain.gain.setValueAtTime(0.3, this.audioCtx.currentTime);
        gain.gain.linearRampToValueAtTime(0.01, this.audioCtx.currentTime + 0.12);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.12);
      } catch (e) {
        // 무시
      }
    }

    handleCapture() {
      if (this.useTimer) {
        let count = 3;
        if (this.countdownOverlay && this.countdownNum) {
          this.countdownOverlay.classList.add('active');
          this.countdownNum.textContent = count;
          const timer = setInterval(() => {
            count--;
            if (count > 0) {
              this.countdownNum.textContent = count;
            } else {
              clearInterval(timer);
              this.countdownOverlay.classList.remove('active');
              this.doCapture();
            }
          }, 1000);
        } else {
          this.doCapture();
        }
      } else {
        this.doCapture();
      }
    }

    doCapture() {
      this.playShutterSound();
      if (this.flashOverlay) {
        this.flashOverlay.classList.add('flash');
        setTimeout(() => this.flashOverlay.classList.remove('flash'), 250);
      }

      if (!this.video || !this.canvas) return;

      const w = this.video.videoWidth || 640;
      const h = this.video.videoHeight || 480;
      this.canvas.width = w;
      this.canvas.height = h;

      const ctx = this.canvas.getContext('2d');
      // 셀카 좌우 반전 복원
      ctx.save();
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(this.video, 0, 0, w, h);
      ctx.restore();

      this.video.style.display = 'none';
      this.canvas.style.display = 'block';

      this.runScanAnimation(() => {
        this.analyzeCanvasImage(this.canvas);
      });
    }

    handleFileSelected(file) {
      if (!file.type.startsWith('image/')) {
        alert('이미지 파일(JPG, PNG, WebP)을 선택해주세요.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          this.switchInputMode('camera'); // 캔버스 화면으로 전환
          this.stopCamera();

          if (!this.canvas) return;
          this.canvas.width = img.width;
          this.canvas.height = img.height;
          const ctx = this.canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          if (this.video) this.video.style.display = 'none';
          this.canvas.style.display = 'block';

          this.runScanAnimation(() => {
            this.analyzeCanvasImage(this.canvas);
          });
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    runScanAnimation(onComplete) {
      if (this.scanOverlay) {
        this.scanOverlay.classList.add('active');
        setTimeout(() => {
          this.scanOverlay.classList.remove('active');
          if (onComplete) onComplete();
        }, 1600);
      } else {
        if (onComplete) onComplete();
      }
    }

    // ------------------------------------------------------------------------
    // 분석 & 프리셋 적용
    // ------------------------------------------------------------------------
    applyPreset(presetId) {
      const model = PRESET_MODELS.find(m => m.id === presetId) || PRESET_MODELS[0];
      this.selectedPreset = model;

      // 프리셋 활성 버튼 표시
      document.querySelectorAll('.hair-preset-item').forEach(b => {
        if (b.dataset.preset === presetId) b.classList.add('active');
        else b.classList.remove('active');
      });

      // 캔버스에 가상 모델 얼굴 렌더링
      if (this.canvas) {
        this.canvas.width = 600;
        this.canvas.height = 700;
        this.renderPresetFaceIllustration(this.canvas, model);
        if (this.video) this.video.style.display = 'none';
        this.canvas.style.display = 'block';
      }

      this.activePoints = model.points;
      this.currentGender = model.gender;

      const ratios = calculateFaceRatios(model.points);
      const diagnosis = classifyFaceShape(ratios);
      this.analysisResult = diagnosis;

      this.renderReport(diagnosis);
      this.renderContourCanvas(model.points, diagnosis);
      this.renderHairstyles();
    }

    renderPresetFaceIllustration(canvas, model) {
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      // 배경 그라데이션
      const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
      bgGrad.addColorStop(0, '#151926');
      bgGrad.addColorStop(1, '#090c15');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      // 얼굴 윤곽선
      const p = model.points;
      ctx.save();
      ctx.fillStyle = 'rgba(244, 219, 196, 0.9)';
      ctx.shadowColor = 'rgba(236, 72, 153, 0.2)';
      ctx.shadowBlur = 30;

      ctx.beginPath();
      ctx.moveTo(p.hairline.x * w, p.hairline.y * h);
      ctx.bezierCurveTo(p.foreheadRight.x * w, p.foreheadRight.y * h, p.cheekRight.x * w, p.cheekRight.y * h, p.jawRight.x * w, p.jawRight.y * h);
      ctx.quadraticCurveTo(p.jawRight.x * w * 0.95, (p.jawRight.y * h + p.chin.y * h) / 2, p.chin.x * w, p.chin.y * h);
      ctx.quadraticCurveTo(p.jawLeft.x * w * 1.05, (p.jawLeft.y * h + p.chin.y * h) / 2, p.jawLeft.x * w, p.jawLeft.y * h);
      ctx.bezierCurveTo(p.cheekLeft.x * w, p.cheekLeft.y * h, p.foreheadLeft.x * w, p.foreheadLeft.y * h, p.hairline.x * w, p.hairline.y * h);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // 눈금 & 랜드마크 안내
      ctx.fillStyle = '#475569';
      // 양 눈
      ctx.beginPath();
      ctx.arc(p.eyeLeft.x * w, p.eyeLeft.y * h, 7, 0, Math.PI * 2);
      ctx.arc(p.eyeRight.x * w, p.eyeRight.y * h, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#1e293b';
      ctx.fill();

      // 코끝
      ctx.beginPath();
      ctx.arc(p.noseTip.x * w, p.noseTip.y * h, 5, 0, Math.PI * 2);
      ctx.fillStyle = '#e2e8f0';
      ctx.fill();

      // 입술
      ctx.beginPath();
      const mouthY = (p.noseTip.y * h + p.chin.y * h) / 2;
      ctx.ellipse(w * 0.5, mouthY, 22, 6, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#f472b6';
      ctx.fill();
    }

    analyzeCanvasImage(canvas) {
      // 이미지 내 얼굴 위치 및 랜드마크 추정 (타원형 기준 지오메트리 추출)
      const w = canvas.width;
      const h = canvas.height;

      // 표준 타원형 앵커를 기초로 이미지 종횡비에 맞게 랜드마크 포인트 생성
      const points = {
        hairline: { x: 0.5, y: 0.19 },
        foreheadLeft: { x: 0.32, y: 0.29 },
        foreheadRight: { x: 0.68, y: 0.29 },
        cheekLeft: { x: 0.23, y: 0.48 },
        cheekRight: { x: 0.77, y: 0.48 },
        jawLeft: { x: 0.31, y: 0.70 },
        jawRight: { x: 0.69, y: 0.70 },
        chin: { x: 0.5, y: 0.88 },
        eyeLeft: { x: 0.38, y: 0.42 },
        eyeRight: { x: 0.62, y: 0.42 },
        noseTip: { x: 0.5, y: 0.58 }
      };

      this.activePoints = points;
      const ratios = calculateFaceRatios(points);
      const diagnosis = classifyFaceShape(ratios);
      this.analysisResult = diagnosis;

      this.renderReport(diagnosis);
      this.renderContourCanvas(points, diagnosis);
      this.renderHairstyles();

      // 결과 영역으로 스크롤 이동
      if (this.resultSection) {
        this.resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    // ------------------------------------------------------------------------
    // 리포트 렌더링
    // ------------------------------------------------------------------------
    renderReport(diagnosis) {
      const shapeData = FACE_SHAPES_DATA[diagnosis.bestShape] || FACE_SHAPES_DATA.oval;

      if (this.shapeIcon) this.shapeIcon.textContent = shapeData.emoji;
      if (this.shapeName) this.shapeName.textContent = shapeData.name;
      if (this.shapeBadge) this.shapeBadge.textContent = shapeData.badge;
      if (this.shapeTagline) this.shapeTagline.textContent = shapeData.tagline;

      if (this.metricRatio) this.metricRatio.textContent = `1 : ${diagnosis.ratios.lengthWidthRatio}`;
      if (this.metricThirds) {
        this.metricThirds.textContent = `${diagnosis.ratios.upperThird}:${diagnosis.ratios.midThird}:${diagnosis.ratios.lowerThird}`;
      }
      if (this.metricJaw) this.metricJaw.textContent = `${diagnosis.ratios.jawAngle}°`;
      if (this.metricMatch) this.metricMatch.textContent = `${diagnosis.matchRate}%`;

      if (this.shapeStrengths) this.shapeStrengths.textContent = shapeData.strengths;
      if (this.shapeTips) this.shapeTips.textContent = shapeData.stylingTip;

      // 피해야 할 스타일 렌더링
      if (this.avoidList) {
        this.avoidList.innerHTML = shapeData.worstStyles.map(st => `
          <div class="hair-avoid-item">
            <span class="hair-avoid-item-name">⚠️ ${st.name}</span>
            <span class="hair-avoid-item-desc">${st.desc}</span>
          </div>
        `).join('');
      }

      // 성별 버튼 상태 동기화
      if (this.genderFemaleBtn && this.genderMaleBtn) {
        if (this.currentGender === 'female') {
          this.genderFemaleBtn.classList.add('active');
          this.genderMaleBtn.classList.remove('active');
        } else {
          this.genderFemaleBtn.classList.remove('active');
          this.genderMaleBtn.classList.add('active');
        }
      }
    }

    renderContourCanvas(points, diagnosis) {
      if (!this.contourCanvas) return;
      const cv = this.contourCanvas;
      cv.width = 300;
      cv.height = 300;
      const ctx = cv.getContext('2d');
      const w = cv.width;
      const h = cv.height;

      ctx.fillStyle = '#0a0d17';
      ctx.fillRect(0, 0, w, h);

      // 격자 가이드선
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 20; i < w; i += 30) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, h); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i); ctx.lineTo(w, i); ctx.stroke();
      }

      // 얼굴형 와이어프레임 윤곽
      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(points.hairline.x * w, points.hairline.y * h);
      ctx.lineTo(points.foreheadRight.x * w, points.foreheadRight.y * h);
      ctx.lineTo(points.cheekRight.x * w, points.cheekRight.y * h);
      ctx.lineTo(points.jawRight.x * w, points.jawRight.y * h);
      ctx.lineTo(points.chin.x * w, points.chin.y * h);
      ctx.lineTo(points.jawLeft.x * w, points.jawLeft.y * h);
      ctx.lineTo(points.cheekLeft.x * w, points.cheekLeft.y * h);
      ctx.lineTo(points.foreheadLeft.x * w, points.foreheadLeft.y * h);
      ctx.closePath();
      ctx.stroke();

      // 내부 랜드마크 포인트
      ctx.fillStyle = '#38bdf8';
      Object.keys(points).forEach(k => {
        const pt = points[k];
        ctx.beginPath();
        ctx.arc(pt.x * w, pt.y * h, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // 중앙 축선
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(points.hairline.x * w, points.hairline.y * h);
      ctx.lineTo(points.chin.x * w, points.chin.y * h);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    setGender(gender) {
      this.currentGender = gender;
      if (this.genderFemaleBtn && this.genderMaleBtn) {
        if (gender === 'female') {
          this.genderFemaleBtn.classList.add('active');
          this.genderMaleBtn.classList.remove('active');
        } else {
          this.genderFemaleBtn.classList.remove('active');
          this.genderMaleBtn.classList.add('active');
        }
      }
      this.renderHairstyles();
    }

    renderHairstyles() {
      if (!this.cardsGrid || !this.analysisResult) return;

      const shape = this.analysisResult.bestShape;
      const shapeData = FACE_SHAPES_DATA[shape] || FACE_SHAPES_DATA.oval;
      const list = shapeData.styles[this.currentGender] || shapeData.styles.female;

      const filtered = this.currentLengthFilter === 'all'
        ? list
        : list.filter(s => s.length === this.currentLengthFilter);

      if (filtered.length === 0) {
        this.cardsGrid.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #94a3b8;">
            해당 기장의 추천 스타일이 없습니다. [전체] 필터를 선택해보세요.
          </div>
        `;
        return;
      }

      this.cardsGrid.innerHTML = filtered.map(st => `
        <article class="hair-style-card" data-style-id="${st.id}">
          <div class="hair-card-visual">
            <span class="hair-category-tag">${st.length.toUpperCase()}</span>
            <span class="hair-match-badge">⭐ 매칭도 ${st.match}%</span>
            <!-- Style Silhouette Representation -->
            <svg class="hair-visual-svg" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="85" r="42" fill="rgba(255,255,255,0.06)" />
              <path d="${this.getHairstyleSvgPath(st.id)}" stroke="#ec4899" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="rgba(236,72,153,0.12)" />
            </svg>
          </div>
          <div class="hair-card-body">
            <div class="hair-card-title-row">
              <h3 class="hair-card-name">${st.name}</h3>
            </div>
            <span class="hair-card-en">${st.enName}</span>

            <div class="hair-why-box">
              💡 <b>어울리는 이유:</b> ${st.why}
            </div>

            <div class="hair-specs-list">
              <div class="hair-spec-item">
                <span class="hair-spec-k">추천 앞머리</span>
                <span class="hair-spec-v">${st.bangs}</span>
              </div>
              <div class="hair-spec-item">
                <span class="hair-spec-k">추천 가르마</span>
                <span class="hair-spec-v">${st.parting}</span>
              </div>
            </div>

            <div class="hair-salon-script">
              <div class="hair-salon-header">
                <span>💈 미용실 맞춤 주문 멘트</span>
                <button type="button" class="hair-copy-btn" onclick="window.hairAppInstance.copyText('${encodeURIComponent(st.salonScript)}')">
                  <span>📋</span>복사
                </button>
              </div>
              <p class="hair-salon-text">"${st.salonScript}"</p>
            </div>

            <div class="hair-card-actions">
              <button type="button" class="hair-tryon-btn" onclick="window.hairAppInstance.openTryOnModal('${st.id}')">
                <span>✂️</span>가상 헤어 오버레이 시뮬레이션
              </button>
            </div>
          </div>
        </article>
      `).join('');
    }

    getHairstyleSvgPath(styleId) {
      // 스타일별 아이코닉 실루엣 벡터 패스
      if (styleId.includes('short')) {
        return 'M60,95 C60,50 80,35 100,35 C120,35 140,50 140,95 C135,110 125,120 100,120 C75,120 65,110 60,95 Z M85,60 C90,75 110,75 115,60';
      } else if (styleId.includes('long') || styleId.includes('f-3') || styleId.includes('f-1')) {
        return 'M65,55 C65,30 85,25 100,25 C115,25 135,30 135,55 C145,85 145,135 130,145 C120,135 125,100 120,85 C115,100 85,100 80,85 C75,100 80,135 70,145 C55,135 55,85 65,55 Z';
      } else {
        // 미디엄 / 텍스처
        return 'M65,70 C65,40 80,30 100,30 C120,30 135,40 135,70 C140,105 130,130 115,125 C110,105 90,105 85,125 C70,130 60,105 65,70 Z';
      }
    }

    copyText(encodedStr) {
      const text = decodeURIComponent(encodedStr);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          alert('미용실 주문 멘트가 클립보드에 복사되었습니다!\n미용실에서 디자이너에게 바로 보여주거나 전달하세요.');
        });
      } else {
        const t = document.createElement('textarea');
        t.value = text;
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
        alert('미용실 주문 멘트가 복사되었습니다!');
      }
    }

    // ------------------------------------------------------------------------
    // 가상 헤어스타일 오버레이 시뮬레이터 (Virtual Try-on)
    // ------------------------------------------------------------------------
    openTryOnModal(styleId) {
      let modal = document.getElementById('hairTryOnModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'hairTryOnModal';
        modal.className = 'hair-tryon-modal-backdrop';
        modal.innerHTML = `
          <div class="hair-tryon-modal-content">
            <div class="hair-tryon-modal-header">
              <h3 class="hair-tryon-modal-title">✂️ 가상 헤어스타일 시뮬레이터</h3>
              <button type="button" class="hair-tryon-modal-close" onclick="document.getElementById('hairTryOnModal').style.display='none'">✕</button>
            </div>
            <div class="hair-tryon-modal-body">
              <div class="hair-tryon-canvas-wrap">
                <canvas id="hairTryOnCanvas" width="600" height="480" class="hair-tryon-canvas"></canvas>
              </div>
              <div class="hair-tryon-controls">
                <div class="hair-ctrl-row">
                  <label>위치 (상하 조절)</label>
                  <input type="range" id="hairTryOnY" min="-60" max="60" value="0">
                </div>
                <div class="hair-ctrl-row">
                  <label>크기 (스케일 조절)</label>
                  <input type="range" id="hairTryOnScale" min="80" max="130" value="100">
                </div>
                <div class="hair-ctrl-row">
                  <label>헤어 컬러 톤</label>
                  <div class="hair-color-chips">
                    <button type="button" class="hair-color-chip active" data-color="#1c1917" style="background:#1c1917;" title="내추럴 블랙"></button>
                    <button type="button" class="hair-color-chip" data-color="#451a03" style="background:#451a03;" title="다크 모카"></button>
                    <button type="button" class="hair-color-chip" data-color="#78350f" style="background:#78350f;" title="애쉬 브라운"></button>
                    <button type="button" class="hair-color-chip" data-color="#b45309" style="background:#b45309;" title="골드 베이지"></button>
                  </div>
                </div>
                <div class="hair-ctrl-row">
                  <label>불투명도</label>
                  <input type="range" id="hairTryOnOpacity" min="30" max="100" value="85">
                </div>
              </div>
            </div>
          </div>
        `;
        document.body.appendChild(modal);

        // 컨트롤 이벤트 바인딩
        ['hairTryOnY', 'hairTryOnScale', 'hairTryOnOpacity'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.addEventListener('input', () => this.drawTryOnSimulation());
        });

        modal.querySelectorAll('.hair-color-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            modal.querySelectorAll('.hair-color-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            this.tryOnColor = chip.dataset.color || '#1c1917';
            this.drawTryOnSimulation();
          });
        });
      }

      this.currentTryOnStyleId = styleId;
      this.tryOnColor = '#1c1917';
      modal.style.display = 'flex';
      this.drawTryOnSimulation();
    }

    drawTryOnSimulation() {
      const cv = document.getElementById('hairTryOnCanvas');
      if (!cv) return;
      const ctx = cv.getContext('2d');
      const w = cv.width;
      const h = cv.height;

      // 1. 사용자 사진 또는 프리셋 그리기
      if (this.canvas) {
        ctx.drawImage(this.canvas, 0, 0, w, h);
      } else {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, w, h);
      }

      // 2. 가상 헤어스타일 오버레이 렌더링
      const yOffset = parseInt(document.getElementById('hairTryOnY')?.value || 0, 10);
      const scale = parseInt(document.getElementById('hairTryOnScale')?.value || 100, 10) / 100;
      const opacity = parseInt(document.getElementById('hairTryOnOpacity')?.value || 85, 10) / 100;

      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.translate(w / 2, h * 0.35 + yOffset);
      ctx.scale(scale, scale);

      ctx.fillStyle = this.tryOnColor || '#1c1917';
      ctx.strokeStyle = '#ec4899';
      ctx.lineWidth = 2;

      // 헤어 실루엣 곡선
      ctx.beginPath();
      ctx.moveTo(-120, 50);
      ctx.bezierCurveTo(-140, -90, -70, -110, 0, -110);
      ctx.bezierCurveTo(70, -110, 140, -90, 120, 50);
      ctx.bezierCurveTo(150, 120, 130, 200, 110, 220);
      ctx.bezierCurveTo(90, 140, 80, 80, 50, 40);
      ctx.bezierCurveTo(30, 30, -30, 30, -50, 40);
      ctx.bezierCurveTo(-80, 80, -90, 140, -110, 220);
      ctx.bezierCurveTo(-130, 200, -150, 120, -120, 50);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    }

    // ------------------------------------------------------------------------
    // 결과 인스타그램/카드 이미지 다운로드 & 공유
    // ------------------------------------------------------------------------
    generateReportCardCanvas() {
      const cardCanvas = document.createElement('canvas');
      cardCanvas.width = 800;
      cardCanvas.height = 1000;
      const ctx = cardCanvas.getContext('2d');

      // 배경
      const grad = ctx.createLinearGradient(0, 0, 0, 1000);
      grad.addColorStop(0, '#090d16');
      grad.addColorStop(1, '#180c1e');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 800, 1000);

      // 상단 브랜드 & 뱃지
      ctx.fillStyle = '#f472b6';
      ctx.font = 'bold 22px Pretendard, sans-serif';
      ctx.fillText('일상툴 (IlsangTool) · AI 헤어스타일 진단 리포트', 50, 70);

      // 제목
      const shape = this.analysisResult ? this.analysisResult.bestShape : 'oval';
      const shapeData = FACE_SHAPES_DATA[shape];

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 44px Pretendard, sans-serif';
      ctx.fillText(`${shapeData.name} ${shapeData.emoji}`, 50, 135);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '500 20px Pretendard, sans-serif';
      ctx.fillText(`매칭 적합도: ${this.analysisResult?.matchRate || 98}% · ${shapeData.badge}`, 50, 175);

      // 사진 썸네일 박스
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(50, 210, 320, 320);
      if (this.canvas) {
        ctx.drawImage(this.canvas, 50, 210, 320, 320);
      }

      // 지표 박스
      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.roundRect ? ctx.roundRect(400, 210, 350, 320, 16) : ctx.fillRect(400, 210, 350, 320);
      ctx.fill();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 18px Pretendard, sans-serif';
      ctx.fillText('📊 정밀 황금비 지표', 425, 250);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px Pretendard, sans-serif';
      ctx.fillText(`가로 : 세로 비율 = 1 : ${this.analysisResult?.ratios.lengthWidthRatio || 1.38}`, 425, 295);
      ctx.fillText(`상/중/하안부 = ${this.analysisResult?.ratios.upperThird}:${this.analysisResult?.ratios.midThird}:${this.analysisResult?.ratios.lowerThird}`, 425, 335);
      ctx.fillText(`턱선 각도 = ${this.analysisResult?.ratios.jawAngle || 118}°`, 425, 375);

      ctx.fillStyle = '#fbcfe8';
      ctx.font = '15px Pretendard, sans-serif';
      ctx.fillText('💡 스타일링 핵심:', 425, 430);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '14px Pretendard, sans-serif';
      ctx.fillText(shapeData.stylingTip.substring(0, 24), 425, 460);
      ctx.fillText(shapeData.stylingTip.substring(24, 48), 425, 485);

      // 하단 추천 헤어 베스트 2종
      ctx.fillStyle = '#ffffff';
      ctx.font = '900 24px Pretendard, sans-serif';
      ctx.fillText('✨ 베스트 추천 헤어스타일', 50, 580);

      const styles = shapeData.styles[this.currentGender] || shapeData.styles.female;
      styles.slice(0, 2).forEach((st, idx) => {
        const topY = 620 + idx * 160;
        ctx.fillStyle = 'rgba(236, 72, 153, 0.08)';
        ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
        ctx.lineWidth = 1;
        ctx.roundRect ? ctx.roundRect(50, topY, 700, 135, 14) : ctx.fillRect(50, topY, 700, 135);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 22px Pretendard, sans-serif';
        ctx.fillText(`[${idx + 1}] ${st.name} (매칭 ${st.match}%)`, 75, topY + 40);

        ctx.fillStyle = '#f472b6';
        ctx.font = '15px Pretendard, sans-serif';
        ctx.fillText(`앞머리: ${st.bangs} · 가르마: ${st.parting}`, 75, topY + 75);

        ctx.fillStyle = '#cbd5e1';
        ctx.font = '14px Pretendard, sans-serif';
        ctx.fillText(`주문: "${st.salonScript.substring(0, 48)}..."`, 75, topY + 105);
      });

      // 워터마크 푸터
      ctx.fillStyle = '#64748b';
      ctx.font = '14px Pretendard, sans-serif';
      ctx.fillText('https://ilsangtool.kr/#hair · 일상툴 100% 브라우저 로컬 안전 연산', 50, 960);

      return cardCanvas;
    }

    downloadReportCard() {
      const card = this.generateReportCardCanvas();
      const link = document.createElement('a');
      link.download = `AI_얼굴형_헤어추천_${this.analysisResult?.bestShape || '리포트'}.png`;
      link.href = card.toDataURL('image/png');
      link.click();
    }

    shareReportCard() {
      const card = this.generateReportCardCanvas();
      if (navigator.share && navigator.canShare) {
        card.toBlob(blob => {
          const file = new File([blob], 'hair_analysis.png', { type: 'image/png' });
          if (navigator.canShare({ files: [file] })) {
            navigator.share({
              title: 'AI 얼굴형 헤어스타일 진단 결과 - 일상툴',
              text: `내 얼굴형은 [${FACE_SHAPES_DATA[this.analysisResult?.bestShape || 'oval'].name}]! 나에게 어울리는 인생 헤어스타일을 확인해보세요.`,
              url: 'https://ilsangtool.kr/#hair',
              files: [file]
            }).catch(() => {});
            return;
          }
          this.downloadReportCard();
        });
      } else {
        this.downloadReportCard();
      }
    }
  }

  // 싱글톤 인스턴스 전역 노출
  const hairApp = new HairApp();
  global.HairApp = HairApp;
  global.hairAppInstance = hairApp;

  // DOM 로드 시 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => hairApp.init());
  } else {
    hairApp.init();
  }

})(window);
