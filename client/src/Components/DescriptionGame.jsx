import styleMain from "./../css/main.module.css"
export function DescriptionGame({game}){
    return (
        <div className={styleMain["container-game"]}>
            <div className={styleMain["description-game"]}>
                <h3><span className={styleMain["versus"]}>{game.numberVersus}</span> {game.title}</h3>
                <p>{game.description}</p>
            </div>
            <img className={styleMain["img-game"] } src={game.image} alt={`Imagen del juego de ${game.title}`} />
        </div>
    )
}