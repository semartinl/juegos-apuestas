import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
import { auth } from '../Controllers/user'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export function SignUp(){
    const [username, setUsername] = useState("")
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const { isAuthenticated, signup, authErrors, setAuthErrors } = useAuth()

    const handleSubmit = async (event)=>{
        event.preventDefault()
        
            
            
            const obUser = {
                username:`${username}`,
                email: `${gmail}`,
                password: `${password}`
            }
            try {
                // auth.register(obUser).then((response) => console.log(response))
                // .catch((error)=>setError(error.message))
                await signup(obUser)
                
                
            } catch (error) {
                setError(error.message)
            }
            if(isAuthenticated)
                navigate("/")
        
    }
    
    return (
        <main className={styleMain["container-main"]}>
            <form onSubmit={handleSubmit} className={styleForm['main-form']}>
            <h1>Regístrate</h1>
                <label htmlFor="username">Nombre de usuario</label>            
                <input className='cicle-border' onChange={(e)=>setUsername(e.target.value)} value={username} type="text" name="username" id="username"  required/>
                <label htmlFor="gmail">Correo electrónico</label>            
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={gmail} type="email" name="gmail" id="gmail"  required/>
                <label htmlFor="password">Contraseña</label>            
                <input className='cicle-border' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" required/>
                <input className='cicle-border' type="submit" value="Registrarse" />
                
                {authErrors && authErrors.map((err, i) => <h2 key={i}>{err}</h2>)}
            </form>
        </main>
    )
}