function ReviewCard({review:{review, user}}){
    return(
        <div class= "card">
    <h2>{review}</h2>
    <div>{user.username}</div>
<button>Share</button>

        </div>
    )
}
export default ReviewCard