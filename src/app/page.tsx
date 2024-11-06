import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Hi My Name is Siddhartha
        </ol>
        <div>
          <iframe
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com?session=eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4Y2FjOTViNGE1YWNkZTBiOTY1NzJkZWU4YzhjOTVlZWU0OGNjY2QiLCJ0eXAiOiJKV1QifQ.eyJpZCI6MTgsImlzX3JlcHJlc2VudGF0aXZlIjpmYWxzZSwicmVwcmVzZW50YXRpdmVfaWQiOm51bGwsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9xdWlkY2FzaC1kNWE4OCIsImF1ZCI6InF1aWRjYXNoLWQ1YTg4IiwiYXV0aF90aW1lIjoxNzMwODY4MDY0LCJ1c2VyX2lkIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwic3ViIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwiaWF0IjoxNzMwODcyNjM0LCJleHAiOjE3MzA4NzYyMzQsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnt9LCJzaWduX2luX3Byb3ZpZGVyIjoiY3VzdG9tIn19.UXWTBWL8yJG33mnSqbIJMwnkLsVtiP-9V5_U-pIrIKcYPbhGM0rVm0ZcVuQ-7Tychu8IWuyt1kHm9eaE_ZbVZAWzHk_UvNqFX8Q6TvicVob7BWGQL8U-0P7pucwrmf025R8-hOo5vwrXZFDgaweF2Y4GZk_9SxDT2LdACekPYNXLhQAi3KA778fEQ6bWR1a4TwxT2HqdlYT8-mcvL9L3UULjLIDLYfnFyad6NsywEW14001XVjKWn2J6TtGspKh7Hx7HAptrLC74rjWFR5W2fUnbePX5kCF2rBh9RqWZDn_0xEz66pRu_Rw_daWTA35pWNTbWv9ZaABRq5dDDP7sSg"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
