[![CI](https://github.com/echoja/react-expandable-text/actions/workflows/merge-jobs.yml/badge.svg)](https://github.com/echoja/react-expandable-text/actions/workflows/merge-jobs.yml)
[![Storybook deploy](https://github.com/echoja/react-expandable-text/actions/workflows/pages.yml/badge.svg)](https://github.com/echoja/react-expandable-text/actions/workflows/pages.yml)

# React Expandable Text

A React component for displaying text with expandable/collapsible functionality. Perfect for showing long text content with a "Read more" / "Show less" toggle.

Visit [Demo Storybook](https://echoja.github.io/react-expandable-text/).

## Features

- 📝 Display text with automatic line clamping
- 👆 Toggle between collapsed and expanded states
- 🎨 Customizable line clamp limit
- ⚡ Automatic overflow detection
- 🎯 Smooth gradient effect on collapsed text
- 📦 TypeScript support
- 🪶 Lightweight with minimal dependencies

## Installation

```bash
npm install react-expandable-text
```

or

```bash
yarn add react-expandable-text
```

or

```bash
pnpm add react-expandable-text
```

## Usage

```tsx
import { ExpandableText } from 'react-expandable-text';

function App() {
  return (
    <ExpandableText 
      content="Your long text content here..." 
      lineClamp={2}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `string` | required | The text content to display |
| `lineClamp` | `number` | `2` | Maximum number of lines to show when collapsed |

### Example

```tsx
import { ExpandableText } from 'react-expandable-text';

function MyComponent() {
  const longText = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
  `;

  return (
    <div>
      <h2>Article Preview</h2>
      <ExpandableText content={longText} lineClamp={3} />
    </div>
  );
}
```

## Development

### Prerequisites

1. Install **Node** >= 20.x.
2. Install **pnpm**. E.g. `corepack prepare pnpm@latest --activate`.

### Setup

```bash
git clone https://github.com/echoja/react-expandable-text.git
cd react-expandable-text
pnpm install
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build the library
- `pnpm test` - Run tests
- `pnpm lint:code` - Lint code
- `pnpm lint:style` - Lint styles
- `pnpm start:docs` - Start Storybook
- `pnpm build:docs` - Build Storybook

## License

See [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
