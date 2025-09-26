import axios from "axios";

const addToCartProduct = async (url, method, body,sessionId) => {
  try {
    const  { data } = await axios.request({
      method,
      withCredentials: true,
      url,
      data: body,
      headers: {
        'x-card-session-id': sessionId || 'null',
      },
    });
    return   { data } ;
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { error: error.response?.data || "An error occurred" }; // Return structured error
  }
};

export default addToCartProduct;
