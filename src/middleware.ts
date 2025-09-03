import type {NextRequest} from 'next/server'
import {NextResponse} from 'next/server'
import {cookies} from "next/headers";


export async function middleware(request: NextRequest) {

  const cookieStore = await cookies()
  const getCookie = cookieStore.get("access_token")?.value

  if (!getCookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/calendar/:path*',
}