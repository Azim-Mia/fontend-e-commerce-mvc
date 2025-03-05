import axios from 'axios'
const findAllProducts = async(url)=>{
  try{
    const {data} = await axios.get(url);
    return {data}
  }catch(error){
    return {error}
  }
}
export default findAllProducts;