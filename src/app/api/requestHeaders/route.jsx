export const dynamic = "force-dynamic";

import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const session = cookieStore.get("sessionId")?.value || null;

  return new Response(
    JSON.stringify({ message: "successful" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "x-card-session-id": session,
      },
    }
  );
}

export async function POST(request) {
  const data = await request.json();

  const expire = new Date(Date.now() + 20 * 60 * 1000); // 20 minutes
  const cookieStore = cookies();

  cookieStore.set("sessionId", data.sessionId, {
    expires: expire,
    httpOnly: true,
  });

  return new Response(
    JSON.stringify({ message: "successful" }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
