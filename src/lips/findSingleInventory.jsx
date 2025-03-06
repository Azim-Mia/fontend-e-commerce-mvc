import axios from "axios";
const findSingleInventory = async (url,method) => {
  try {
    const { data } = await axios.request({
      method: method, // Specify the request method (GET, POST, etc.)
      withCredentials: true,
      url: url,
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
export default findSingleInventory;
