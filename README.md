# Yuppo Markdown Editor

[https://yuppo.metecan.dev](https://yuppo.metecan.dev)

A modern, real-time markdown editor built with Next.js that provides a seamless writing experience with live preview functionality.

## Features

- Real-time markdown preview
- Clean and intuitive interface
- SEO metadata management
- Document export functionality
- Syntax highlighting
- Tab indentation support

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Zustand** - State management
- **SCSS Modules** - Component styling
- **Marked** - Markdown parsing
- **Highlight.js** - Syntax highlighting
- **DOMPurify** - HTML sanitization

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm pretty` - Format code with Prettier

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable components
│   ├── common/         # Common UI components
│   ├── icons/          # SVG icon components
│   ├── layouts/        # Layout components
│   └── pages/          # Page-specific components
├── hooks/              # Custom React hooks
├── providers/          # Context providers
├── stores/             # Zustand stores
└── utils/              # Utility functions
```

## Development

The application uses modern React patterns with TypeScript for type safety. State management is handled by Zustand for a lightweight and efficient solution.
