import axios from 'axios'
const findAll = async (apiUrl, caller, option = {}) => {
try{
  const url = new URL(apiUrl);

  // Corrected template literals
  console.log(`[${caller}] fetching ${url.pathname} started`);

  const startTime = performance.now();

//fetch to data call api
  const response = await fetch(apiUrl, option);

  const endTime = performance.now();
  const duration = (endTime - startTime).toFixed(2);

  if (!response.ok) {
    console.log(`fetch url ${url.pathname} failed`);
    throw new Error(`[${caller}] failed to fetch ${url.pathname}`);
  }

  const data = await response.json();
  console.log(`[${caller}] fetching data ${url.pathname} completed in ${duration}ms`);

  return { data };
}catch(error){
  console.log(error.message)
  return {error}
}
};

export default findAll;
