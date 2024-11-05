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
            src="https://dev.quidcashqa.in/?session=eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4Y2FjOTViNGE1YWNkZTBiOTY1NzJkZWU4YzhjOTVlZWU0OGNjY2QiLCJ0eXAiOiJKV1QifQ.eyJpZCI6OTkxLCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2UsInJlcHJlc2VudGF0aXZlX2lkIjpudWxsLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcXVpZGNhc2gtZDVhODgiLCJhdWQiOiJxdWlkY2FzaC1kNWE4OCIsImF1dGhfdGltZSI6MTczMDEyNjQ1NywidXNlcl9pZCI6Ijc2NzRkOWE0LTNjMzEtNDg0OS1hNDc5LTcwNTdhZGVkZTZhYSIsInN1YiI6Ijc2NzRkOWE0LTNjMzEtNDg0OS1hNDc5LTcwNTdhZGVkZTZhYSIsImlhdCI6MTczMDgxMDE0NywiZXhwIjoxNzMwODEzNzQ3LCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7fSwic2lnbl9pbl9wcm92aWRlciI6ImN1c3RvbSJ9fQ.VeQUjUOlJkiCHPqSNhQbW6fwfnD45eHaG-jrSy1ZDhwsTXlL-jNKaVW_zyxFXJFe9Tr_xsu8FpmnraFq0i5jdX3WOdJ-LvwBWfCeTbFbeNWYe2M4YCPF2c5TuYD85IY9VadrBdSn_4whLYDYTh--p0I1ke0E8jFGNnseZZFKWe7A8WgAmEPQC0Ffzc6zweLex5OHUOD_fC1iNjx1mZun4Xi-DjjnQzTrFuGf6gZAqR0sWoj59EMg25BohaFvlYlI-mBGl8C5O5Pm3jeUOHq_7ph2JF9-76Tv3jLphgQ0WdSdDo5RD_nqewod3esA8bIz2qZh27t1Ycg8RpNmKWCutQ"
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
