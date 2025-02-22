import axios from 'axios';
const findSingle = async(url, method)=>{
  try{
    const {data} =await axios({
  method: method, //you can set what request you want to be
 withCredentials: true,
  url: url,
  headers: {
    Authorization: ''
  }
})
return {data};
  }catch(error){
    return {error}
  }
}
export default findSingle;