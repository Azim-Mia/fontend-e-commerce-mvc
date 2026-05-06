import axios from "axios";

const addToCartProduct = async (url, method, ...rest) => {
  // Destructure rest parameters
  const [body = {}, sessionId = 'null', extraConfig = {}] = rest;

  try {
    const { data } = await axios.request({
      method,
      url,
      data: body,
      withCredentials: true,
      headers: {
        'x-card-session-id': sessionId,
      },
      ...extraConfig, // any additional options
    });
    return { data };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { error: error.response?.data || "An error occurred" };
  }
};

export default addToCartProduct;
