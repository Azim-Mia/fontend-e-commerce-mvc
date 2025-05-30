const getItem =async(url)=>{
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Cookie: 'sessionId=your-session-id; userToken=abc123;', // Replace with your actual cookie values
    },
    next: {
      revalidate: 60, // ISR: revalidate every 60 seconds
    },
    cache: 'force-cache',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
const data =await res.json();
  return data;
}
export default getItem;
