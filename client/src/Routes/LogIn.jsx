import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
import { useState } from 'react'
export function LogIn(){
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = ()=>{

    }
    return (
        <main className={styleMain["container-main"]}>
            <form action="/login" className={styleForm['main-form']}>
            <h1>INICIAR SESIÓN</h1>
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={gmail} type="text" name="username" id="username"  />
                <input className='cicle-border' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" />
                <input className='cicle-border' type="submit" value="Iniciar sesión" />
            </form>
        </main>
    )
}