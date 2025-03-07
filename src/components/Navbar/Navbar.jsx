import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { IconContext } from "react-icons/lib";
import logo from "/pictures/RAG logo-Horizontalni-Vector.svg"; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, []);


  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#022552'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="hero" className="navbar-logo" onClick={closeMobileMenu} spy={true} smooth={true} duration={600}>
            <img src={logo} className="navbar-img" width="200" height="100" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="about" className="nav-links" spy={true} smooth={true} offset={-70} duration={600} onClick={closeMobileMenu}>
                O nama
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" className="nav-links" spy={true} smooth={true} offset={-50} duration={600} onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
    )
}

export default Navbar;