import axios from 'axios'
import varGlobales from './constantes'
const instance = axios.create({
    baseURL: `${varGlobales.URLAPI}`,
    withCredentials:true
})
export default instance;
