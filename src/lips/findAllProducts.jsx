'use client';
import axios from 'axios'
const findAllProducts = async(url)=>{
  const [productDataDB, setProductDataDB] = useState([]);
  try{
    const {data} = await axios.get(url);
    return {data}
  }catch(error){
    return {error}
  }
}
export default findAllProducts;