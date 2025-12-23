import { CodeBlock } from '../components/CodeBlock';
import { FileText } from 'lucide-react';

export const metadata = {
  title: 'API Reference - Universal Rate Limiter',
  description: 'Complete API documentation for Universal Rate Limiter',
};

export default function APIReference() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            API Reference
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Complete documentation for all exports and methods
          </p>
        </div>

        {/* createRateLimiter */}
        <section className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
              <FileText className="h-5 w-5 text-zinc-900 dark:text-white" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">createRateLimiter</h2>
          </div>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Creates a new rate limiter instance with the specified configuration.
          </p>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Signature</h3>
            <CodeBlock
              code={`function createRateLimiter<T = any>(
  options: RateLimiterOptions<T>
): RateLimiter`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Options</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">key</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    string | (context: T) =&gt; string
                  </span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  A unique identifier for the rate limit. Can be a static string or a function that receives context
                  and returns a unique key.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">max</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">number</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Maximum number of requests allowed within the time window.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">window</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">string | number</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Time window for the rate limit. Accepts human-readable strings (&quot;10s&quot;, &quot;1m&quot;,
                  &quot;1h&quot;, &quot;1d&quot;) or milliseconds.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">storage</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">StorageAdapter (optional)</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Storage adapter for persisting rate limit data. Defaults to MemoryStorage if not specified.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Example</h3>
            <CodeBlock
              code={`import { createRateLimiter, MemoryStorage } from 'universal-rate-limiter';

const limiter = createRateLimiter({
  key: 'api-requests',
  max: 100,
  window: '15m',
  storage: new MemoryStorage()
});`}
              language="typescript"
            />
          </div>
        </section>

        {/* check() Method */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">limiter.check()</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Checks if a request should be allowed based on the rate limit configuration.
          </p>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Signature</h3>
            <CodeBlock
              code={`async function check(context?: T): Promise<RateLimitResult>`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Returns</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">allowed</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">boolean</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Whether the request should be allowed (true) or rate limited (false).
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">remaining</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">number</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Number of requests remaining in the current window. Returns 0 if rate limited.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">retryAfter</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">number</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Milliseconds until the rate limit resets. Returns 0 if allowed.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Example</h3>
            <CodeBlock
              code={`const result = await limiter.check();

if (result.allowed) {
  console.log(\`Allowed. \${result.remaining} requests remaining.\`);
  // Process request
} else {
  console.log(\`Rate limited. Retry after \${result.retryAfter}ms\`);
  // Return 429 status
}`}
              language="typescript"
            />
          </div>
        </section>

        {/* rateLimitExpress */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">rateLimitExpress</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Express middleware for rate limiting. Automatically handles rate limit checks and responses.
          </p>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Signature</h3>
            <CodeBlock
              code={`function rateLimitExpress(
  options: RateLimiterOptions<Request>
): RequestHandler`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Example</h3>
            <CodeBlock
              code={`import express from 'express';
import { rateLimitExpress } from 'universal-rate-limiter';

const app = express();

// Global rate limit
app.use(rateLimitExpress({
  key: 'global',
  max: 100,
  window: '15m'
}));

// Per-IP rate limit
app.use(rateLimitExpress({
  key: (req) => \`ip-\${req.ip}\`,
  max: 50,
  window: '5m'
}));

// Route-specific rate limit
app.post('/api/auth/login',
  rateLimitExpress({
    key: (req) => \`login-\${req.ip}\`,
    max: 5,
    window: '15m'
  }),
  (req, res) => {
    // Handle login
  }
);`}
              language="typescript"
            />
          </div>
        </section>

        {/* rateLimitEdge */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">rateLimitEdge</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Edge middleware for Next.js 16+ (use in proxy.ts). Optimized for edge runtime.
          </p>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Signature</h3>
            <CodeBlock
              code={`function rateLimitEdge(options: {
  key: string | ((request: Request) => string);
  max: number;
  window: string | number;
  storage?: StorageAdapter;
  onRateLimit?: (request: Request) => Response;
}): (request: Request) => Promise<Response>`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Example</h3>
            <CodeBlock
              code={`import { rateLimitEdge } from 'universal-rate-limiter';

export default rateLimitEdge({
  key: (request) => request.headers.get('x-forwarded-for') ?? 'anonymous',
  max: 100,
  window: '1m',
  onRateLimit: (request) => {
    return new Response(
      JSON.stringify({ error: 'Too many requests' }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': '60'
        }
      }
    );
  }
});

export const config = {
  matcher: '/api/:path*',
};`}
              language="typescript"
              filename="proxy.ts"
            />
          </div>
        </section>

        {/* useRateLimit Hook */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">useRateLimit</h2>
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            React hook for client-side rate limiting. Uses localStorage for persistence.
          </p>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Signature</h3>
            <CodeBlock
              code={`function useRateLimit(
  key: string,
  options: { max: number; window: string | number }
): {
  allowed: boolean;
  remaining: number;
  retryAfter: number;
  attempt: () => Promise<void>;
}`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Returns</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">allowed</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">boolean</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Whether the action is currently allowed.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">remaining</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">number</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Number of actions remaining in the current window.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">retryAfter</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">number</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Milliseconds until the limit resets.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
                <div className="mb-2 flex items-baseline gap-2">
                  <code className="text-sm font-semibold text-zinc-900 dark:text-white">attempt</code>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">() =&gt; Promise&lt;void&gt;</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Function to call when performing the rate-limited action.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Example</h3>
            <CodeBlock
              code={`'use client';

import { useRateLimit } from 'universal-rate-limiter';

export function LikeButton() {
  const { allowed, remaining, attempt } = useRateLimit('like-button', {
    max: 10,
    window: '1m'
  });

  const handleLike = async () => {
    if (!allowed) {
      alert('Too many likes! Please wait.');
      return;
    }

    await attempt();
    // Send like to API
    console.log(\`Liked! \${remaining} likes remaining.\`);
  };

  return (
    <button onClick={handleLike} disabled={!allowed}>
      ❤️ Like ({remaining})
    </button>
  );
}`}
              language="typescript"
            />
          </div>
        </section>

        {/* Storage Adapters */}
        <section className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-white">Storage Adapters</h2>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">MemoryStorage</h3>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              In-memory storage adapter. Fast but data is lost on server restart. Good for development and single-
              instance deployments.
            </p>
            <CodeBlock
              code={`import { MemoryStorage } from 'universal-rate-limiter';

const storage = new MemoryStorage();`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">LocalStorageAdapter</h3>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              Browser localStorage adapter. Persists data across page reloads. Only available in browser environments.
            </p>
            <CodeBlock
              code={`import { LocalStorageAdapter } from 'universal-rate-limiter';

const storage = new LocalStorageAdapter();`}
              language="typescript"
              showLineNumbers={false}
            />
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">Custom Storage Adapter</h3>
            <p className="mb-4 text-zinc-600 dark:text-zinc-400">
              You can create custom storage adapters by implementing the StorageAdapter interface:
            </p>
            <CodeBlock
              code={`interface StorageAdapter {
  get(key: string): Promise<number | null>;
  set(key: string, value: number, ttl: number): Promise<void>;
  delete(key: string): Promise<void>;
}

// Example: Redis adapter
class RedisStorageAdapter implements StorageAdapter {
  constructor(private redis: RedisClient) {}

  async get(key: string): Promise<number | null> {
    const value = await this.redis.get(key);
    return value ? parseInt(value, 10) : null;
  }

  async set(key: string, value: number, ttl: number): Promise<void> {
    await this.redis.set(key, value.toString(), 'PX', ttl);
  }

  async delete(key: string): Promise<void> {
    await this.redis.del(key);
  }
}`}
              language="typescript"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
