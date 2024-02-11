import { Button, Drawer, MenuItem, Select } from "@mui/material";
import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { useGetNetflixData } from "../../NetflixContext";
import { castMembers } from "../../cast";
import { genres } from "../../genres";

const FilterMovies = () => {
  const { filterByYear, filterByGenres, filterByCast } = useGetNetflixData();
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = React.useState(false);
  const [year, setYear] = React.useState(null);

  function toggleFilterDrawerOpen() {
    return setIsFilterDrawerOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <button onClick={toggleFilterDrawerOpen}>
        <IoFilterOutline />
      </button>
      <Drawer
        anchor="right"
        open={isFilterDrawerOpen}
        onClose={toggleFilterDrawerOpen}
      >
        <div className="filter-container">
          <p>Favorites</p>
          <p>Previously Watched</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const { target } = e;
              const { operator, year } = target.elements;
              filterByYear({ operator: operator.value, year: year.value });
            }}
          >
            <Select name="operator" defaultValue="=">
              <MenuItem value="=">{"="}</MenuItem>
              <MenuItem value="!=">{"!="}</MenuItem>
              <MenuItem value=">">{">"}</MenuItem>
              <MenuItem value="<">{"<"}</MenuItem>
              <MenuItem value=">=">{">="}</MenuItem>
              <MenuItem value="<=">{"<="}</MenuItem>
            </Select>
            <Select name="year" defaultValue="2020">
              {[2020, 2021, 2022, 2023].map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
              \
            </Select>
            <Button type="submit">
              <FaArrowRight />
            </Button>
          </form>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const { target } = e;
              const { operator, genre } = target.elements;
              filterByGenres({ operator: operator.value, genre: genre.value });
            }}
          >
            <Select name="operator" defaultValue="=">
              <MenuItem value="=">{"="}</MenuItem>
              <MenuItem value="!=">{"!="}</MenuItem>
            </Select>
            <Select name="genre" defaultValue="Horror">
              {genres.map((genre) => (
                <MenuItem key={genre} value={genre}>
                  {genre}
                </MenuItem>
              ))}
            </Select>
            <Button type="submit">
              <FaArrowRight />
            </Button>
          </form>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const { target } = e;
              const { operator, cast } = target.elements;
              filterByCast({ operator: operator.value, cast: cast.value });
            }}
          >
            <Select name="operator" defaultValue="=">
              <MenuItem value="=">{"="}</MenuItem>
              <MenuItem value="!=">{"!="}</MenuItem>
            </Select>
            <Select name="cast" defaultValue="Andrea Riseborough">
              {castMembers.map((cast) => (
                <MenuItem key={cast} value={cast}>
                  {cast}
                </MenuItem>
              ))}
            </Select>
            <Button type="submit">
              <FaArrowRight />
            </Button>
          </form>
        </div>
      </Drawer>
    </>
  );
};

export default FilterMovies;
