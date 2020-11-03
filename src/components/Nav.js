import React, { useEffect, useState } from "react";
import netflix_logo from "../images/netflix_logo.png";
import netflix_avatar from "../images/netflix_avatar.png";
import "../css/Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={netflix_logo} alt="netflix logo" />
      <img className="nav__avatar" src={netflix_avatar} alt="netflix avatar" />
    </div>
  );
}

export default Nav;
