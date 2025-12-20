[![CI](https://github.com/echoja/react-expandable-text/actions/workflows/merge-jobs.yml/badge.svg)](https://github.com/echoja/react-expandable-text/actions/workflows/merge-jobs.yml)
[![Storybook deploy](https://github.com/echoja/react-expandable-text/actions/workflows/pages.yml/badge.svg)](https://github.com/echoja/react-expandable-text/actions/workflows/pages.yml)

# React Expandable Text

긴 텍스트를 접었다 펼치는 기능을 제공하는 React 컴포넌트입니다. 긴 문장을 "더 보기 / 접기"로 다루고 싶을 때 활용할 수 있습니다.

[스토리북 데모](https://echoja.github.io/react-expandable-text/)에서 동작을 확인할 수 있습니다.

> ⚠️ 이 프로젝트는 아직 npm 레지스트리에 게시되어 있지 않습니다. 아래의 내용은 **참고용**이며, 사용하려면 저장소를 클론해 직접 빌드하거나 소스 코드를 참고해 주세요.

## 특징

- 📝 자동 라인 클램핑으로 텍스트 표시
- 👆 접힘/펼침 토글 지원
- 🎨 클램프 라인 수를 커스터마이즈 가능
- ⚡ 텍스트 오버플로 자동 감지
- 🎯 접힌 텍스트에 그라데이션 효과 제공
- 📦 TypeScript 지원
- 🪶 최소한의 의존성

## 사용 방법 (참고용)

```tsx
import { ExpandableText } from './src/lib';

function App() {
  return (
    <ExpandableText
      content="여기에 긴 텍스트가 들어갑니다."
      lineClamp={2}
    />
  );
}
```

> 위 예제는 로컬 프로젝트에 컴포넌트를 포함해 사용하는 참고용 코드입니다. npm에 게시되어 있지 않으니, 저장소를 클론해 빌드하거나 컴포넌트를 복사해 프로젝트 구조에 맞게 import 경로를 조정하세요.

### Props

| Prop | Type | 기본값 | 설명 |
|------|------|---------|------|
| `content` | `string` | 필수 | 표시할 텍스트 내용 |
| `lineClamp` | `number` | `2` | 접힌 상태에서 보여줄 최대 줄 수 |

### 예시

```tsx
import { ExpandableText } from './src/lib';

function MyComponent() {
  const longText = `
    이 컴포넌트는 긴 글을 접었다 펼칠 때 유용합니다.
    접힌 상태에서는 지정한 줄 수까지만 보여주고,
    더 보기를 누르면 전체 내용을 확인할 수 있습니다.
  `;

  return (
    <div>
      <h2>Article Preview</h2>
      <ExpandableText content={longText} lineClamp={3} />
    </div>
  );
}
```

## 개발

### 사전 준비

1. **Node** 버전 20.x 이상
2. **pnpm** 설치 (예: `corepack prepare pnpm@latest --activate`)

### 셋업

```bash
git clone https://github.com/echoja/react-expandable-text.git
cd react-expandable-text
pnpm install
```

### 사용 가능한 스크립트

- `pnpm dev` - 개발 서버 실행
- `pnpm build` - 라이브러리 빌드
- `pnpm test` - 테스트 실행
- `pnpm lint:code` - 코드 린트
- `pnpm lint:style` - 스타일 린트
- `pnpm start:docs` - 스토리북 실행
- `pnpm build:docs` - 스토리북 빌드

## 라이선스

[LICENSE](./LICENSE) 파일을 참고하세요.

## 기여

이슈나 Pull Request를 통해 언제든 기여해 주세요.
