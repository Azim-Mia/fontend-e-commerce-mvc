const request = async (url, caller, method, ...rest) => {
  const httpMethod = method.toUpperCase();
  const options = { method: httpMethod, headers: {} };

  // If POST, PUT, DELETE, attach body from first rest parameter
  if (['POST', 'PUT', 'DELETE'].includes(httpMethod) && rest[0]) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(rest[0]);
  }

  // If second rest parameter exists, merge as custom headers
  if (rest[1]) {
    options.headers = { ...options.headers, ...rest[1] };
  }

  try {
    const response = await fetch(url, options);

    // Check if response has JSON
    let data;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      data = await response.text();
    }

    return { data };
  } catch (error) {
    console.error('Request error:', error);
    return { error };
  }
};

export default request;
