import * as React from "react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGetNetflixData } from "../../NetflixContext";
import "./Card.css";

// fixing card image - look at css image object-fit(USE GOOGLE/STACKOVERFLOW)

const Card = ({ movie }) => {
  const { addFavorite, removeFavorite, addWatched } = useGetNetflixData();
  return (
    <article className="card">
      <Link
        key={movie.title}
        style={{
          background: `url(${movie.thumbnail}) no-repeat center`,
        }}
        className="movie-thumbnail"
        to={`${movie.title}`}
      ></Link>
      <div className="movie-title">
        <strong>{movie.title}</strong>
        <div className="card-icons-container">
          <button
            className="card-heart-icon"
            onClick={() => {
              if (movie.isFavorited) {
                removeFavorite({ id: movie.id });
              } else {
                addFavorite({ id: movie.id });
              }
            }}
            style={{ backgroundColor: movie.isFavorited ? "pink" : "white" }}
          >
            <FaRegHeart />
          </button>
          <button
            className="card-recentlywatched-icon"
            disabled={movie.isWatched}
            onClick={() => addWatched({ id: movie.id })}
            style={{ backgroundColor: movie.isWatched ? "green" : "white" }}
          >
            <FaRegEye />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
