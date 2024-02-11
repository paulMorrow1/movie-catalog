import Pagination from "@mui/material/Pagination";
import * as React from "react";
import { useGetNetflixData } from "../../NetflixContext";
import { fetchTitles } from "../../titles";
import Card from "../Card/Card";
import FilterMovies from "../Filter/FilterMovies";
import "./CardContainer.css";

// Homework
// add icon of choice for filter where select amount per page dropdown is and have it open a drawer component
// from Matierual UI that will become filters to filter out data

// update our pagination to use Material UI pagination component, be sure to go through the api docs
// for the pagination component and pass the respective props it needs in order to go forward
// 1 page at a time, 1 page backwards at a time, go to specific page, etc.

// const moviesWithWatched = [];
// movies.forEach(movie => moviesWithWatched.push({ ...movie, watched: false }));

// movies.map(movie => {
//   return {
//     ...movie,
//     watched: false
//   }
// });

function CardContainer() {
  const {
    data: movies,
    prev,
    next,
    page,
    goToPage,
    numOfPages,
    perPage,
    setPerPage,
    filterBySearch,
  } = useGetNetflixData();

  const [searchInput, setSearchInput] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const numbOfPagesArray = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const onSearchHandler = (e) => {
    e.preventDefault();
  };

  const handleSearchMoviesInput = ({ target }) => {
    setSearchInput(target.value);
  };

  React.useEffect(() => {
    const fetchMovieTitles = async () => {
      const searchMovies = await fetchTitles(searchInput);
      setSearchResults(searchMovies);
    };
    if (searchInput !== "") fetchMovieTitles();
  }, [searchInput]);

  return (
    <section className="card-container">
      <div>
        <form onSubmit={onSearchHandler}>
          <input
            autoComplete="off"
            type="text"
            name="search"
            placeholder="Search Movies"
            onChange={handleSearchMoviesInput}
            value={searchInput}
          />
          {searchResults.length ? (
            <div className="search-results-container">
              {searchResults.map((title) => {
                const searchForMovieByTitle = () => filterBySearch({ title });
                return (
                  // <button key={title} onClick={() => filterBySearch({ title })}>
                  <button key={title} onClick={searchForMovieByTitle}>
                    {title}
                  </button>
                );
              })}
            </div>
          ) : null}
        </form>
      </div>
      <FilterMovies />
      <div className="amount-per-page">
        <label id="amount-per-page">Select amount per page</label>{" "}
        <select
          name="amount-per-page"
          value={perPage}
          onChange={(e) => setPerPage(e.target.value)}
        >
          <option disabled>Select amount per page</option>

          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value={100}>100</option>
        </select>
      </div>
      {movies.map((movie) => {
        return <Card key={movie.title} movie={movie} />;
      })}

      {/* Pagination component wraps around our entire container, or
          strictly the pageNumber buttons?
        */}
      <Pagination
        count={numOfPages}
        page={page}
        onChange={goToPage}
        showFirstButton
        showLastButton
        rounded="rounded"
        sx={{
          bgcolor: "white",
        }}
      />
      {/* <div className="pagination-container">
        <button
          className="navigation-button"
          disabled={page === 1}
          onClick={prev}
        >
          Previous
        </button>
        {numbOfPagesArray.map((page) => {
          return (
            <button key={page} onClick={() => goToPage({ pageNum: page })}>
              {page}
            </button>
          );
        })}
        <button
          className="navigation-button"
          disabled={page === numOfPages}
          onClick={next}
        >
          Next
        </button>
      </div> */}
    </section>
  );
}

export default CardContainer;
