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
export interface ICooperation {
  title: string;
  con: string;
}

export interface IProject {
  orderer: string;
  name: string;
  web: boolean;
  type: string;
  employment?: string;
  period: string;
  month: string;
  desc: string;
  skill: string[];
  company: string;
  img: string;
  work: string[];
  cooperation: ICooperation[];
}
