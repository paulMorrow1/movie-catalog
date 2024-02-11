import * as React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetNetflixData } from "../../NetflixContext";
import "./details.css";

export default function Details() {
  const {
    data: movies,
    removeFavorite,
    addFavorite,
    addWatched,
  } = useGetNetflixData();
  const { title } = useParams();

  function findMovie(movie) {
    return movie.title === title;
  }

  const movie = movies.find(findMovie);

  return (
    <section className="details-page">
      <img
        className="details-thumbnail"
        src={`${movie?.thumbnail}`}
        alt="No thumbnail found"
      ></img>
      <div className="details-container">
        <p key={movie.title} className="details-title">
          {movie.title}
        </p>
        <p key={movie.extract} className="details-extract">
          {movie.extract}
        </p>
        <p key={movie.cast} className="details-cast">
          Cast: {movie.cast.join(", ")}
        </p>
        <p key={movie.year} className="details-year">
          Released {movie.year}
        </p>
        <p key={movie.genres} className="details-genres">
          {movie.genres.join("/")}
        </p>
        <div className="details-icons-container">
          <button
            onClick={() => {
              if (movie.isFavorited) {
                removeFavorite({ id: movie.id });
              } else {
                addFavorite({ id: movie.id });
              }
            }}
            className="details-heart-icon"
            // style={isFavorited ? movie.backgroundColor : "pink"} <- close, not quite right, correct way below
            style={{ backgroundColor: movie.isFavorited ? "pink" : "white" }}
          >
            <FaRegHeart />
          </button>
          <button
            disabled={movie.isWatched}
            onClick={() => addWatched({ id: movie.id })}
            className="details-recentlywatched-icon"
            style={{ backgroundColor: movie.isWatched ? "green" : "white" }}
          >
            <FaRegEye />
          </button>
        </div>
      </div>
    </section>
  );
}
