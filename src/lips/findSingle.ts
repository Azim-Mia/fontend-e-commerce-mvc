import axios from "axios";
const findSingle = async (productId: string, method: string) => {
  try {
    const { data } = await axios.request({
      method: method, // Specify the request method (GET, POST, etc.)
      withCredentials: true,
      url:`http://localhost:3001/products/find/${productId}`,
      headers: {
        Authorization:'azim', // Replace this with actual token or variable
      },
    });

    return {data};
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    return {error}
  }
};
export default findSingle;
