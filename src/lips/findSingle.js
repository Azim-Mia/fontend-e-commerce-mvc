import axios from "axios";

const findSingle = async (url, method) => {
  try {
    const { data } = await axios.request({
      method,
      withCredentials: true,
      url,
      headers: {
        Authorization: 'azim', // Use dynamic value in real apps
      },
    });

    return { data };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error }; // no unreachable code
  }
};

export default findSingle;
