import styleMain from './../css/main.module.css'
import styleForm from './../css/form.module.css'
export function LogIn(){
    return (
        <main className={styleMain["container-main"]}>
            <form action="/login" className={styleForm['main-form']}>
            <h1>INICIAR SESIÓN</h1>
                <input className='cicle-border' type="text" name="username" id="username"  />
                <input className='cicle-border' type="password" name="password" id="password" />
                <input className='cicle-border' type="submit" value="Iniciar sesión" />
            </form>
        </main>
    )
}