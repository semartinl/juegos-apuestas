import { NavLink } from "react-router-dom";
import "./../css/header.css"
import userIcon from "./../assets/user-solid.svg"
import { useAuth } from "../hooks/useAuth";

export function Header(){
    const {isAuthenticated, user, logout} = useAuth()

   
    return (
        <>
        <header className="barra-navegacion-top"> 
                
                
                   
                    <NavLink className={"logo-header"} to="/" rel="noopener noreferrer">
                        <img src="" alt="Logo de la app"/>
                    
                    </NavLink>
                    
                
                    <nav className="content-nav-header">

                        <NavLink className={"button-nav-header"} to={"/games"} >Games</NavLink>
                        <NavLink className={"button-nav-header"} to={"/leaderboard"} > Leaderboard</NavLink>
               {!isAuthenticated? 
                        <>
                        
                        <NavLink className={"button-nav-header signup-button"} to={"/signup"} > Sign up</NavLink>
                        <NavLink className={"button-nav-header"} to={"/login"} > Log in</NavLink>
                        </>
                        :
                        <>
                        
                        <NavLink className={"icons-header"} to="/user" rel="noopener noreferrer">
                            <img src={userIcon} alt="Foto de perfil" />
                        </NavLink>
                        <button className={"button-nav-header"} onClick={logout} > Log out</button>
                        </>

               }
                    </nav>
                

                
            </header>
        </>
    )
}