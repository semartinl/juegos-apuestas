import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
import user from '../Controllers/user'

import { useState } from 'react'
export function LogIn(){
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const handleSubmit = (event)=>{
        event.preventDefault()
        
        const obUser = {
            "email": `${gmail}`,
            "password": `${password}`
            } 
        try {
        user.login(obUser).then((response) => console.log(response))
            .catch((error)=>setError("Usuario o contraseña incorrectas"))
            
        } catch (error) {
            console.log(error)
        }
        }
    
    return (
        <main className={styleMain["container-main"]}>
            <form onSubmit={handleSubmit} className={styleForm['main-form']}>
            <h1>INICIAR SESIÓN</h1>
                <label htmlFor="gmail">Correo electrónico</label>            
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={gmail} type="email" name="gmail" id="gmail"  />
                <label htmlFor="password">Contraseña</label>            
                <input className='cicle-border' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" />
                
                <input className='cicle-border' type="submit" value="Iniciar sesión" />
                <h2>{error}</h2>
            </form>
        </main>
    )
}