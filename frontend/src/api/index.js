import axios from 'axios'
import qs from 'qs'

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})
export default {
  login: (params) => {
    return instance.post('/login', qs.stringify(params))
  },
  getCount: () => {
    return instance.get('/getTotalUsers')
  },
  getQuestionaires: (params) => {
    return instance.get('/getQuestionaires', { params: params })
  },
  checkNameUseable: (params) => {
    return instance.get('/checkUserName', { params: params })
  },
  register: (params) => {
    return instance.post('/register', qs.stringify(params))
  }
}
