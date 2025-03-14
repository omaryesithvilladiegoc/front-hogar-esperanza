import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (request.nextUrl.pathname.startsWith("/login") && token !== undefined) {
    return NextResponse.redirect(new URL("/home-admin", request.url));
  }

  if (
    request.nextUrl.pathname.startsWith("/home-admin") &&
    token === undefined
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/login", "/home-admin"],
};
