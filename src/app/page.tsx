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
            src="https://dev.quidcashqa.in/?session=eyJhbGciOiJSUzI1NiIsImtpZCI6ImU2YWMzNTcyNzY3ZGUyNjE0ZmM1MTA4NjMzMDg3YTQ5MjMzMDNkM2IiLCJ0eXAiOiJKV1QifQ.eyJpZCI6OTc5LCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2UsInJlcHJlc2VudGF0aXZlX2lkIjpudWxsLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcXVpZGNhc2gtZDVhODgiLCJhdWQiOiJxdWlkY2FzaC1kNWE4OCIsImF1dGhfdGltZSI6MTczMDc4NzAxMSwidXNlcl9pZCI6ImU4MjU3YzAyLTkyYzYtNDY4Yy05ZjM0LTBkZGNhNjk5NTAwNyIsInN1YiI6ImU4MjU3YzAyLTkyYzYtNDY4Yy05ZjM0LTBkZGNhNjk5NTAwNyIsImlhdCI6MTczMDc4NzAxMSwiZXhwIjoxNzMwNzkwNjExLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.HHESOmMBS1XPHnYRU3K6q80Reod79V811-EXswVC-GgPWK9CUaSaBH8LsqNrpkW5AMRwFnYb-Lbs65-TdO2dEJ7ElarCif4ZhKZRqXQPTu8N8fMNvvFFKc11Ru9tra5iLnhXba_xbG9s4sKpCQYzm2mnsoOVM67-qznaT9sj88XggyipY_sjG3mTfqhcrAfqqgbx3lGGYYH7Ab_ubANHx2kTloyq5gryWbpfvXP6nzZ607vc2uZr-clEOzWRQocdfF3quUlX7yI3LRXUivZGYCR4GDsnx9aiOU2qy_pcLZBkCbQxMocLH3MaDj1AdZuLnRQj1exNbKGU1JOKKddGpg"
            className="h-[1000px] w-[550px]"
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
