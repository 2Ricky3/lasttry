// frontend/src/services/propertyService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getProperties = () => {
  return axios.get(`${API_URL}/properties`);
};

export const getProperty = (id) => {
  return axios.get(`${API_URL}/properties/${id}`);
};
