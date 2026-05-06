const requestApi = async (apiUrl, caller, option = {}) => {
 try{
   const url = new URL(apiUrl);

  console.log(`[${caller}] fetching ${url.pathname} started`);

  const startTime = performance.now();

  // ✅ Always include cookies
  const response = await fetch(apiUrl, {
    ...option,
    withCredentials:true,
    credentials: "include", // send cookies cross-origin
    headers: {
      "Content-Type": "application/json",
      ...(option.headers || {}),
    },
  });

  const endTime = performance.now();
  const duration = (endTime - startTime).toFixed(2);

  if (!response.ok) {
    console.error(`[${caller}] failed to fetch ${url.pathname}`);
    throw new Error(`[${caller}] failed to fetch ${url.pathname}`);
  }

  const data = await response.json();
  console.log(`[${caller}] fetching ${url.pathname} completed in ${duration}ms`);

  return { data };
 }catch(error){
  console.log(error)
  return {error}
 }
  
};

export default requestApi;
