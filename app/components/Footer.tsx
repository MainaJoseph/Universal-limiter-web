import { Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Built with ❤️ for the JavaScript community
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/MainaJoseph/universal-rate-limiter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <Link
              href="https://www.npmjs.com/package/universal-rate-limiter"
              target="_blank"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              npm
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
