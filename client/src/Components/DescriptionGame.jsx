import { useNavigate } from "react-router"
import styleMain from "./../css/main.module.css"
export function DescriptionGame({game}){
    const navigate = useNavigate()
    return (
        <div className={styleMain["container-game"]}>
            <div className={styleMain["description-game"]}>
                <h3><span className={styleMain["versus"]}>{game.numberVersus}</span> {game.title}</h3>
                <p>{game.description}</p>
                <button className={"secondary-color-button cicle-border"} onClick={()=>navigate(`/games/${game.id}`)}>Play now</button>
            </div>
            <img className={styleMain["img-game"] } src={game.image} alt={`Imagen del juego de ${game.title}`} />
        </div>
    )
}