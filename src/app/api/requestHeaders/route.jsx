// app/api/requestHeaders/route.ts
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get('sessionId')?.value;
  
  return Response.json(
    { message: 'successful' },
    {
      headers: {
        'Content-Type': 'application/json',
        'x-card-session-id': session || 'null',
      },
    }
  );
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const expire = new Date(Date.now() + 1200 * 1000); // 20 minutes
  const cookieStore = cookies();

  cookieStore.set('sessionId', data.sessionId, {
    expires: expire,
    httpOnly: true,
  });

  return Response.json({ message: 'successful' });
}
