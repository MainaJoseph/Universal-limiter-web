# Universal Rate Limiter Documentation

> Modern documentation site for [universal-rate-limiter](https://www.npmjs.com/package/universal-rate-limiter) - A TypeScript-first rate limiting library that works everywhere.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## 🌟 Features

- **📚 Comprehensive Documentation** - Complete guides for getting started, API reference, and real-world examples
- **🎮 Live Playground** - Interactive rate limiter testing directly in the browser
- **💻 Code Examples** - Ready-to-use examples for Express, Next.js, React, and more
- **🎨 Modern UI** - Clean, responsive design with dark mode
- **⚡ Fast Performance** - Built with Next.js 16 and optimized for speed
- **📱 Mobile Friendly** - Fully responsive design that works on all devices
- **🔍 SEO Optimized** - Meta tags, Open Graph, and semantic HTML

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/MainaJoseph/universal-limiter-web.git

# Navigate to project directory
cd universal-limiter-web

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Syntax Highlighting:** [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Package Manager:** [pnpm](https://pnpm.io/)

## 📂 Project Structure

```
universal-limiter-web/
├── app/
│   ├── api/                 # API Reference page
│   ├── components/          # Reusable components
│   │   ├── CodeBlock.tsx    # Syntax-highlighted code blocks
│   │   ├── Navigation.tsx   # Site navigation
│   │   └── Footer.tsx       # Site footer
│   ├── examples/            # Examples page with live playground
│   ├── getting-started/     # Getting Started guide
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   ├── providers.tsx        # Theme provider
│   └── globals.css          # Global styles
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Type check
pnpm type-check
```

### Environment Variables

This project doesn't require any environment variables for basic functionality.

## 🎨 Customization

### Theme

The site uses a dark-only theme. To modify theme colors:

1. Edit `app/globals.css` for global color variables
2. Update Tailwind classes in components for specific elements
3. Modify `app/providers.tsx` to enable light mode if needed

### Adding Pages

Create a new folder in the `app/` directory:

```bash
mkdir app/new-page
touch app/new-page/page.tsx
```

### Code Blocks

Use the `CodeBlock` component for syntax-highlighted code:

```tsx
import { CodeBlock } from "./components/CodeBlock";

<CodeBlock
  code={`your code here`}
  language="typescript"
  filename="example.ts"
  showLineNumbers={true}
/>;
```

## 📄 Pages

- **Home (`/`)** - Hero section, features, quick start, and use cases
- **Getting Started (`/getting-started`)** - Installation and configuration guides
- **API Reference (`/api`)** - Complete API documentation
- **Examples (`/examples`)** - Live playground and code examples

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/MainaJoseph/universal-limiter-web)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy

### Other Platforms

```bash
# Build the project
pnpm build

# The output will be in .next folder
# Deploy the .next folder to your hosting platform
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Package:** [universal-rate-limiter on npm](https://www.npmjs.com/package/universal-rate-limiter)
- **Repository:** [GitHub](https://github.com/MainaJoseph/universal-rate-limiter)
- **Documentation:** [Live Site](https://universal-rate-limiter.vercel.app)
- **Issues:** [Report a bug](https://github.com/MainaJoseph/universal-limiter-web/issues)

## 👨‍💻 Author

**Joseph Maina**

- GitHub: [@MainaJoseph](https://github.com/MainaJoseph)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)

---

<p align="center">Made with ❤️ for the JavaScript community</p>
