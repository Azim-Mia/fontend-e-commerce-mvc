import axios from 'axios';
const findSingle = async(url:unknown, method:unknown)=>{
  try{
    const {data} =await axios({
  method: method, //you can set what request you want to be
 withCredentials: true,
  url: url,
  headers: {
    Authorization: '' as unknown
  }
})
return {data};
  }catch(error:unknown){
    return {error}
  }
}
export default findSingle;