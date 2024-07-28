import { NavLink } from "react-router-dom"
import { Header } from "../Components/Header"
import "./../css/main.css"
export function Home (){
    return (
        <>
        <Header/>
        <main className="container-main">

            <NavLink >HOLA</NavLink>
        </main>
        </>
    )
}