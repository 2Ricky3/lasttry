// frontend/src/services/propertyService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/properties';

export const getProperties = async () => {
  return await axios.get(API_URL);
};

export const getProperty = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const createProperty = async (property) => {
  return await axios.post(API_URL, property);
};

export const updateProperty = async (id, property) => {
  return await axios.put(`${API_URL}/${id}`, property);
};

export const deleteProperty = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
