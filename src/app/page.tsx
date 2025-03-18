"use client";
import Image from "next/image";
// import StorageAccessPopup from "./StorageAccessPopup";

// Function to request camera access
// const requestCameraAccess = async () => {
//   try {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     console.log("Camera access granted");
//     // Here, you could handle the video stream, e.g., passing it to the iframe if needed
//     return stream;
//   } catch (error) {
//     console.error("Camera access denied:", error);
//     return null;
//   }
// };

// Function to request location access
// const requestLocationAccess = async () => {
//   return new Promise((resolve, reject) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => resolve(position),
//         (error) => reject(error)
//       );
//     } else {
//       reject("Geolocation not supported");
//     }
//   });
// };

// requestCameraAccess();
// requestLocationAccess();

// const session = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTc0MjI5MjQ5NiwiZXhwIjoxNzQyMjk2MDk2LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiY2I2MmU1NTMtNjgwYy00NzllLWEzNDItMzg4ZDU4NTRkYmExIiwiY2xhaW1zIjp7ImlkIjoxMTQ2fX0.MD2KxLgBHLwZ7Hscludd_hPZ3mqR2gU_DMn0nMHVc5sCzg7u1PyGvz9abZRxJFMNN9jsVDo-2Di2aStx_n2fPWWq2NhqJ2i5BHp4Z8gT6l8QyejjldVpEqjKKbM9kODaZb9XVQezSGfEB48b3LP3C5OjpAxqL7ewjkXxLMRuRgEufTBw1RLH9vy5i9_nwxuaCim63UlHQ0lCpiCB3ZoqtLGzDiSzuHGLQIC2rgV5xJcNWywQggP1TSqekK2r8CuIPnrb_o4Iq-JmFt0nejleCPec4B318WU5BJAwW_UC4lnu7jvi2M0yshGjprWpLzTABvy7nJlpczKnGXHLEYOsig"

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
        {/* <StorageAccessPopup /> */}

        <div>
          {/* <iframe
            src="https://qa.quidcashqa.in/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTQ5ODczMSwiZXhwIjoxNzMxNTAyMzMxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiZTYyNDdhYzgtMmFlZC00NGY0LWI3ZTMtNjFiOGJkMWJjOThkIiwiY2xhaW1zIjp7ImlkIjoxMDE0LCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2V9fQ.jDl4eiCftVdYNOe0w6vWNf-YIlciLqh8LwMv-KHcknC0YvUHvF2s8LMdn9RIJZ3wq4irGkciBwxcnakVjyb-LdFRwE9AvLZRcebretG5BS7LigqLIFBPyB-H5EA6ak58ooPoz9eqEHYNb3CJsf-jrrsQm7gzVGe7gmxLTkd5ymKoHP0O8lERhcMWYbZuVzbdWU7hDu9D6IHLoWtj5azp4_iL2U5lhN-tSLI0dLyF3Uu-UxLc0sc7oqVJJ7i1rlj6K8m8TgZ9aucxlk5Y47Aro7R1jrqwx_j1pKdL1okHjzAVTvGmtN9gRtQ9EnhrV1R49i0HmATNrtncXmD2yzSN3w&retailer_id=1014&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts allow-forms"
          /> */}
          <div className="flex gap-4">
            {/* eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMzQxMDE1OSwiZXhwIjoxNzMzNDEzNzU5LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiM2NhZjJkM2YtZDZhYy00ZmU0LWEwZGEtNTc5ODViNDQ3NDkxIiwiY2xhaW1zIjp7ImlkIjoxMDc4LCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2V9fQ.O4H49Y4iainDmXl9XG3tRDovXyi_tIaYqZIQqL-nGuKkuRb14uDKQuA_kHS2l6UTOpm8Q5csRfV0bEoMDQSks5uz74atVjwom2eVSFdOPkgi0vKYSHjpECI8RhQDOX5iydNHn9JYEONMZ3Gs3HXZQmPheQLBtz30ZeS6ii4-t0wvhtSKE0Mz3GJLkthvrfXeWHTUzxGwdnNZ41mk03gNqktOEtq7-JBZSTLCyrDj2gyJv6Q3Kf02Iavn4vq7Ffz7PsU0UemqITw_q72U9DFSlQuXebMDEYWw_KY0gwSfpUtb-eBCWEnW9mBnP_Zybj3Xw72HUuEudICdP-UlPNXHwA */}
            <div>
              <iframe
                src={`http://172.16.5.171:3000`}
                className="h-[1000px] w-[550px]"
                sandbox="allow-scripts allow-forms allow-same-origin allow-downloads allow-popups"
                allow="camera; geolocation; cookies; storage-access;"
              />
              {/* <iframe
                src="https://portal.quidcashqa.in/auth/login?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczNjk0ODkzMywiZXhwIjoxNzM2OTUyNTMzLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1rMXg5ZEBiYWNrb2ZmaWNlLTgxMDE0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstazF4OWRAYmFja29mZmljZS04MTAxNC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6IjA5NDY3ZDY0LWZjNGYtNDNlNS05NWRlLTVlNzllZjQzMjcxOCIsImNsYWltcyI6eyJ1dWlkIjoiMDk0NjdkNjQtZmM0Zi00M2U1LTk1ZGUtNWU3OWVmNDMyNzE4In19.pJ-uFH210VCNO9x2MLIJGnjR5F6SAjTZZ60IFSgYifGS1u-iihczUJjkNLrDXl450laDa06dvmwI94ezFaxjBG_CYwB_9fDVUPBIEAQ27A4-jxp6Wyr9AdH1tZh-td-0z1p4jfAoxkT51CsBOS0BpyQPjDSLUFVsk9ElgG3zsNTYH_hVFCe7tJuI1Xa-AWGRZXQ4ZCC0SeJYQ_FhoNuyXALUlTKwrn_uiwPI8GsORfCeGsBBFAqLOxMi4aMsLjddIT14Zir3KWAXcinpxNWNM1lGsQO7zSYhSQ7acIrAgRU9o49hrVrRRIsXAcMnpnwWe_oNDtruTwTKpMOn4Suhjg&iframe_instance=true"
                className="h-[1000px] w-[1500px]"
                sandbox="allow-scripts allow-forms allow-same-origin allow-downloads allow-popups encrypted-media"
                allow="camera; geolocation;"
              /> */}
            </div>
          </div>
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
