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
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com?session=eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4Y2FjOTViNGE1YWNkZTBiOTY1NzJkZWU4YzhjOTVlZWU0OGNjY2QiLCJ0eXAiOiJKV1QifQ.eyJpZCI6MTgsImlzX3JlcHJlc2VudGF0aXZlIjpmYWxzZSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3F1aWRjYXNoLWQ1YTg4IiwiYXVkIjoicXVpZGNhc2gtZDVhODgiLCJhdXRoX3RpbWUiOjE3MzA4Nzc3MTksInVzZXJfaWQiOiJjMjBmNjI2ZC01ZmViLTRmODEtYjI1Yy01ZGUwYTExYThuaXIiLCJzdWIiOiJjMjBmNjI2ZC01ZmViLTRmODEtYjI1Yy01ZGUwYTExYThuaXIiLCJpYXQiOjE3MzA4OTcxNzEsImV4cCI6MTczMDkwMDc3MSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6e30sInNpZ25faW5fcHJvdmlkZXIiOiJjdXN0b20ifX0.q11fBV4dI-EVmvyY3qfqyke_N3QNNmy4AMQIC8955CA9eCmr8B2sleWuqJ3fZL-bLEyGwaSfCU-6Kd8VRD2W8jFIAbrOU2sECzKM_kWIJAWXtEQ62Y3FNyHSUJ7yn4JMewOHZYipYHQOge0ou_guW5oRFYc1TIKHVT7vMkHlnnbBzjPB9urNzt4ZH4Mf8q3_R6vhmRsQ8vKiXCQpiS_-pK8zZcJhR5mzIcEKGWyohMYPHyB73FwdIJBPuHX8mbIHegpT_uKjjNEPtN0NxEeKTwfN-fu7tYeW3SuF_8QVXaSPL2N1CL2E_JMb3Hlndt-zh-ikShKm2qWVaXkkDixkCA&retailer_id=18&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </div>
  );
}
