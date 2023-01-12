const fetchToken = async (url, method = 'GET') => {
  const response = await fetch(url, { method });
  const json = await response.json();
  return json;
};

export default fetchToken;
