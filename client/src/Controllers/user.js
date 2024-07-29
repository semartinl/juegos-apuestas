const user = {
    login: async function (user){
        const response = await fetch('localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY',
                },
                body: JSON.stringify(user),
                });
                const data = await response.json();
            return data;
    }
}
export default user;