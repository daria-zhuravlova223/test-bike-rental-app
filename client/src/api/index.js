import axios from 'axios';

const url = 'http://localhost:5000/bikes';

export const fetchBikes = () => axios.get(url);
export const createBike = (newBike) => axios.post(url, newBike);
export const updateBikeStatus = (id, updatedBike) => axios.patch(`${url}/${id}`, updatedBike);
export const deleteBike = (id) => axios.delete(`${url}/${id}`);
