import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';


function NavBar({ setUser }) {
    function handleLogoutClick() {
      fetch("/logout", {
        method: "DELETE",
      }).then((resp) => {
        if (resp.ok) {
          setUser(null);
        }
      });
    }

    return (
        <nav className= "navbar">
            <NavLink to = "/reviews" >
              ReviewPage
            </NavLink>

            <NavLink to ="/hikes">
              HikePage
            </NavLink>
        
            <NavLink to = "/logout" onClick={handleLogoutClick}>
              Logout
            </NavLink>
         
        </nav>
      );
    }

    export default NavBar;