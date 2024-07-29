import styleMain from './../css/main.module.css'
export function LogIn(){
    return (
        <main className={styleMain["container-main"]}>
            <form action="/login">
                <input type="text" name="username" id="username"  />
                <input type="password" name="password" id="password" />
                <input type="submit" value="Iniciar sesión" />
            </form>
        </main>
    )
}