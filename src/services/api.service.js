import axios from 'axios';

const URL = process.env.LIFT_API_URL;

export default axios.create({
    baseURL: URL,
    timeout: 10000,
});
