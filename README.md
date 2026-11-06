# React Portfolio

React를 처음 공부하며 제작한 웹 퍼블리셔 이다혜의 개인 포트폴리오입니다. 자기소개, 보유 기술과 경력, 프로젝트별 작업 내용, 블로그 글을 소개합니다😄

[포트폴리오 보기](https://LEEDAHYE950627.github.io/react-portfolio/)

<br>

## 목차

1. [사용 기술](#1-사용-기술)
2. [페이지 구성](#2-페이지-구성)
3. [설치와 실행](#3-설치와-실행)
4. [명령어](#4-명령어)
5. [프로젝트 구조](#5-프로젝트-구조)
6. [개발 가이드](#6-개발-가이드)
7. [스타일과 반응형](#7-스타일과-반응형)
8. [프로젝트 추가](#8-프로젝트-추가)

<br>

## 1. 사용 기술

버전은 `package.json`의 선언 기준입니다. 실제 설치 버전은 `package-lock.json`을 따릅니다.

| 기술 | 버전 / 구성 | 사용 목적 |
| --- | --- | --- |
| React / ReactDOM | ^18.3.1 | 컴포넌트 기반 화면과 상태 관리 |
| TypeScript | ^4.9.5 | 컴포넌트 props와 데이터 타입 정의 |
| React Router DOM | ^6.24.0 | HashRouter 기반 페이지 이동 |
| styled-components | ^6.1.11 | 컴포넌트 스타일, 테마, 반응형 스타일 |
| GSAP | ^3.12.5 | 홈 화면의 텍스트 애니메이션 |
| CSS / CSS Keyframes | 전역 CSS 및 컴포넌트 스타일 | 초기화, 폰트, 전환 및 로딩 애니메이션 |
| Create React App | react-scripts 5.0.1 | 개발 서버와 프로덕션 빌드 |
| CRACO | @craco/craco ^7.1.0 | CRA 설정 확장 |
| react-app-alias | ^2.2.2 | TypeScript 경로 별칭을 빌드 설정에 연결 |
| Font Awesome | public/index.html의 외부 CDN | 메뉴 및 콘텐츠 아이콘 |
| rss2json API | 외부 HTTP API | 네이버 블로그 RSS를 JSON으로 조회 |
| gh-pages | ^6.1.1 | 빌드 결과를 GitHub Pages에 배포 |

<br>

## 2. 페이지 구성

| 페이지 | 주소 | 주요 내용 |
| --- | --- | --- |
| Home | `/` | 자기소개 |
| About | `/about` | 보유 기술, 자격증, 회사 경력 |
| Projects | `/projects` | 프로젝트 목록과 상세 내용 |
| Note | `/memo` | 네이버 블로그 |


<br>

### 3. 설치와 실행

```bash
git clone https://github.com/LEEDAHYE950627/react-portfolio.git
cd react-portfolio
npm ci
npm start
```

`npm ci`는 커밋된 잠금 파일을 기준으로 의존성을 설치합니다. 개발 서버 주소는 실행 후 터미널에 표시되며, 기본 포트는 `3000`입니다. 경로가 포함되어 표시되면 `/react-portfolio/`까지 포함한 주소로 접속합니다.

## 4. 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm start` | CRACO 개발 서버 실행 |
| `npm run build` | `build/`에 프로덕션 파일 생성 |
| `npm test` | 테스트 실행기 시작. 현재 작성된 테스트 파일 없음 |
| `npx tsc --noEmit --incremental false` | 결과 파일 생성 없이 TypeScript 검사 |
| `npx eslint src --ext .ts,.tsx --no-cache` | TypeScript / TSX 코드 린트 검사 |
| `npm run deploy` | predeploy 빌드 후 `build/`를 GitHub Pages용 브랜치에 게시 |


## 5. 프로젝트 구조

```text
react-portfolio/
├── public/
│   ├── data/
│   │   ├── aboutData.json       # 기술, 자격증, 경력 데이터
│   │   └── projectsData.json    # 프로젝트 데이터
│   └── index.html              # 문서 메타 정보, 아이콘 CDN
├── src/
│   ├── assets/
│   │   ├── config.ts           # 테마 색상, 반응형 기준
│   │   ├── fonts/              # 로컬 폰트
│   │   ├── img/                # 프로필 및 프로젝트 이미지
│   │   └── js/common.ts        # 공통 UI 유틸리티
│   ├── components/
│   │   ├── atoms/              # Heading, Loading
│   │   ├── molecules/          # 페이지 제목, 전환, 스크롤 초기화
│   │   ├── organisms/          # 메뉴, 콘텐츠 목록, 상세 팝업
│   │   ├── pages/              # Home, About, Projects, Memo
│   │   └── templates/          # 공통 PageWrap
│   ├── types/                  # 콘텐츠 인터페이스와 이미지 모듈 타입
│   ├── App.tsx                # 라우팅
│   ├── index.tsx              # React 진입점, ThemeProvider
│   ├── index.css              # 초기화 및 전역 스타일
│   └── fonts.css              # @font-face 정의
├── craco.config.js            # 별칭 플러그인 설정
├── tsconfig.json              # TypeScript 설정
├── tsconfig.paths.json        # 경로 별칭 정의
├── package.json               # 패키지 및 실행 스크립트
└── package-lock.json          # 설치 버전 고정
```

## 6. 개발 가이드

### 컴포넌트와 라우팅

작은 UI는 `atoms`, 조합된 UI는 `molecules`, 주요 콘텐츠 영역은 `organisms`에 둡니다. 페이지는 `pages`에서 구성하며, 공통 메뉴와 전환 효과는 `templates/PageWrap.tsx`를 사용합니다.

새 페이지를 추가할 때는 다음 파일을 함께 확인합니다.

1. `src/components/pages/`에 페이지 컴포넌트를 작성합니다.
2. `src/App.tsx`에 경로를 등록합니다.
3. `src/components/organisms/Header.tsx`에 메뉴와 활성 상태를 연결합니다.

### 7. 스타일과 반응형

컴포넌트 스타일은 주로 같은 파일의 `styled-components`로 작성합니다. 공통 색상과 미디어 쿼리는 `src/assets/config.ts`에서 관리하고 `ThemeProvider`로 전달합니다.

| 테마 키 | 기준 너비 |
| --- | --- |
| `laptop` | 최대 1280px |
| `tablet` | 최대 1024px |
| `mobile` | 최대 720px |
| `smallMobile` | 최대 360px |
| `fold` | 최대 280px |

```tsx
const Example = styled.div`
  color: ${(props) => props.theme.mainTxtColor};

  @media ${(props) => props.theme.mobile} {
    padding: 24px;
  }
`;
```


### 8. 프로젝트 추가

`public/data/projectsData.json`의 `projectList`에 항목을 추가합니다. 목록은 배열 순서대로 표시됩니다.

```json
{
  "orderer": "발주처",
  "name": "프로젝트명",
  "web": false,
  "type": "구축",
  "employment": "정규직",
  "period": ["2026.01 ~ 2026.03"],
  "month": ["3개월"],
  "desc": "프로젝트와 담당 역할에 대한 설명",
  "skill": ["React", "TypeScript"],
  "company": "소속 회사",
  "img": "example",
  "work": ["담당 작업 1", "담당 작업 2"],
  "cooperation": [
    { "title": "디자인", "con": "Figma" }
  ]
}
```