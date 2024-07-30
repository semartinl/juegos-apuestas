
const user = {
    login: async (user)=>{
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
                },
                body: JSON.stringify(user),
                });
                //const data = await response.json();
                // const data =response;
            return response;
    },
    register: async (user)=>{
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*'
                },
                body: JSON.stringify(user),
                });
                //const data = await response.json();
                // const data =response;
            return response;
    }
}
export default user;