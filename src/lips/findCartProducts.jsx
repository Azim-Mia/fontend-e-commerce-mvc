import axios from 'axios';
const findCartProducts = async () => {
  try {
    let carts = [];

    // Fetch session ID
    const requestId = await axios.get('http://localhost:3000/api/requestHeaders');
    const existsId = requestId.headers['x-card-session-id'] || 'null';
        console.log(existsId)
if(existsId !== 'null' ){
    // Fetch cart items
    const response = await axios.get('http://localhost:3001/carts/me', {
      withCredentials: true,
      credentials: "include",  // ✅ cookie যাবে
      headers: { 'x-card-session-id': existsId },
    });
    const items = response.data.items || [];

    // Fetch product details for each cart item using Promise.all
    const productPromises = items.map(async (item) => {
      const { data } = await axios.get(`http://localhost:3001/products/find/${item.productId}`);
      return {
        productId:data.findProduct.productId,
        name:data.findProduct.name,
        price: data.findProduct.price,
        image:data.findProduct.image,
        quantity:item.quantity,
        total:data.findProduct.price * item.quantity,
      };
    });
    // Wait for all product requests to complete
    carts = await Promise.all(productPromises);
}
const subtotal = carts.reduce((acc, item)=>acc + item.total, 0);
    return { carts,subtotal };
  } catch (error) {
    console.error('Error fetching cart products:', error);
    return { error };
  }
};

export default findCartProducts;
