'use client';

import { useState, useMemo } from 'react';
import { CodeBlock } from '../components/CodeBlock';
import { Play, RotateCcw } from 'lucide-react';
import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

export default function Examples() {
  const [playgroundLogs, setPlaygroundLogs] = useState<string[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Use useMemo to ensure limiter persists across re-renders
  const limiter = useMemo(
    () =>
      createRateLimiter({
        key: 'playground-demo',
        max: 3,
        window: '10s',
        storage: new MemoryStorage(),
      }),
    []
  );

  const handleTestRequest = async () => {
    setIsPlaying(true);
    const timestamp = new Date().toLocaleTimeString();
    const result = await limiter.check();

    if (result.allowed) {
      setPlaygroundLogs((prev) => [
        ...prev,
        `[${timestamp}] ✅ Request allowed. ${result.remaining} remaining.`,
      ]);
    } else {
      setPlaygroundLogs((prev) => [
        ...prev,
        `[${timestamp}] ❌ Rate limited! Retry after ${result.retryAfter}ms`,
      ]);
    }

    setTimeout(() => setIsPlaying(false), 300);
  };

  const handleReset = () => {
    setPlaygroundLogs([]);
  };

  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">Examples</h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            See Universal Rate Limiter in action with real code examples
          </p>
        </div>

        {/* Live Playground */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Live Playground</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Try the rate limiter yourself! Click the button below to test a limiter that allows 3 requests per 10
            seconds.
          </p>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Configuration */}
            <div className="rounded-lg border border-zinc-200 bg-blue-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Configuration</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Max Requests:</span>
                  <span className="font-mono font-semibold text-zinc-900 dark:text-white">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Time Window:</span>
                  <span className="font-mono font-semibold text-zinc-900 dark:text-white">10 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-600 dark:text-zinc-400">Storage:</span>
                  <span className="font-mono font-semibold text-zinc-900 dark:text-white">MemoryStorage</span>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleTestRequest}
                  disabled={isPlaying}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-medium text-white hover:bg-zinc-800 disabled:opacity-50 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  <Play className="h-4 w-4" />
                  Test Request
                </button>
                <button
                  onClick={handleReset}
                  className="rounded-lg border border-zinc-300 px-4 py-3 hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  aria-label="Reset"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Logs */}
            <div className="rounded-lg border border-zinc-200 bg-blue-50/30 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-white">Console Output</h3>
              <div className="h-48 overflow-y-auto rounded-lg bg-zinc-900 p-4 font-mono text-xs text-zinc-100 dark:bg-zinc-950">
                {playgroundLogs.length === 0 ? (
                  <div className="text-zinc-500">Click &quot;Test Request&quot; to see output...</div>
                ) : (
                  <div className="space-y-1">
                    {playgroundLogs.map((log, index) => (
                      <div key={index}>{log}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Example 1: Simple API Rate Limiting */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Simple API Rate Limiting</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Basic rate limiting for API endpoints with a fixed limit per time window.
          </p>
          <CodeBlock
            code={`import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

const apiLimiter = createRateLimiter({
  key: 'api-endpoint',
  max: 100,
  window: '15m',
  storage: new MemoryStorage()
});

// In your API handler
async function handleRequest(req, res) {
  const result = await apiLimiter.check();

  if (!result.allowed) {
    return res.status(429).json({
      error: 'Too many requests',
      retryAfter: result.retryAfter
    });
  }

  // Process request
  res.json({ data: 'Success', remaining: result.remaining });
}`}
            language="typescript"
            filename="simple-api-limiting.ts"
          />
        </section>

        {/* Example 2: Per-User Rate Limiting */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Per-User Rate Limiting</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Dynamic rate limiting based on user ID or IP address.
          </p>
          <CodeBlock
            code={`import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

const userLimiter = createRateLimiter({
  key: (req) => \`user-\${req.userId || req.ip}\`,
  max: 50,
  window: '1h',
  storage: new MemoryStorage()
});

// In your Express app
app.use(async (req, res, next) => {
  const result = await userLimiter.check(req);

  if (!result.allowed) {
    return res.status(429).json({
      error: 'Too many requests from this user',
      retryAfter: result.retryAfter
    });
  }

  // Add rate limit info to response headers
  res.setHeader('X-RateLimit-Limit', '50');
  res.setHeader('X-RateLimit-Remaining', result.remaining.toString());

  next();
});`}
            language="typescript"
            filename="per-user-limiting.ts"
          />
        </section>

        {/* Example 3: Express Global + Route-Specific */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
            Express: Global + Route-Specific Limits
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Combine global rate limiting with stricter limits for specific sensitive routes.
          </p>
          <CodeBlock
            code={`import express from 'express';
import { rateLimitExpress } from 'universal-rate-limiter';

const app = express();

// Global rate limit: 1000 requests per hour
app.use(rateLimitExpress({
  key: (req) => \`global-\${req.ip}\`,
  max: 1000,
  window: '1h'
}));

// Stricter limit for login endpoint: 5 attempts per 15 minutes
app.post('/api/auth/login',
  rateLimitExpress({
    key: (req) => \`login-\${req.ip}\`,
    max: 5,
    window: '15m'
  }),
  (req, res) => {
    // Handle login
  }
);

// Stricter limit for registration: 3 per day
app.post('/api/auth/register',
  rateLimitExpress({
    key: (req) => \`register-\${req.ip}\`,
    max: 3,
    window: '1d'
  }),
  (req, res) => {
    // Handle registration
  }
);`}
            language="typescript"
            filename="express-multi-tier.ts"
          />
        </section>

        {/* Example 4: Next.js API Routes */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Next.js API Routes</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Rate limiting in Next.js API routes with proper error handling.
          </p>
          <CodeBlock
            code={`import { NextRequest, NextResponse } from 'next/server';
import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

const limiter = createRateLimiter({
  key: (req: NextRequest) => req.ip ?? 'anonymous',
  max: 10,
  window: '1m',
  storage: new MemoryStorage()
});

export async function GET(request: NextRequest) {
  const result = await limiter.check(request);

  if (!result.allowed) {
    return NextResponse.json(
      {
        error: 'Too many requests',
        retryAfter: Math.ceil(result.retryAfter / 1000) // Convert to seconds
      },
      {
        status: 429,
        headers: {
          'Retry-After': Math.ceil(result.retryAfter / 1000).toString()
        }
      }
    );
  }

  // Process request
  return NextResponse.json({
    message: 'Success',
    rateLimit: {
      remaining: result.remaining,
      limit: 10
    }
  });
}`}
            language="typescript"
            filename="app/api/data/route.ts"
          />
        </section>

        {/* Example 5: React Hook in Client Component */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">
            React Hook in Client Component
          </h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Limit user actions on the client side, like button clicks or form submissions.
          </p>
          <CodeBlock
            code={`'use client';

import { useState } from 'react';
import { useRateLimit } from 'universal-rate-limiter';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const { allowed, remaining, attempt } = useRateLimit('contact-form', {
    max: 3,
    window: '1h'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!allowed) {
      setStatus(\`Too many submissions. You have \${remaining} remaining.\`);
      return;
    }

    await attempt();

    // Submit form
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ /* form data */ })
      });
      setStatus(\`Form submitted! \${remaining - 1} submissions remaining.\`);
    } catch (error) {
      setStatus('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" required />
      <textarea required />
      <button type="submit" disabled={!allowed}>
        Submit ({remaining} remaining)
      </button>
      {status && <p>{status}</p>}
    </form>
  );
}`}
            language="typescript"
            filename="ContactForm.tsx"
          />
        </section>

        {/* Example 6: Multiple Time Windows */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Multiple Time Windows</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Combine multiple rate limiters for different time windows (e.g., per second, per minute, per hour).
          </p>
          <CodeBlock
            code={`import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

// Create multiple limiters for different time windows
const perSecondLimiter = createRateLimiter({
  key: (req) => \`second-\${req.ip}\`,
  max: 10,
  window: '1s',
  storage: new MemoryStorage()
});

const perMinuteLimiter = createRateLimiter({
  key: (req) => \`minute-\${req.ip}\`,
  max: 100,
  window: '1m',
  storage: new MemoryStorage()
});

const perHourLimiter = createRateLimiter({
  key: (req) => \`hour-\${req.ip}\`,
  max: 1000,
  window: '1h',
  storage: new MemoryStorage()
});

// Middleware to check all limiters
async function rateLimitMiddleware(req, res, next) {
  const limiters = [
    { limiter: perSecondLimiter, name: 'per second' },
    { limiter: perMinuteLimiter, name: 'per minute' },
    { limiter: perHourLimiter, name: 'per hour' }
  ];

  for (const { limiter, name } of limiters) {
    const result = await limiter.check(req);
    if (!result.allowed) {
      return res.status(429).json({
        error: \`Rate limit exceeded (\${name})\`,
        retryAfter: result.retryAfter
      });
    }
  }

  next();
}`}
            language="typescript"
            filename="multi-window-limiting.ts"
          />
        </section>

        {/* Example 7: Custom Error Response */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Custom Error Response</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Customize the response when rate limits are exceeded.
          </p>
          <CodeBlock
            code={`import { rateLimitExpress } from 'universal-rate-limiter';

const customRateLimiter = rateLimitExpress({
  key: (req) => \`api-\${req.ip}\`,
  max: 100,
  window: '15m',
  onRateLimit: (req, res, result) => {
    res.status(429).json({
      error: {
        code: 'RATE_LIMIT_EXCEEDED',
        message: 'You have exceeded the rate limit',
        details: {
          limit: 100,
          window: '15 minutes',
          retryAfter: Math.ceil(result.retryAfter / 1000),
          ip: req.ip
        }
      }
    });
  }
});

app.use('/api', customRateLimiter);`}
            language="typescript"
            filename="custom-error.ts"
          />
        </section>
      </div>
    </div>
  );
}
