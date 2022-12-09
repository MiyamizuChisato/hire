import axios from 'axios'
import { useToast } from 'vue-toastification'

const http = axios.create({
    baseURL: '/hire/api',
    timeout: 50000,
    withCredentials: true,
    headers: {
        'content-type': 'application/json;charset=UTF-8'
    }
})
const beforeRequest = config => {
    const token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    return config
}
const responseSuccess = response => {
    const { code, message } = response.data
    if (code < 0) {
        const toast = useToast()
        toast.error(message)
    }
    return Promise.resolve(response.data)
}
const responseFailed = error => {
    const toast = useToast()
    toast.error("与服务器连接超时")
    return Promise.reject(error)
}
http.interceptors.request.use(beforeRequest)
http.interceptors.response.use(responseSuccess, responseFailed)
export default http