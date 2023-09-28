// import { getDataFromToken } from "./helpers/getDataFromToken";
// import { NextRequest, NextResponse } from "next/server";
// import User from "./models/user";
// import { connect } from "./dbConfig/dbConfig";

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


// connect();

// export function middleware(request: NextRequest) {

//   const path = request.nextUrl.pathname

//     const userId =  getDataFromToken(request);
//     const user = await User.findOne({_id: userId}).select("-password");
    
    
//     if (!user) {
//       return NextResponse.json({ error: "User not found" }, { status: 404 });
//     }
    
//     const isVerify = user.isOutside;

//     console.log('isVerify', isVerify);    
   

//   }






export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // const isPublicPath = path === '/student-login' || path === '/student-signup'

  const token = request.cookies.get('token')?.value || ''

  // if(isPublicPath && token) {
  //   return NextResponse.redirect(new URL('/profile', request.nextUrl))
  // }



  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL('/student-login', request.nextUrl))
  // }
    
}
