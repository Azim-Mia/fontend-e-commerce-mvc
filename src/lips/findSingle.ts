import axios from "axios";

const findSingle = async (url: string, method: string) => {
  try {
    const { data } = await axios.request({
      method: method, // Specify the request method (GET, POST, etc.)
      withCredentials: true,
      url: url,
      headers: {
        Authorization: "your-auth-token", // Replace this with actual token or variable
      },
    });

    return {data};
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
    return {error}
  }
};
