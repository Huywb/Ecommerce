import axios from 'axios'

export const AxiosHttp = axios.create({
    baseURL: 'http://localhost:9999/api/v1',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
})
