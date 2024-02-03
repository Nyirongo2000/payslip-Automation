
// // import Passage from "@passageidentity/passage-node";

// // const passageConfig = {
// //   appID: "XAeztizkxuvpGpx9l9d8B6DU"
// // };

// // // example of passage middleware
// // let passage = new psg(passageConfig);
// // let passageAuthMiddleware = (() => {
// //     return async (req, res, next) => {
// //         try {
// //             let userID = await passage.authenticateRequest(req);
// //             if (userID) {
// //               // user authenticated
// //               res.userID = userID;
// //               next();
// //             }
// //         } catch(e) {
// //             // failed to authenticate
// //             // we recommend returning a 401 or other "unauthorized" behavior
// //             console.log(e);
// //             res.status(401).send('Could not authenticate user!');
// //         }
// //     }
// // })();

// // app.get("/authenticatedRoute", passageAuthMiddleware, async(req, res) => {
// //     let userID = res.userID
// //     // do authenticated things...
// // });

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Passage from "@passageidentity/passage-node";
import { URL } from 'url';


export async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("psg_auth_token")?.value;
  if (!authToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const passage = new Passage({
    appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID!,
  });

  const userID = await passage.validAuthToken(authToken as string);
  if (!userID) {
    return NextResponse.redirect(new URL("/", request.url));
  }


  const { pathname } = new URL(request.url);

  if (pathname === "/login") {
    return NextResponse.redirect(new URL("/portal", request.url));
  } else if (pathname === "/portal/payslips") {
    return NextResponse.redirect(new URL("/portal/payslip/view", request.url));
  }
}



// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/about/:path*", "/blog/:path*"],
};

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import Passage from "@passageidentity/passage-node";

// export async function middleware(request: NextRequest) {
//   const authToken = request.cookies.get("psg_auth_token")?.value;
//   if (!authToken) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   const passage = new Passage({
//     appID: process.env.NEXT_PUBLIC_PASSAGE_APP_ID!,
//   });

//   const userID = await passage.validAuthToken(authToken as string);
//   if (!userID) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Custom logic to handle redirection based on path
//   const { pathname } = new URL(request.url);
//   if (pathname === "/login") {
//     return NextResponse.redirect(new URL("/portal", request.url));
//   } else if (pathname === "/portal/payslips") {
//     return NextResponse.redirect(new URL("/portal/payslip/view", request.url));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/login", "/portal/payslips"],
// };
