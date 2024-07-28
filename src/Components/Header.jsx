import { NavLink } from "react-router-dom";
import "./../css/header.css"
import userIcon from "./../assets/user-solid.svg"

export function Header(){
    return (
        <>
        <header className="barra-navegacion-top"> 
                
                
                   
                    <NavLink className={"logo-header"} to="/" target="_blank" rel="noopener noreferrer">
                        <img src="" alt="Logo de la app"/>
                    
                    </NavLink>
                    
               
                
                    <nav className="content-nav-header">

                        <NavLink className={"button-nav-header"} to={"/games"} >Games</NavLink>
                        <NavLink className={"button-nav-header"} to={"/leaderboard"} > Leaderboard</NavLink>
                        <NavLink className={"button-nav-header signup-button"} to={"/signup"} > Sign up</NavLink>
                        <NavLink className={"button-nav-header"} to={"/login"} > Log in</NavLink>
                        <NavLink className={"icons-header"} to="/user" target="_blank" rel="noopener noreferrer">
                            <img src={userIcon} alt="Foto de perfil" />
                        </NavLink>
                    </nav>
                

                
            </header>
        </>
    )
}