import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
// 9160d580117500fa7beec9f187bfb120
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__socials">
          <a href="/" className="footer__social">
            <FacebookIcon />
          </a>
          <a href="/" className="footer__social">
            <InstagramIcon />
          </a>
          <a href="/" className="footer__social">
            <TwitterIcon />
          </a>
          <a href="/" className="footer__social">
            <YouTubeIcon />
          </a>
        </div>
        <ul className="footer__links">
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
          <li className="footer__link">
            <a href="/">Footer Link</a>
          </li>
        </ul>
        <div className="footer__copy">
          Netflix Clone - Tous Droits Réservés 2022
        </div>
      </div>
    </footer>
  );
}

export default Footer;
