// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Simple validation – ensure required fields exist
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ success: false, error: 'Invalid payload' }, { status: 400 });
    }
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
