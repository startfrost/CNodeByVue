import axios from 'axios';

const requestInstance = axios.create({
    baseURL: "https://cnodejs.org/api/v1",
    timeout: 5000
});

export default requestInstance;