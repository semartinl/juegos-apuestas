import instance from './config-axios'
import varGlobales from './constantes'

export const auth = {
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
        const response = await instance.post(`/register`, user/* , {'Access-Control-Allow-Origin' : '*'} */)
        return response.data;
    },
        login: async (user)=>{
        
        const response = await instance.post(`/login`,user/* ,{'Access-Control-Allow-Origin' : '*'} */)
            return response.data;
    },
    logout: async ()=>{
        const response = await instance.post(`/logout`/* ,{'Access-Control-Allow-Origin' : '*'} */)
        return response;
    },
    verifyToken: async ()=>{
        const response = await instance.get('/verify')
        return response.data;
    }

}


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
