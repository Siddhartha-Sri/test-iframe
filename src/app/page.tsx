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
          Quid IFrame
        </ol>
        <div>
          <iframe
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com?session=eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4Y2FjOTViNGE1YWNkZTBiOTY1NzJkZWU4YzhjOTVlZWU0OGNjY2QiLCJ0eXAiOiJKV1QifQ.eyJpZCI6MTgsImlzX3JlcHJlc2VudGF0aXZlIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3F1aWRjYXNoLWQ1YTg4IiwiYXVkIjoicXVpZGNhc2gtZDVhODgiLCJhdXRoX3RpbWUiOjE3MzA4Nzc3MTksInVzZXJfaWQiOiJjMjBmNjI2ZC01ZmViLTRmODEtYjI1Yy01ZGUwYTExYThuaXIiLCJzdWIiOiJjMjBmNjI2ZC01ZmViLTRmODEtYjI1Yy01ZGUwYTExYThuaXIiLCJpYXQiOjE3MzA5MDA4MDUsImV4cCI6MTczMDkwNDQwNSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.wB6H8xxvwjOjwaHy7KTCWfG1uu-Ns-EeVUXl6E2CoVUNvNWV1lqai5Qc3TqUrEVm8khioSmPf7HhnQrIhestSPDFGfjs2TsmDJcDNmO2lUOgOsn32WHDM5I2Xcs5mZzejRyP6NiXsEy6jRYLDKDNWeB3Fkp-snV5X6TtY0keimlB6ZFSfrSvABA1pkEX23sNIPiZpLSmQ9y87bFr_LEexgBPw3-2Rdzj0dKlzFlOLdK-30ob7XXXRLrrJBZLw1NAgsDUCGFa_txGO7Vj1rgGrTDVqcNECmKCbCVlz0mSI7eN26sj36KBnIgXL9rlB6c3Z2vPoKMamYDvoOrdVBQ_eQ&retailer_id=18&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}
