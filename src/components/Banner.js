import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoIcon from "@material-ui/icons/Info";
import requests from "../config/Requests";
import axios from "axios";
import QuickView from "./QuickView";

function Banner() {
  const [movie, setMovie] = useState([]);
  const [popup, setPopup] = useState(false);

  function handleClickPopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateText(string, n) {
    return string?.length > n
      ? string.substr(0, n - 1) + "..."
      : "No Description";
  }
  //insertion de background dynamic pour les images de films

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  console.log(movie);
  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_title}
        </h1>
        <p className="banner__description">
          {truncateText(movie?.overview, 100)}
        </p>
        <div className="banner__buttons">
          <Link to={`/video/${movie?.id}`}>
            <button className="banner__button banner__button--play">
              <PlayArrowIcon />
              Play
            </button>
          </Link>
          <button className="banner__button" onClick={handleClickPopup}>
            <InfoIcon />
            Plus d'infos
          </button>
        </div>
      </div>
      <QuickView
        bannerStyle={bannerStyle}
        movie={movie}
        popup={handleClickPopup}
        popupStatut={popup}
      />
    </header>
  );
}

export default Banner;
