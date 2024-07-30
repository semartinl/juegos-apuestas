import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
import user from '../Controllers/user'
import { useState } from 'react'
export function LogIn(){
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event)=>{
        event.preventDefault()
        const obUser = {
            "email": `${gmail}`,
            "password": `${password}`
            }
        
        user.login(obUser).then((response) => console.log(response))
        }
    
    return (
        <main className={styleMain["container-main"]}>
            <form onSubmit={handleSubmit} className={styleForm['main-form']}>
            <h1>INICIAR SESIÓN</h1>
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={gmail} type="email" name="gmail" id="gmail"  />
                <input className='cicle-border' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" />
                <input className='cicle-border' type="submit" value="Iniciar sesión" />
            </form>
        </main>
    )
}