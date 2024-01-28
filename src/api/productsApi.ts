import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const productsApi = {
    getAllProducts: async () => {
        const response = await axios.get(`${API_URL}/products/all`);
        return response.data;
    }
}

export default productsApi;