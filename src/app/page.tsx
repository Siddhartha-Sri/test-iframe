'use client'
import Image from "next/image";

// Function to request camera access
const requestCameraAccess = async ()  => {
  try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Camera access granted");
      // Here, you could handle the video stream, e.g., passing it to the iframe if needed
      return stream;
  } catch (error) {
      console.error("Camera access denied:", error);
      return null;
  }
}

// Function to request location access
const requestLocationAccess = async ()  => {
  return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              position => resolve(position),
              error => reject(error)
          );
      } else {
          reject("Geolocation not supported");
      }
  });
}


  requestCameraAccess();
  requestLocationAccess();



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
                src="https://qa.quidcashqa.in/hi&session=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTczMTU2MjU2MCwiZXhwIjoxNzMxNTY2MTYwLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay01dDhoNkBxdWlkY2FzaC1kNWE4OC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTV0OGg2QHF1aWRjYXNoLWQ1YTg4LmlhbS5nc2VydmljZWFjY291bnQuY29tIiwidWlkIjoiZTYyNDdhYzgtMmFlZC00NGY0LWI3ZTMtNjFiOGJkMWJjOThkIiwiY2xhaW1zIjp7ImlkIjoxMDE0LCJpc19yZXByZXNlbnRhdGl2ZSI6ZmFsc2V9fQ.D1u5i9VYW8tnlnUir2vNurTnUW2pDEH2hlXJYWXsDCcJfuNSEN-uKCrb7FvaRSuO1saVJOZOIY0U0A3dsi6VVEUBe7DKHwzMdJ4jDAI-WKpaXif-gK8YK4AwgJN3ITAHWdfwK7NbISFeos3owxQ2ONB-UpFZO_2wdeNd8nnCuq51RTwoXY2g1VFLyUGe-PpiLLfLniyuPOOTiOYMfo2Cj4BPqVjiZf7Nqf3CfTAn_4YFV7YqtzqcE9V0Lumr3jjD9rYd8htofuV8poby--OR1T_CWA2-ZLUjWDosFYXQYqMSsL84_Gsdsyr8bpiKjeEliD_E8lqLQ26gUiQmO7JJZA&iframe_instance='true'"
                className="h-[1000px] w-[550px]"
                sandbox="allow-same-origin allow-scripts allow-forms allow-camera allow-geolocation"
                allow=""
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
