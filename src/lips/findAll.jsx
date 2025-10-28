import axios from 'axios'
const findAll = async (apiUrl, caller, option = {}) => {
  const url = new URL(apiUrl);

  // Corrected template literals
  console.log(`[${caller}] fetching ${url.pathname} started`);

  const startTime = performance.now();
  const response = await fetch(apiUrl, option);
  const endTime = performance.now();
  const duration = (endTime - startTime).toFixed(2);

  if (!response.ok) {
    console.log(`fetch url ${url.pathname} failed`);
    throw new Error(`[${caller}] failed to fetch ${url.pathname}`);
  }

  const data = await response.json();
  console.log(`[${caller}] fetching ${url.pathname} completed in ${duration}ms`);

  return { data };
};

export default findAll;
