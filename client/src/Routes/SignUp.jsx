import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
import user from '../Controllers/user'
import { useState } from 'react'
export function SignUp(){
    const [username, setUsername] = useState("")
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (event)=>{
        event.preventDefault()
        const obUser = {
            username:`${username}`,
            email: `${gmail}`,
            password: `${password}`
            }
        try {
            user.register(obUser).then((response) => console.log(response))
            .catch((error)=>setError(error.message))
            
        } catch (error) {
            setError(error)
        }
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
                <label htmlFor="username">Confirmar contraseña</label>            
                <input className='cicle-border' onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} type="password" name="confirm-password" id="confirm-password" required/>
                <input className='cicle-border' type="submit" value="Registrarse" />
                <h2>{error}</h2>
            </form>
        </main>
    )
}