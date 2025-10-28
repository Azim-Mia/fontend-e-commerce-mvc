import axios from 'axios';

const findAllProducts = async (url, caller, ...rest) => {
  // Destructure rest parameters for flexibility (optional extra config)
  const [extraConfig = {}] = rest;

  try {
    const { data } = await axios.request({
      url,
      method: "GET",
      withCredentials: true,      // ✅ send cookies
      credentials: "include",     // ✅ legacy for some setups
      ...extraConfig,             // any additional Axios options
    });
    return { data };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { error: error.response?.data || "An error occurred" };
  }
};

export default findAllProducts;
