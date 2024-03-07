import { Button } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useGetNetflixData } from "../../NetflixContext";
import { fetchTitles } from "../../titles";
import Card from "../Card/Card";
import FilterMovies from "../Filter/FilterMovies";
import "./CardContainer.css";

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
  const [searchResults, setSearchResults] = React.useState([]);

  const numbOfPagesArray = Array.from({ length: numOfPages }, (_, i) => i + 1);

  const searchRef = React.useRef("");

  const onSearchHandler = (e) => {
    e.preventDefault();
    const { target } = e;
    const { search } = target.elements;
    filterBySearch({ title: search.value });
  };

  const handleSearchMoviesInput = async ({ target }) => {
    try {
      const { value } = target;
      const response = await fetchTitles(value);
      setSearchResults(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="card-container">
      <div className="results-header-container">
        <div className="search-container">
          <form onSubmit={onSearchHandler}>
            <input
              autoComplete="off"
              type="text"
              name="search"
              placeholder="Search Movies"
              ref={searchRef}
              onChange={handleSearchMoviesInput}
            />
            {searchResults.length ? (
              <div className="search-results-container">
                {searchResults.map((title) => {
                  return (
                    <button
                      key={title}
                      onClick={() => {
                        searchRef.current.value = title;
                        setSearchResults([]);
                      }}
                    >
                      {title}
                    </button>
                  );
                })}
              </div>
            ) : null}
            <Button type="submit">
              <FaArrowRight />
            </Button>
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
      </div>
      {movies.map((movie) => {
        return <Card key={movie.title} movie={movie} />;
      })}

      {/* Pagination component wraps around our entire container, or
          strictly the pageNumber buttons?
        */}
      <div className="pagination">
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
      </div>
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
