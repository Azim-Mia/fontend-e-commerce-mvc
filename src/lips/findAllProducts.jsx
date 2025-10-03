import axios from 'axios'
const findAllProducts = async(url)=>{
  try{
    const   { data }  = await axios.request(url,{
      method: "GET",
  credentials: "include",  // ✅ cookie যাবে
  withCredentials: true,
    });
    return   { data } 
  }catch(error){
    return {error}
  }
}
export default findAllProducts;