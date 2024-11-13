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
          {/* <iframe
            // src="https://qa.quidcashqa.in/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTQwNDcwMSwiZXhwIjoxNzMxNDA4MzAxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwiY2xhaW1zIjp7ImlkIjoxOCwiaXNfcmVwcmVzZW50YXRpdmUiOmZhbHNlfX0.UdrrCWUfPeU9nl-GznePA-F53uFCRHGN2QaDCBXTl2IvscEPFeVgWmwdaO2SwlBtbTeamknOLCpY1c6zjBidaCl-mSsMoJqNzXfWXST_XKBzpknub0-YxGag8HAxWfWzQs1PwNmHAwGNxvmofzcFnTuO4f5jEmMFRwINAfHQMxvIO85-iT54LZGFFVAEfDV5t8cJ-VHUY-Evo_yrRejCFICKs-arPGK948aH6CUo2zgFs-UubTZKRbTFUgZLIyHt_KCN0QlE9lc7TaM_-UZxhrxAfh25GD37SEI1lVn8mw5-Tje5xhJJ3W4JcY19OJhO1-mPZXsEbLodPI5bJ3uftA&anchor_id=22&retailer_id=18&iframe_instance='true'"
            src="https://qa.quidcashqa.in/hi"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts allow-forms"
          /> */}

          <iframe
            src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTQ5Nzk5OCwiZXhwIjoxNzMxNTAxNTk4LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiZTYyNDdhYzgtMmFlZC00NGY0LWI3ZTMtNjFiOGJkMWJjOThkIiwiY2xhaW1zIjp7ImlkIjoxMDE0LCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2V9fQ.miTCb_Acp8gNziZC6Z137Bvzwie0--s1Lp2_ue7bILqBk7bjjKfvt7oWxAb6nJs1A-ayZxF1aXgT9rVQjOdsB2sh74G-W58tmnxc4eWVQbwUALgymJvJIcvBQNtLgO6pU2BLIfmtK0tFFFP8LkITakr0jtgKA2GdfBq6sGDQ0lSaBuU3e1Pok9ipT4WYe4GDi8pYcLEPgWTYW7iDOIBTPg0i0kMp2wEjLMOqe4LhBwvg--sPEttmlOjg_W9kJAXfrcrNRR6j2N_dy5SJaVoJVf6hEcoj3K5hgpzi7FzEiL8JxVS4VxZAXbRMXKSCBiL09_V2l4FrUNWDOlLQWpnnRA&retailer_id=1014&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts"
          />

          {/* <embed
            src="https://qa.quidcashqa.in/hi"
            width="550"
            height="1000"
            type="text/html"
          /> */}
        </div>
      </main>
    </div>
  );
}

// <iframe
//             src="https://pr-469.d1zvoni4pjwmzv.amplifyapp.com/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTA0MDU2OCwiZXhwIjoxNzMxMDQ0MTY4LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwiY2xhaW1zIjp7ImlkIjoxOCwiaXNfcmVwcmVzZW50YXRpdmUiOmZhbHNlfX0.xo01jRpaeiQLWVIRTIkiL96axq3ynHsE8qYMoWLH_iaSDXFz_x4yzu4eQ820latC-Sa_8RfGofN-PBpVFogGR5RLDWOeWJ7izwF9YtSIC_R-vUrXk2mJcx5YJwj8htT0k5apZMBTz4U3Nc_C2U1P18KJ42yR7M66TSGHBPUwASv_RvydnmIZmJaeVI4WVPOv2e86Hq5cIzdjpBTc3nWWSPz-tQ2Sd9TqoKIoxqBnTCMfxBhI4_cj38apo9Zyx-m8kqRg10OfifPsH76Pg9CnFCz7pWQTXCo9gpIG0iTeMvxu2aoTbdH6rCfM2_gRDNNyNutLJ3fge-ssvdi5Rl4jmg&retailer_id=18&iframe_instance='true'"
//             className="h-[1000px] w-[550px]"
//             sandbox="allow-same-origin allow-scripts"
//           />
