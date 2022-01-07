import React, {useState} from "react";
// import styled from 'styled-components'

const initialvalue= {
    review: '' 
  }
  function NewReviewForm({setHikes, setReviews, userId, hikeId}) {
      const [NewReview, setNewReview]= useState(initialvalue)
      function handleChange(e){
          setNewReview((currentNewReview)=>{
              return{
                  ...currentNewReview,
                  [e.target.name]: e.target.value,
              }
          })
      }
      function handleSubmit(e){
        e.preventDefault()  
        fetch('/reviews',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({...NewReview, hike_id: hikeId, user_id: userId})
          }).then(resp=> resp.json())
            .then((data)=>{
                setReviews((currentNewReview)=>[...currentNewReview, data])
                setHikes((currentHikes)=>currentHikes.map(hike=>hike.id===hikeId ? {...hike, reviews: [...hike.reviews, data]}:hike))
                setNewReview(initialvalue)
            })
      }
      return (
          <div className='new-review-form'>
              <h2>New Review</h2>
              <form  onSubmit={handleSubmit}>
                  <input className="review" type='text' name='review' placeholder='New Review' value={NewReview.review} onChange={handleChange}/>
                  <input type='submit' value="Create Review"/>
              </form>
          </div>
      )
  }
  export default NewReviewForm