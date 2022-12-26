import axios from 'axios'
const ApiService = axios.create({
 baseURL: '', // backend server url
 withCredentials: true,
 timeout: 12000
})
export default ApiService