import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { username, password } = await request.json()

    // Get admin credentials from environment variables
    const adminUsername = process.env.ADMIN_USERNAME || 'admin'
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'

    // Check credentials
    if (username === adminUsername && password === adminPassword) {
      // Create a simple token (in production, use proper JWT)
      const tokenData = {
        username: adminUsername,
        loginTime: Date.now(),
        expiry: Date.now() + (24 * 60 * 60 * 1000) // 24 hours
      }
      
      const token = Buffer.from(JSON.stringify(tokenData)).toString('base64')

      return NextResponse.json({
        success: true,
        message: 'Login successful',
        token: token
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid credentials'
      }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Login failed'
    }, { status: 500 })
  }
}
