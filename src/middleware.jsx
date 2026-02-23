import { NextResponse } from 'next/server'

export function middleware(request) {
  const admin = false // এখানে পরে token / cookie চেক করবে

  if (!admin) {
    return NextResponse.redirect(
      new URL('/admin/login', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/deshboard/:path*'],
}
