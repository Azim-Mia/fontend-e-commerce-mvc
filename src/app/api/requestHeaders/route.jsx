import { cookies } from 'next/headers';
export async function GET(){
  const cookiesRequest =await cookies()
  const session =cookiesRequest.get('sessionId')?.value;
  console.log("session" + session);
  return Response.json({message:"successfull"},{
    headers:{
      'Content-Type':'application/x-www-form-urlencoded',
      'x-card-session-id':session || 'null',
    }
  })
}


export async function POST(request) {
  const data = await request.json();
  console.log(data);
  const expire = new Date(Date.now() + 1200 * 1000); //120 seconds from now
const cookiesRequest =await cookies()
 cookiesRequest.set('sessionId', data.sessionId, {
    expires: expire, 
    httpOnly: true
  });

  return Response.json({ message: "successful" });
}
