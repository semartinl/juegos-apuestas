import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
import { auth } from '../Controllers/user'
import { useAuth } from '../hooks/useAuth'
import { useState } from 'react'
export function LogIn(){
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState([])
    const { login, authErrors } = useAuth()
    const handleSubmit = (event)=>{
        event.preventDefault()
        
        const obUser = {
            "email": `${gmail}`,
            "password": `${password}`
            } 
        try {
             const response = login(obUser)
        } catch (error) {
            console.log(error)
        }
        }
    
    return (
        <main className={styleMain["container-main"]}>
            <form onSubmit={handleSubmit} className={styleForm['main-form']}>
            <h1>INICIAR SESIÓN</h1>
                <label htmlFor="gmail">Correo electrónico</label>
                {}            
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={gmail} type="email" name="gmail" id="gmail"  required/>
                <label htmlFor="password">Contraseña</label>            
                <input className='cicle-border' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" required/>
                
                <input className='cicle-border' type="submit" value="Iniciar sesión" />
                {//authErrors.map((err,index)=> <h2 key={index}>{err}</h2>)
                }
                {
                    <h2>{authErrors}</h2>
                }
            </form>
        </main>
    )
}