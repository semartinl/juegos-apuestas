const varGlobales = {
    request: (user)=>{
            return {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*'
                    },
                    body: JSON.stringify(user),
                    }
},
    URLAPI: "http://localhost:5000/api",
    urlOrigen : "http://localhost:5173"

}
export default varGlobales;