import UserList from "./UserList"
import HikeCard from "./HikeCard"

function HikePage({setUser, otherUser, hikes, user}){
    const allUsers = otherUser.map(appuser=> <UserList setUser={setUser} user={user} appuser = {appuser} key = {appuser.id} />)
    const renderHikes = hikes.map(hike=> <HikeCard  hike={hike} key = {hike.id}/>)
    console.log(hikes)
    return(
       <div>
        
       <section> {allUsers}</section>
     
       <div>{renderHikes}</div>
       </div>
    )
}
export default HikePage