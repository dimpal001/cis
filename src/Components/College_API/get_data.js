import axios from 'axios';

export const fetchColleges = async () => {
  const response = await axios.get('https://cis-api.onrender.com/api/colleges');
  return response.data;
};