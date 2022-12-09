import http from '../utils/http.js'

const BASE_PATH = '/user'
export const userLogin = (user) => {
    return http.post(`${BASE_PATH}/login`, user)
}
export const userRegister = (user) => {
    return http.post(`${BASE_PATH}/register`, user)
}
export const userGetById = (id) => {
    return http.get(`${BASE_PATH}/get/${id}`)
}
export const userUpdate = (user) => {
    return http.put(`${BASE_PATH}/update/`, user)
}
export const userUpdateResume = (data) => {
    return http.put(`${BASE_PATH}/update/resume`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}
export const userUpdateAvatar = (data) => {
    return http.put(`${BASE_PATH}/update/avatar`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
    })
}