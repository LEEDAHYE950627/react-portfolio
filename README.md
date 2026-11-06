# React Portfolio

React를 처음 공부하며 제작한 웹 퍼블리셔 이다혜의 개인 포트폴리오입니다. 자기소개, 보유 기술과 경력, 프로젝트별 작업 내용, 블로그 글을 소개합니다😄

[포트폴리오 보기](https://LEEDAHYE950627.github.io/react-portfolio/)

<br>

## 목차

1. [사용 기술](#사용-기술)
2. [페이지 구성](#페이지-구성)
3. [환경 설정 및 실행](#환경-설정-및-실행)
4. [명령어](#명령어)
5. [프로젝트 구조](#프로젝트-구조)
6. [개발 가이드](#개발-가이드)
7. [콘텐츠 수정 가이드](#콘텐츠-수정-가이드)
8. [빌드 및 배포](#빌드-및-배포)

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
| Home | `/#/` | 자기소개, 사진, 연락 정보, 텍스트 애니메이션 |
| About | `/#/about` | 보유 기술, 자격증, 회사 경력 |
| Projects | `/#/projects` | 프로젝트 목록과 상세 팝업 |
| Note | `/#/memo` | 네이버 블로그 RSS 글 목록 |

배포 사이트에서는 `/react-portfolio/#/about`처럼 저장소 경로 뒤에 해시 경로가 붙습니다. 별도의 백엔드나 데이터베이스 없이 정적 파일과 외부 API를 이용합니다.

<br>
### 3. 준비 사항

- Node.js와 npm
- 저장소를 내려받기 위한 Git

현재 저장소에는 `.nvmrc`나 `package.json`의 `engines` 설정이 없어 Node.js 버전이 고정되어 있지 않습니다. 팀에서 사용할 버전은 의존성 설치와 빌드 성공 여부를 확인한 뒤 맞춰 사용합니다.

### 설치와 실행

```bash
git clone https://github.com/LEEDAHYE950627/react-portfolio.git
cd react-portfolio
npm ci
npm start
```

`npm ci`는 커밋된 잠금 파일을 기준으로 의존성을 설치합니다. 개발 서버 주소는 실행 후 터미널에 표시되며, 기본 포트는 `3000`입니다. 경로가 포함되어 표시되면 `/react-portfolio/`까지 포함한 주소로 접속합니다.


### 환경 변수와 정적 파일 경로

현재 `.env`에는 다음 값이 있습니다.

```dotenv
REACT_APP_PUBLIC_URL=/react-portfolio
```

다만 **현재 코드에서 이 사용자 정의 변수는 참조하지 않습니다.** JSON 요청에는 CRA가 제공하는 `process.env.PUBLIC_URL`을 사용하며, 기본 배포 경로는 `package.json`의 `homepage`에 설정되어 있습니다.

```json
"homepage": "https://LEEDAHYE950627.github.io/react-portfolio/"
```

배포 경로를 바꾸려면 `homepage`와 실제 호스팅 경로를 맞춰야 합니다. `.env`의 `REACT_APP_PUBLIC_URL`만 바꾸면 요청 경로는 바뀌지 않습니다. 환경 변수를 변경한 뒤에는 개발 서버를 재시작하거나 다시 빌드합니다.

클라이언트에 전달되는 `REACT_APP_*` 변수에는 비밀번호나 API 비밀키를 넣지 않습니다. 현재 `.env`는 Git 추적 대상입니다.

## 명령어

| 명령어 | 설명 |
| --- | --- |
| `npm start` | CRACO 개발 서버 실행 |
| `npm run build` | `build/`에 프로덕션 파일 생성 |
| `npm test` | 테스트 실행기 시작. 현재 작성된 테스트 파일 없음 |
| `npx tsc --noEmit --incremental false` | 결과 파일 생성 없이 TypeScript 검사 |
| `npx eslint src --ext .ts,.tsx --no-cache` | TypeScript / TSX 코드 린트 검사 |
| `npm run deploy` | predeploy 빌드 후 `build/`를 GitHub Pages용 브랜치에 게시 |

`eject` 스크립트도 선언되어 있지만 일반 개발·배포 과정에는 필요하지 않습니다.

## 프로젝트 구조

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

## 개발 가이드

### 컴포넌트와 라우팅

작은 UI는 `atoms`, 조합된 UI는 `molecules`, 주요 콘텐츠 영역은 `organisms`에 둡니다. 페이지는 `pages`에서 구성하며, 공통 메뉴와 전환 효과는 `templates/PageWrap.tsx`를 사용합니다.

새 페이지를 추가할 때는 다음 파일을 함께 확인합니다.

1. `src/components/pages/`에 페이지 컴포넌트를 작성합니다.
2. `src/App.tsx`에 경로를 등록합니다.
3. `src/components/organisms/Header.tsx`에 메뉴와 활성 상태를 연결합니다.

### 스타일과 반응형

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

전역 초기화는 `src/index.css`, 폰트는 `src/fonts.css`에서 수정합니다. 현재 폰트는 SpoqaHanSansNeo와 TestNational2를 사용합니다.

### 경로 별칭과 타입

`@/components/*`, `@/assets/*`, `@/types/*` 별칭을 사용합니다. `@`가 모든 경로를 자동으로 가리키는 설정은 아니므로 새 별칭은 `tsconfig.paths.json`에 추가합니다. CRACO가 이 설정을 빌드에 연결합니다.

콘텐츠 필드를 변경하면 `src/types/aboutData.d.ts`, `src/types/projectsData.d.ts`와 해당 데이터를 렌더링하는 컴포넌트를 함께 확인합니다. JSON 응답은 런타임에 자동으로 타입 검증되지 않습니다.

## 콘텐츠 수정 가이드

### 자기소개와 테마

| 수정 대상 | 파일 |
| --- | --- |
| 자기소개, 연락 정보 | `src/components/organisms/HomeConWrap.tsx` |
| 프로필 사진 | `src/assets/img/img_main.png` |
| 주요 색상, 반응형 기준 | `src/assets/config.ts` |
| 페이지 제목, 설명, 아이콘 CDN | `public/index.html` |

### 기술·자격증·회사 경력

`public/data/aboutData.json`을 수정합니다.

| 배열 | 필드 | 설명 |
| --- | --- | --- |
| `skillList` | `label`, `rank`, `icon` | 기술명, 숙련도, Font Awesome 클래스 |
| `certificateList` | `label`, `issuer` | 자격증명, 발급 기관 |
| `companyList` | `label`, `job`, `detail`, `period`, `years` | 회사명, 직무, 설명, 재직 기간, 기간 보충 표기 |

기술 그래프의 비율은 `AboutSkillWrap.tsx`에서 `rank`에 따라 계산합니다. JSON의 `percent` 값을 직접 바꾸어도 화면 비율에는 반영되지 않습니다.

| 숙련도 | 그래프 비율 |
| --- | --- |
| 상 | 90% |
| 중상 | 80% |
| 중 | 60% |
| 중하 | 45% |
| 하 | 35% |

### 프로젝트 추가

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

- 예시의 프로젝트 이미지는 `src/assets/img/example.png`에 추가합니다. `img` 값에는 확장자를 넣지 않습니다.
- `period`와 `month`는 같은 순서와 같은 개수로 작성합니다.
- `employment`는 생략하거나 빈 문자열로 둘 수 있습니다.
- `web`은 웹 접근성 마크 획득 여부를 표시하는 boolean 값입니다.
- `skill`, `work`, `cooperation`은 항목이 없어도 빈 배열로 유지합니다.
- `company`는 데이터에 저장되지만 현재 목록과 팝업에는 표시하지 않습니다.
- `type`이 `운영`이면 운영용 색상, 그 외에는 구축용 색상으로 표시합니다.

### 블로그 연결

`src/components/organisms/MemoWrap.tsx`의 `fetchRSS`에서 RSS 주소를 변경합니다. 현재 네이버 RSS를 rss2json API에 전달하여 글을 가져옵니다.

글 목록이 나오지 않으면 브라우저 개발자 도구의 Network와 Console에서 외부 API 응답, RSS 주소, 네트워크 오류를 확인합니다. 현재 화면에는 조회 실패 안내나 재시도 UI가 구현되어 있지 않습니다.

## 빌드 및 배포

로컬 빌드:

```bash
npm run build
```

생성된 `build/`가 정적 호스팅 대상입니다. GitHub Pages 배포:

```bash
npm run deploy
```

이 명령은 `predeploy`로 빌드를 먼저 실행한 다음 `gh-pages -d build`를 실행합니다. **원격 저장소에 배포 결과를 게시하는 명령**이므로 대상 저장소와 Git 인증을 확인한 뒤 사용합니다.

GitHub 저장소의 Settings → Pages에서 게시 원본을 `gh-pages` 브랜치의 루트로 설정합니다. 저장소를 복사하거나 이름을 변경했다면 Git 원격 주소와 `package.json`의 `homepage`도 새 배포 위치에 맞춥니다.
