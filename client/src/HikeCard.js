import NewReviewForm from "./NewReviewForm"
import ReviewPage from "./ReviewPage"

function HikeCard({setHikes, setReviews, userId,  hike:{name, imageUrl, description, reviews, id}}){

    return(
        <div class= "card">
    <h2>{name}</h2>
    <img src= {imageUrl}/>
    <section>{description}</section>
    <NewReviewForm  hikeId={id} setHikes={setHikes} setReviews={setReviews} userId={userId}/>
<ReviewPage  reviews={reviews}/>

        </div>
    )
}
export default HikeCard

