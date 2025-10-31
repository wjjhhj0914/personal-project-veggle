# Veggle - Coding Conventions

본 문서는 개인 프로젝트 Veggle의 코딩, 네이밍, 브랜치, 커밋, PR 규칙을 정의합니다.

## 목차

- [1. 코드 스타일](#1-코드-스타일)
- [2. 네이밍 컨벤션](#2-네이밍-컨벤션)
- [3. 폴더 및 파일 구조](#3-폴더-및-파일-구조)
- [4. TypeScript 규칙](#4-typescript-규칙)
- [5. React/Next.js 규칙](#5-reactnextjs-규칙)
- [6. 브랜치 전략](#6-브랜치-전략)
- [7. 커밋 컨벤션](#7-커밋-컨벤션)
- [8. PR 규칙](#8-pr-규칙)

---

## 1. 코드 스타일

### 1.1 기본 설정

- Formatter : Prettier
- Linter : ESLint
- 들여쓰기 : 2 spaces
- 따옴표 : Single quotes(`'`)
- 세미콜론 : 사용

---

## 2. 네이밍 컨벤션

### 2.1 변수 및 함수

- camelCase 사용
- Boolean 변수는 `is`, `has`, `should` 등의 접두사 사용

### 2.2 컴포넌트

- PascalCase 사용
- 의미 있는 이름 사용

### 2.3 상수

- UPPER_SNAKE_CASE 사용

### 2.4 타입 및 인터페이스

- PascalCase 사용
- Interface는 `I` 접두사 없이 사용
- Type alias도 동일한 규칙

### 2.5 파일명

- kebab-case 사용 (컴포넌트 제외)
- 컴포넌트 파일은 PascalCase 사용

## 3. 폴더 및 파일 구조

```
src/
├── app/                 # Next.js App Router
│   ├── (auth)/        # Route groups
│   ├── api/             # API routes
│   └── layout.tsx
├── components/   # 재사용 가능한 컴포넌트
│   ├── ui/               # 기본 UI 컴포넌트
│   ├── layout/       # 레이아웃 컴포넌트
│   └── features/   # 기능별 컴포넌트
├── hooks/             # Custom hooks
├── lib/                   # 외부 라이브러리 설정
├── utils/                # 유틸리티 함수
├── types/              # TypeScript 타입 정의
├── constants/       # 상수 정의
├── styles/             # 전역 스타일
└── stores/             # 상태 관리 (Zustand 등)
```

---

## 4. TypeScript 규칙

### 4.1 기본 원칙

- `any` 타입 사용 최소화
- 명시적 타입 선언 권장
- Generic 적극 활용

### 4.2 타입 vs Interface

- 확장 가능성이 필요한 경우 : `interface`
- Union, Intersection 등 : `type`

---

## 5. React/Next.js 규칙

### 5.1 컴포넌트 작성

- 함수형 컴포넌트 사용
- Props는 interface로 정의
- 파일당 하나의 컴포넌트 원칙

### 5.2 Hooks 규칙

- Custom hook은 `use` 접두사 사용
- 관련 로직은 custom hook으로 분리

### 5.3 Server/Client Components

- 기본은 Server Component
- 사용자 상호작용이 필요한 경우만 `use client` 선언

---

## 6. 브랜치 전략

### 6.1 브랜치 타입

```
main               - 메인 브랜치 (개발 + 배포)
feature/*       - 기능 개발
fix/*               - 버그 수정
refactor/*      - 리팩토링
docs/*            - 문서 작업
```

### 6.2 브랜치 플로우

```
1. main에서 feature/* 브랜치 생성
2. 작업 완료 후 main으로 PR (또는 직접 머지)
3. 머지 후 배포
```

> Note : 개인 프로젝트이므로 복잡한 develop 브랜치 없이 main 하나로 관리합니다.

---

## 7. 커밋 컨벤션

### 7.1 Type

```
feat             - 새로운 기능 추가
fix                - 버그 수정
docs             - 문서 수정
style            - 코드 포맷팅, 세미콜론 누락 등
refactor       - 코드 리팩토링
test             - 테스트 코드 추가/수정
chore           - 빌드 업무, 패키지 관리 등
perf             - 성능 개선
```

### 7.2 예시

```
# 간단한 커밋

feat: 사용자 로그인 기능 추가
fix: 네비게이션 바 모바일 반응형 오류 수정

# 상세한 커밋

feat(auth): 소셜 로그인 기능 구현

- Google OAuth 연동
- Kakao 로그인 추가
```

---

## 8. PR 규칙

### 8.1 PR 제목

```
[Feat] 사용자 인증 구현
[Fix] 로그인 버튼 클릭 오류 수정
```

### 8.2 PR 규칙

- PR은 작은 단위로 자주 올리기
- Self-review 후 PR 생성
- 머지 전 충돌 해결

---

## 문서 업데이트

본 컨벤션은 프로젝트 진행 중 필요에 따라 업데이트될 수 있습니다.

**최종 업데이트 : 2025-10-31**
