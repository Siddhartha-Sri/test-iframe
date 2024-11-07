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
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMDk3NDE5NSwiZXhwIjoxNzMwOTc3Nzk1LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1lamJxNEBxdWlkY2FzaC1hNzg0Ni5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLWVqYnE0QHF1aWRjYXNoLWE3ODQ2LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiNzY3NGQ5YTQtM2MzMS00ODQ5LWE0NzktNzA1N2FkZWRlNmFhIiwiY2xhaW1zIjp7ImlkIjo5OTF9fQ.q3xcwl-Q79dLfqCg0wC6Uv8m8m1rKeHk0tHFtPttJ7kLuCqfWaWBVh9BAM6PhlCC8xNhBesqnQT_47hdqxjvCIMc-n9ZUU5FWeOk0gX14xv5eo09cnl9RBa0pBlnb4JRCTpgtSGfGIMLYH-9_MzeMCt2O7F-4e7sdbzP0oED4zOaM36YVEjaKOvb9Yrgq6eadNKSApcgfW7OUVD6Gmpo2wnZNWjIn7LvA4OGgPxPbMnDwU_F1z1zIgqzyzBo7UN9x_Vow-svMPr3gmXu0OpgNP_mD_6cX7peX5t11yv8RMs8MIujoGvTQ_XU-CFzgnda_D5UFFFJIl66qOp0AcsqxA&retailer_id=991&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}
