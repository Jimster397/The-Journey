import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NavBar from './Navbar';
import LoginPage from "./LoginPage";
import './index.css';
import ReviewPage from "./ReviewPage";
import HikePage from "./HikePage"


function App() {
  const [user, setUser] = useState(null);
  const [otherUser, setOtherUser] = useState([])
  const [reviews, setReviews] = useState([])
  const [hikes, setHikes] = useState([])
 

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users").then((resp) => {
      if (resp.ok) {
        resp.json().then(setOtherUser);
      }
    });
  }, [user]);
  console.log(otherUser)

  useEffect(() => {
    fetch("/reviews").then((resp) => {
      if (resp.ok) {
        resp.json().then(setReviews);
      }
    });
  }, [user]);
  
  useEffect(() => {
    fetch("/hikes").then((resp) => {
      if (resp.ok) {
        resp.json().then(setHikes);
      }
    });
  }, [user]);
  



  if (!user){
    return <LoginPage setUser={setUser}/>
  }
  return (
    <div className="App">
      <h1>The Journey</h1>
      <BrowserRouter>
     <NavBar setUser= {setUser}/> 
     <Switch>
        <Route exact path = '/'>
         
         
            </Route>
            <Route exact path = '/reviews'>
              <ReviewPage setUser={setUser} user={user} otherUser={otherUser} reviews={reviews}/>
              </Route>
              <Route exact path = '/hikes'>
              <HikePage setUser={setUser} user={user} otherUser={otherUser} hikes={hikes} setHikes={setHikes} setReviews={setReviews}/>
              
             

              </Route>
      </Switch>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
