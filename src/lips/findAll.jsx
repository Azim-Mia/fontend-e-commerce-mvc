import axios from 'axios'
const findAll = async(url)=>{
  try{
    const { data }  = await axios.get(url);
    return { data } 
  }catch(error){
    return {error}
  }
}
export default findAll;