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
}}
export default varGlobales;