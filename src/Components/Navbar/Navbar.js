import Drawer from "@mui/material/Drawer";
import * as React from "react";
import { AiOutlineEye, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGetNetflixData } from "../../NetflixContext";
import "./Navbar.css";

/* When user clicks search, I want a search bar to show for user input.
      Placeholder = "Search for a Movie"
      If user's input = movietitle return movie title,
      else return message saying "Movie not found, try again!"
*/

// Homework
// Home button should link user back to "/" home route

const NavbarComponent = ({ toggleNavbarOpen, isOpen }) => {
  const {
    favoriteList,
    watchedList,
    filterFavorites,
    filterPreviouslyWatched,
    clearFilters,
  } = useGetNetflixData();

  const navigate = useNavigate();

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={toggleNavbarOpen}
      PaperProps={{
        sx: {
          backgroundColor: "rgb(0, 0, 0, 0.90)",
        },
      }}
    >
      <section className="navbar-container">
        <div className="navbar">
          <div className="selections-container">
            <div className="selection-text">
              <button
                onClick={() => {
                  clearFilters();
                  navigate("/");
                }}
                className="home"
              >
                <AiOutlineHome /> <p>Home</p>
              </button>
              <button onClick={filterFavorites} className="favorites">
                <AiOutlineHeart /> <p>Favorites ({favoriteList.length})</p>
              </button>
              <button
                onClick={filterPreviouslyWatched}
                className="recently-watched"
              >
                <AiOutlineEye /> <p>Recently Watched ({watchedList.length})</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </Drawer>
  );
};

export default NavbarComponent;
