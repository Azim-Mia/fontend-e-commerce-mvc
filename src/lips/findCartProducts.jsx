import axios from 'axios';
const findCartProducts = async()=>{
  try{
    const requestId = await axios.get('http://localhost:3000/api/requestHeaders');
      const existsId = requestId.headers['x-card-session-id'];
    let carts =[];
    const response = await axios.request({
            method: 'get', // Specify the request method (GET, POST, etc.)
      withCredentials: true,
      url:'http://localhost:3001/carts/me',
      headers: {
        'x-card-session-id': existsId || 'null', // Replace this with actual token or variable
      }
      });
 const items = response.data.items;
items?.map((item)=>{
  
})
  }catch(error){
    console.log(error)
    return {error}
  }
}
export default findCartProducts;