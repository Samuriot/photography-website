import React from 'react';
import { LiaLinkedin, LiaInstagram } from "react-icons/lia"
import {Link} from "react-router-dom"
import'./Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar"> 
        <nav className="navbar-menu">
          <Link to="/" style={{color: "inherit", textDecoration: "none"}}>Gallery</Link>
          <Link to="/about" style={{color: "inherit", textDecoration: "none"}}>About</Link>
          <Link to="/contact" style={{color: "inherit", textDecoration: "none"}}>Contacting</Link>
        </nav>
        <div className="navbar-right">
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jomikael-ruiz/">
            <LiaLinkedin style={{color: "#551A8B", textDecoration: "none"}}/>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jomikael-ruiz/">
            <LiaInstagram style={{color: "#551A8B", textDecoration: "none"}}/>
          </a>
        </div>
    </div>
  )
}

export default Navbar;
