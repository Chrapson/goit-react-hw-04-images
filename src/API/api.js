import axios from 'axios';

const API_KEY = '35926698-1ace8dd5b7966b45102d68e39';
export const PER_PAGE = 12;

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: PER_PAGE,
  key: API_KEY,
};

export const fetchPics = async (searchValue, page) => {
  const response = await axios.get(`/?q=${searchValue}&page=${page}`);

  const filteredResponse = response.data.hits.map(hit => ({
    id: hit.id,
    small: hit.webformatURL,
    large: hit.largeImageURL,
  }));

  return response.data;
};

export default fetchPics;
