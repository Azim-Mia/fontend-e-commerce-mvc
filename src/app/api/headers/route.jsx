import { cookies } from 'next/headers';
export async function GET(){
  const sessionId = cookies().get('sessionId')?.value;
  console.log(sessionId);
  return Response.json({message:"successfull"},{
    headers:{
      'Content-Type':'application/json',
      'x-card-session-id':'',
    }
  })
}


export async function POST(request) {
  const data = await request.json();
  console.log(data);

  const expire = new Date(Date.now() + 10 * 1000); // 10 seconds from now

  cookies().set('sessionId', JSON.stringify(data), {
    expires: expire, 
    httpOnly: true
  });

  return Response.json({ message: "successful" });
}
