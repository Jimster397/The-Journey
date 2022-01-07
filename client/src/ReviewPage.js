import UserList from "./UserList"
import ReviewCard from "./ReviewCard"

function ReviewPage({setUser, otherUser, reviews, user}){
    // const allUsers = otherUser.map(appuser=> <UserList setUser={setUser} user={user} appuser = {appuser} key = {appuser.id} />)
    const renderReview = reviews.map(review=> <ReviewCard review={review} key={review.id}/>)

    return(
       <>
        
       {/* <section> {allUsers}</section> */}
       <section>{renderReview}</section>
       </>
    )
}
export default ReviewPage