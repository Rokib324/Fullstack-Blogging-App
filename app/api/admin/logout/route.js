import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    })

    // Clear the admin token cookie
    response.cookies.set('admin-token', '', {
      path: '/',
      expires: new Date(0)
    })

    return response
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Logout failed'
    }, { status: 500 })
  }
}
