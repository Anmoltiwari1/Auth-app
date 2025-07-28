import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {
  const path=request.nextUrl.pathname;

  const isPublicPath=path=== '/login' || path==='/signup'

  const token=request.cookies.get('token')?.value || ''

  //means if you are logged in then directly go to login page
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/',request.nextUrl));
  }

  if(!isPublicPath && !token){
     return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
//This part is basicaly for which we have to write the middleware
export const config = {
  matcher:[
    '/',
    '/profile',
    '/login',
    '/signup'
  ],
};
