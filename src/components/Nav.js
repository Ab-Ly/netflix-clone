import React from "react";
import { useState } from "react";
import "./Nav.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Nav() {
  const [navBlack, setNavBlack] = useState(false); // 1 add event listner when scroll : default False
  const [toggleMenu, setToggleMenu] = useState(false);

  //1
  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };
  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  //2
  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
  };

  console.log(navBlack);
  /* scroll */
  /* burger */
  return (
    <div
      className={`nav  ${
        navBlack || toggleMenu ? "nav--black" : "nav--transparent"
      } ${toggleMenu && "show"}`}
    >
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon />
      </button>
      <img src="./images/logonetflix.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Series
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon />
        </a>
        <a href="/" className="nav__action">
          Direct
        </a>
        <a href="/" className="nav__action">
          <CardGiftcardIcon />
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon />
        </a>
        <a href="/" className="nav__action">
          <img src="./images/netflix-avatar.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
