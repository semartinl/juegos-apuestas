import styleMain from './../css/main.module.css'
export function SignUp(){
    const [username, setUsername] = useState("")
    const [gmail, setGmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    return (
        <main className={styleMain["container-main"]}>
            <form action="/login" className={styleForm['main-form']}>
            <h1>INICIAR SESIÓN</h1>
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={username} type="text" name="username" id="username"  />
                <input className='cicle-border' onChange={(e)=>setGmail(e.target.value)} value={gmail} type="email" name="gmail" id="gmail"  />
                <input className='cicle-border' onChange={(e)=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" />
                <input className='cicle-border' type="submit" value="Iniciar sesión" />
            </form>
        </main>
    )
}