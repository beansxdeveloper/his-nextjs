import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicPaths = ['/login'];

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth_token');
  const isPublicPath = publicPaths.includes(request.nextUrl.pathname);

  // If trying to access protected route without auth
  if (!authToken && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If trying to access login page with auth
  if (authToken && isPublicPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};