import { CodeBlock } from '../components/CodeBlock';
import { Book, Download, Code2, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Getting Started - Universal Rate Limiter',
  description: 'Learn how to install and use Universal Rate Limiter in your projects',
};

export default function GettingStarted() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Getting Started
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Learn how to install and configure Universal Rate Limiter in your project
          </p>
        </div>

        {/* Installation */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <Download className="h-5 w-5 text-zinc-900 dark:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Installation</h2>
          </div>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Install the package using your preferred package manager:
          </p>
          <CodeBlock
            code={`npm install universal-rate-limiter

# or with pnpm
pnpm add universal-rate-limiter

# or with yarn
yarn add universal-rate-limiter`}
            language="bash"
            showLineNumbers={false}
          />
        </section>

        {/* Basic Usage */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <Code2 className="h-5 w-5 text-zinc-900 dark:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Basic Usage</h2>
          </div>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Create a rate limiter instance and check if a request should be allowed:
          </p>
          <CodeBlock
            code={`import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

// Create a limiter that allows 10 requests per minute
const limiter = createRateLimiter({
  key: 'api-requests',
  max: 10,
  window: '1m',
  storage: new MemoryStorage()
});

// Check if request should be allowed
const result = await limiter.check();

if (result.allowed) {
  console.log(\`Request allowed. \${result.remaining} requests remaining.\`);
  // Process the request
} else {
  console.log(\`Rate limited. Retry after \${result.retryAfter}ms\`);
  // Return 429 Too Many Requests
}`}
            language="typescript"
            filename="basic-example.ts"
          />
        </section>

        {/* Express Middleware */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <Rocket className="h-5 w-5 text-zinc-900 dark:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Express Middleware</h2>
          </div>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Protect your Express routes with the built-in middleware:
          </p>
          <CodeBlock
            code={`import express from 'express';
import { rateLimitExpress } from 'universal-rate-limiter';

const app = express();

// Apply rate limiting to all routes
app.use(rateLimitExpress({
  key: 'api-limit',
  max: 100,
  window: '15m'
}));

// Or apply to specific routes
app.get('/api/data',
  rateLimitExpress({
    key: (req) => \`user-\${req.ip}\`,
    max: 10,
    window: '1m'
  }),
  (req, res) => {
    res.json({ data: 'your data' });
  }
);`}
            language="typescript"
            filename="express-example.ts"
          />
        </section>

        {/* Next.js Edge Middleware */}
        <section className="mb-16">
          <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">Next.js Edge Middleware</h3>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            For Next.js 16+, use proxy.ts:
          </p>
          <CodeBlock
            code={`import { rateLimitEdge } from 'universal-rate-limiter';

export default rateLimitEdge({
  key: (request) => request.ip ?? 'anonymous',
  max: 50,
  window: '1m',
  onRateLimit: (request) => {
    return new Response('Too many requests', {
      status: 429,
      headers: { 'Retry-After': '60' }
    });
  }
});

export const config = {
  matcher: '/api/:path*',
};`}
            language="typescript"
            filename="proxy.ts (Next.js 16+)"
          />

          <p className="mb-6 mt-8 text-zinc-600 dark:text-zinc-400">
            For Next.js 12-15, use middleware.ts:
          </p>
          <CodeBlock
            code={`import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

const limiter = createRateLimiter({
  key: (req: NextRequest) => req.ip ?? 'anonymous',
  max: 50,
  window: '1m',
  storage: new MemoryStorage()
});

export async function middleware(request: NextRequest) {
  const result = await limiter.check();

  if (!result.allowed) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: { 'Retry-After': '60' }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};`}
            language="typescript"
            filename="middleware.ts (Next.js 12-15)"
          />
        </section>

        {/* React Hook */}
        <section className="mb-16">
          <h3 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-white">React Hook</h3>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Limit user actions on the client side:
          </p>
          <CodeBlock
            code={`'use client';

import { useRateLimit } from 'universal-rate-limiter';

export function MyComponent() {
  const { allowed, remaining, attempt } = useRateLimit('button-click', {
    max: 3,
    window: '1m'
  });

  const handleClick = async () => {
    if (!allowed) {
      alert('Too many clicks! Please wait.');
      return;
    }

    await attempt();
    // Perform action
    console.log(\`Action performed. \${remaining} remaining.\`);
  };

  return (
    <div>
      <button onClick={handleClick} disabled={!allowed}>
        Click Me ({remaining} left)
      </button>
    </div>
  );
}`}
            language="typescript"
            filename="MyComponent.tsx"
          />
        </section>

        {/* Configuration Options */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <Book className="h-5 w-5 text-zinc-900 dark:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Configuration Options</h2>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-zinc-200 bg-blue-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h4 className="mb-2 font-semibold text-zinc-900 dark:text-white">key</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                A unique identifier for the rate limit. Can be a string or a function that returns a string.
              </p>
              <CodeBlock
                code={`// Static key
key: 'api-requests'

// Dynamic key
key: (req) => \`user-\${req.userId}\``}
                language="typescript"
                showLineNumbers={false}
              />
            </div>

            <div className="rounded-lg border border-zinc-200 bg-blue-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h4 className="mb-2 font-semibold text-zinc-900 dark:text-white">max</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Maximum number of requests allowed within the time window.
              </p>
              <CodeBlock code={`max: 10  // Allow 10 requests`} language="typescript" showLineNumbers={false} />
            </div>

            <div className="rounded-lg border border-zinc-200 bg-blue-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h4 className="mb-2 font-semibold text-zinc-900 dark:text-white">window</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Time window for the rate limit. Supports human-readable formats or milliseconds.
              </p>
              <CodeBlock
                code={`window: '1m'    // 1 minute
window: '10s'   // 10 seconds
window: '1h'    // 1 hour
window: '1d'    // 1 day
window: 60000   // 60 seconds in milliseconds`}
                language="typescript"
                showLineNumbers={false}
              />
            </div>

            <div className="rounded-lg border border-zinc-200 bg-blue-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h4 className="mb-2 font-semibold text-zinc-900 dark:text-white">storage</h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Storage adapter for persisting rate limit data. Defaults to MemoryStorage.
              </p>
              <CodeBlock
                code={`// Memory storage (default, lost on restart)
storage: new MemoryStorage()

// LocalStorage (browser only)
storage: new LocalStorageAdapter()`}
                language="typescript"
                showLineNumbers={false}
              />
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Next Steps</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="/api"
              className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">API Reference</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Explore the complete API documentation
              </p>
            </a>
            <a
              href="/examples"
              className="rounded-lg border border-zinc-200 bg-white p-6 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
            >
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">Examples</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                See more examples and try the live playground
              </p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
