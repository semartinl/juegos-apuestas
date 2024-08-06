import { NavLink } from "react-router-dom"
import BuscaMinasImg from "./../assets/Games/Buscaminas.png"
//IMPORTACIONES DE LOS COMPONENTES PERSONALIZADOS MIOS
import { Header } from "../Components/Header"
import { DescriptionGame } from "../Components/DescriptionGame"
import { BoxReview } from "../Components/BoxReview"
import styleMain from  "./../css/main.module.css"

export function Home (){
    
    const juegos = [{
        id:1,
        title : "Arm westling",
        numberVersus: "1vs1",
        description: "El juego consiste en un combate entre dos jugadores, para ver quien tiene mayor velocidad de apretar teclas",
        image: BuscaMinasImg
    },
    {
        id:2,
        title : "Arm westling",
        numberVersus: "1vs1",
        description: "El juego consiste en un combate entre dos jugadores, para ver quien tiene mayor velocidad de apretar teclas",
        image: "https://i.imgur.com/8Q8jzQD.png"
    }
    ]

    const reviews = [{
        id:1,
        username: "Cristina Vaquerizo",
        age: 22,
        review: "Esta página web es increible. Me ayuda a ser más competitiva",
        profileImg: `/src/assets/user-solid.svg`
    },
    {
        id:2,
        username: "Cristina Vaquerizo",
        age: 22,
        review: "Esta página web es increible. Me ayuda a ser más competitiva",
        profileImg: `/src/assets/user-solid.svg`
    },
    {
        id:3,
        username: "Cristina Vaquerizo",
        age: 22,
        review: "Esta página web es increible. Me ayuda a ser más competitiva",
        profileImg: `/src/assets/user-solid.svg`
    },
    {
        id:3,
        username: "Cristina Vaquerizo",
        age: 22,
        review: "Esta página web es increible. Me ayuda a ser más competitiva",
        profileImg: `/src/assets/user-solid.svg`
    },
    {
        id:3,
        username: "Cristina Vaquerizo",
        age: 22,
        review: "Esta página web es increible. Me ayuda a ser más competitiva",
        profileImg: `/src/assets/user-solid.svg`
    },]
    return (
        <>
        
        <main className={styleMain["container-main"]}>
            <section className={styleMain["container-img-background"]}>
                <h1>WELCOME TO I´M BETTER</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus repudiandae, numquam velit molestias debitis tenetur ipsum eligendi mollitia. Vero quod officiis suscipit assumenda porro totam adipisci mollitia facilis aut debitis.</p>
                <button className={"secondary-color-button cicle-border"}><h2>GET STARTED</h2></button>
                
            </section>
            <section className={styleMain["container-lista-juegos"]}>
                <h2>Featured Games</h2>
                {juegos.map((game)=> <DescriptionGame key={game.id} game={game}/>)}
            </section>

                <h2>Testimonials</h2>
            <section className={styleMain["container-lista-reviews"]}>
                {reviews.map((review) => <BoxReview key={review.id} review={review} />)}
            </section>

        </main>
        </>
    )
}