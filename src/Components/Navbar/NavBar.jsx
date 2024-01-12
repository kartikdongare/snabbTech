import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { navbarHeader } from "../../data";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MainBanner from "../Home/MainBanner";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="">
    <header>
      <div className="main-header">
        <h3>EN-FR</h3>
        <h3>Bienvenue sur PANDA</h3>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
      <nav ref={navRef} className="">
        <div className="">
        {navbarHeader &&
          navbarHeader.map(({ title }, index) => (
            <a href="/#" key={index}>
              {title}
            </a>
          ))}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        </div>
      </nav>
    </header>
    <MainBanner/>
    </div>
  );
}

export default Navbar;
