# AGENTS.md

## 프로젝트 참고사항

- 패키지 매니저는 npm입니다. 의존성을 변경하면 `package-lock.json`도 함께 관리하세요.
- Sass 변수와 믹스인은 `src/assets/scss/`에 두고, `next.config.ts`에서 전역 주입합니다.

## 명령어

저장소 루트에서 실행하세요.

```bash
npm run dev
npm run lint
npm run build
npm run start
```

참고:

- 일반적인 코드 변경 후에는 `npm run lint`를 실행하세요.
- `npm run build`는 Webpack 기반 프로덕션 빌드입니다.

## 수정 제외 경로

명시적인 요청이 없다면 다음 파일과 디렉터리를 수정하지 마세요.

- `node_modules/`
- `.next/`
- `next-env.d.ts`
- `tsconfig.tsbuildinfo`

## 검증 체크리스트

작업을 마치기 전에 변경 범위에 맞는 가장 작은 검증을 선택하세요.

- TypeScript, React, SCSS 관련 소스 변경: `npm run lint`.
- Next 설정, 라우팅, metadata 변경: `npm run build`.
- 시각적 라우트를 바꾼 경우 가능하면 요청한 뷰포트에서 로컬 화면을 확인하세요.
- 변경을 마친 뒤 `git diff --check`를 실행하세요.

검증 명령을 실행하지 못했다면 이유를 명확히 보고하세요.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
