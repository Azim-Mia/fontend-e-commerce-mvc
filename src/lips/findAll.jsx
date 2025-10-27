import axios from 'axios'
const findAll = async(url)=>{
  try{
    const { data }  = await axios.request(url,{
      method:'GET',
      withCredentials: true,
    });
    return { data } 
  }catch(error){
    return {error}
  }
}
export default findAll;
/*
const findAll = async(apiUrl, caller, option = {}) =>{
const url = new.URL(apiUrl);
console.log('[${caller}] fetching $(url.pathname) started');
const startTime = performance.now();
const response = await fetch (apiUrl, option);
const endTime = performance.now();
const duration = (endTime - startTime).toFixed(2);

if(!response.ok){
  console.log(`fatch url ${url.pathname) failed`);
throw new Error(`[${caller}] fail to fetch ${url.pathname}`);
}
const data = await response.json();
return { data };
}
export default findAll;
*/