import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/', // Your API base URL
});

export default instance;
          