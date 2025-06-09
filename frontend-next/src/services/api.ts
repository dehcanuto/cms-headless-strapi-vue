import axios from 'axios';

const api = axios.create({ baseURL: process.env.NEXT_STRAPI_API_URL });

export default api;