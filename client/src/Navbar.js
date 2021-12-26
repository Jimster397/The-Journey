import React from "react";
import { NavLink } from "react-router-dom";

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
        <nav>
            <NavLink to = "/reviews">
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