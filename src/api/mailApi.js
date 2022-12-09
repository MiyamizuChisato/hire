import http from '../utils/http.js'

const BASE_PATH = '/email'
export const sendVerifyCode = (email) => {
    return http.get(`${BASE_PATH}/verify/${email}`)
}
