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