import { NextResponse } from 'next/server'

export function middleware(request) {
  // Check if the request is for admin routes (but exclude login page)
  if (request.nextUrl.pathname.startsWith('/admin') && request.nextUrl.pathname !== '/admin/login') {
    // Get the token from cookies
    const token = request.cookies.get('admin-token')?.value
    
    // If no token, redirect to login
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
    
    // Verify the token (simple check for demo - in production, use proper JWT verification)
    try {
      const decoded = JSON.parse(Buffer.from(token, 'base64').toString())
      const currentTime = Date.now()
      
      // Check if token is expired (24 hours)
      if (currentTime > decoded.expiry) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
      }
      
      // Token is valid, allow access
      return NextResponse.next()
    } catch (error) {
      // Invalid token, redirect to login
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  // Allow access to non-admin routes and login page
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/((?!login).)*',
  ]
}
