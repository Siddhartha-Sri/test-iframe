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
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMDk3NTIzMiwiZXhwIjoxNzMwOTc4ODMyLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1lamJxNEBxdWlkY2FzaC1hNzg0Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWVqYnE0QHF1aWRjYXNoLWE3ODQ2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwiY2xhaW1zIjp7ImlkIjoxOH19.tGvuMckQkTN0PCn0WOwMBNPqOIxsLubfgGjII5dub2FUHb2JQhLV01ZOu1ELTwRcUEwhfck4-sG7Hi9JF82dAF6uMDlBPZH8D5O2MG3qSkOQYSy5-SdT92gUTTr5S-8SAz9dePNeW9B6g37he5xKHM55ncyPT9-CayOSoKejlGF-2oyE1rzxRG393HVJDNAJRhZaIWpc8gkFHqsbnisTm3q1P-7GDlsbJCEE0kAhKcBCQ_W1OtQLYzQ_9idU2V1grEHqIj2n6g1hoLISyInPhR3kFacQW1ettt4JIZe7IL9U0VyDxOTtndt_IHtDDuCNVbCJZTAAKMxowEDeGD46kA&retailer_id=18&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}
