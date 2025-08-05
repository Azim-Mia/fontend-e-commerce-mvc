import axios from "axios";

const findSingle = async (url: string, method: string) => {
  try {
    const { data } = await axios.request({
      method: method,
      withCredentials: true,
      url: url,
      headers: {
        Authorization: 'azim', // Replace with dynamic token if needed
      },
    });
    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error }; // OR: throw error;
  }
};

export default findSingle;
