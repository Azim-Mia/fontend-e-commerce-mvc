import axios from 'axios';

const findCartProducts = async (url, caller, ...rest) => {
  // Destructure rest parameters
  const [sessionId = null, extraConfig = {}] = rest;

  try {
    console.log(`[${caller}] fetching cart started`);

    // Fetch cart items
    const response = await axios.get(`${url}/carts/me`, {
      withCredentials: true,
      credentials: "include",
      headers: { 'x-card-session-id': sessionId },
      ...extraConfig, // any additional Axios config
    });

    const items = response.data.items || [];

    // Fetch product details for each cart item
    const productPromises = items.map(async (item) => {
      const { data } = await axios.get(`${url}/products/find/${item.productId}`);
      return {
        productId: data.findProduct.productId,
        name: data.findProduct.name,
        price: data.findProduct.price,
        image: data.findProduct.image,
        quantity: item.quantity,
        total: data.findProduct.price * item.quantity,
      };
    });

    const carts = await Promise.all(productPromises);
    const subtotal = carts.reduce((acc, item) => acc + item.total, 0);

    console.log(`[${caller}] fetching cart completed`);
    return { carts, subtotal, sessionId };
  } catch (error) {
    console.error(`[${caller}] Error fetching cart products:`, error);
    return { error: error.response?.data || "An error occurred" };
  }
};

export default findCartProducts;
