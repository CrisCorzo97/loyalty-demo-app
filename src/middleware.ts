import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define rutas protegidas
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/business(.*)',
  '/admin(.*)',
  '/profile(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  // Proteger rutas que requieren autenticación
  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
