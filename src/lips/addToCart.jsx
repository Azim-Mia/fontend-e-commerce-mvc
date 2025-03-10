import axios from "axios";
const addToCart = async (url, method,sessionId) => {
  try {
    const { data } = await axios.request({
      method: method, // Specify the request method (GET, POST, etc.)
      withCredentials: true,
      url: url,
      headers: {
        'x-card-session-id':sessionId || '', // Replace this with actual token or variable
      },
    });

    return {data};
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    return {error}
  }
};
export default addToCart;
