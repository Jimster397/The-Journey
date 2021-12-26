function HikeCard({hike:{name, imageUrl, description}}){

    return(
        <div class= "card">
    <h2>{name}</h2>
    <img src= {imageUrl}/>
    <section>{description}</section>

        </div>
    )
}
export default HikeCard

