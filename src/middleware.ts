import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "caraway.au";

const LEGACY_HOSTS = [
  "caraway.com.au",
  "www.caraway.com.au",
  "www.caraway.au",
];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host")?.split(":")[0] ?? "";

  if (LEGACY_HOSTS.includes(hostname)) {
    const url = new URL(
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
      `https://${CANONICAL_HOST}`,
    );
    return NextResponse.redirect(url, { status: 301 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
