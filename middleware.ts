import { authMiddleware, } from "@clerk/nextjs/server";
 
// const protectedRoute = createRouteMatcher([

// ])
export default authMiddleware({
  // Allow signed out users to access the specified routes:
  publicRoutes: ['/sign-in'],
});
 
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/(api|trpc)(.*)"
  ]
};