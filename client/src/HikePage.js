import UserList from "./UserList"
import HikeCard from "./HikeCard"

function HikePage({setUser, otherUser, hikes, user, setReviews, setHikes}){
    const allUsers = otherUser.map(appuser=> <UserList setUser={setUser} user={user} appuser={appuser} key={appuser.id} />)
    const renderHikes = hikes.map(hike=> <HikeCard  userId={user.id} hike={hike} key={hike.id} setReviews={setReviews} setHikes={setHikes}/>)

    return(
       <div>
        
       <section> {allUsers}</section>
     
       <div>{renderHikes}</div>
       </div>
    )
}
export default HikePage