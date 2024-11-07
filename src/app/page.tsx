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
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMDk3NDk3MSwiZXhwIjoxNzMwOTc4NTcxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwiY2xhaW1zIjp7ImlkIjoxOCwiaXNfcmVwcmVzZW50YXRpdmUiOmZhbHNlfX0.xh-pco9kVS4I9b4ga59fUVBv0m5aweJ_1OM_JiNoJDqmAIT0WwBY7fJOdnB5HhmTgGwEXqMUsqcc8mbNx3J1AX0BlX6uPSft-ArHz7oSWWL_smT9EwHoJYWhVa2uzDP52JeYvRz6XkH2R4XQNIzBXilINsFpS8ceIb17g5ob8UBBNkakwRTtBdlTLrBjRatAgugpvyDJxti8Wb0Ub3QL5pJEdAddcOa2r6lFR0cYy24anbgsD-2c_zwk6sgOywQihja_QidjnuNjlrPATeAObEsmD_MZJ_4YkrzHqurdm93toiF-GDRfEiUAFpGFhaQQSmDqN6fug4SgZyA0JTqV5A&retailer_id=18&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}
