---
name: following-spaceful-frontend-style
description: Use when adapting or applying frontend TypeScript, React, Next.js, or SCSS conventions in the spaceful repository. Do not use for non-frontend work.
---

# Spaceful 프론트엔드 스타일

Spaceful 프론트엔드 코드를 작성하거나 수정할 때 다음 규칙을 적용한다.

## 파일 배치

- 단일 라우트 전용 컴포넌트는 `src/app/<route>/_component/`에 둔다.
- 라우트 전용 타입, 유틸, 상수는 각각 `_type/`, `_util/`, `_define/`에 둔다.
- 두 번째 라우트에서 같은 도메인 컴포넌트가 필요해지면 `src/components/<domain>/`으로 옮긴다.
- 컴포넌트 폴더명은 lowercase 또는 lower camel case로 작성한다.
- import는 직접 경로를 사용한다. `@/*`는 `src/*`를 가리킨다.

## TypeScript

- 객체, union, 함수 등 새로운 타입은 기본적으로 `type`으로 선언한다.
- 새로 만드는 타입 이름에는 `T` 접두사를 붙인다.
- API 요청 타입은 `TReq`, 응답 타입은 `TRes` 접두사를 사용한다.
- 타입 전용 import에는 `import type`을 사용한다.
- 상수 데이터에는 필요한 경우 `as const`를 사용한다.
- 모듈 상수는 `UPPER_SNAKE_CASE`로 작성한다.
- `any` 대신 `unknown`과 명시적인 타입 검사를 사용한다.

## React와 Next.js

- `page.tsx`는 항상 서버 컴포넌트로 작성하며 `'use client'`를 선언하지 않는다.
- `page.tsx`는 서버 입력 해석과 route-level 조립에 집중하고 얇게 유지한다.
- 상호작용이 필요한 페이지 UI는 `<RouteName>Client.tsx`로 분리한다.
- `'use client'`는 클라이언트 기능을 직접 사용하는 컴포넌트의 진입 파일에만 선언한다.
- 컴포넌트와 이름 있는 헬퍼 함수는 함수 선언식으로 작성한다.
- 컴포넌트 파일명은 PascalCase를 사용한다.
- boolean 값은 `is...`, 이벤트 props는 `on...`, 이벤트 처리 함수는 `handle...`로 이름을 짓는다.
- 조건이 충족되지 않으면 조기 반환하여 중첩을 줄인다.

## SCSS Modules

- 컴포넌트 스타일은 `*.module.scss`로 작성한다.
- SCSS Module은 `styles`라는 이름으로 import한다.
- 클래스명은 kebab-case로 작성한다.
- 클래스는 `styles['class-name']` 형식으로 접근한다.
- 하위 요소는 컴포넌트의 HTML 구조가 드러나도록 대표 root class 아래에 nesting한다.
- 상태와 modifier는 해당 요소 아래에 nesting한다.
- nesting 깊이는 고정하지 않고 HTML 구조와 가독성에 따라 결정한다.
- 독립적으로 재사용되는 클래스, `@keyframes`, `@mixin`, 전역 스타일만 top-level에 둔다.
- 새로운 공용 색상, 크기, 믹스인을 만들기 전에 `src/assets/scss/_variables.scss`와 `src/assets/scss/_mixins.scss`를 확인한다.
- Sass 변수와 믹스인은 전역 주입되므로 SCSS Module에 `@use`를 반복해서 추가하지 않는다.
- `line-height`는 `src/assets/scss/global.scss`의 `body` 전역값을 사용하고, 컴포넌트 또는 라우트 SCSS Module에서 재정의하지 않는다.
- 새 색상은 `src/assets/scss/_variables.scss`의 기존 토큰을 우선 사용하고, 없을 때만 토큰을 추가한다.

## 보류된 구조

현재는 공용 UI, API, Query, 재사용 훅, 범용 유틸의 폴더 구조를 강제하지 않는다. 해당 기능이 실제로 필요해질 때 [보류 메모](references/deferred-structure.md)를 확인한다.
