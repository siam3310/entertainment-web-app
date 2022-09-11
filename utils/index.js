import axios from 'axios';

// Slice array
export const sliceArray = (array, limit) => {
  const arr = array || [];
  return arr.slice(0, limit);
};

// Fetcher for SWR
export const fetcher = (url) => axios.get(url).then((res) => res.data);
