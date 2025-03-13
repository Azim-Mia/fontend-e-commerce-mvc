import axios from "axios";
const findCart = async (sessionId) => {
  try {
    const { data }   = await axios.request({
      method:'get', // Specify the request method (GET, POST, etc.)
      withCredentials: true,
      url:"http://localhost:3001/carts/me",
      headers: {
        'x-card-session-id':sessionId ||'', // Replace this with actual token or variable
      },
    });

    return { data } ;
  } catch (error) {
    console.error("Error fetching data:", error);
    return {error}
  }
};
export default findCart;
