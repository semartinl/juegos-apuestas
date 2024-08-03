import { createContext, useContext, useEffect, useState } from "react"
import varGlobales from "../Controllers/constantes"
import { auth } from "../Controllers/user"
import { useNavigate } from "react-router"



export const AuthContext = createContext({})





export function AuthProvider({children}) {
    
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [authErrors, setAuthErrors] = useState([])
    const [token, setToken] = useState(null)

    useEffect(()=>{
        if(authErrors.length > 0){
            const timer = setTimeout(() => {
                setAuthErrors([])
                }, 5000);
            return ()=> clearTimeout(timer)
        }
    },[authErrors])
    const signup = async (user)=>{
        try {
            
            const response = await auth.register(user)
            console.log(response)
            setUser(response)
            setIsAuthenticated(true)
            setAuthErrors([])
            
            window.location.href = varGlobales.urlOrigen
            
        }   
        catch (error) {
            console.log(error.response.data)

            setAuthErrors(error.response.data.message)
        }
        
        
    }
    const login = async (user)=>{
        try {
            
            const response = await auth.login(user)
            console.log(response)
            setUser(response)
            setIsAuthenticated(true)
        }   
        catch (error) {
            console.log(error.response.message)
            
            setAuthErrors(error.response.data.message)
        }
    }
    return (
        <AuthContext.Provider value={{
            user,
            signup,
            login,
            isAuthenticated,
            authErrors,
            setAuthErrors
        }}>
            {children}
        </AuthContext.Provider>
    )
}