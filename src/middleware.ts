import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import axios from 'axios';
import { NextResponse } from 'next/server';

// Define rutas protegidas
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/business(.*)',
  '/admin(.*)',
  '/profile(.*)',
]);

const merchantRoutes = createRouteMatcher([
  '/dashboard(.*)',
  '/business(.*)',
  '/admin(.*)',
]);
const consumerRoutes = createRouteMatcher(['/profile(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
    const userId = (await auth()).userId;
    const { data: authData } = await axios.get(
      `https://api.clerk.com/v1/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        },
      }
    );

    const userType = authData.public_metadata.userType;

    if (!userType) return NextResponse.redirect('/');
    if (merchantRoutes(req) && userType !== 'MERCHANT') {
      return new NextResponse('No autorizado', { status: 403 });
    }
    if (consumerRoutes(req) && userType !== 'CONSUMER') {
      return new NextResponse('No autorizado', { status: 403 });
    }
  }
  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
