"use client";
import Image from "next/image";

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
            src="https://qa.quidcashqa.in/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTQ5ODczMSwiZXhwIjoxNzMxNTAyMzMxLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiZTYyNDdhYzgtMmFlZC00NGY0LWI3ZTMtNjFiOGJkMWJjOThkIiwiY2xhaW1zIjp7ImlkIjoxMDE0LCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2V9fQ.jDl4eiCftVdYNOe0w6vWNf-YIlciLqh8LwMv-KHcknC0YvUHvF2s8LMdn9RIJZ3wq4irGkciBwxcnakVjyb-LdFRwE9AvLZRcebretG5BS7LigqLIFBPyB-H5EA6ak58ooPoz9eqEHYNb3CJsf-jrrsQm7gzVGe7gmxLTkd5ymKoHP0O8lERhcMWYbZuVzbdWU7hDu9D6IHLoWtj5azp4_iL2U5lhN-tSLI0dLyF3Uu-UxLc0sc7oqVJJ7i1rlj6K8m8TgZ9aucxlk5Y47Aro7R1jrqwx_j1pKdL1okHjzAVTvGmtN9gRtQ9EnhrV1R49i0HmATNrtncXmD2yzSN3w&retailer_id=1014&iframe_instance='true'"
            className="h-[1000px] w-[550px]"
            sandbox="allow-same-origin allow-scripts allow-forms"
          /> */}
          <div className="flex gap-4">
            <div>
              <iframe
                src="https://portal.quidcashqa.in/auth/login?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMzA1NDI3NCwiZXhwIjoxNzMzMDU3ODc0LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1rMXg5ZEBiYWNrb2ZmaWNlLTgxMDE0LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstazF4OWRAYmFja29mZmljZS04MTAxNC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6IjY4ZDdlZGQ3LTkwNTYtNDkyMy04MzVlLTA4NmJlNDI2M2E2ZCIsImNsYWltcyI6eyJ1dWlkIjoiNjhkN2VkZDctOTA1Ni00OTIzLTgzNWUtMDg2YmU0MjYzYTZkIn19.L6dx7BePZdlTQIeR8a8WXf4jeoCLDJzxgo70t5Tp71pCu1PVLtQ2NYoSTVsY4ALUk7D_GBdxxbzppzw5jY3F1ZZMLEQgUwCNpbAulSVgTVJODBvMNm7KmFOAINuJORAZKchwyGYc4A4BP0t8Ix7ewVMvIcJXg821Fv8iXGIXfxLwVStpnf_rsru96auGo6cYPjjdCiiFdj4vPLB0UWo3UGnouUtMwbL7wm7vr90yo5OE_aOO-3y4MCcIx2Sc5-HUsr56r_skTIeweZadfXKAFlw4o6A73KslgR7ex5EQFid727d54fD71OTyQs8It8GhXn0eutxNo1Am34alYdj2mw"
                // src="https://pr-559.d1zvoni4pjwmzv.amplifyapp.com/hi?iframe_instance='true'"
                // src="https://qa.quidcashqa.in/hi?session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTY1MTUwOSwiZXhwIjoxNzMxNjU1MTA5LCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiYzIwZjYyNmQtNWZlYi00ZjgxLWIyNWMtNWRlMGExMWE4bmlyIiwiY2xhaW1zIjp7ImlkIjoxOCwiaXNfcmVwcmVzZW50YXRpdmUiOmZhbHNlfX0.ANB1jDURFJ2e3LqBigwAgwirXxlwUIAxIFJrKm7XgAj2UrwTI1Xehd53Ph2FZHal-1JNi25SwnnRAfuxvzY8MaC4I4N8CNQFx39ME8LlIH8wyd9k_OqQB1EvCJuF0FY02hPenD7kEyTNzIB-yJMTNYOF0bBdEipMYxvGkCB9X0vz2dNbq54VGabL_QOnbVPhx4UsyONsTF52NTPTKlfHqZkQuZDVTlOiPH475yDZUovPfwj8ap2Xw0HEQdD9hMg9NaX2BFb2WDYZg4uyU_gHl-5LAoa8VZKQHoVIH11K-sdfLYgiLM7oB6uTcjuThDZkrX5TTOoXEhghECaZ2sYs-w&retailer_id=18&iframe_instance='true'"
                className=""
                // sandbox="allow-scripts allow-forms allow-same-origin"
                sandbox="allow-scripts allow-forms allow-same-origin allow-downloads allow-popups encrypted-media"
                allow="camera; geolocation;"
              />
            </div>
            <div></div>
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
