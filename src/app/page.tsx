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
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMDk3NDQwOSwiZXhwIjoxNzMwOTc4MDA5LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1lamJxNEBxdWlkY2FzaC1hNzg0Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWVqYnE0QHF1aWRjYXNoLWE3ODQ2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiNzY3NGQ5YTQtM2MzMS00ODQ5LWE0NzktNzA1N2FkZWRlNmFhIiwiY2xhaW1zIjp7ImlkIjo5OTF9fQ.S1RLxtYELHYVl-boiqYA9c_x81NlDcMIwgipkbI2ez7pEI97WDj2Pfw419KpCx6uV4Jc-5WBqTGb6LK3zYnj16NBHfhs6uH_kIUSjQTjQCcv-W7j0Bilf05m4ddXbRp_wnip1AzgbM-QJp-OsaY_mmf5UJWhHJ1srqqn2UE3wUAUrpwSVQijasZAYTNWyhWFer6sJd854R7oy1falfnf5oRvHHuGcNt3T62TdKkO6iORqzuMM9bPAxrEPRu2AqCgDQrE41DlIH0oqYBVVKgBzL-oWebByFlFdMWX0D8sUVX5nMNvbI7Mi6vcqQ1burwlMkLQhsng6J-VkoNKpxBLwQ&retailer_id=991&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}
