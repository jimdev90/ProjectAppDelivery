import axios from "axios"

const ApiDelivery = axios.create({
    baseURL: 'http://172.28.248.221:3000/api',
    headers: {
        'Content-Type' : 'application/json'
    }
});

export { ApiDelivery };