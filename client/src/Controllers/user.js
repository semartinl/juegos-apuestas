import axios, { AxiosHeaders } from 'axios'
import varGlobales from './constantes'
const urlApi = varGlobales.URLAPI
const user = {
    // login: async (user)=>{
    //     const response = await fetch('http://localhost:5000/api/login', {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Access-Control-Allow-Origin' : '*'
    //             },
    //             body: user,
    //             });
    //             const data = await response.json();
    //             // const data =response;
    //         return data;
    // },
    // register: async (user)=>{
    //     const response = await fetch('http://localhost:5000/api/register', {
    //         method: 'POST',
    //         mode: 'no-cors',
    //         headers: {
    //              'Content-Type': 'application/json'
    //             // 'Access-Control-Allow-Origin' : '*'
    //             },
    //             body:JSON.stringify(user),
    //             });
    //             const data = await response.json();
    //             // const data =response;
    //         return data;
    // },
    register: async (user)=>{
        const response = await axios.post(`${urlApi}/register`, user, {'Access-Control-Allow-Origin' : '*'})
        return response.data;
    },
        login: async (user)=>{
        
        const response = await axios.post(`${urlApi}/login`,user,{'Access-Control-Allow-Origin' : '*'})
            return response.data;
    }
}
export default user;

// export const userAxios = {
    // login: async (user)=>{
    //     const header = new AxiosHeaders()
    //     const response = await axios.post(`${urlApi}/login`,user,{'Access-Control-Allow-Origin' : '*'})
    //         return response.data;
    // },
//     register: async (user)=>{
//         const response = await fetch('http://localhost:5000/api/login', {
//             method: 'POST',
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin' : '*'
//                 },
//                 body: JSON.stringify(user),
//                 });
//                 //const data = await response.json();
//                 // const data =response;
//             return response;
//     }
// }
