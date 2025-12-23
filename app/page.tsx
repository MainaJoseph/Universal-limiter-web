import Link from 'next/link';
import { ArrowRight, Zap, Globe, Package, Shield } from 'lucide-react';
import { CodeBlock } from './components/CodeBlock';

export default function Home() {
  const installCode = `npm install universal-rate-limiter
# or
pnpm add universal-rate-limiter
# or
yarn add universal-rate-limiter`;

  const quickStartCode = `import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

const limiter = createRateLimiter({
  key: 'api-requests',
  max: 10,
  window: '1m',
  storage: new MemoryStorage()
});

const result = await limiter.check();
if (result.allowed) {
  // Process the request
  console.log(\`Remaining: \${result.remaining}\`);
} else {
  console.log(\`Rate limited. Retry after \${result.retryAfter}ms\`);
}`;

  return (
    <div className="bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl lg:text-7xl">
                Universal Rate Limiter
              </h1>
              <a
                href="https://www.npmjs.com/package/universal-rate-limiter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img
                  src="https://img.shields.io/npm/v/universal-rate-limiter?style=flat-square&color=blue"
                  alt="npm version"
                  className="h-6 w-auto rounded"
                />
              </a>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Modern, TypeScript-first rate limiting that works everywhere. No Redis required.
              Zero dependencies. Built for the edge.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/getting-started"
                className="flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-base font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://github.com/MainaJoseph/universal-rate-limiter"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-300 bg-white px-6 py-3 text-base font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Quick Start Code */}
          <div className="mx-auto mt-16 max-w-3xl">
            <CodeBlock code={installCode} language="bash" showLineNumbers={false} filename="Install" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Works Everywhere You Need It
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              One library, every JavaScript runtime. From browsers to serverless.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Globe className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">Universal</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Browser, Node.js, Edge, Serverless - works everywhere JavaScript runs
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Zap className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">Zero Dependencies</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                No external packages. Lightweight and tree-shakeable for minimal bundle size
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Package className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">TypeScript First</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Fully typed with excellent IntelliSense support and type safety
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <Shield className="h-5 w-5 text-zinc-900 dark:text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">Pluggable Storage</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Memory, localStorage, or bring your own adapter. Flexible and extensible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Quick Start
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Get up and running in seconds with our simple API
            </p>
            <CodeBlock code={quickStartCode} language="typescript" filename="example.ts" />
            <div className="mt-8">
              <Link
                href="/getting-started"
                className="inline-flex items-center gap-2 text-base font-medium text-zinc-900 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
              >
                Read the full documentation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="border-t border-zinc-200 bg-white py-24 dark:border-zinc-800 dark:bg-zinc-900/50 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
              Perfect For Any Use Case
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'API Protection', description: 'Protect your REST or GraphQL APIs from abuse' },
              { title: 'Express Middleware', description: 'Drop-in middleware for Express applications' },
              { title: 'Next.js Edge', description: 'Rate limiting at the edge with Next.js middleware' },
              { title: 'Form Submissions', description: 'Prevent spam on contact forms and sign-ups' },
              { title: 'Client-Side Actions', description: 'React hook for limiting user interactions' },
              { title: 'Serverless Functions', description: 'Works seamlessly with AWS Lambda, Vercel, etc.' },
            ].map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{useCase.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-600 px-6 py-16 text-center dark:bg-zinc-900 sm:px-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-50">
              Install universal-rate-limiter and start protecting your applications in minutes
            </p>
            <div className="mt-8">
              <Link
                href="/getting-started"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
