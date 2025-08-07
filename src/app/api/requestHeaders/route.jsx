// route.jsx
import { cookies } from 'next/headers';

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

export async function POST(request) {
  const data = await request.json();
  const expire = new Date(Date.now() + 1200 * 1000);
  const cookieStore = cookies();

  cookieStore.set('sessionId', data.sessionId, {
    expires: expire,
    httpOnly: true,
  });

  return Response.json({ message: 'successful' });
}
