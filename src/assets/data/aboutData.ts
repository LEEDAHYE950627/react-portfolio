const aboutData = {
	skillList: [
		{
			label: "HTML/CSS",
			rank: "상",
			icon: "fa-brands fa-html5",
			percent: "",
		},
		{
			label: "jQuery",
			rank: "중상",
			icon: "fa-brands fa-square-js",
			percent: "",
		},
		{
			label: "JavaScript",
			rank: "중",
			icon: "fa-brands fa-node-js",
			percent: "",
		},
		{
			label: "Vue",
			rank: "중하",
			icon: "fa-brands fa-vuejs",
			percent: "",
		},
		{
			label: "React",
			rank: "하",
			icon: "fa-brands fa-react",
			percent: "",
		},
		{
			label: "CMS",
			rank: "하",
			icon: "fa-solid fa-laptop-code",
			percent: "",
		},
	],
	certificateList: [
		{
			label: "정보처리기사",
			issuer: "한국산업인력공단",
		},
		{
			label: "컴퓨터활용능력 1급",
			issuer: "대한상공회의소",
		},
	],
	companyList: [
		{
			label: "㈜애드캡슐소프트",
			job: "웹 퍼블리셔",
			detail: "웹 에이전시 애드캡슐소프트에서 웹 퍼블리싱을 담당하고있습니다.",
			period: "2025.06 ~ ing",
			years: ""
		},
		{
			label: "㈜애드캡슐소프트",
			job: "웹 퍼블리셔 (프리랜서)",
			detail: "웹 에이전시 애드캡슐소프트에서 프리랜서로 웹 퍼블리싱을 담당하였습니다. 첫 운영업무 경험으로, 현업으로부터 접수된 SR 건을 바탕으로 기획자 및 디자이너와의 커뮤니케이션을 통해 개선 작업을 진행하였습니다.",
			period: "2024.11 ~ 2025.05",
			years: "6개월"
		},
		{
			label: "㈜퓨즈",
			job: "웹 퍼블리셔",
			detail: "웹 에이전시 퓨즈에서 웹 퍼블리싱을 담당하였습니다. 삼성모니모, SGI 서울보증, 신한라이프 등 웹 접근성 인증마크를 획득한 다양한 구축 프로젝트를 수행하였고, 제안 작업을 진행하며 다양한 인터렉션 제작 능력을 키웠습니다.",
			period: "2020.12 ~ 2024.03",
			years: "3년 4개월"
		},
		{
			label: "㈜모노커뮤니케이션즈",
			job: "웹 개발자",
			detail: "통합 메시징 시스템 솔루션 회사인 모노커뮤니케이션즈에서 웹 개발을 담당하였습니다. KT 크로샷 메시징 시스템, 카카오톡 알림톡을 연동하여 통합 메시징 시스템을 구축하고, 솔루션을 사용 중인 고객사의 시스템 점검 및 고객 응대를 진행하였습니다.",
			period: "2018.10 ~ 2020.01",
			years: "1년 4개월"
		},
	]
}

aboutData.skillList.forEach(skill => {
	switch (skill.rank) {
		case "상":
			skill.percent = "90%";
			break;
		case "중상":
			skill.percent = "80%";
			break;
		case "중":
			skill.percent = "60%";
			break;
		case "중하":
			skill.percent = "45%";
			break;
		case "하":
			skill.percent = "35%";
			break;
		default:
			skill.percent = "0%";
			break;
	}
})

export default aboutData;