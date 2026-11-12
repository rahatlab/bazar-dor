import { NextResponse } from "next/server";

// Protected routes — cookie thakle-i age redirect (rendering-er age 307),
// page-e getSession diye real validation hocche (expired/invalid cookie case)
const PROTECTED = ["/product", "/profile"];

export function proxy(request) {
  const path = request.nextUrl.pathname;
  const isProtected = PROTECTED.some(
    (p) => path === p || path.startsWith(`${p}/`)
  );
  if (!isProtected) return NextResponse.next();

  const hasSession =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("__Secure-better-auth.session_token");
  if (hasSession) return NextResponse.next();

  const url = new URL("/signin", request.url);
  url.searchParams.set("reason", "protected");
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/product/:path*", "/profile/:path*"],
};
