import styleMain from "./../css/main.module.css"
export function BoxReview({review}){
    return(
        <div className={styleMain["container-review"]}>
            <img className="icons-header" src={review.profileImg} alt={`Image de perfil de ${review.username}`} />
            <q className="review-quote"> {review.review} </q>
            <p className={styleMain["versus"]}>{review.username} , {review.age}</p>
        </div>

    )
}