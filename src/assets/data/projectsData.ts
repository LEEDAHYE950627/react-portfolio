/*
	--- orderer		: 발주처
	--- name		: 프로젝트 명
	--- web			: 웹접근정 인증마크 획득 여부
	--- type		: 유형 (구축, 유지보수, 리뉴얼.. 등)
	--- employment	: 고용형태 ::필수값 X
	--- period		: 투입 기간
	--- month 		: 투입 기간(월단위)
	--- desc		: 설명
	--- skill		: 퍼블 사용 기술
	--- company		: 작업했을 때 회사
	---	img			: 이미지 명
	--- work		: 작업한 작업 목록
	--- cooperation	: 퍼블 외의 사용 기술
*/

const projectsData = {
	projectList: [
		{
			orderer : "우리카드",
			name : "우리카드 전담반",
			web : true,
			type: "운영",
			employment: "프리랜서",
			period: "2024.11.27 ~ 2025.05.30",
			month: "6개월",
			desc: "우리카드 전담반 프로젝트에서는 운영 업무 중심으로 JSP 기반의 구조로 되어 있는 개발 소스의 흐름을 정확히 파악하고, 다른 기능에 영향을 주지 않도록 디자인 수정 및 일부 HTML 구조 변경 작업을 수행하였습니다. 웹 접근성 심사 기간이 포함되어 있어 명도 대비 등 접근성 기준을 충족하는 작업도 병행하였으며, 접수된 SR 건을 바탕으로 기획자 및 디자이너와의 커뮤니케이션을 통해 개선 작업을 진행하였습니다.",
			skill: ["Html & CSS","jQuery"],
			company: "㈜애드캡슐 소프트",
			img: "wooricard",
			work: [
				"카드디자인 선택 인터렉션 구현(swipe + scroll + transform)",
				"구독서비스 메뉴 MO/PC 수정",
				"금융메인 종류 및 케이스 별 디자인 수정",
				"모바일브랜치 메인 화면 리뉴얼",
				"마이데이터 - 소비케어 메뉴 리뉴얼",
				"마이데이터 - 소비리포트 메뉴 리뉴얼",
				"해외온라인 인증 오류 건의 Self 처리유도 프로세스 화면 신규 추가",
				"나만의 혜택 라운지 신규 메뉴 제작",
				"카드메인 내 카드추천 영역 추가",
				"카드메인 내 알림 영역 추가",
			],
			cooperation: [
				{title : "개발환경", con : "Visual Studio Code, Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "프로젝트 관리", con : "우리카드 PCMS"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Figma"},
			]
		},
		{
			orderer : "삼성생명",
			name : "삼성생명 금융통합플랫폼 3차 연계 구축 (모니모)",
			web : true,
			type: "구축",
			period: "2023.11.01 ~ 2024.03.08",
			month: "4개월",
			desc: "웹 접근성 가이드를 준수하여 기존 삼성생명 WEB, 모바일 WEB 일부 메뉴의 고도화 및 모니모(모바일 APP) 구축을 기존 1, 2차에 이어 3차를 진행하였습니다. 기존 가이드를 사용하는 고도화 되지 않은 메뉴들이 있었기에 최대한 영향이 가지 않도록 수정하고 여러 가지를 고심하며 작업하였습니다.",
			skill: ["Vue", "Html & SCSS","JavaScript"],
			company: "㈜퓨즈",
			img: "samsung",
			work: [
				"모니모 디자인에 맞게 공통 스크립트 sticky 버튼영역 여백수치 수정",
				"삼성생명(WEB) 툴팁을 모니모(APP)에 맞게 툴팁 컴포넌트 수정",
				"약관동의 스낵바 및 스크롤 이동 후 메시지 노출 구현 ",
				"Lottie-Player.js 전 페이지 적용",
				"관리자 페이지에서 관리하는 로딩 화면 컴포넌트 구현",
				"퍼블 워크리스트 차수 별 화면 목록 필터링 기능 구현",
				"스크립트 이슈 결함 처리",
				"공통 가이드에 기반한 메뉴별 상세 화면 구현",
				"스크립트, 컴포넌트 추가 및 수정 작업 가이드 PPT 산출물 제작"
			],
			cooperation: [
				{title : "개발환경", con : "Visual Studio Code, Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "프로젝트 관리", con : "삼성 PMS"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Adobe XD"},
			]
		},
		{
			orderer : "The-k 한국교직원공제회",
			name : "한국교직원공제회 모바일 APP 구축 및 홈페이지 개편 ISMP",
			web : true,
			type: "구축&개편",
			period: "2023.03.02 ~ 2023.08.31",
			month: "6개월",
			desc: "웹 접근성 가이드를 준수하여 한국교직원공제회 홈페이지 전면 개편 및 모바일 APP 개발을 진행하였고, CMS 영역이 존재하여 담당 개발자와 소통하며 작업을 진행했습니다.",
			skill: ["Html & CSS","jQuery"],
			company: "㈜퓨즈",
			img: "teacher",
			work: [
				"The-K 마음쉼 메뉴 구현",
				"금융 상품 별 상세 화면 구현",
				"사이트맵 구현",
				"GNB 구현",
				"Sortable.js 이용한 drag&drop 기능의 나만의 메뉴 설정 화면 구현",
				"메인 로그인 영역 구현",
				"공통 가이드에 기반한 메뉴별 상세 화면 구현",
			],
			cooperation: [
				{title : "개발환경", con : "Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "프로젝트 관리", con : "LG CNS Orchestra"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Zeplin"},
			]
		},
		{
			orderer : "현대해상화재보험",
			name : "HI-S 포탈 장기보험 모바일 청약 시스템 구축",
			web : true,
			type: "구축",
			period: "2022.10.14 ~ 2023.01.15",
			month: "3개월",
			desc: "웹 접근성 가이드를 준수하여 현대해상 HI-S포탈 장기보험 모바일 청약 시스템 신규 모바일 APP 개발을 진행하였습니다.",
			skill: ["Html & CSS","jQuery"],
			company: "㈜퓨즈",
			img: "hyundai",
			work: [
				"관리자 사이트 구현",
				"계약 상세 화면 구현",
				"공통 가이드에 기반한 메뉴별 상세 화면 구현",
			],
			cooperation: [
				{title : "개발환경", con : "Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "프로젝트 관리", con : "Jira"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Adobe Photoshop"},
			]
		},
		{
			orderer : "SGI서울보증",
			name : "SGI서울보증 SGI M 구축",
			web : true,
			type: "구축",
			period: "2022.06.02 ~ 2022.09.30",
			month: "4개월",
			desc: "웹 접근성 가이드를 준수하여 SGI서울보증 신규 모바일 APP 개발을 진행하였습니다. Vue로 진행하는 첫 프로젝트라 팀원 전체가 어떤 요소를 컴포넌트로 만들지, SCSS는 어떤 구조로 구성할지 고심하며 프로젝트를 진행하였습니다.",
			skill: ["Vue","HTML & SCSS","JavaScript"],
			company: "㈜퓨즈",
			img: "sgi",
			work: [
				"메인 화면 구현",
				"데이터의 키워드를 이용하여 노출되는 타이틀, 이미지 명을 매칭하여 영업점 안내 컴포넌트 개발",
				"이용 안내 컴포넌트 개발",
				"고객의 소리 메뉴 화면 구현",
				"안내사항 메뉴 화면 구현",
				"공통 가이드에 기반한 메뉴별 상세 화면 구현",
			],
			cooperation: [
				{title : "개발환경", con : "Visual Studio Code"},
				{title : "형상관리", con : "SVN"},
				{title : "프로젝트 관리", con : "Jira"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Zeplin"},
			]
		},
		{
			orderer : "신한라이프",
			name : "신한생명/오렌지라이프IT 통합시스템 구축",
			web : true,
			type: "구축",
			period: "2020.02.15 ~ 2022.01.14",
			month: "11개월",
			desc: "웹 접근성 가이드를 준수하여 신한생명/오렌지라이프IT 통합시스템인 신한라이프 WEB(반응형), 모바일 WEB, 모바일 APP을 개발하고 일부 메뉴(회사소개, 공시실, 보험상품, 메인배너 등) 컨텐츠를 CMS로 관리하도록 CMS 컴포넌트를 제작하여 화면 개발을 진행하였습니다.",
			skill: ["Html & CSS","jQuery","CMS"],
			company: "㈜퓨즈",
			img: "shinhan",
			work: [
				"혜택/서비스 메뉴 화면 구현",
				"신비운(운세) 화면 구현",
				"CMS 공통 컴포넌트에 기반한 메뉴별 상세 화면 구현",
				"공통 가이드에 기반한 메뉴별 상세 화면 구현",
			],
			cooperation: [
				{title : "개발환경", con : "Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Adobe Photoshop"},
			]
		},
		{
			orderer : "웰릭스렌탈",
			name : "웰릭스렌탈 APP신규개발/WEB 리뉴얼 용역",
			web : false,
			type: "구축&개편",
			period: "2020.12.07 ~ 2021.02.14",
			month: "2개월",
			desc: "퍼블리셔로 진행한 첫 프로젝트로 공통 컴포넌트의 사용, 퍼블리셔의 업무 방식, 디자인&기획&개발팀 과의 협업 등 프로젝트의 전체적인 흐름에 대해서 많이 배운 프로젝트 입니다.",
			skill: ["Html & CSS","jQuery"],
			company: "㈜퓨즈",
			img: "welrix",
			work: [
				"제품 상세보기 팝업 구현",
				"장바구니 목록 화면 구현",
				"현업 피드백 수정 작업 수행",
				"공통 가이드에 기반한 메뉴별 상세 화면 구현",
			],
			cooperation: [
				{title : "개발환경", con : "Visual Studio Code"},
				{title : "형상관리", con : "SVN"},
				{title : "기획", con : "PowerPoint"},
				{title : "디자인", con : "Adobe Photoshop"},
			]
		},
		{
			orderer: "신용회복위원회",
			name : "신용회복위원회 캠페인(문자(SMS/LMS/알림톡) 통합발송 시스템 구축 고도화 ",
			web : false,
			type: "구축",
			period: "2019.05.01 ~ 2019.08.31",
			month: "4개월",
			desc: "카카오 알림톡, KT 크로샷 메시징 서비스(SMS,LMS)를 연동하여, 신청인의 채무와 신용문제 안내를 템플릿화 하여 해당 메시지 코드와 일치하는 신청인에게 메시지를 발송하는 통합 메시징 시스템 구축하였습니다.",
			skill: ["Java","Html & CSS","jQuery","DB(Oracle)"],
			company: "㈜모노커뮤니케이션즈",
			img: "credit",
			work: [
				"jqGrid.js 이용하여 DB 연동 및 메시지 전송 후 성공여부, 전송시간, 도착시간 등 결과값 도출 기능 개발",
				"dynaTree.js 이용하여 DB 연동 및 메시지 전송대상 조직도 CRUD 개발",
				"코드 별 메시지 내용 매칭 기능 개발",
			],
			cooperation: [
				{title : "개발환경", con : "Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "기획", con : "PowerPoint"},
			]
		},
		{
			orderer : "경찰청",
			name : "경찰청 비상동보시스템 구축",
			web : false,
			type: "구축",
			period: "2019.06.01 ~ 2019.11.28",
			month: "6개월",
			desc: "카카오 알림톡, KT 크로샷 메시징 서비스(SMS,LMS)를 연동하여, 경찰 임무 수행 중 발생하는 비상 상황에 관한 내용을 전국경찰관서별 관리되는 조직도 기반으로 경찰관에게 전파하는 통합 메시징 시스템 구축하였습니다.",
			skill: ["Java","Html & CSS","jQuery","DB(Oracle)"],
			company: "㈜모노커뮤니케이션즈",
			img: "police",
			work: [
				"jqGrid.js 이용하여 DB 연동 및 메시지 전송 후 성공여부, 전송시간, 도착시간 등 결과값 도출 기능 개발",
				"dynaTree.js 이용하여 DB 연동 및 메시지 전송대상 조직도 CRUD 개발",
			],
			cooperation: [
				{title : "개발환경", con : "Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "기획", con : "PowerPoint"},
			]
		},
		{
			orderer : "㈜모노커뮤니케이션즈",
			name : "자사 홈페이지 & 어드민 홈페이지",
			web : false,
			type: "구축&개편",
			period: "2018.11.01 ~ 2019.03.29",
			month: "5개월",
			desc: "자사 홈페이지 관리자 사이트를 기획 및 구축하여 메인 노출 콘텐츠, 부서별 메뉴 콘텐츠, 회사 연혁, 게시판 등 하드코딩으로 작업 되어있는 홈페이지의 데이터를 각 해당 부서에서 등록&수정&삭제&노출 여부를 관리할 수 있도록 구현하였습니다.",
			skill: ["Java","Html & CSS","jQuery","DB(MySQL)"],
			company: "㈜모노커뮤니케이션즈",
			img: "mono",
			work: [
				"메인 / 비주얼 영역 및 각 부서별 아이콘&텍스트 노출 CRUD 개발",
				"공지사항 / 게시글 CRUD 및 최상단 고정노출 기능 개발",
				"부서메뉴 / 솔루션사업부, 크로샷사업부 컨텐츠 CRUD 개발",
				"각 부서에 관리자 홈페이지 사용 가이드 배포 및 안내",
			],
			cooperation: [
				{title : "개발환경", con : "Eclipse"},
				{title : "형상관리", con : "SVN"},
				{title : "기획", con : "PowerPoint"},
			]
		},
	],
}


export default projectsData;