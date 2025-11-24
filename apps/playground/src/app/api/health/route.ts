import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Welcome to the Anonymization API',
    version: '1.0.0',
    status: 'healthy'
  })
}
