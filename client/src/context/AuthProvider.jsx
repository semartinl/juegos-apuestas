import { createContext, useContext, useEffect, useState } from "react"
import varGlobales from "../Controllers/constantes"
import { auth } from "../Controllers/user"
import { useNavigate } from "react-router"
import Cookies from 'js-cookies'


export const AuthContext = createContext({})





export function AuthProvider({children}) {
    
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authErrors, setAuthErrors] = useState([])
    

    useEffect(()=>{
        if(authErrors.lenght > 0){
            const timer = setTimeout(() => {
                setAuthErrors([])
                }, 5000);
            return ()=> clearTimeout(timer)
        }
    },[authErrors])
    useEffect(()=>{
        async function checkLogin (){
            const token = Cookies.getItem("token")

            if(token){
                try {
                    const res = await auth.verifyToken()
                    console.log(res)
                    if(res){
                        setIsAuthenticated(true)
                        setUser(res)
                    }else setIsAuthenticated(false)
                    
                } catch (error) {
                    setIsAuthenticated(false)
                    setUser(null)
                }
            }
        }
        checkLogin()
    },[])
    const signup = async (user)=>{
        try {
            
            const response = await auth.register(user)
            console.log(response)
            setUser(response)
            setIsAuthenticated(true)
            setAuthErrors([])
            
            // navigate("/")
            //window.history.go(-1) //Funcion que devuelve a la pagina en la que se encontraba antes de llamar a la pagina de registrarse
            window.location.replace("/") //Navega hasta la página inicial

            
        }   
        catch (error) {
            console.log(error)

            setAuthErrors(error.response.data.message)
        }
        
        
    }
    const login = async (user)=>{
        try {
            
            const response = await auth.login(user)
            console.log(response)
            setUser(response)
            setIsAuthenticated(true)
            setAuthErrors([])
            //navigate("/")
            
            //window.history.go(-1) //Funcion que devuelve a la pagina en la que se encontraba antes de llamar a la pagina de iniciar sesión
            //window.location.href = varGlobales.urlOrigen
            window.location.replace("/")
            
            
        }   
        catch (error) {
            console.log(error.response.data)
            
            setAuthErrors(error.response.data.message)
        }
    }

    const handleLogOut = async ()=>{
        try {
            await auth.logout()
            setUser(null)
            setIsAuthenticated(false)
            window.location.replace("/")
        }
        catch(error){
            setAuthErrors(["No ha sido posible cerrar sesión"])
        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            signup,
            login,
            isAuthenticated,
            authErrors,
            setAuthErrors,
            logout:handleLogOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}